function countWords(message){
    // handling for space and empty string
    if(message === '' || message === ' ')
        return 0;
    return message.split(" ").length;
}
console.log(countWords('Good morning, I love JavaScript.')); // return 5