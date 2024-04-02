import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {getDatabase, ref, push} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSetttings = {
    databaseURL: 'https://realtime-database-852c7-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSetttings);
const database = getDatabase(app);
const shoppingInDB = ref(database, 'Shopping List')




const inputfield = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingList = document.getElementById('shopping-list');

addButtonEl.addEventListener("click", function () {
let inputValue = inputfield.value;
push(shoppingInDB, inputValue)

emptyField();
newItems(inputValue);
});

function emptyField(){
    inputfield.value = ''
}

function newItems(itemValue){
    shoppingList.innerHTML = `<li>${itemValue}</>`
}