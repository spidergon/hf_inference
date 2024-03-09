import { HfInference } from '@huggingface/inference';

const hf = new HfInference('token_here_only_for_testing_purposes');

const text = "It's an exciting time to be an A.I. engineer.";

const response = await hf.textToSpeech({
  model: 'espnet/kan-bayashi_ljspeech_vits',
  inputs: text,
});

console.log(response);

const audioElement = document.getElementById('speech');
const speechUrl = URL.createObjectURL(response);
audioElement.src = speechUrl;
