/************************** KATA Nº1 ******************************/ 


const reveseString = (string) => {
let output = ""
for(let i = string.length - 1; i >= 0; i--){
    output += string[i]
}
    return output
}

const testeReveseString1 = () => {
    let result = reveseString("Kenzie Academy")
    let expected = "ymedacA eizneK"
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)

}
testeReveseString1()

const testeReveseString2 = () => {
    let result = reveseString("Academy")
    let expected = "ymedacA"
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)

}
testeReveseString2()

/************************** FIM DO KATA Nº1 ******************************/ 



/************************** KATA Nº2 ******************************/ 

const reverseSentence = (sentence) => {
    let arr = sentence.split(" ")
    let result = arr.reverse().join(" ")
    return result
}

const testReverseSentence1 = () => {
     let result = reverseSentence("Olá mundo");
     let expected = "mundo Olá";
     console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
}
testReverseSentence1()

const testReverseSentence2 = () => {
    let result = reverseSentence("Olá eu sou o patinho Toman");
    let expected = "Toman patinho o sou eu Olá";
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
}
testReverseSentence2()

/************************** FIM DO KATA Nº2 ******************************/ 


/************************** KATA Nº3 ******************************/ 
const minimumValue = (array) => {
    let minimum = array[0]
    for (let i = 0; i < array.length; i++) {
        if(minimum > array[i]){
            minimum = array[i]
        }
    }

    return minimum

}

const testMinimumValue1 = () => {
    const testArr = [ 1,2,3,10,70 ]
    let result = minimumValue(testArr);
    let expected = 1;
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
}
testMinimumValue1()

const testMinimumValue2 = () => {
    const testArr = [ 70,300,150,771,232,71 ]
    let result = minimumValue(testArr);
    let expected = 70;
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)

}
testMinimumValue2()

/************************** FIM DO KATA Nº3 ******************************/



/************************** KATA Nº4 ******************************/ 
const maxValue = (array) => { return Math.max(...array) }


const testMaxValue1 = () => {
    const testArr = [1803, 1, 2, 10, 50, 20]
    let result = maxValue(testArr);
    let expected = 1803
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
}
testMaxValue1()

const testMaxValue2 = () => {
    const testArr = [183, 140, 22, 10, 50, 20]
    let result = maxValue(testArr);
    let expected = 183
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
}
testMaxValue2()

/************************** FIM DO KATA Nº4 ******************************/


/************************** KATA Nº5 ******************************/ 

const calculateRemaider = (x,y) => {
let remaider = x % y
return remaider 
}

const testCalculateRemainder1 = () => {
const valueX = 4;
const valueY = 3;

let result = calculateRemaider(valueX, valueY);
let expected = 1;

console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
}
testCalculateRemainder1()

const testCalculateRemainder2 = () => {
const valueX = 10;
const valueY = 2;
    
let result = calculateRemaider(valueX, valueY);
let expected = 0;
    
console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)  
}
testCalculateRemainder2()

/************************** FIM DO KATA Nº5 ******************************/

/************************** KATA Nº6 ******************************/ 

const distinctValues = (array) => {
    const result = [...new Set(array)] // Grosseiramente falando, elimina os repetidos
    return result 
}

const testDistinctValues1 = () => {
    const arrTest = [1, 3, 5, 3, 7, 3, 1, 1, 5]
    let result = distinctValues(arrTest)
    let expected = [1, 3, 5, 7]

    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)

}
testCalculateRemainder1()
const testDistinctValues2 = () => {
    const arrTest = [1, 3, 4, 5, 7, 7, 7, 7, 7, 9, 10, 10]
    let expected = [1, 3, 4, 5, 7, 9, 10]
    
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
}
testCalculateRemainder2()

/************************** FIM DO KATA Nº6 ******************************/

/************************** KATA Nº7 ******************************/ 

const countValues = (array) => {
    let obj = {}

    for (let i = 0; i < array.length; i++) {
        if(obj[array[i]] === undefined){
            obj[array[i]] = 1
        }
        else {
            obj[array[i]]+=1
        }
    }
return (JSON.stringify(obj))

}

countValues([1, 3, 5, 3, 7, 3, 1, 1, 5])

const testCountValues1 = () => {
    const arrTest = [1, 3, 5, 3, 7, 3, 1, 1, 5]
    let result = countValues(arrTest)
    let expected = JSON.stringify({"1":3, "3":3, "5":2, "7":1})

    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
}

testCountValues1()

const testCountValues2 = () => {
    const arrTest = [1, 1, 3, 3, 5, 3, 7, 3, 1, 1, 5, 5]
    let result = countValues(arrTest)
    let expected = JSON.stringify({"1":4, "3":4, "5": 3, "7":1})
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)

}
testCountValues2()

/************************** FIM DO KATA Nº7 ******************************/


/************************** KATA Nº8 ******************************/ 

const evaluateExpression = (string, obj) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let operators = "+-"
    let newString = ""
  
    for(let i = 0; i< string.length; i++){
        if(alphabet.includes(string[i])){
            newString += obj[string[i]]
        }
            if(operators.includes(string[i]) ){
                newString += string[i]
            }  
    }

    let result = eval(newString)
    return result

}

const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }


const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a+b-c", {a: 1, b: 7, c: 3})
    let expected = 5
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testEvaluateExpression2()

/************************** FIM DO KATA Nº8 ******************************/


