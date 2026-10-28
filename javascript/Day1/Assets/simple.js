let Name="Bala"
let Age=25
let City="Coimbotore"
console.log("Name:",Name);
console.log("Age:",Age);
console.log("City:",City);

let a = 20;
let b = 5;
console.log("Addition:",a+b);
console.log ("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division:",a/b);
console.log("Remainder:",a%b);

let age = 20;
if (age>=18) {
    console.log("Adult");
}else{
    console.log("Minor");
    }

    let ages = 15;
    if(ages>=18){
        console.log("adult");
    }else{
        console.log("minor");
        
        
    }

let number = 7;
if (number%2===1) {
    console.log("odd");
    
    
} else {
    console.log("even");
    
}

let num = -10;
if (num>=0){
    console.log("positive");
    
}else if (num<=0){
    console.log("negative");
    
}
else if (num===0){
    console.log("zero");
    
}


let marks = 65;
if(marks>=65){
    console.log("pass");
    
}else{
    console.log("fail");
    
}

let mark = 40;
if(mark<=40){
    console.log("fail");
    
}else{
    console.log("pass");
    
}

let isLoggedIn = true
let isAdmin = false
 if (isLoggedIn===true && isAdmin===true){
           console.log("Admin Dashboard");
    
 }else if(isLoggedIn === true && isAdmin ===false){
    console.log("User Dashboard");
}else{
                 console.log("please login");
    
}



let balance = 1000;
let price = 300;

if(balance >= price){
    balance=balance-price;
    console.log("Purchase successful");
    }else{
        console.log("insufficient balance");
        
    }
    console.log("remaining balance:",balance);
    
    