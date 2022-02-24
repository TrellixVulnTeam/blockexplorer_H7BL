//TODO обработать ошибку неправильного ввода
//TODO сделать так чтобы при заходе на index.html автоматически не отправлялся запрос
//get user data from search
import arrayAssembler from './array_assembler'

function addressEndpoint() {

    const form = document.getElementById('form')

    form.addEventListener('submit', function a(e) {
        e.preventDefault();
        var data = new FormData(this),
            user_search = data.get('user_search')
        console.log(user_search)
        if (user_search != null) {
            const address_endpoint = new Promise(async function (resolve, reject) {
                const response = await fetch('https://api.blockcypher.com/v1/btc/main/addrs/' + [user_search] + '?limit=9999')
                const data = await response.json()
                resolve(data)
            })
            address_endpoint.then(data => { //тут обработать ошибку Uncaught TypeError: Cannot read properties of undefined (reading 'then')
                const final_array = arrayAssembler(data)
                console.log(final_array)
            })
        }

    })

}




window.addressEndpoint = addressEndpoint

// window.addEventListener('load', getUserInput)

// function getUserInput() {
//     const params = (new URL(document.location)).searchParams
//     const user_search = params.get('user_search')
//     return user_search
// }

// const user_search = someFunc()
// console.log(user_search)

// if (user_search != null) {
//     const address_endpoint = new Promise(async function (resolve, reject) {
//         const response = await fetch('https://api.blockcypher.com/v1/btc/main/addrs/' + [user_search] + '?limit=9999')
//         const data = await response.json()
//         resolve(data)
//     })
// }

// export {someFunc}

