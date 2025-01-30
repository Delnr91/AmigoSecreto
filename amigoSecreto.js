
// Declaración de variables globales
// Elemento <ul> para la lista de amigos
const friendList = document.getElementById('friendList');
// Array para almacenar los nombres de los amigos
let friendNames = [];
// Contador de amigos
let friendCount = 0;

// Función para añadir un amigo
function addFriend() {
    // 1. Obtener el nombre del Amigo
    const friendName = document.getElementById('friendName').value;

    // 2. Validar si el añadir está vacío
    if (friendName === '') {
        alert('Debes ingresar un nombre');
        return; // Salir de la función si el nombre está vacío
    }

    // 3. Validar si el nombre ya existe en la lista
    if (friendNames.includes(friendName)) {
        alert('Nombre repetido, ingresa otro');
        clearInput('friendName'); // Limpiar el input
        return; // Salir de la función si el nombre está repetido
    }

    // 4. Agregar el nombre a la lista
    friendNames.push(friendName);

    // 5. Mostrar el nombre en la lista en el HTML
    displayFriend(friendName);

    // 6. Limpiar el input
    clearInput('friendName');

    // 7. Limpiar el mensaje de resultado (si lo hay)
    clearResult();
}

// Función para mostrar un amigo en la lista del HTML
function displayFriend(friendName) {
    const newListItem = document.createElement('li'); // Crear un nuevo elemento <li>
    newListItem.textContent = friendName; // Asignar el nombre al elemento <li>
    friendList.appendChild(newListItem); // Agregar el elemento <li> a la lista <ul>
}

// Función para limpiar el input
function clearInput(inputId) {
    const inputElement = document.getElementById(inputId); // Obtener el elemento input
    inputElement.value = ''; // Limpiar el valor del input
    inputElement.placeholder = 'Escribe un nombre'; // Restablecer el marcador de posición
}

// Función para limpiar el mensaje de resultado
function clearResult() {
    const resultElement = document.getElementById('result'); // Obtener el elemento de resultado
    resultElement.textContent = ''; // Limpiar el texto del resultado
}

// Función para sortear un amigo
function drawFriend() {
    // 1. Obtener la cantidad de amigos
    friendCount = friendNames.length;

    // 2. Validar si hay suficientes amigos para sortear
    if (friendCount > 1) {
        // 3. Generar un índice aleatorio
        const winnerIndex = generateRandomIndex();

        // 4. Obtener el nombre del amigo ganador
        const winnerName = friendNames[winnerIndex];

        // 5. Mostrar el resultado
        displayResult(`El amigo secreto sorteado es: ${winnerName}`);

        // 6. Limpiar la lista de amigos
        clearFriendList();

        // 7. Deshabilitar el botón de sortear y habilitar el botón de reiniciar
        disableDrawButton();
        enableResetButton();
    } else {
        // 8. Mostrar un mensaje si no hay suficientes amigos
        if (friendCount === 1) {
            displayResult('No hay suficientes amigos para sortear. Solo ingresaste uno');
        } else {
            displayResult('No ingresaste ningún amigo');
        }
    }
}

// Función para generar un índice aleatorio
function generateRandomIndex() {
    return Math.floor(Math.random() * friendCount);
}

// Función para mostrar el resultado
function displayResult(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
}

// Función para limpiar la lista de amigos
function clearFriendList() {
    while (friendList.firstChild) {
        friendList.removeChild(friendList.firstChild); // Remover todos los elementos <li>
    }
    friendNames = []; // Vaciar el array de nombres
}

// Función para deshabilitar el botón de sortear
function disableDrawButton() {
    document.getElementById('draw').disabled = true;
}

// Función para habilitar el botón de reiniciar
function enableResetButton() {
    document.getElementById('reset').disabled = false;
}

// Función para reiniciar el sorteo
function resetDraw() {
    clearFriendList(); // Limpiar la lista de amigos
    clearResult(); // Limpiar el mensaje de resultado
    enableDrawButton(); // Habilitar el botón de sortear
    disableResetButton(); // Deshabilitar el botón de reiniciar
}

// Función para habilitar el botón de sortear
function enableDrawButton() {
    document.getElementById('draw').disabled = false;
}

// Función para deshabilitar el botón de reiniciar
function disableResetButton() {
    document.getElementById('reset').disabled = true;
}