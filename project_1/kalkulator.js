const apalah = require("prompt-sync")();
let a = Number(apalah("angka pertama = "))
let b = Number(apalah("angka kedua = "))
console.log(' ')

const add = (a, b) =>{
    return a + b;
}
const sub = (a, b) =>{
    return a - b;
}
const mul = (a, b) =>{
    return a * b;
}
const div = (a, b) =>{
    return a / b;
}
const mod = (a, b) =>{
    return a % b;
}
const pow = (a, b) =>{
    return a ** b
}
console.log(`a = ${a}\nb = ${b}\n`)

console.log(`Tambah (a, b) \nlog : Penjumlahan ${a} + ${b} = ${add(a,b)}\n`)
console.log(`Kurang (a, b) \nlog : Pengurangan ${a} - ${b} = ${sub(a,b)}\n`)
console.log(`Kali (a, b) \nlog : Perkalian ${a} * ${b} = ${mul(a,b)}\n`)
console.log(`Bagi (a, b) \nlog : Pembagian ${a} / ${b} = ${div(a,b)}\n`)
console.log(`Modulus (a, b) \nlog : Modulus ${a} % ${b} = ${mod(a,b)}\n`)
console.log(`Pangkat (a, b) \nlog : Perpangkatan ${a} ** ${b} = ${pow(a,b)}`)