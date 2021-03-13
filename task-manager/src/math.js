const calculateTip = (total, tipPercent= 0.25)=> total +total*tipPercent
   

const add =(a, b)=> {
    return  new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(a+b)
        }, 2000)
    })
}
const fahrenheitToCel = (temp) => (temp - 32) /1.8
const celsiusToFah =  (temp) => (temp * 1.8) + 32
module.exports = {calculateTip, fahrenheitToCel,celsiusToFah, add }