const axios = require('axios')

function sendmail(){
  let data ={
    Name:document.getElementById('contact-msgNAME').innerHTML,
    Email:,
    Subject:document.getElementById('contact-msgSUB').innerHTML,
    Message:document.getElementById('contact-msgMessage').innerHTML
  }
  console.log(data)
  alert("ok")
  axios.post('https://zzmailer.herokuapp.com/send', data )
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })
}