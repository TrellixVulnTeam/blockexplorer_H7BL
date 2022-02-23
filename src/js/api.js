//TODO обработать ошибку неправильного ввода
//TODO сделать так чтобы при заходе на index.html автоматически не отправлялся запрос
//get user data from search
window.addEventListener('load', getUserInput)

function getUserInput() {
    const params = (new URL(document.location)).searchParams
    const user_search = params.get('user_search')
    return user_search
}

const user_search = getUserInput()

const address_endpoint_url = 'https://api.blockcypher.com/v1/btc/main/addrs/' + [user_search] + '?limit=9999'

//get transaction array from server
function addressEndpoint(method, address_endpoint_url) {
    return fetch(address_endpoint_url).then(response => {
        return response.json()
    })
}

const address_endpoint = addressEndpoint('GET', address_endpoint_url)

export default address_endpoint //https://www.blockcypher.com/dev/bitcoin/#address-endpoint


