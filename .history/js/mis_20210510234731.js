const axios = require('axios')

axios.post('https://zzmailer', function(req,res){

})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})