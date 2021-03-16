const socket = io()

socket.on('countUpdated', (count)=> {
    console.log('the count has been updated', count);
})
socket.on('message', (message)=>{
    console.log(message);
})

// document.querySelector('#increment').addEventListener('click', ()=> {
//     console.log('Clicked');
//     socket.emit('increment')
// })
document.querySelector("#message-form").addEventListener('submit', (e)=> {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message)
})