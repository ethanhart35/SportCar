
const logo = document.querySelectorAll('#car path');

//get the total path length of the logo

for (let i = 0; i<logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}