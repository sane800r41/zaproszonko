let leftPos = 0
let bottomPos = 0
document.getElementById('yessir').addEventListener('click', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'bardzo dobrzeeee! odeślij SS 💖'; // Set the message
    messageElement.style.display = 'block'; // Make it visible
});
document.getElementById('nooo').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
    document.getElementById("nooo").innerHTML = "Spróbuj ponownie...";
})
document.getElementById('nooo').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
    document.getElementById("nooo").innerHTML = "Spróbuj ponownie...";
})