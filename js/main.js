const bd = document.querySelector(".bd");
const tot = document.querySelector(".tot");
const win = document.querySelector(".win");
const btns = document.querySelectorAll(".btn");

tot.textContent = 0;
win.textContent = 0;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        const wb = (Number(bd.value) / 100) * Number(this.value)
        const hb = Number(bd.value) + wb
        tot.textContent = hb.toFixed(2);
        win.textContent = wb.toFixed(2);
    })
}
console.log(btns[0].value)