function range(a,b) 
{
    return a - b;

}
console.log(range(10,4));

function outside() {
    var x = 30;
    function inside(){
        return x*x;
    }
    return inside();
}
console.log(outside());

