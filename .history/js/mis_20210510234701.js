const axios = require('axios')

axios.post('https://api.randomservice.com/dog', fub
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})