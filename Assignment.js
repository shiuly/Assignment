//feetToMile
function feetToMile(feet){
    var mile=feet/5280;
    if(mile==0){
        return "undifined"
    }
    else if(mile<0){
        return "distance cannot be negative"
    }
    else{
        return mile ;

    }
   
   

}
var result=feetToMile(5780);
console.log(result);

// woodCalculator
function woodCalculator(chair,table,bed){
    var chairCount=chair*1;
    var tableCount=table*3;
    var bedCount=bed*5;

    var totalFurniture=chairCount+tableCount+bedCount;
    return totalFurniture;

}
var result=woodCalculator(1,1,2);
console.log(result);

// brickCalculator
function brickCalculator(ground){
    var feet=0;
    if(ground<=10){
        feet=ground*15;
    }
    else if (Math.floor(ground/10)==1||ground==20){
        var reminder=ground%10;
        if(reminder !=0){
            feet=10*15 +reminder*12;
        }
        else{
            feet=10*15+10*12;
        }

    }
    else{
        reminder=ground%10;
        feet=10*15+10*12+reminder*10;
    }
    return feet*1000;
}
var result=brickCalculator(21);
console.log(result);

// tinyFriend

function tinyFriend(friends){
    var smallest=friends[0];
    for(var i=0;i<friends.length;i++){
        var currentFriend=friends[i];
        if(currentFriend.length<friends[i].length){
            smallest=currentFriend;
        }
        else{
            smallest=friends[i];
        }
    }
return smallest;  
}
var smallestFriend=tinyFriend(["sojib","sobuj","shiuly","tom"]);
console.log(smallestFriend);