'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

    //3.3 появление модального окошка
    const headerButtonEnter = document.querySelector('.header__button-enter');
    const modalApplication = document.querySelector(".applications");
    if (headerButtonEnter && modalApplication) {
    headerButtonEnter.addEventListener("click",() => {
        console.log('нажата кнопка войти');
        modalApplication.removeAttribute("hidden");
        const closeModalButton = document.querySelector(".application__close");
        closeModalButton.addEventListener("click", () => {
            modalApplication.setAttribute("hidden", true);
            
        });        
     });
    }
    window.addEventListener("click", (event) => {
        if (event.target === modalApplication) {
            modalApplication.setAttribute("hidden", true);
        }
    });  
    //3.4 появление описания
    const factsImg = document.querySelectorAll('.facts__img');
    factsImg.forEach((item, index) => {
        const factsText = document.querySelectorAll('.facts__description');
        item.addEventListener('mouseenter', () => {
            console.log("где текст?");
            item.style.opacity = 0.5;
            factsText[index].removeAttribute('hidden');
        });
            item.addEventListener('mouseleave', () => {
                item.style.opacity = 1;
                factsText[index].setAttribute('hidden', true);
            });
            });
            //3.4 появление имен преподавателей
            const teachersContainer = document.querySelector(".teachers_container");
            if (teachersContainer) {
                const dataTitleTeachers = [
                    "Мулярчик Наталья Николаевна",
                    "Николаев Роман Игоревич",
                    "Бариев Фаиль Нурфисович",
                ];
                const titleTeachers =
                teachersContainer.querySelectorAll(".teachers__name");
                titleTeachers.forEach((item, index) => {
                    item.textContent = dataTitleTeachers [index];
           });
    }
});
