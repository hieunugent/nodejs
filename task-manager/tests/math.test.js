const {calculateTip, fahrenheitToCel, celsiusToFah , add} = require('../src/math')

test('should  calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
    
})

test('should  calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
    
})
test('should converse 32F to 0C', ()=> {
    const C = fahrenheitToCel(32)
    expect(C).toBe(0)
})
test('should converse 0C to 32F', ()=> {
    const F = celsiusToFah(0)
    expect(F).toBe(32)
})
//Async test 
// test('Async', (done)=>{
//     setTimeout(()=> {
//         expect(1).toBe(1)
//         done()
//     }, 0)
// })
// test('should Add two number', (done) => {
//     add(2,3).then((sum)=>{
//         expect(sum).toBe(5)
//         done()
//     })
// })
test('should Add two number Async/await', async() => {
   const sum = await add(2,3)
   expect(sum).toBe(5)
})