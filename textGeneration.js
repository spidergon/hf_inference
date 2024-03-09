import hf from './hfInference.js';

const textToGenerate = 'The definition of machine learning inference is ';

const response = await hf.textGeneration({
  inputs: textToGenerate,
  //   model: 'HuggingFaceH4/zephyr-7b-beta',
  model: 'mistralai/Mistral-7B-Instruct-v0.2',
});

console.log(response);
