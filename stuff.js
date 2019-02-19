var counter = function(arr){
    return 'There are '+arr.length+' elements in this array';

}
var adder = function(x,y){
    return 'Addition of x any y is ${x+y}';
}
module.exports={
    counter:counter,
    adder:adder
};