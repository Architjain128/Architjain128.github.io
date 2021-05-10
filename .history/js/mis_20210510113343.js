const mailjet = require ('node-mailjet')
.connect('18d9cfe5a4371f40d6732084e229af81', '7462fdb8ee8ef448a65b50f543d1f1d8')

const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
    "Messages":[
        {
        "From": {
            "Email": documegetElementById('contact-msgEMAIL').innerHTML,
            "Name": documegetElementById('contact-msgNAME').innerHTML
        },
        "To": [
            {
            "Email": "architjain10202@gmail.com",
            "Name": "Archit"
            }
        ],
        "Subject": documegetElementById('contact-msgSUBJECT').innerHTML,
        "TextPart": documegetElementById('contact-msgMSG').innerHTML,
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