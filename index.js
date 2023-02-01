const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiCnt = document.getElementById('emojiContainer')
const pushBtn = document.getElementById("push-btn")
const emojiInput = document.getElementById("emoji-input")

for (let i=0; i < myEmojis.length; i++) {
    const newSpan = document.createElement("span")
    newSpan.textContent += myEmojis[i];
    emojiCnt.append(newSpan)
}

pushBtn.addEventListener('click', function(){
    console.log(emojiInput.value)
})


