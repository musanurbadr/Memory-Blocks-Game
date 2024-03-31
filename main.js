


document.querySelector(".control-buttons span").onclick = function(){
    
    let yourName = prompt("What is you name ");

    if (yourName == null || yourName == ""){
        document.querySelectorAll(".name span").innerHTML = 'Unknow';
    }else{
        document.querySelector(".name span").innerHTML = yourName;
    }
    document.querySelector(".control-buttons").remove();
}; 

//Effect Duration
let duration = 1000; 
//Select Bloocks container
let blockscontainer = document.querySelector(".memory-game-block");
//Create Range of keys
let blocks = Array.from(blockscontainer.children);

let orderRange = Array.from(Array(blocks.length).keys());

shuffle(orderRange)
//Add order Css property to Game Blocks
blocks.forEach((block , index ) =>{

    block.style.order = orderRange[index] ;

    //Add Click Event 
    block.addEventListener('click' , function(){
        //Trigger The Flip Block 
        flipBlock(block);
    });
});


//Flip Block Funcion 
function flipBlock(selectedBolock){
    //Add Class is-flipped 
    selectedBolock.classList.add('is-flipped');

    //colect All Flipped cards
    let allFileppedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    //If There Two Selcted Blocks 
    if(allFileppedBlocks.length === 2){
        
        //Stop Clicking Function 
        stopClicking();

        //Check Mactched Block Function 
        checkMatchedBocks (allFileppedBlocks[0] , allFileppedBlocks[1]);

    }
}

//Stop Clicking Function 
function stopClicking (){
    // Add no clicking on main Container 
    blockscontainer.classList.add("no-clicking");

    setTimeout(() => {
        //renmove class NO clicking Afeter The durc
        blockscontainer.classList.remove('no-clicking');
    }, duration);  
}

//Check Matched Block 
function checkMatchedBocks(flipBlock , selectedBolock  ){
    let trisElement = document.querySelector('.tries span')
    if (flipBlock.dataset.technology === selectedBolock.dataset.technology ){
        flipBlock.classList.remove("is-flipped")
        selectedBolock.classList.remove("is-flipped")
        

        flipBlock.classList.add("has-match");
        selectedBolock.classList.add("has-match");
        
        document.getElementById('success').play();

        checkGameOver(); // Check if the game is over after each match

    }else{
        trisElement.innerHTML = parseInt(trisElement.innerHTML ) + 1 ; 

        setTimeout(( ) =>{
            flipBlock.classList.remove ('is-flipped');
            selectedBolock.classList.remove ('is-flipped');
        }, duration );

        document.getElementById('success').play();

        
    }
}
//Check if the game is over
function checkGameOver() {
    let matchedBlocks = document.querySelectorAll('.memory-game-block .has-match');
    if (matchedBlocks.length === blocks.length) {
        endGame1();
    }
}

//Function to display congratulatory message when the game ends
function endGame1(){
    // Create Popup Div
    let div = document.createElement("div");

    // Create Text Element
    let divText = document.createTextNode(`Congratulations! You have completed the game.`);

    // Append Child To the Div 
    div.appendChild(divText);

    // Add Class On Div 
    div.className = 'game-over-message';

    // Append To the Body 
    document.body.appendChild(div);
}
//shuffel function
function shuffle(array){
    //Seting Vars 
    let current = array.length,
    temp ,
    random;

    while (current > 0 ){

        //Get Random Number 
        random = Math.floor (Math.random()* current);

        //Decrease Length By One
        current-- ;

        //Save Element in Stash
        temp = array[current];

        //current element = Random Element 
        array[current] = array[random];

        array[random] = temp ; 

    }
    return array ; 
    
}