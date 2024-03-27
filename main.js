


document.querySelector(".control-buttons span").onclick = function(){
    
    let yourName = prompt("What is you name ");

    if (yourName == null || yourName == ""){
        document.querySelectorAll(".name span").innerHTML = 'Unknow';
    }else{
        document.querySelector(".name span").innerHTML = yourName;
    }
    document.querySelector(".control-buttons").remove();
}; 

let duration = 1000; 

let blockscontainer = document.querySelector(".memory-game-block");

let blocks = Array.from(blockscontainer.children);

let orderRagce = [...Array(blocks.length).keys()];

console.log(orderRagce);