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

let win = false;
let draw = false;
let player = '';

function winCombination(t1, t2, t3){
    if(grid_item[t1].classList.contains("x-turn")){
        if(grid_item[t2].classList.contains("x-turn")){
            if(grid_item[t3].classList.contains("x-turn")){
                win = true;
                player = '2';
            }
        }
    }

    if(grid_item[t1].classList.contains("o-turn")){
        if(grid_item[t2].classList.contains("o-turn")){
            if(grid_item[t3].classList.contains("o-turn")){
                win = true;
                player = '1';
            }
        }
    }

    if(win == true){
        setTimeout(t =>{
            alert(`player ${player} win`);
            reset();            
        }, 100)
        win = false;
    }
    else if(draw == true){
        setTimeout(t =>{
            alert('Draw');
            reset();            
        }, 100)
        draw = false;
    }
}

// check the player turns
grid_item.forEach(item =>{
    item.addEventListener('click', c =>{
        if(turn % 2 == 0 && !item.classList.contains("o-turn")){
            item.classList.add("x-turn");
            turn++;
        }
        else if(turn % 2 == 1 && !item.classList.contains("x-turn")){
            item.classList.add("o-turn");
            turn++;
        }
        setTimeout(t =>{
            if(win == false && turn == 9){
                draw = true;
            }
        }, 100)
    }) 
})


// check the game's winner by identifying the winning conditions
grid_item.forEach(item =>{
    item.addEventListener('click', c =>{
        // column win combinations
        winCombination(0, 1, 2);
        winCombination(3, 4, 5);
        winCombination(6, 7, 8);

        // row win combinations
        winCombination(0, 3, 6);
        winCombination(1, 4, 7);
        winCombination(2, 5, 8);

        // diagonal win combinations
        winCombination(2, 4, 6);
        winCombination(0, 4, 8);
    })
})
