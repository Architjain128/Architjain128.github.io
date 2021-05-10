const axios = require('axios')

axios.post('https://api.randomservice.com/dog', 
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})