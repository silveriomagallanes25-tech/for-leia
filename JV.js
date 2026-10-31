// Function to toggle the letter box open/closed when clicking the image
function toggleLetter() {
    const img = document.getElementById("letterImg");
    const box = document.getElementById("letterBox");

    box.classList.toggle("show");

    if (box.classList.contains("show")) {
        img.style.display = "none";
    } else {
        img.style.display = "block";
    }
}

// Automatically start playing audio on the first interaction
window.addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio && audio.paused) {
        audio.play().catch(error => {
            console.log("Autoplay prevented:", error);
        });
    }
}, { once: true });

// Convert 'No' button into a second 'Yes' button
function handleNo() {
    const noBtn = document.getElementById("noBtn");
    noBtn.innerText = "Yes";
    noBtn.onclick = handleYes; 
}

// Show 'Hooray!' card upon choosing 'Yes'
function handleYes() {
    document.getElementById("proposalCard").style.display = "none";
    document.getElementById("hoorayCard").style.display = "block";
}