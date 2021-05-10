const mailjet = require ('node-mailjet')
.connect('18d9cfe5a4371f40d6732084e229af81', '7462fdb8ee8ef448a65b50f543d1f1d8')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": ,
        "Name": "Archit"
      },
      "To": [
        {
          "Email": "architjain10202@gmail.com",
          "Name": "Archit"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
