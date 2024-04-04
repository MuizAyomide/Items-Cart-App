import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetttings = {
  databaseURL: "https://realtime-database-852c7-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSetttings);
const database = getDatabase(app);
const shoppingInDB = ref(database, "Shopping List");

onValue(shoppingInDB, function (snapshot) {

  if(snapshot.exists()){

  let ItemsArray = Object.entries(snapshot.val());

  clearShoppingList();
  emptyField();
  for (let i = 0; i < ItemsArray.length; i++) {
    let currentItems = ItemsArray[i];
    let currentItemID = currentItems[0];
    let currentItemsValue = currentItems[1];

    let itemValue = newItems(currentItems);
  }
}
else {
  shoppingList.innerHTML = 'No items here yet...'
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

  let newEl = document.createElement("li");

  newEl.textContent = ItemsValue;

  let exactLocation = ref(database, `Shopping List/${ItemID}`)

  newEl.addEventListener("click", function(){
    remove(exactLocation);
  });

  shoppingList.appendChild(newEl);
}
