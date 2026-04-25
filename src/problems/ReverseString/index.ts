function reverseString(s: string): string{
    let result = "";
    for(let i=s.length-1; i>=0; i--){
        result += s[i];
    }
    return result
}

console.log(reverseString("hello"));
console.log(reverseString("Sony"));
console.log(reverseString("Phoebe"));
console.log(reverseString("SonyPhoebe"));