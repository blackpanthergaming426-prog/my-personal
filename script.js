let mode = document.getElementById("mode")
let body =document.querySelector("body")
let currmode ="light"
mode.addEventListener('click', () => {
    if (currmode==="light") {
        currmode =  "dark";
        body.classList.remove("light")
        body.classList.add("dark")
    }
    else{
        currmode="light"
        body.classList.remove("dark")
        body.classList.add("light")
    }
    
    
    console.log(currmode );
    
})


    