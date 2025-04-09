function printPositiveNumbers(numbers) {
    numbers.forEach(function(number) {
        if (number > 0) {
            console.log(number);
        }
    });
}
printPositiveNumbers([3, 1, 0, 7, 9, 4]);