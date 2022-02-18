const complimentList = [
"classy", "beautiful", "smart", "terrific", "hot", "awesome", "genius", "stunning", "wondrous", "perfect", "handsome", "pretty", "lovely", "luxurious", "happy", "nice", "good", "charming", "smoking hot", "delicious", "delicate", "adorable", "healthy", "cute", "generous", "strong", "generous", "brave", "lucky", "elegant", "powerful"
];

const complimentButton = document.getElementById("button")
const complimentText = document.getElementById("compliment")

function generateNewCompliment() {
    const newCompliment = complimentList[Math.floor(Math.random() * complimentList.length)];
    complimentText.innerText = newCompliment
    console.log(newCompliment)
}

window.addEventListener("load", generateNewCompliment)

complimentButton.addEventListener("click", generateNewCompliment)