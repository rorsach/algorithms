function mult(a, b) {
    var x = a;
    var y = b;
    var z = 0;
    while (x > 0) {
        if (x%2 !== 0) {
            z = z + y;
        }
        y = y << 1;
        x = x >> 1; 
    }

    return z;
}


console.log(mult(3, 4));
console.log(mult(999, 1000));
