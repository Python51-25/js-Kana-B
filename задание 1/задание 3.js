unctionfilterByLength(strings, minLength) 
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length >= minLength) {
            console.log(strings[i]); 
        }
    }
filterByLength(['apple', 'banana', 'kiwi', 'watermelon', 'grape'], 6);