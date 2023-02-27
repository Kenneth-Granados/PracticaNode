const { options } = require('yargs');

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;
    
const argv1 = require('yargs').option(
    'b',{
        alias: 'b',
        type: 'number',
        demandOption:true
    }
).check(//comprueba si hay error
    (argv,options) => {
        if (isNaN(argv.b)) {
            throw(`El valor introducido  no es un número`);
        }
        return true;
    }
);

module.exports = {
    argv
}