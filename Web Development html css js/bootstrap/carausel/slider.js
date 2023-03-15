let car = document.querySelector('.carousel');
console.log(car)
let isDragstart = false;

const dstart = ()=>{
    isDragstart = true;

}

const dragging = (e)=>{
    if(!isDragstart) return;
    car.scrollLeft = e.pageX;
    console.log(car.scrollLeft)
    e.preventDefault();
}

car.addEventListener('mousedown',dstart);
car.addEventListener('mousemove',dragging);