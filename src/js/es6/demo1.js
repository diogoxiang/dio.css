var s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true


console.log('x'.repeat(3))



// 字符串中嵌入变量
var name = "Bob",
    time = "today";
let col = `Hello ${name}, how are you ${time}?`
console.log(col)




var a = 5;
var b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return "OK";
}

tag `Hello ${ a + b } world ${ a * b}`;



console.log(Math.trunc('123.456'))