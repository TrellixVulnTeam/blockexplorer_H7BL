import QRCode from 'qrcode'

console.log('show_address_container.js starts')

function showAddressContainer(user_address, user_balance, user_tx) {

    console.log('showAddressContainer() starts')

    if (!document.getElementById('address_container')) {
        document.getElementById('address_container_div').insertAdjacentHTML('afterend', `
            <div class="container mt-3">
                <div class="alert alert-light" id="address_container">   
                    <div id="grid_0">
                    <canvas id="qr_code"></canvas>
                    </div>
                    <div id="grid_1">
                        <div class="address">
                        <span class="copy_button" id="old">
                            <i class="far fa-copy"></i>
                        </span>
                        <span class="copy_button" id="new" hidden="hidden">
                            <i class="fas fa-copy"></i>
                        </span>
                        <span id="user_address"></span>
                        </div>
                        <span class="balance"><span style="color: #000000;">balance </span><b id="balance"></b></span>
                        <span class="numTx" >transactions <b id="number_of_tx"></b></span>
                    </div>
                </div>
            </div>
        `)
    }

    document.getElementById('user_address').innerHTML = user_address
    document.getElementById('number_of_tx').innerHTML = user_tx

    function ammountChange() { //ФОРМАТИРУЕТ СУММУ
        let a = String((user_balance / 100000000).toFixed(8))
        let b = a.replace(/(\d+)(\.\d+)?/g, function (c, b, a) {
            return b.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + (a ? a : "")
        })
        return b
    };

    document.getElementById('balance').innerHTML = ammountChange()

    var qr_code = document.getElementById('qr_code')

    QRCode.toCanvas(qr_code, user_address, { errorCorrectionLevel: 'H' }, function (error) {
        if (error) console.error(error)
        console.log('success!');
      })
}



export { showAddressContainer }