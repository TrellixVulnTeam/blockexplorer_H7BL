//TODO обработать ошибку неправильного ввода
//TODO сделать так чтобы при заходе на index.html автоматически не отправлялся запрос
//get user data from search

function addressEndpoint() {

    window.addEventListener('load', getUserInput)

    function getUserInput() {
        const params = (new URL(document.location)).searchParams
        const user_search = params.get('user_search')
        return user_search
    }

    const user_search = getUserInput()

    if (user_search != null) {
        const address_endpoint = new Promise(async function (resolve, reject) {
            const response = await fetch('https://api.blockcypher.com/v1/btc/main/addrs/' + [user_search] + '?limit=9999')
            const data = await response.json()
            resolve(data)
        })
        return address_endpoint //https://www.blockcypher.com/dev/bitcoin/#address-endpoint
    }
}
export const address_endpoint = addressEndpoint()