function createUser(nombre, apellido, email, direccion){ 
    return {
        nombre: nombre,
        apellido: apellido,    
        email: email,
        direccion: direccion,
        cambiarDireccion: function () {
            console.log('cambiar direccion...');
        },
    };
}

let user1 = createUser('Paola', 'Ortiz', 'paola@company.ru', 'Jocotenango Calle ancha 25');
let user2 = createUser('Paolo', 'Ortega', 'paolo@company.ru', 'Jocotenango Calle ancha 25');
let user3 = createUser('Juan', 'Ramirez', 'juan@company.ru', 'Jocotenango Calle ancha 25');
let user4 = createUser('Veronica', 'Valles', 'veronica@company.ru', 'Jocotenango Calle ancha 25');
let user5 = createUser('Luis', 'Acevedo', 'luis@company.ru', 'Jocotenango Calle ancha 25');
let user6 = createUser('Pedro', 'Garcia', 'pedro@company.ru', 'Jocotenango Calle ancha 25');

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log(user6);