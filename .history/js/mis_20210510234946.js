const axios = require('axios')

function sendmail(a){
  axios.post('https://zzmailer.herokuapp.com/send', function(req,res){

  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })
}