require('dotenv').config()

const screen = require('../src/screen')

const url = process.argv[2]
if (!url) {
  throw new Error('you must provide an url')
}

screen(url, 'demo')
  .then(imgURL => {
    console.log(imgURL)
    process.exit(0)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
