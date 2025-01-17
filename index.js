import fs, { readdirSync } from 'fs';
import sharp  from 'sharp';

import readline from 'readline';
import {stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input,output});
rl.question('What do you think of Node.js? ',(answer)=> {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
});