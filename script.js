const complimentList = [
    "classy", "beautiful", "smart", "terrific", "hot", "awesome", "genius", "stunning", "wondrous", "perfect", "handsome", "pretty", "lovely", "luxurius", "happy", "nice", "good", "charming", "smoking hot", "delicious", "delicate", "adorable"
];

const complimentButton = document.getElementById("button")
const complimentText = document.getElementById("compliment")

function generateNewCompliment() {
    const newCompliment = complimentList[Math.floor(Math.random() * complimentList.length)];
    complimentText.innerText = newCompliment
    console.log(newCompliment)
}

complimentButton.addEventListener("click", generateNewCompliment)