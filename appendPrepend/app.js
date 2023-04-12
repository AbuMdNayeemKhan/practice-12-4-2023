let myMenu = document.querySelector('#menu');

let myArray = ['Nayeem', 'Zioun', 'Tishat', 'Rohan', 'Anika'];

let domScript = myArray.map((x)=>{
    let li = document.createElement("li");
    li.textContent = x;
    return li;
});