# Source Code vs Byte Code vs Binary Code

A visual breakdown of the three layers your code passes through — from human-friendly text to machine-executable instructions.

---

## Breakdown Table

| Layer | Format | Human Readable? | Hardware Runs It? | Stored As | Example |
|-------|--------|:---:|:---:|---|---|
| **Source Code** | Text (characters) | ✅ Yes | ❌ No | `.js`, `.c`, `.py` files | `console.log("Hi")` |
| **Byte Code** | Numeric opcodes (intermediate) | 🟡 Barely | ❌ No | `.class`, `.pyc`, V8 internal | `0x5F 0x4A 0x01 ...` |
| **Binary / Machine Code** | Raw bits (CPU instructions) | ❌ No | ✅ Yes | `.exe`, `.out`, `.wasm` | `10110000 01100001 ...` |

---

## Walkthrough: `console.log("Hello World")`

### 1. Source Code — what you write

```js
console.log("Hello World");
```

- **Plain text** in a `.js` file.
- Written in **JavaScript**, a high-level language.
- Humans can read and edit it easily.

### 2. Byte Code — what V8 compiles it to

When Node.js runs your file, V8 (the JavaScript engine) first parses the source into an **AST**, then compiles it to **byte code** — a compact, platform-independent intermediate representation.

```
┌─────────────────────────────────────────┐
│  [bytecode]                              │
│  StackCheck                              │
│  LdaConstant [0]    ← load "Hello World" │
│  CallRuntime [console.log]               │
│  Return                                  │
└─────────────────────────────────────────┘
```

- Each instruction is a **1-byte opcode** + optional operands.
- This is **not** executed by hardware — an interpreter (Ignition in V8) reads and executes each opcode one by one.
- Byte code is **portable** — same byte code works on x64, ARM, RISC-V, etc.

### 3. Binary / Machine Code — what the CPU actually runs

When the same code runs many times (it's "hot"), V8's TurboFan compiler kicks in and translates the byte code into **native machine code** for your specific CPU.

```
x64 (Intel/AMD)        ARM64 (Apple Silicon)
─────────────────      ─────────────────
mov  rdi, str_ptr      mov  x0, str_ptr      ; load string
lea  rsi, [fmt]        adr  x1, fmt           ; load format
call printf            bl   _printf           ; call runtime
ret                    ret                     ; return
```

Stored in memory as raw binary:

```
x64 example (hex):  48 BF A0 10 60 00 00 00 00 00  48 8D 35 ...
x64 example (bits): 01001000 10111111 10100000 00010000 01100000 ...
```

- Directly executed by the **CPU**.
- **Platform-specific** — machine code for Intel won't run on ARM.
- Contains **real register names, addresses, and hardware instructions**.

---

## Pipeline Diagram

```
┌─────────────┐      ┌───────────┐      ┌──────────────┐
│  Source Code │      │  Byte Code │      │  Binary Code  │
│  (Text .js)  │ ──→  │  (Opcodes) │ ──→  │  (Machine     │
│              │      │            │      │   Code) .exe  │
└─────────────┘      └───────────┘      └──────────────┘
       │                    │                    │
  ┌────┴────┐         ┌────┴────┐          ┌────┴────┐
  │ Editor  │         │ V8      │          │ CPU     │
  │ VS Code │         │ Ignition│          │ Intel   │
  │         │         │ (Interp)│          │ /ARM    │
  └─────────┘         └─────────┘          └─────────┘
  Human writes        Engine interprets    Hardware executes
```

> **Note**: A **compiled language** (C, Rust, Go) skips the byte code step — the compiler emits machine code directly. An **interpreted language** (Python, Ruby, old JS) used to skip byte code too, but modern engines now add a byte code + JIT pipeline for performance.

---

## TL;DR

| Concept | Plain English |
|---------|--------------|
| **Source Code** | What you type. Human-readable text. |
| **Byte Code** | The engine's internal shorthand for your program. Portable, but needs a VM to run. |
| **Binary Code** | Raw CPU instructions. Platform-specific. The only thing the hardware actually executes. |

**Source → Byte (if interpreted/JIT) → Binary.** Every language eventually ends up as binary code — the path just differs.
