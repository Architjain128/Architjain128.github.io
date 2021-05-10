const axios = require('axios')

function sendmail(){
  let data ={

  }
  axios.post('https://zzmailer.herokuapp.com/send', data

  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })
}