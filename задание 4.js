function printAboveAverage(numbers) {
    let sum = 0;
    let count = numbers.length;
    for (let i = 0; i < count; i++) {
        sum += numbers[i];
    }
    let average = sum / count; 
    for (let i = 0; i < count; i++) {
        if (numbers[i] > average) {
            console.log(numbers[i]);
        }
    }
}
printAboveAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);