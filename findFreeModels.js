import { listModels } from '@huggingface/hub';
import { token } from './hfInference.js';

// HuggingFace.js Hub Docs: https://huggingface.co/docs/huggingface.js/hub/README

// Challenge 1: Get Text To Image Models with inference enabled and 2000+ likes

/* Challenge 2: Sort models by likes and return HF URL

Target Output:
9563 Likes: https://huggingface.co/runwayml/stable-diffusion-v1-5
6051 Likes: https://huggingface.co/CompVis/stable-diffusion-v1-4
3479 Likes: https://huggingface.co/WarriorMama777/OrangeMixs
3469 Likes: https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0
3302 Likes: https://huggingface.co/stabilityai/stable-diffusion-2-1
*/

async function isModelInferenceEnabled(modelName) {
  const response = await fetch(`https://api-inference.huggingface.co/status/${modelName}`);
  const data = await response.json();
  return data.state == 'Loadable';
}

const models = [];

for await (const model of listModels({
  credentials: {
    accessToken: token,
  },
  search: {
    //task: "text-generation"
    task: 'text-to-image',
  },
})) {
  if (model.likes >= 2000 && (await isModelInferenceEnabled(model.name))) {
    models.push(model);
  }
}

models
  .sort((a, b) => b.likes - a.likes)
  .forEach((model) => {
    console.log(`${model.likes} Likes: https://huggingface.co/${model.name}`);
  });
