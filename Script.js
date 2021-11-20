// console.log(chat_block);

var active_onclick = document.getElementById('active_onclick');
var chat_block = active_onclick.getElementsByClassName('chat_block');

var chatbox = document.getElementsByClassName('chatbox');


for(var i = 0; i < chat_block.length; i++){
    chat_block[i].addEventListener("click", function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active','');
        this.className += " active";
    })
}