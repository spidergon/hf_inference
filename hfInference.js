import { HfInference } from '@huggingface/inference';
import dotenv from 'dotenv';

dotenv.config();

// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

const hf = new HfInference(process.env.HF_TOKEN);

export default hf;
