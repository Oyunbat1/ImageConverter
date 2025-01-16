import fs, { readdirSync } from 'fs';
import sharp  from 'sharp';
const files = fs.readdirSync("./input");
// sharp('./input/nature-1.png').toFile("output.webp",(err,info)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(info);
//     }
// })

for(let i = 0 ; i < files.length ; i++){
  
    sharp(`./input/${files[i]}`).toFile(`./output/${i}.webp`,(err,info)=>{
        if(err) {
            console.error(err)
        }else{
            console.log(info);
        }
    })
}
