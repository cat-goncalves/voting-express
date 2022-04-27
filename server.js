const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const connectDB = require('./config/database')

const Movie = require('./models/Movie')
const homeRoutes = require('./routes/home')

require('dotenv').config({ path: '.config/.env'})

connectDB()


//this function is the suntax for adding new documents into the movies collection
//needs to be called in order to work
//run()
async function run() {
  const movie = await Movie.create({
    name: 'notebook',
    displayName: 'The Notebook',
    url: 'the-notebook.jpg',
    votes: 0
  })
  console.log(movie)
}

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use('/', homeRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})