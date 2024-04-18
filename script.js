const addbutton = document.querySelector("#add");

const updateLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  console.log(notes);

  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });

  console.log(textAreaData);
  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNewNote = (text = "") => {
  const boxMain = document.querySelector("#box-main");

  const htmlData = `<div class="container note-cd">
    <div class="card-note">
        <div class="operation">
            <button class="edit"><img src="img/edit.png" class="op-btn" alt=""></button>
            <button class="delete"><img src="img/delete.png" class="op-btn" alt=""></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    </div>
</div>`;

  console.log("noted added");
  boxMain.insertAdjacentHTML("afterbegin", htmlData);

  // delete
  const notecd = boxMain.querySelector(".note-cd");

  const editBtn = boxMain.querySelector(".edit");
  const deleteBtn = boxMain.querySelector(".delete");
  const maindiv = boxMain.querySelector(".main");
  const textarea = boxMain.querySelector("textarea");

  deleteBtn.addEventListener("click", () => {
    notecd.remove();
    updateLSData();
  });

  //edit
  textarea.value = text;
  maindiv.innerHTML = text;

  editBtn.addEventListener("click", () => {
    maindiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("change", (event) => {
    const value = event.target.value;
    maindiv.innerHTML = value;

    updateLSData();
  });

  document.body.appendChild(boxMain);
};

//getting data back from local Storage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addbutton.addEventListener("click", () => {
  addNewNote();
});
