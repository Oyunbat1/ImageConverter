const student = [
    {
        id:1,
        name: "Oyunbat",
        age: 20,
        hobbies:["basketball","volleyball","tennis"]
    },
    {
        id:2,
        name: "Oyun",
        age: 20,
        hobbies:["basketball","ball","tennis"]
    },
    {
        id:3,
        name: "Bat",
        age: 20,
        hobbies:["basketball","volleyball","tennis"]
    }
]
//id:2 name to BOLD
function changingSomething(student,id,info){
    const filter = student.map(element => 
    {
        if(element.id === id){
            element.name = info.name;
        }
        return element
    }
    )
    return filter;
}
console.log(changingSomething(student,2,{name:"Bold"}));



const files = fs.readdirSync("./input");
// sharp('./input/nature-1.png').toFile("output.webp",(err,info)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(info);
//     }
// })

// for(let i = 0 ; i < files.length ; i++){
  
//     sharp(`./input/${files[i]}`).toFile(`./output/${i}.webp`,(err,info)=>{
//         if(err) {
//             console.error(err)
//         }else{
//             console.log(info);
//         }
//     })
// }

//resize bolon quality
// for(let i = 0 ; i < files.length ; i++){
  
//     sharp(`./input/${files[i]}`).resize(200,300).toFile(`./output/${i}.webp`,(err,info)=>{
//         if(err) {
//             console.error(err)
//         }else{
//             console.log(info);
//         }
//     })
// }

