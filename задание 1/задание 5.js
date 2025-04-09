function printMinMax(numbers) {
    if (numbers.length === 0) {
        console.log("Массив пустой");
        return; 
    }
    let min = numbers[0]; 
    let max = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; 
        }
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    console.log("Минимальное значение:", min);
    console.log("Максимальное значение:", max);
}
printMinMax([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);