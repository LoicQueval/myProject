import {me} from './data.js'

me.forEach((value,key)=>{
    console.log(key,value, document.querySelector(key));
    document.querySelector(key).textContent = value;
});

const today = document.querySelector('#actual-date');
today.innerText = new Date().toLocaleDateString();
