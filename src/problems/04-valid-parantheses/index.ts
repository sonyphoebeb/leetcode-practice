function isValid (s: string): boolean{
    const stack: string[] = [];

    for(const char of s){

        if (char === '(' || 
            char === '{' || 
            char === '[')
        {
            stack.push(char);
        }
        else{
            const last = stack.pop();
            
            if(
                (char === ')' && last !== '(') ||
                (char === '}' && last !== '{') ||
                (char === ']' && last !== '[')
            ){
                return false;
            }
        }

    }

    return stack.length === 0;
}

console.log("(){}[]:" +isValid("(){}[]"))
console.log("(]:" +isValid("(]"))
console.log("([)]:" +isValid("([)]"))
console.log("{[]}:" +isValid("{[]}"))
