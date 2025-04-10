'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

    //3.2
    const headerButtonEnter = document.querySelector('.header__button-enter');
    headerButtonEnter.addEventListener("click",() => {
        console.log('нажата кнопка войти');
     });
});
