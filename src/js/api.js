import { arrayAssembler } from './array_assembler'
import { showTx } from './show_tx.js'
import { showAddressContainer } from './show_address_container.js'

console.log('api.js starts');

let searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', () => {
    let userInput = document.querySelector('#userInput').value;
    document.querySelector('#search_field').remove();
    runSearch(userInput);
});

let headerSearchButton = document.querySelector('#headerSearchButton');
headerSearchButton.addEventListener('click', () => {
    let headerUserInput = document.querySelector('#headerUserInput').value;
    runSearch(headerUserInput);
});

function runSearch(userInput) {

    document.querySelector('#headerSearch').style.visibility = "visible";

    let table_body_data = document.querySelector('#table-body');
    table_body_data.innerHTML = '';

    let pagination_data = document.querySelector('#pagination_wrapper');
    pagination_data.innerHTML = '';

    let pagination_down_data = document.querySelector('#pagination_wrapper_down');
    pagination_down_data.innerHTML = '';

    let address_container = document.querySelector('#address_container_div');
    address_container.innerHTML = '';

    

    let alert = document.querySelector('#alert');
    if (alert) {
        alert.innerHTML = '';
    }

    let address_endpoint = new Promise(async function (resolve, reject) {
        let response = await fetch('https://api.blockcypher.com/v1/btc/main/addrs/' + [userInput] + '?limit=9999'); //обработать ошибку
        if (response.ok) { // если HTTP-статус в диапазоне 200-299
            let data = await response.json();
            resolve(data);
        } else {

            let homepage_container = document.querySelector('#homepage_container');
            homepage_container.innerHTML = '';

            document.querySelector('#search_field').insertAdjacentHTML('afterend', `
                <div class="container mt-3" id="alert">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Ошибка ввода данных.</strong> Проверьте ваш bitcoin адрес.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            `);
        };
    });
    address_endpoint.then(data => {
        let arr = data.txrefs;
        let show_tx = arrayAssembler(arr); //returns a structured array
        showTx(show_tx); //shows transactions and pagination
        let user_address = data.address;
        let user_balance = data.balance;
        let user_tx = data.n_tx;
        showAddressContainer(user_address, user_balance, user_tx); //shows address container information
    }); 
    
};