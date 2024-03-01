console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-01')
const messageTwo = document.querySelector('#message-02')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', e => {
    e.preventDefault()
    
    const location = search.value

    messageOne.style.color = ''
    messageOne.textContent = 'Fetching weather...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.style.color = 'red'
                messageOne.textContent = data.error
                return
            }
            messageOne.textContent = 'Location: ' + data.location
            messageTwo.textContent = 'Weather: ' + data.forecast
            console.log('Location: ', data.location)
            console.log('Weather:', data.forecast)
        })
    })
})