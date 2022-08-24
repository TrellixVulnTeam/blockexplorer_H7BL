import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import bitcoin_logo from './img/bitcoin_logo.png'
import { addressEndpoint } from './js/api.js'

//TO DO GET error 429 слишком много запросов, зарегистрировать токен чтобы понимать свой лимит
//TO DO анимация загрузки страницы
//TO DO кнопка удалить из поиска
//TO DO возврат на главную страницу при ошибке DONE
//TO DO bitcoin network load продолжить разработку
//TO DO схему алгоритмов проекта
//TO DO header заполнить
//TO DO footer заполнить
//TO DO подробности транзакции hash link
//TO DO при переходе на страницу с транзакциями переместить поиск в хэдер DONE
//TO DO сбивается маржин-топ у мэйн контейнера если ввести длинный адрес
//TO DO перестала обрабатываться ошибка неправильного ввода (обработать через if?)
//TO DO сделать пошиск в шапке пошире, надписи на английском

console.log('app.js starts');

let logo = document.querySelector('#logo');
logo.insertAdjacentHTML('beforebegin', `<img src=${bitcoin_logo} alt="" width="30" 
height="30" class="d-inline-block align-text-top" style="cursor: pointer;">`);

document.querySelector('#headerSearch').style.visibility = "hidden";