//TODO обработать ошибку неправильного ввода
//TODO сделать так чтобы при заходе на index.html автоматически не отправлялся запрос DONE
import { arrayAssembler } from './array_assembler'
import { showTx } from './show_tx.js'
import { showAddressContainer } from './show_address_container.js'

function addressEndpoint() {

    let form = document.getElementById('form')

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(this),
            user_search = data.get('user_search')
        if (user_search != null) {
            let address_endpoint = new Promise(async function (resolve, reject) {
                let response = await fetch('https://api.blockcypher.com/v1/btc/main/addrs/' + [user_search] + '?limit=9999') //обработать ошибку
                let data = await response.json()
                resolve(data)
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
    })
}

window.addressEndpoint = addressEndpoint