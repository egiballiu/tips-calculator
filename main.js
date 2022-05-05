function calculateTip(){
    let totalBill = prompt("Please put the bill amount in $");
    console.log(totalBill);
    
    if (totalBill != null) {
        if( totalBill < 100){
            tip = 0;
        } else if( totalBill >= 100 && totalBill <= 299){
            tip = totalBill * 0.10;
        } else if ( totalBill >= 300 && totalBill <= 499) {
            tip = totalBill * 0.05;
        } else {
            tip = totalBill * 0.03;
        } 
        document.getElementById("message").innerHTML = `Your tip will be $${tip} ! Thank you :)`;
    } else {
        alert("Please insert your bill!");
    }
} 


//Promise
function haveDinnerOutside(cook){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(!cook){
                resolve("We're having dinner outside");
            } if(cook){
                reject("We're not going outside");
            }
        },1000);
    })
}

haveDinnerOutside(false).then(function(res){
    console.log(res)
}).catch(function(res){
    console.log(res)
})


//Async Api calls
async function showUsers(url){
    var users = await fetch(url);
    if(!users.ok){
        throw new Error("Users cant be found");
    }

    return users.json();
}

console.log(showUsers('https://jsonplaceholder.typicode.com/users').then(function(res){
    res.forEach(element => {
       console.log(element.id);
    });
}));