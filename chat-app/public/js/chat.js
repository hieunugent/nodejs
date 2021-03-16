const socket = io()
// ELEMENT
const $messageForm = document.querySelector("#message-form")
const $messageFromInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')

const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

const messageTemplate = document.querySelector("#message-template").innerHTML





socket.on('message', (message)=>{
    console.log(message);
    const html = Mustache.render(messageTemplate,{
        message
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

// document.querySelector('#increment').addEventListener('click', ()=> {
//     console.log('Clicked');
//     socket.emit('increment')
// })
$messageForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    $messageFormButton.setAttribute('disabled','disabled')
    //disable
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message, (error)=> {
        $messageFormButton.removeAttribute('disabled')
        $messageFromInput.value = ''
        $messageFromInput.focus()
        //enable it 
        if (error){
            return console.log(error);
        }
        console.log('Message Delivered');

    })
})

$sendLocationButton.addEventListener('click', ()=> {
      if(!navigator.geolocation){
          return alert('Geolocation is not supported by your browser ')
      }
      $sendLocationButton.setAttribute('disabled', 'disabled')
      navigator.geolocation.getCurrentPosition((position)=> {
            socket.emit('sendLocation', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, ()=> {
                console.log('Location Shared');
                $sendLocationButton.removeAttribute('diabled')
               
            })

      })

      
})