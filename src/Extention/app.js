import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
const firebaseConfig = {
  databaseURL: "https://leadstracker-129f0-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);

const referencingInDatabase = ref(dataBase, "Links");

const inputEL = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
const liBtn = document.querySelectorAll(".liBtn")

console.log(liBtn)

function createLinkElements(Links) {
  let listItems = "";
  for (let i = 0; i < Links.length; i++) {
    listItems += `
    <li>
        <a class="text-green-300" target="_blank" href="${Links[i]}">
        ${Links[i]}
        
        </a>
      </li>

      <button class="liBtn text-red-500 px-2 justify-self-end font-bold">delete</button>
       
        
        `;
  }
  ulEL.innerHTML = listItems;
}

onValue(referencingInDatabase, function (snapshot) {
  const snapshotExist = snapshot.exists();
  if (snapshotExist) {
    const snapshotValues = snapshot.val();
    const Links = Object.values(snapshotValues);
    createLinkElements(Links);
  }
});

inputBtn.addEventListener("click", () => {
    if(inputEL.value !== ""){
  push(referencingInDatabase, inputEL.value);
    }
  inputEL.value = "";
});
