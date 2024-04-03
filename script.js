import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetttings = {
  databaseURL: "https://realtime-database-852c7-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSetttings);
const database = getDatabase(app);
const shoppingInDB = ref(database, "Shopping List");

onValue(shoppingInDB, function (snapshot) {
//   let ItemsArray = Object.values(snapshot.val());
//   let ItemsArrayId = Object.keys(snapshot.val());


  let ItemsArray = Object.entries(snapshot.val());


  clearShoppingList();
  emptyField();
  for (let i = 0; i < ItemsArray.length; i++) {
    let currentItems = ItemsArray[i];

let currentItemID = currentItems[0];
let currentItemsValue = currentItems[1]

   let itemValue   = newItems(  ItemsArray );

  }
});

const inputfield = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputfield.value;
  push(shoppingInDB, inputValue);

  emptyField();
});

function clearShoppingList() {
  shoppingList.innerHTML = "";
}

function emptyField() {
  inputfield.value = "";
}

function newItems(Items) {
//   shoppingList.innerHTML += `<li>${itemValue}</>`;
let ItemID = Items[0];
let ItemsValue = Items[1];

    let newEl = document.createElement('li');

    newEl.textContent = ItemID

    shoppingList.appendChild(newEl);

}
