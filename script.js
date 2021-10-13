let switcher = document.querySelector(".todo__header_icon_light"),
light = document.querySelectorAll(".light"),
backgroundHeader = document.querySelector(".main__header_light"),
lightColor = document.querySelectorAll("light-color"),
todoDark = document.querySelector("todo__container"),

//dark mode querys
todoBackground = document.querySelector("#todo__list_background"),
todoItemsColor = document.querySelector("#menu__items_color"),
btn = document.querySelector("#btn"),
footer = document.querySelector("#footer"),
background = document.querySelector("#black-background"),
todoForm = document.querySelector("#todo-form"),
todoInput = document.querySelector("#todo-content-input"),
icon = document.querySelector("#icon-change"),
checkmark = document.querySelectorAll(".checkmark"),
newArray = []


const togglerMode = () => {
    backgroundHeader.classList.toggle("main__header_dark")
    todoBackground.classList.toggle("dark-background")
    todoItemsColor.classList.toggle("dark-color")
    btn.classList.toggle("dark-background")
    footer.classList.toggle("dark-color")
    background.classList.toggle("dark-background-main")
    todoForm.classList.toggle("dark-background")
    todoInput.classList.toggle("dark-background")
    icon.classList.toggle("todo__header_icon_dark")
    checkmark.forEach(a => a.classList.toggle("checkmark-dark"))
}
switcher.addEventListener("click", togglerMode)
let checkedArray = [], unchekedArray = [];

//add the li to an array

const pushArray = (element, position) => {
    newArray.push([element,position])
}

//dinamic add of li
let counter = 0;
const addLi = () => {
    
    
    return function(x) {
        let newLi = document.createElement("li")
        newLi.classList.add(`todo__item`)
        newLi.setAttribute("id",`item-num${counter}`)
        newLi.innerHTML = `
            <input type="checkbox" name="todo radio" id="checkbox-item-${counter}" class="radio radio2">
            <label for="checkbox-item-${counter}" class="con">
             <span class="checkmark"></span>
            </label>
            <span class="todo__text">${x}</span>
            <i class="cross"><img src="images/icon-cross.svg" alt=""></i>
        `;
        pushArray(newLi, counter)
        todoItemsColor.appendChild(newLi)
        counter += 1
        document.querySelector("#todo-content-input").value = ""

    }
}

const sortedArrays = () => {
    checkedArray = [], unchekedArray = []
    for(let i = 0; i < counter; i++){
        if(newArray[i][0].querySelector(`#checkbox-item-${newArray[i][1]}`).checked == true){
            
           // console.log(newArray[i][0].querySelector(`#checkbox-item-${newArray[i][1]}`).checked == true)
            checkedArray.push(newArray[i])
            //sessionStorage.setItem("checkedList",checkedArray)
        }else if(newArray[i][0].querySelector(`#checkbox-item-${newArray[i][1]}`).checked == false){
           // console.log(newArray[i][0].querySelector(`#checkbox-item-${newArray[i][1]}`).checked == false)
            unchekedArray.push(newArray[i])
            
        }
    }
}

const grabText = () => {
    let todoInput = document.querySelector("#todo-content-input").value;
    if(todoInput == ""){
        alert("no ingrese el campo vacio")
        throw Error
    }else{
        return todoInput
    }
}

const countTotal = () => document.querySelector(".todo__counterleft").textContent = `${document.querySelectorAll(".radio2").length} `



const deleteSpecific = () => {
    let cross = document.querySelectorAll(".cross")
    cross.forEach(cross => {

        cross.addEventListener("click", function(){
            newArray.forEach(a => {
                if(a.indexOf(cross.parentElement.id) == 1){
                    newArray.splice(newArray.indexOf(a),1)
                    return a
                }
                if(a.indexOf(cross.parentElement.id) == 1){
                    newArray.splice(newArray.indexOf(a),1)
                    return a
                }
            })
            
            cross.parentElement.remove()
            countTotal()
            sortedArrays()
        })
        
    })
}


document.getElementById("first_radio").addEventListener("click", function(){
    compose(grabText,temp)()
    deleteSpecific()
    countTotal()
    sortedArrays()
    document.querySelectorAll(".radio2").forEach(e => {
        e.addEventListener("click", sortedArrays)
    })
})
todoInput.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode == 13) {
        
        compose(grabText,temp)()
        deleteSpecific()
        countTotal()
        sortedArrays()
        document.querySelectorAll(".radio2").forEach(e => {
            e.addEventListener("click", sortedArrays)
        })
       }
      //console.log(e)
})

const footerState = () => {
    for (let index = 0; index < 3; index++) {
        document.querySelector("#footer__state").children[index].classList.remove('active')
        
    }
    
}

document.querySelector("#show__active").addEventListener("click", function(){
    //unchekedArray todo__items
    todoItemsColor.innerHTML = ""
    for (let i = 0; i < unchekedArray.length; i++) {
        todoItemsColor.appendChild(unchekedArray[i][0])
    }
    footerState()
    document.querySelector("#footer__state").children[1].classList.toggle("active")
})


document.querySelector("#show__completed").addEventListener("click", function(){
    todoItemsColor.innerHTML = ""
    for (let i = 0; i < checkedArray.length; i++) {
        todoItemsColor.appendChild(checkedArray[i][0])
    }
    footerState()
    document.querySelector("#footer__state").children[2].classList.toggle("active")
})


document.querySelector("#all").addEventListener("click", function(){
    todoItemsColor.innerHTML = ""
    for (let i = 0; i < newArray.length; i++) {
        todoItemsColor.appendChild(newArray[i][0])
    }
    footerState()
    document.querySelector("#footer__state").children[0].classList.toggle("active")
})


btn.addEventListener("click", function(){
    todoItemsColor.innerHTML = ""
    checkedArray = []
    newArray = [...unchekedArray]
    for (let i = 0; i <= newArray.length-1; i++) {
        todoItemsColor.appendChild(newArray[i][0])
    }
    countTotal()
    sortedArrays()
})
const compose = (f, g) => (data) => g(f(data));
const temp = addLi()


