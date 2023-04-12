let languageClass = document.querySelector("#language");
let languageList = ["Html", "css", "javascript", "php", "go", "java", "Python"];

// let fragment = document.createDocumentFragment();

// languageList.forEach((language)=>{
//     let li = document.createElement("li");
//     li.textContent = language;
//     fragment.appendChild(li);
// });

// languageClass.appendChild(fragment);

let myFragment = document.createDocumentFragment();

languageList.forEach((language)=>{
    let li = document.createElement('li');
    li.textContent = language;
    myFragment.appendChild(li);
});

languageClass.appendChild(myFragment);