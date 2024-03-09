import hf from './hfInference.js';

// https://huggingface.co/facebook/mbart-large-50-many-to-many-mmt#languages-covered

const textToTranslate = "It's an exciting time to be an AI engineer";

const textTranslationResponse = await hf.translation({
  model: 'facebook/mbart-large-50-many-to-many-mmt',
  inputs: textToTranslate,
  parameters: {
    src_lang: 'en_XX',
    tgt_lang: 'fr_XX',
  },
});

const translation = textTranslationResponse.translation_text;
console.log('\ntranslation:\n');
console.log(translation);
