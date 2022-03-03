import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery'
import logo from './img/bitcoin_logo.png'
import { addressEndpoint } from './js/api.js'

//TO DO почему-то первый запрос на сервер отрпавляется один раз, второй запрос 2 раза, третий три и тд
//TO DO GET error 429 слишком много запросов, зарегистрировать токен чтобы понимать свой лимит