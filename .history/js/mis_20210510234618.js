const axios = require('axios')

axios.post('https://api.randomservice.com/dog', {
  name: 'Roger', age: 8 
}, {
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer 123abc456def'
  }
)
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})