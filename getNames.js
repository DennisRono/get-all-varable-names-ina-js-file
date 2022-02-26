const fs = require('fs')
let str = fs.readFileSync('npm.js', 'utf8')
str = str.replaceAll("var", "let");
str = str.replaceAll("const", "let");
let count = (str.match(/let/g) || []).length;
for (let i = 0; i < count; i++) {
    const indexes = [...str.matchAll(new RegExp("let ", 'gi'))].map(a => a.index + 4)[0];
    let dat = str.substring(indexes, str.replace(str.substring(0, indexes), "").indexOf(' ') + indexes).replace(';', '');
    if (dat !== '' && dat !== '{' && dat !== '}') { fs.appendFileSync("dat.txt", dat + "\n") }
    str = str.replace(str.substring(0, str.replace(str.substring(0, indexes), "").indexOf(' ') + indexes), "");
}