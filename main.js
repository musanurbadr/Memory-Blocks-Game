


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