const mongoose = require('mongoose')
require('dotenv').config({ path: './config/.env'})

const url = process.env.DB_URL

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true})

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB