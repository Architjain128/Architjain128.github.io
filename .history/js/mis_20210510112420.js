const mailjet = require ('node-mailjet')
.connect('18d9cfe5a4371f40d6732084e229af81', '7462fdb8ee8ef448a65b50f543d1f1d8')

function mailrequest(){ mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": getElementById('contact-msgEMAIL').innerHTML,
        "Name": getElementById('contact-msgNAME').innerHTML
      },
      "To": [
        {
          "Email": "architjain10202@gmail.com",
          "Name": "Archit"
        }
      ],
      "Subject": getElementById('contact-msgSUBJECT').innerHTML,
      "TextPart": getElementById('contact-msgMSG').innerHTML,
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
}

// MAILrequest
//   .then((result) => {
//     console.log(result.body)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   })