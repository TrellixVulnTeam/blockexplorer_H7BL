import { arrayAssembler } from './array_assembler'
import { showTx } from './show_tx.js'
import { showAddressContainer } from './show_address_container.js'

console.log('api.js starts');

let searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', event => {
    event.preventDefault();
    let userInput = document.querySelector('#userInput').value;
    runSearch(userInput);
});

let headerSearchButton = document.querySelector('#headerSearchButton');
headerSearchButton.addEventListener('click', event => {
    event.preventDefault();
    let headerUserInput = document.querySelector('#headerUserInput').value;
    runSearch(headerUserInput);
});

function runSearch(userInput) {

    console.log('runSearch starts')

    document.querySelector('#headerSearch').style.visibility = "visible";
    
    let address_endpoint = new Promise(async function (resolve, reject) {
        let response = await fetch('https://api.blockcypher.com/v1/btc/main/addrs/' + [userInput] + '?limit=9999'); //обработать ошибку
        if (response.ok) { // если HTTP-статус в диапазоне 200-299
            let data = await response.json();
            resolve(data);
            document.querySelector('#search_error').innerHTML = '';
            document.querySelector('#search_field').innerHTML = '';
            document.querySelector('#data_container').innerHTML = '';
        } else {
            if (!document.querySelector('#check_alert')) {
                document.querySelector('#search_error').insertAdjacentHTML('beforeend', `
                    <div class="container mt-3" id="alert">
                        <div class="alert alert-warning alert-dismissible fade show" role="alert" id='check_alert'>
                            <strong>Ошибка ввода данных.</strong> Проверьте ваш bitcoin адрес.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                `);
            }
         }
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
    
}