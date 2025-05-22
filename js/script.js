'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

    //3.3 появление модального окошка
    const headerButtonEnter = document.querySelector('.header__button-enter');
    const modalApplication = document.querySelector(".applications");
    if (headerButtonEnter && modalApplication) {
        headerButtonEnter.addEventListener("click", () => {
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
            item.textContent = dataTitleTeachers[index];
        });
    }
});
//3.5 навигацонное меню
const headerMenu = document.querySelector('.header_menu');
if (headerMenu) {
    const headerList = headerMenu.querySelector('.menu');
    const menuData = {
        link1: {
            link: 'index.html',
            title: 'Главная',
        },
        link2: {
            link: '#',
            title: 'Расписание',
        },
        link3: {
            link: '#teachers',
            title: 'Преподователи',
        },
        link4: {
            link: '#',
            title: 'Личный кабинет',
        },
        link5: {
            link: '#trial',
            title: 'Пробное занятие',
        }
    }
    const createLink = (UrlLink, title) => {
        const link = `
        <li class="menu_item">
        <a href="${UrlLink}" class="menu_link">${title}</a></li>
        `
        return link;
    }
    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.UrlLink, link.title);
        headerList.insertAdjacentHTML('beforeend', linkIndex);
        console.log('навигационное меню создано с помощью Javascript!')

    }
}
//3.6 json вариант 2
const cardsCon = document.querySelector(".teachers_container");
if (cardsCon) {
    const cardList = cardsCon.querySelector(".teachers_wrapper");
    const apiUrl = "data.json";
    const createCard = (
        imageUrl,
        iconAlt,
        iconWidth,
        iconHeight,
        title,
        description
    ) => {
        const card = `
                <div class="teachers_card">
                <img class="teachers__img" src="${imageUrl}" alt="${iconAlt}" width="${iconWidth}" height="${iconHeight}">
                <p class="teachers__name">${title}</p>
                <p class="teachers__job">${description}</p>
            </div>
            `;
        return card;
    };
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);//данные 
            console.log(typeof data); // Тип полученных 

            data.forEach((item) => {
                const cardElement = createCard(
                    item.image,
                    item.iconAlt,
                    item.iconWidth,
                    item.iconHeight,
                    item.title,
                    item.description
                );
                cardList.insertAdjacentHTML("beforeend", cardElement);
            });
        })
        .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
        });
}
//3.6 задание 2
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
    setTimeout(() => {
        preloader.style.opacity ="0";
        preloader.style.visibility ="hidden";
        content.style.display ="block";
        preloader.remove();
    }, 3000);
}