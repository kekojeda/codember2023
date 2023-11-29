const LIST = "abbc11-ca"

const listArr = LIST.split("-")

let cadenaStr = listArr[0]
let cadenaArr = cadenaStr.split("")

let checksumStr = listArr[1]
let checksumArr = checksumStr.split("")
let allExist = []
let onlyOne = []
let order = []
let order2 = []


console.log("cadena: " + cadenaStr);
console.log("checksum: " + checksumStr);

// comprobar que esten todos los caracteres en la cadena
checksumArr.forEach((el) => {
    cadenaArr.includes(el) && allExist.push(true)
})


// comprobar que esten solo una vez
checksumArr.forEach((char) => {
    cadenaArr.filter( el => el === char).length <= 1 ? onlyOne.push(true) : onlyOne.push(false)
})

//comprobar el orden
checksumArr.forEach((char) => {
   order.push(cadenaArr.indexOf(char))
})


console.log("existen todos " + allExist);
console.log("estan solo una vez " + onlyOne);
console.log("orden " + order);



