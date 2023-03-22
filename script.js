const grid_item = document.querySelectorAll(".grid-item");
const reset_bttn = document.getElementById("reset-bttn");

let turn = 1;

function reset(){
    grid_item.forEach(item =>{
        item.classList.remove("x-turn");
        item.classList.remove("o-turn");
        turn = 1;
    })
}

reset_bttn.addEventListener('click', c =>{
    reset();
})

grid_item.forEach(item =>{
    item.addEventListener('click', c =>{
        if(turn % 2 == 0){
            item.classList.add("x-turn");
            turn++;
        }else{
            item.classList.add("o-turn");
            turn++;
        }
    })    
})