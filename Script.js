let string = " "
let buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach((button) => {     //Array.from(buttons)--> we can used only buttons also
    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector('.input').value = string

        }
        else if (e.target.innerHTML == "AC") {
            string = " "
            document.querySelector('.input').value = string
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector('.input').value = string

        }
    
        
    })
    
})


