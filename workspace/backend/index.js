import { GoogleGenerativeAI } from '@google/generative-ai'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config();
const API_KEY = process.env.API_KEY;

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000;

const genAI = new GoogleGenerativeAI(API_KEY)
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `TBD`,
})

app.post('/chat', async (req, res) => {
    const userInput = req.body.userInput;
    let responseMessage;
    try {
        const result = await model.generateContent(userInput);
        responseMessage = result.response.text();
    } catch(e){
        responseMessage = 'Oops, something went wrong!'
    }
    res.json({
        message: responseMessage,
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})