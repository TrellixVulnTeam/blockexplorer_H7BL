import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { addressEndpoint } from './js/api.js'

//TO DO почему-то первый запрос на сервер отрпавляется один раз, второй запрос 2 раза, третий три и тд DONE
//TO DO GET error 429 слишком много запросов, зарегистрировать токен чтобы понимать свой лимит
//TO DO при перезапросе адреса, открывает не первую страницу пагинации DONE
//TO DO npm QRCode
//TO DO остается старый адрес контейнер если нет транзацкий в блочейне или введены неверные данные
//TO DO обработка ошибочного запроса регулярным выражением google regex bitcoin address
//TO DO анимация загрузки страницы
//TO DO кнопка удалить из поиска

console.log('app.js starts')