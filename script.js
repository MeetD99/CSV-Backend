import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

let values = {
    "22K": "70000",
    "18K": "60000",
    "Date": ""
}

app.get('/', (req, res) => {
    res.json(values)
})

app.post('/update', (req, res) => {
    const { key, value } = req.body
    if (key && value) {
        values[key] = value
        res.json({ message: "Value updated successfully", values })
    } else {
        res.status(400).json({ message: "Invalid request" })
    }
})

app.listen(port, () => {
    console.log("Server Running successfully!");
})