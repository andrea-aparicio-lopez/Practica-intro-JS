import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// listado alumnos
const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }];

// utilidades
const availableMaleNames = ['pepe', 'juan', 'victor', 'leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

function getFemaleStudents(){
  let femaleStudents = students.filter(student => student.gender === 'female');
  return femaleStudents;
}
function getMaleStudents(){
  let maleStudents = students.filter(student => student.gender === 'male');
  return maleStudents;
}



function askRequirement() {
  const promise = new Promise((resolve,reject) => {
    rl.question('Introduce el número del requisito (0 para salir): ', (req) => {
      if (isNaN(req)) {
        reject(new Error('Por favor, introduce un número'));
      }else {
        req = Math.abs(parseInt(req));
        resolve(req);
      }
    })
  })
  return promise;
};


//REQUISITOS
// 1 - Mostrar en formato de tab.  la todos los alumnos
// console.table(students);

//2- Mostrar por consola la cantidad de alumnos que hay en clase.
// console.log(students.length);

//3- Mostrar por consola todos los nombres de los alumnos.
function getStudentNames() {
  let studentNames = students.map(student => student.name);
  console.log(studentNames);
};

//4- Eliminar el último alumno de la clase.
function removeLast(){
  console.log('Student "'+ students.pop().name + '" has been removed from list');
};

//5- Eliminar un alumno aleatoriamente de la clase.
function randomIndexStudents() {
  return Math.floor(Math.random() * students.length);
}
// console.log('req 5');
function removeRandomStudent(){
  let student = students.splice(randomIndexStudents(),1);
  student.forEach(student => console.log('Student "' + student.name + '" has been removed'));
};

//6- Mostrar por consola todos los datos de los alumnos que son chicas.
function showFemaleStudents(){ 
  console.log(getFemaleStudents());
};

//7- Mostrar por consola el número de chicos y chicas que hay en la clase.
function showMandFCount(){
  console.log('Number of females: ' + getFemaleStudents().length);
  console.log('Number of males: ' + getMaleStudents().length);
};

//8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
function AllF(){
  let allFemales = students.every(student => student.gender === 'female');
  console.log('All students are females: ' + allFemales);
};

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
function early20s() {
  let studentList = students.filter(student => student.age >= 20 && student.age <= 25);
  let nameList = []
  studentList.forEach(student => nameList.push(student.name));
  console.log(nameList);
};

// 10- Añadir un alumno nuevo con los siguientes datos: nombre random, edad random entre 20 y 50, genero acorde  al nombre, notas vacias
function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function randomGender() {
  let randomIndex = Math.floor(Math.random() * availableGenders.length);
  return availableGenders[randomIndex];
};

function randomName(gender) {
  let randomIndex = undefined;
  if (gender === 'male'){
    randomIndex = Math.floor(Math.random() * availableMaleNames.length);
    return availableMaleNames[randomIndex]
  }else if (gender === 'female') {
    randomIndex = Math.floor(Math.random() * availableFemaleNames.length);
    return availableFemaleNames[randomIndex];
  }
};

function newStudent() {
  let randomAge = randomNumber(20,50);
  let randGend = randomGender();
  let randName = randomName(randGend);
  let randomStudent = {
      age: randomAge,
      examScores: [],
      gender: randGend,
      name: randName
    };
    students.push(randomStudent);
    console.log('"' + randomStudent.name + '" was added to list');
}

// console.log('Req 10:')
// newStudent();
// console.log(students);

// 11- Mostrar por consola el nombre de la persona más joven de la clase.
function youngestStudent(){
  let youngest = students.slice().sort((a,b) => a.age - b.age)[0];
  console.log('"' + youngest.name + '" is the youngest student');
};

// 12- Mostrar por consola la edad media de todos los alumnos de la clase.
function averageAge() {
  let total = [];
  students.forEach(student => total.push(student.age));
  let avg = total.reduce((a,b) => a + b) / total.length;
  console.log('The average student age is ' + avg);
};

//13- Mostrar por consola la edad media de las chicas de la clase.
function averageFemaleAge() {
  let total = [];
  students.forEach(student => {
    if (student.gender === 'female'){
      total.push(student.age)}
    });
  let avg = total.reduce((a,b) => a + b) / total.length;
  console.log("The average females' age is " + avg);
};

//14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma 
//    aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
function addGrade(){
  students.forEach(student => student.examScores.push(randomNumber(0,10)));
};

// 15- Ordenar el array de alumnos alfabéticamente según su nombre.
function alphabOrder(){
  students.sort((a,b) => {
    if (a.name < b.name){
      return -1;
    }else if (a.name > b.name){
      return 1;
    }else{
      return 0;
    }
  });
  console.log('Students were arranged alphabetically');
};



async function run() {
  let requirement = await askRequirement();
  while (requirement !== 0){
    switch(requirement) {
      case 1:
        // Mostrar en formato de tabla todos los alumnos
        console.table(students);
        break;
      case 2:
        // Mostrar por consola la cantidad de alumnos que hay en clase.
        console.log("There's " + students.length + " students");
        break;
      case 3:
        // Mostrar por consola todos los nombres de los alumnos.
        getStudentNames();
        break;
      case 4:
        // Eliminar el último alumno de la clase.
        removeLast();
        break;
      case 5:
        //5- Eliminar un alumno aleatoriamente de la clase.
        removeRandomStudent();
        break;
      case 6:
        // Mostrar por consola todos los datos de los alumnos que son chicas.
        showFemaleStudents();
        break;
      case 7:
        // Mostrar por consola el número de chicos y chicas que hay en la clase.
        showMandFCount();
        break;
      case 8:
        // Mostrar true o false por consola si todos los alumnos de la clase son chicas.
        AllF();
        break;
      case 9:
        // Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
        early20s();
        break;
      case 10:
        // Añadir un alumno nuevo
        newStudent();
        break;
      case 11:
        // Mostrar por consola el nombre de la persona más joven de la clase.
        youngestStudent();
        break;
      case 12:
        // Mostrar por consola la edad media de todos los alumnos de la clase.
        averageAge();
        break;
      case 13:
        // Mostrar por consola la edad media de las chicas de la clase.
        averageFemaleAge();
        break;
      case 14:
        // Añadir nueva nota a los alumnos
        addGrade();
        console.log(students);
        break;
      case 15:
        // Ordenar a los alumnos alfabéticamente
        alphabOrder();
        break;
      default:
        console.log('Introduce un número válido');
        break;
    }
    requirement = await askRequirement();
  }
  rl.close();
}

run();

// 