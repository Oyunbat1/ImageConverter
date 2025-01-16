import fs from 'fs';




// function RemoveJSON(json, id) {

//     let myObject = JSON.parse(json);

//     const updatedObject = myObject.filter(
//         element => element.id !== id
//     );

//     fs.writeFileSync("student.json", JSON.stringify(updatedObject)); // remove json;
// }

// function ReadJSON(json,id){
//     let myObject = JSON.parse(json);
//     const updatedObject = myObject.filter(
//         element => element.id === id
//     )
//    const next = fs.readFileSync("student.json","utf-8",updatedObject); // read json 
//    console.log(next);
// }

// function updateJSON(data,id,student){
//     const myObject = JSON.parse(data);
//     const filtered = myObject.map(element => {
//         if(element.id === id){
//             element.name = student.name
//             element.seatNumber = student.seatNumber
//         } return element
//     })
//     fs.writeFileSync("student.json",JSON.stringify(filtered));
//     return filtered;
// }
// console.log(updateJSON(data,1,{name:"Galaa",seatNumber:'6B'}))


// function AddJSON(student){
//     const myObject = JSON.parse(data);
//     myObject.push(student);
//     fs.writeFileSync("student.json",JSON.stringify(myObject));
//     return myObject;
// }
// console.log(AddJSON({id:2,name:"Oyunbat",seatNumber:"4A"}));



//read 
//student 
//write 
