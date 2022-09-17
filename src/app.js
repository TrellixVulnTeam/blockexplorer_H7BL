import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import bitcoin_logo from "./img/bitcoin_logo.png";
import { addressEndpoint } from "./js/api.js";
import { runSearch } from "./js/api.js";

//TO DO GET error 429 слишком много запросов, зарегистрировать токен чтобы понимать свой лимит
//TO DO анимация загрузки страницы
//TO DO кнопка удалить из поиска DONE
//TO DO возврат на главную страницу при ошибке DONE
//TO DO bitcoin network load продолжить разработку ЧТО ЭТО?
//TO DO схему алгоритмов проекта
//TO DO header заполнить DONE
//TO DO footer заполнить DONE
//TO DO подробности транзакции hash link ЧТО ЭТО ПИШИ ПОДРОБНЕЕ?
//TO DO при переходе на страницу с транзакциями переместить поиск в хэдер DONE
//TO DO сбивается маржин-топ у мэйн контейнера если ввести длинный адрес DONE
//TO DO перестала обрабатываться ошибка неправильного ввода (обработать через if?) DONE
//TO DO заполнить футер, подготовка к релизу
//TO DO переключение на USD в баллансе (в виде стелочек)


console.log("app.js starts");

let logo = document.querySelector("#logo");
logo.insertAdjacentHTML(
  "afterbegin",
  `
    <img src=${bitcoin_logo} width="30" height="30" class="d-inline-block 
    align-text-top" style="cursor: pointer;">
  `
);

// document.querySelector('#headerSearch').style.visibility = "hidden";

let searchButton = document.querySelector("#searchButton");
let headerSearchButton = document.querySelector("#headerSearchButton");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  let userInput = document.querySelector("#userInput").value;
  runSearch(userInput);
});
