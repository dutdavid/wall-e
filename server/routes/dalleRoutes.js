import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';


dotenv.config();

const router = express.Router();

const Configuration = new Configuration({
    apiKey: process.env.OpenAI_API_KEY,
})

const openai = new OpenAIApi(Configuration);

router.route('/').get((req, res) => {
    res.send('Hello from Wall-e');
})