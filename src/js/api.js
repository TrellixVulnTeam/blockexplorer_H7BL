//TODO обработать ошибку неправильного ввода
//TODO сделать так чтобы при заходе на index.html автоматически не отправлялся запрос DONE
import { arrayAssembler } from './array_assembler'
import { showTx } from './show_tx.js'

function addressEndpoint() {

    const form = document.getElementById('form')

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(this),
            user_search = data.get('user_search')
        if (user_search != null) {
            const address_endpoint = new Promise(async function (resolve, reject) {
                const response = await fetch('https://api.blockcypher.com/v1/btc/main/addrs/' + [user_search] + '?limit=9999') //обработать ошибку
                const data = await response.json()
                resolve(data)
            })
            address_endpoint.then(data => {
                let show_tx = arrayAssembler(data) //returns a structured array
                showTx(show_tx)//shows transactions and pagination
            })
        }
    })
}

window.addressEndpoint = addressEndpoint