function weRateDogs(str, rating){
    var rate = rating + "/10"  
    return str.replace(/\d+\/\d+/,rate)   
}

console.log(weRateDogs('This is Tucker. He would like a hug. 3/10 someone hug him', 11)) // Should replace 3/10 to 11/10