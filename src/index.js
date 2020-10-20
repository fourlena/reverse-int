module.exports = function reverse (n) {
    if (n < 0){
        var new_stinrg = n.toString().split('').reverse();
        var pup = new_stinrg.pop()
       return parseInt(new_stinrg.join(''));
    }
    return parseInt( n.toString().split('').reverse().join('')); 
}
