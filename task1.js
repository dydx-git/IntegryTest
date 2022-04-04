const characterCounter = word => {
    const result = [];
    for (let index = 0; index < word.length; index++) {
        const element = word[index];
        result.push(`${element}-${index + 1}`);
    }
    return result.join(", ");
}

let htmlString = characterCounter("Sample");

console.log(htmlString);

document.getElementById("task1").innerHTML += htmlString;
