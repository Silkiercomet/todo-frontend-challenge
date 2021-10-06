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
cross = document.querySelector(".cross")

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

//dinamic add of li

const addLi = () => {
    let counter = 0;
    return function(x) {
        let newLi = document.createElement("li")
        newLi.classList.add("todo__item")
        newLi.innerHTML = `
            <input type="checkbox" name="todo radio" id="checkbox-item-${counter}" class="radio">
            <label for="checkbox-item-${counter}" class="con">
             <span class="checkmark"></span>
            </label>
            <span class="todo__text">${x}</span>
            <i class="cross"><img src="images/icon-cross.svg" alt=""></i>
        `;
        todoItemsColor.appendChild(newLi)
        counter += 1
        console.log(counter)
    }
}

const grabText = () => {
    let todoInput = document.querySelector("#todo-content-input").value;
    if(todoInput == ""){
        alert("no ingrese el campo vacio")
    }else{
        return todoInput
    }
}

cross.addEventListener("click", function(){
    cross.parentElement.remove()
})

document.getElementById("first_radio").addEventListener("click", function(){
    compose(grabText,temp)()
})
todoInput.addEventListener("keyup", e => {
    if ( e.keyCode == 13) {
        e.preventDefault();
        compose(grabText,temp)()
       }
       console.log("worked")
})
const compose = (f, g) => (data) => g(f(data));
const temp = addLi()