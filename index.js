
const me = {
    firstName: 'Loïc',
    lastName: 'Queval',
    usualName: 'Moreno',
    address: '1 rue Pierre Dac',
    cityCode: 92110,
    city: 'Clichy',
    telephoneNumber: '06 38 86 99 73',
    mail: 'queval.loic@gmail.com',
    birthDay: '11 juin 1997',
    gender: 'H',
    studies: 'mes études',
};

const myName = document.querySelector('h1');
myName.textContent = me.lastName + " " + me.usualName + " " + me.firstName;

const info1 = document.querySelector('#infos1');
info1.textContent = me.telephoneNumber;

const info2 = document.querySelector('#infos2');
info2.textContent = me.address + ' ' + me.cityCode + ' ' + me.city;

const info3 = document.querySelector('#infos3');
info3.textContent = me.mail;

const info4 = document.querySelector('#infos4');
info4.textContent = me.birthDay;

const info5 = document.querySelector('#infos5');

function sayGender(personParameter) {
    if (personParameter.gender === 'H')
        info5.textContent = 'Homme';
}

sayGender(me);

const myDate = document.querySelector('#myDate');
myDate.innerText = new Date().toLocaleDateString();
console.log(myDate);
