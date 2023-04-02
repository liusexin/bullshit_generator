import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

import { generate } from './lib/generator.js';
import { createRandomPick } from './lib/random.js';
import moment from 'moment/moment.js';

const __dirname = dirname(fileURLToPath(import.meta.url))

function loadCorpus(src){
    const path = resolve(__dirname,src) 
    const data = readFileSync(path,{encoding:"utf-8"})
    return JSON.parse(data)
}
const corpus = loadCorpus('./corpus/data.json')

const pickTitle = createRandomPick(corpus.title)
const title = pickTitle()

const article = generate(title,{corpus})

function saveCorpus(title, article) {
    const outputDir = resolve(__dirname, 'output');
    const time = moment().format('|YYYY-MM-DD|HH:mm:ss');
    const outputFile = resolve(outputDir, `${title}${time}.txt`);
  
    if(!existsSync(outputDir)) {
      mkdirSync(outputDir);
    }
  
    const text = `${title}\n\n    ${article.join('\n    ')}`;
    writeFileSync(outputFile, text);
  
    return outputFile;
  }
const output = saveCorpus(title,article)
console.log('生成成功',output)


