let table = document.querySelector("#user-table tbody");
// Acceder al "User-Table" y llegar al elemento "TBODY" y es donde quiero agregar los elemnto nuevos
// este ira fuera de la funcion.

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

function createTable(usersList) {
    for (let i = 0; i < usersList.length ; i++) {
        let usersEmail = usersList[i].email;
        // Cree una varibles "usersEmails" con el valor "userList" en cada iteracion que coincida con "@academlo"
        if (usersEmail.endsWith("@academlo.com")) {
        //    Si ( en los elementos terminan en "@academlo.com") >>>> de esta forma esta iterando cada uno de los ELementos del arreglo
        
        
        
        
        let newRow = document.createElement("tr");
        //  Le vamos a decir que cree un elemnto "tr"
            table.appendChild(newRow);
        //  La variable que declaramos al inicio en fila !1! "let table = document.querySelector("#user-table tbody")"
        // Acceder al elemento "users-table" y accediendo al "Tbody"


            let usersName = document.createElement("td");
        // Crea un elemento en "td" 
            usersame.innerText = usersList[i].name;
        // Crearemos texto para este elemento

            
            let usersEmail = document.createElement("td");
            // creamos un elemento en "td"
            usersEmail.innerText = usersList[i].email;
            // incorporamos texto para este nuevo elemento

            newRow.appendChild(usersName);
            // Cree el Listado de Nombres
            newRow.appendChild(usersEmail);
            // Cree el listado de Emails


            // COMO VAMOS A ACCEDER A EL CAMPO SOCIAL 
            
            // for (let index =0; index < usersList[i].social-length; index++){
            //     console.log(
            //     `${usersList[i].name} tienen la siguientes redes sociales ${usersList[i].social[index].url}`
            //     );
            // }
            
            
            // CREAR FILAS EN LA TABLA USANDO CREATE ELEMENT
            // CREAR FILAS E LA TABLA CON INNERHTML







            // OTRA FORMA DE AGREGAR (SINTAXIS NUEVA)
            
            // table.innerHTML +=`<tr>
            //                 <td>${usersList[i].name}</td>
            //                 <td>${usersList[i].email}</td>
            //                 <td>${usersList[i].age}</td>
            //                 <td>${usersList[i].gender}</td>

            //                  </tr>`;


                            //  1r ${} incorporar Javascripts en este caso una variable
                            //  table.innerHTML += (hay que concatenarlo)`<tr>







        }

    }
}

createTable(user);


// Redes sociales vamos a utilizar un "for"