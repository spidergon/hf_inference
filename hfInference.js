import { HfInference } from '@huggingface/inference';
import dotenv from 'dotenv';

dotenv.config();

// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

const token = process.env.HF_TOKEN;

const hf = new HfInference(token);

export default hf;

export { token };
