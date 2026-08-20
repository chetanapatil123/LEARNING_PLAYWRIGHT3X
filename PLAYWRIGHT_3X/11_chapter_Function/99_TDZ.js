
{
    
    console.log(a);
    let a = 10;
}
//Output: ReferenceError: Cannot access 'a' before initialization

//enter a block scope
//a is in TDZ until it is declared and initialized.
//  Accessing it before that will result in a ReferenceError.
//a is not value yet
//console.log(a); // Output: ReferenceError: Cannot access 'a' before initialization
//Once a is declared and initialized, it can be accessed

