const axios = require('axios')

function sendmail(a,b,c,d){
  let data ={
    Name:a,
    Email:"architjain10202@gmail.com",
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

sendmail()