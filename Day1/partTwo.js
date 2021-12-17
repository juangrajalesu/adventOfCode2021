const detectIncrementGroup = (list) =>
{
    let incremets = 0;
    for (let i = 1; i <= list.length - 3; i ++ ) { 
        
        const firstGroup = list[i - 1] + list[i] + list[i + 1];
        const secondGroup = list[i] + list[i + 1] + list[i + 2];
        if (firstGroup < secondGroup) incremets++;
        
    }
    return incremets;
}



let input = require('fs').readFileSync('input', 'utf-8').split(/\r?\n/)
input = input.map(Number);

const result = detectIncrementGroup(input);
console.log(result);