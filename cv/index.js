import {me} from './data.js'


console.log(document);

me.forEach((value,key)=>{
    console.log(key,value, document.querySelector(key));
    document.querySelector(key).textContent = value;
});



/*ReplaceContenue('h1',me.lastName + ' ' + me.usualName + ' ' + me.firstName);
ReplaceContenue('.intro', me.intro);

function ReplaceContenue(selector, data) {
    document.querySelector(selector).textContent = data
}
*/

const today = document.querySelector('#actual-date');
today.innerText = new Date().toLocaleDateString();

