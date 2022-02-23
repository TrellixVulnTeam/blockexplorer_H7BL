import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery'
import logo from './img/bitcoin_logo.png'
import address_endpoint from './js/api.js'
import arrayAssembler from './js/array_assembler'

address_endpoint.then(data => {
	const a = arrayAssembler(data);
    console.log(a)
})







