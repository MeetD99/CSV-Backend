import express from 'express'
import cors from 'cors'
import fs, { read, write } from 'fs'


const app = express()
const port = 3000

app.use(cors({
    origin: 'https://choksishamaljivallabhji.netlify.app', // Replace with your Netlify app URL
    methods: ['GET', 'POST']
}))
app.use(express.json())

const dataFilePath = 'rates.json'

const readData = () => {
    try{
        const rawData = fs.readFileSync(dataFilePath);
        return JSON.parse(rawData);
    } catch (error){
        console.error('Error Reading the file:', error);
        return {};
    }
};

const writeData = (data) =>{
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error writing to file!", error);
    }
}

app.get('/', (req, res) => {
    const data = readData();
    res.json(data);
})

app.post('/update', (req, res) => {
    const { key, value } = req.body;
    const data = readData();
    data[key] = value;
    writeData(data);
    res.json({message: 'Data Updated successfully!'});
})

app.listen(port, () => {
    console.log("Server Running successfully!");
})