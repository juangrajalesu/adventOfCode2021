const { off } = require('process');

const detectIncrements = (list) =>
{
    let increments = 0;
    for (let i = 1; i <= list.length-1; i++){
        if (list[i] >= list[i-1])
            increments++;
        if(i===list.length-1)console.log(list[i])
    }
    return increments;
}

let input = require('fs').readFileSync('input', 'utf-8').split(/\r?\n/)
input = input.map(Number);

const result = detectIncrements(input);
console.log(result);