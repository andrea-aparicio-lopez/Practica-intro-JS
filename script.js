import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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


function askRequirement() {
  const promise = new Promise((resolve,reject) => {
    rl.question('Introduce el número del requisito', (req) => {
      if (isNaN(req)){
        reject(new Error('Por favor, introduce un número'));
      }else {
        req = parseInt(req);
        // req = Math.abs(parseInt(req));
        resolve(req);
      }
    })
  })
}

async function run() {

  switch(await askRequirement) {
    // 1 - Mostrar en formato de tabla todos los alumnos
    case 1:    
      console.table(students);
      break;
    default:
      console.log('Introduce un número válido');
      break;
  }
}

run();