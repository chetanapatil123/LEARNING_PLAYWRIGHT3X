
let str = "madam";
let isPalindrome = true;

for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(str + " is a Palindrome");
} else {
    console.log(str + " is not a Palindrome");
}