// requireds
const fs = require('fs');
const colors = require('colors');
const { Console } = require('console');

let listarTabla = (base, limite = 10) => {
    console.log('=================='.green);
    console.log(`tabla de ${ base }`.blue);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }


}


// const crearArchivo = (base, limite = 10) => {

//     return new Promise((resolve, reject) => {

//         if (!Number(base)) {
//             reject(`El valor introducido ${ base } no es un número`);
//             return;
//         }

//         let data = '';

//         for (let i = 1; i <= limite; i++) {
//             data += `${ base } * ${ i } = ${ base * i }\n`;
//         }


//         // fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

//         //     if (err)
//         //         reject(err)
//         //     else
//         //         resolve(`tabla-${ base }-al-${ limite }.txt`);

//         // });
//         fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data)
//         resolve(`tabla-${ base }-al-${ limite }.txt`);
//     });

// }

const crearArchivo = async (base, limite = 10) => {

        try {
            if (!Number(base)) {
                reject(`El valor introducido ${ base } no es un número`.red);
                return;
            }
    
            let data,consola = '';
    
            for (let i = 1; i <= limite; i++) {
                consola += `${ base } x ${ i } = ${ base * i }\n`;
                data += `${ base } ${'x'.yellow} ${ i } = ${ base * i }\n`.green;
            }
    
            fs.writeFileSync(`tablas/tabla-${ base }-al-${ limite }.txt`, data);

            return `tabla-${ base }-al-${ limite }.txt`.rainbow;

        } catch (error) {
            throw error;
        }
}

module.exports = {
    crearArchivo,
    listarTabla
}