const axios = require('axios')

axios.post('https://zzmailer.heroku', function(req,res){

})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})