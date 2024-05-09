const accountId = 123
//this variable is declared using const (const variable are unchangable)
let accountName ="vivek sutar"
//this variable is declared using let (let variable are normal variable which is changable)
var accountType = "saving"
//this variable is declared using var (var variable are normal variable but we do not use var to declare because of scope problem)

console.log(typeof accountId)
//typeof is used to know dataType of the variable

//we can convert STRING to NUMBER using [let changeVariable = number(accountType)]
/*Above line code will change accountType datatype from string to number BUT value of changeVariable is NaN (Not a Number)*/


let username = "vivek"
let password = "vk"
 

if(username == 'vivek' && password == 'vk' ){
    console.log("Welcome buddy.....")
}else{
    console.log("Chal hattt yaha se..")
}