const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiCnt = document.getElementById('emojiContainer')
const pushBtn = document.getElementById("push-btn")

render(myEmojis)

function render(emojis){

    for (let i=0; i < emojis.length; i++) {
        const newSpan = document.createElement("span")
        newSpan.textContent = emojis[i];
        emojiCnt.append(newSpan)
    }
    
}

pushBtn.addEventListener('click', function(){ 
    const emojiInput = document.getElementById("emoji-input")
    if(emojiInput.value){
        myEmojis.push(emojiInput.value) //Add the new emoji
        emojiInput.value = ''; //Clear the input
        emojiCnt.innerHTML = ""; //Clears the container to start fresh with new emoji
        render(myEmojis)
    }
})


