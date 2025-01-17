const student = [
    {
        name: "Oyunbat",
        age: 20,
        hobbies:["basketball","volleyball","tennis"]
    },
    {
        name: "Oyun",
        age: 20,
        hobbies:["basketball","ball","tennis"]
    },
    {
        name: "Bat",
        age: 20,
        hobbies:["basketball","volleyball","tennis"]
    }
]
const studentHobbies = [];
for ( let i = 0 ; i < student.length ; i++){
    if(student[i].hobbies[1] == "volleyball"){
        studentHobbies.push(student[i]);
    }
}
console.log(studentHobbies[0].hobbies[1]);