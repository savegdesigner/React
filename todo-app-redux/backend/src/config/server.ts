import express from 'express'
import routes from './routes'
import cors from 'cors'

const port: number = 3003

const app = express()

let corsOptions = {
    "origin": "http://localhost:8080",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', routes)

app.listen(port, () => {
    console.log("App running 🏃")
})