const axios = require('axios')

function sendmail(){
  let data ={
    Name:document.get
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