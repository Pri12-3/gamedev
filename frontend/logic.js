function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pown' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
            else {
                image.innerHTML = `${image.innerText} <img class='all-img' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()

//reset button
document.getElementById("reset-btn").addEventListener("click", function () {
    location.reload();
});
//moves 
function whosTurn(toggle) {
    // PAWN

    if (item.innerText == `${toggle}pawn`) {
        item.style.backgroundColor = 'blue';

        if (tog % 2 !== 0 && aup < 800) {
            // First move for white pawns
            if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
                if (document.getElementById(`b${a + 200}`).innerText.length == 0 && aup < 300) {
                    document.getElementById(`b${a + 200}`).style.backgroundColor = 'greenyellow';
                }
            }
        }
    }
}





