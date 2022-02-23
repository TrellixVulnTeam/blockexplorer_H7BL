import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery'
import logo from './img/bitcoin_logo.png'
import addressEndpoint from './js/api.js'
import arrayAssembler from './js/array_assembler'

const address_endpoint = addressEndpoint();

address_endpoint.then(data => { //тут обработать ошибку Uncaught TypeError: Cannot read properties of undefined (reading 'then')
	const a = arrayAssembler(data);
    console.log(a)
})







