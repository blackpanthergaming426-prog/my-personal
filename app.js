let boxex = document.querySelectorAll(".box")
let restbtn = document.querySelector(".reset-btn")
let msg = document.querySelector("#msg")
let msgcont=document.querySelector(".msg-cantainor")
let newgame=document.querySelector("#new-game")
let turnO = true;//playerX ,playerO



const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame =()=>{
     turnO = true;
     msgcont.classList.add("hide")
     boxenabled();
}

boxex.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
let boxdisabled = ()=>{
    for (box of boxex) {
        box.disabled=true;
        
    }
}
let boxenabled = ()=>{
    for (box of boxex) {
        box.disabled=false;
         box.innerText="";
    }
}
let playerO=prompt("Lolo apna namm Bata");
alert(" AGR O JETEGA TOH TERA NAME AYAGA WARNA TERA ABU KA NAME AYGA")
let playerX="Waqar"
const showwinner=(winner)=>{
let winnerName =winner==="O" ? playerO:playerX;
    msg.innerText=`Congratulation winner is ${winnerName}`;
    msgcont.classList.remove("hide")
    boxdisabled();
}

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxex[pattern[0]].innerText;
        let pos2 = boxex[pattern[1]].innerText;
            let pos3 = boxex[pattern[2]].innerText;
            if (pos1!=""&& pos2!= "" && pos3!="") {
                if(pos1===pos2&&pos2===pos3){
                    showwinner(pos1);
                }
            }
            
            
        }
    }
    newgame.addEventListener('click', resetgame);
    restbtn.addEventListener( 'click',resetgame);