// code your solution here

const saturdayFun = function(activity = "roller-skate"){
    
    return ("This Saturday, I want to " + activity + "!");
}
console.log(saturdayFun("Swimm"));

const mondayWork = function(activity = "go to the office"){

    return ("This Monday, I will " + activity + ".")
    
}
console.log(mondayWork("work from home"));




function wrapAdjective(flair = "*"){
    
    return function(complement = "special"){
        return "You are " + flair + complement + flair + "!";
    }
}

console.log(wrapAdjective("*")("a hard worker")("*"));