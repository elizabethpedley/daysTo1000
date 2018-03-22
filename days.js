//How much money after 30 days
var value = 0.01;
for(var i=2;i<=30;i++){
    value *= 2;
}
console.log(value);

//How many days till 10k
var value2 = .01;
var days = 2;
while(true){
    if(value2> 10000){
        console.log(days + ' days');
        break;
    }
    value2 *= 2;
    days++;
}
//How many days till a billion dollars
var value3 = .01;
var days2 = 2;
while(true){
    if(value3> 1000000){
        console.log(days2 + ' days');
        break;
    }
    value3 *= 2;
    days2++;
}
//How many days to infinity
var value4 = .01;
var days3 = 2;
 while(true){
     if(value4 == Infinity){
        console.log(days3 + ' days');
        break;
     }
     value4 *= 2;
     days3++;
 }