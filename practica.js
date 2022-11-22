import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// listado alumnos
const students = [{
    age: 20,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 24,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }];

// utilidades
const availableMaleNames = ['pepe', 'juan', 'victor', 'leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];


function askRequirement() {
  const promise = new Promise((resolve,reject) => {
    rl.question('Introduce el número del requisito (0 para salir): ', (req) => {
      if (isNaN(req)) {
        reject(new Error('Por favor, introduce un número'));
      }else {
        // req = parseInt(req);
        req = Math.abs(parseInt(req));
        resolve(req);
      }
    })
  })
  return promise;
}


//REQUISITOS
// 1 - Mostrar en formato de tab.  la todos los alumnos
console.table(students);

//2- Mostrar por consola la cantidad de alumnos que hay en clase.
console.log(students.length);

//3- Mostrar por consola todos los nombres de los alumnos.
let studentNames = students.map(student => {
  return student.name
})
console.log(studentNames);

//4- Eliminar el último alumno de la clase.
// console.log('Student "'+ students.pop().name + '" has been removed from list');
// console.table(students);

// //5- Eliminar un alumno aleatoriamente de la clase.
// function randomIndex() {
//   return Math.floor(Math.random() * students.length);
// }
// students.splice(randomIndex(),1);
// console.table(students)

//6- Mostrar por consola todos los datos de los alumnos que son chicas.
let femaleStudents = students.filter(student => student.gender === 'female');
console.log(femaleStudents);

//7- Mostrar por consola el número de chicos y chicas que hay en la clase.
let maleStudents = students.filter(student => student.gender === 'male');
console.log('Number of females: ' + femaleStudents.length);
console.log('Number of males: ' + maleStudents.length);

//8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
let allFemales = students.every(student => student.gender === 'female');
console.log('All students are females: ' + allFemales);

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
// students.forEach(student => { 
//   if (student.age >= 20 && student.age <= 25){
//     console.log(student.name);
//   }
// });

let early20s = students.map(student => {
  if(student.age >= 20 && student.age <= 25){
    return student.name
  }
});
console.log(early20s);

//


async function run(students) {
  const requirement = await askRequirement()
  switch(requirement) {
    case 0:
      rl.close();
      break;
    // 1 - Mostrar en formato de tab.  la todos los alumnos
    case 1:    
      console.log('Por aqui pasa');
      console.table(students);
      break;
    default:
      console.log('Introduce un número válido');
      break;
  }
}

run(students);
// rl.close()