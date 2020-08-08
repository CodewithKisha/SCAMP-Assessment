/* What really is a fibonacci number?
A fibonacci number is a number that equals the sum 
of the two preceeding numbers in a sequence.

Below is my solution on how to output a fibonacci sequence with a function..
In these case I passed in an array*/

let fiboSeq = function (final, len) {
    let firstNum = final[0],
        secNum = final[1],
        next;
        count = 2;

    while(count < len) {
         next = firstNum + secNum;
         firstNum = secNum;
         secNum = next;
         final.push(next);
         count++;
    }

    return final;
};

console.log(fiboSeq([0,1], 13));





