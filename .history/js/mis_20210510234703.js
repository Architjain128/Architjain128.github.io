const axios = require('axios')

axios.post('https://api.randomservice.com/dog', fun
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})