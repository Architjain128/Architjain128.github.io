const axios = require('axios')

function sendmail(a,b,c,d){
  let data ={
    Name:document.getElementById('contact-msgNAME'),
    Email:document.getElementById('contact-msgEMAIL'),
    Subject:document.getElementById('contact-msgSUB'),
    Message:document.getElementById('contact-msgMessage')
  }
  axios.post('https://zzmailer.herokuapp.com/send', data )
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })
  alert("okokokokokokokokok")
}