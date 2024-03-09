import hf from './hfInference.js';

// const textToClassify = "I just bought a new camera. It's the best camera I've ever owned!";
const textToClassify = "I just bought a new camera. It's been a real disappointment.";

const response = await hf.textClassification({
  //   model: 'distilbert-base-uncased-finetuned-sst-2-english',
  model: 'SamLowe/roberta-base-go_emotions',
  //   inputs: 'I like you. I love you.',
  inputs: textToClassify,
});

console.log(response[0].label);
console.log(response);
