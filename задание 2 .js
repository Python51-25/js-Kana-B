function countEvens(numbers) {
    let count = 0;  
    numbers.forEach(function(number) {
        if (number % 2 === 0) {
            count++;  
        }
    });
    console.log('Чётных чисел: ' + count); 
}
countEvens([1, 2, 3, 4, 6, 7, 10]);