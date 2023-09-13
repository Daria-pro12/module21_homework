let myName = localStorage.getItem('myName');
let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};
let currentDate = new Date().toLocaleString('ru-Ru', options);
let myDate = localStorage.getItem('myDate');

if (myName === null) {
    let name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem('myName', name);
    localStorage.setItem('myDate', currentDate);
} else {
    alert('Добрый день, ' + myName + '! Давно не виделись. В последний раз вы были у нас ' + myDate);
    localStorage.setItem('myDate', currentDate);
}