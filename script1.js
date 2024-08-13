let addButton = document.querySelector("#submit");
let count = 1;
// let taskType = document.querySelector("#task");

let todoCont = document.querySelector("#todo");
addButton.addEventListener("click", (event) => {
    event.preventDefault();

    // let inProgress = document.querySelector("#inprogress");
    // let doneCont = document.querySelector("#done");
    // let cont1 = document.querySelector(".container");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("contenteditable", true);
    card.setAttribute("draggable", true);
    card.setAttribute("id", `card-${count++}`);
    card.style.cssText = `padding:5px;`
        // console.log(card.id);
    card.innerHTML = `Default Task`;
    todoCont.append(card);
    card.addEventListener("click", (event) => {
        event.preventDefault();
        if (card.innerHTML === "Default Task") {
            card.innerHTML = "";
        }
    })
    card.addEventListener("blur", (event) => {
        event.preventDefault();
        // let parentCard = card.parentElement;
        if (card.innerHTML === "") {
            card.remove();
        }
    })
    card.addEventListener("dragstart", (event) => {
        //event.preventDefault();
        let targetId = event.target.id;
        event.dataTransfer.setData("text", targetId);
        card.style.opacity = 0.2;
        console.log("card-dragstart");
    })
    card.addEventListener("dragend", (event) => {
        //event.preventDefault();
        card.style.opacity = 1;
        console.log("card-end");
    })
    let arr = ["dragover", "dragenter", "drop"];
    let alltasks = document.getElementsByClassName("column");
    for (let t of alltasks) {
        arr.forEach((value) => {
            t.addEventListener(value, (event) => {
                event.preventDefault();
                if (value === "dragover") {
                    event.preventDefault();
                }
                if (value === "drop") {
                    event.preventDefault();
                    let dropId = event.dataTransfer.getData("text");
                    let dropElement = document.getElementById(dropId);
                    t.append(dropElement);

                }
            })

        })
    }





    // cont1.appendChild(select);

    // console.log("tasking");
})