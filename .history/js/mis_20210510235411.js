const axios = require('axios')

function sendmail(){
  let data ={
    Name:document.getElementById('contact-msgNAME'),
    Email:document.getElementById('contact-msgEMAIL'),
    Message:document.getElementById('contact-msgMessage')
  }
  axios.post('https://zzmailer.herokuapp.com/send', data
  )
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })
}