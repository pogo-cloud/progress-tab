let addButton = document.querySelector("#submit");

let taskType = document.querySelector("#task");
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    let todoCont = document.querySelector("#todo");
    let inProgress = document.querySelector("#inprogress");
    let doneCont = document.querySelector("#done");
    let cont1 = document.createElement("div");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("contenteditable", true);
    card.innerHTML = `Default Task`;
    cont1.appendChild(card);
    card.addEventListener("click", (event) => {

        if (card.innerHTML === "Default Task") {
            card.innerHTML = "";
        }
    })
    card.addEventListener("blur", (event) => {
        let parentCard = card.parentElement;
        if (card.innerHTML === "") {
            parentCard.remove();
        }
    })
    let select = document.createElement("select");
    select.innerHTML = `
    <option value="todo">TODO</option>
    <option value="inprogress">In-Progress</option>
    <option value="done">Done</option>
    `
    cont1.appendChild(select);
    todoCont.appendChild(cont1);
    select.addEventListener("change", (event) => {
            let parentCard = cont1.parentElement;
            if (parentCard) {
                parentCard.removeChild(cont1);
            }
            if (event.target.value === "todo") {
                todoCont.appendChild(cont1);
            } else if (event.target.value === "inprogress") {
                inProgress.appendChild(cont1);
            } else if (event.target.value === "done") {
                doneCont.appendChild(cont1);
            }
        })
        // cont1.appendChild(select);

    // console.log("tasking");
})