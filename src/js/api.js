import { arrayAssembler } from './array_assembler'
import { showTx } from './show_tx.js'
import { showAddressContainer } from './show_address_container.js'

console.log('api.js starts')

document.forms.form.onsubmit = function (event) {
    event.preventDefault()

    let table_body_data = document.querySelector('#table-body')
    table_body_data.innerHTML = ''

    let pagination_data = document.querySelector('#pagination_wrapper')
    pagination_data.innerHTML = ''

    let pagination_down_data = document.querySelector('#pagination_wrapper_down')
    pagination_down_data.innerHTML = ''

    let user_search = document.forms.form.user_search.value

    let address_endpoint = new Promise(async function (resolve, reject) {
        let response = await fetch('https://api.blockcypher.com/v1/btc/main/addrs/' + [user_search] + '?limit=9999') //обработать ошибку
        if (response.ok) { // если HTTP-статус в диапазоне 200-299
            let data = await response.json()
            resolve(data)
        } else {
            document.querySelector('#not_found').insertAdjacentHTML('afterend', `
                <div class="container mt-3">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Ошибка ввода данных.</strong> Проверьте ваш адрес.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            `)
            let container = document.querySelector("#address_container_div_mt-3");
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }
    })
    address_endpoint.then(data => {
        let arr = data.txrefs
        let show_tx = arrayAssembler(arr) //returns a structured array
        showTx(show_tx)//shows transactions and pagination
        let user_address = data.address
        let user_balance = data.balance
        let user_tx = data.n_tx
        showAddressContainer(user_address, user_balance, user_tx)//shows address container information
    })
}