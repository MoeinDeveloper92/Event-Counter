const eles = document.querySelectorAll('div')

const btnClicker = (e) => {
    const ele = e.target;
    ele.counter++;
    ele.textContent = `Clicked : ${ele.counter}`
}


eles.forEach((el) => {
    el.addEventListener('click', btnClicker)
    el.textContent = "Clicked : 0"
    el.counter = 0

})