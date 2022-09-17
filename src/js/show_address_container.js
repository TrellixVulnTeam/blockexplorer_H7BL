import QRCode from "qrcode";

console.log("show_address_container.js starts");

function showAddressContainer(user_address, user_balance, user_tx) {
  console.log("showAddressContainer() starts");

  document.querySelector("#data_container").innerHTML = "";

  if (!document.querySelector("#address_container")) {
    document.querySelector("#data_container").insertAdjacentHTML(
      "beforeend",
      `
            <div class="container mt-3" id="address_container_div_mt-3">
                <div class="alert alert-light" id="address_container">
                        <div class="first_block">
                          <canvas id="qr_code"></canvas>
                        </div>

                        <div class="second_block">
                          <div class="address_container">
                            <div>
                              <span id="copy_button_old" style="cursor: pointer;"><i class="far fa-copy"></i></span>
                            </div>  
                            <div>
                              <span id="user_address"></span>
                            </div>
                          </div>
                          <div class="balance_container">
                            <div>
                              <span id="copy_button_old" style="cursor: pointer;"><i class="fa-solid fa-dollar-sign"></i></span>
                              <span id="copy_button_old" style="cursor: pointer;"><i class="fa-solid fa-bitcoin-sign"></i></span>
                            </div>  
                            <div>
                              <span class="balance"><span style="color: #000000;">balance </span><b id="balance"></b></span>
                            </div>
                          </div>
                          <div class="transactions_container">
                            <div>
                              <span class="numTx" >transactions <b id="number_of_tx"></b></span>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    );
  }

  document.querySelector("#user_address").innerHTML = user_address;
  document.querySelector("#number_of_tx").innerHTML = user_tx;

  function ammountChange() {
    //ФОРМАТИРУЕТ СУММУ
    let a = String((user_balance / 100000000).toFixed(8));
    let b = a.replace(/(\d+)(\.\d+)?/g, function (c, b, a) {
      return b.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + (a ? a : "");
    });
    return b;
  }

  document.querySelector("#balance").innerHTML = ammountChange();

  let qr_code = document.querySelector("#qr_code");

  QRCode.toCanvas(qr_code, user_address, { errorCorrectionLevel: "M" });

  let copy_button = document.querySelector("#copy_button_old");
  copy_button.innerHTML = `<i class="far fa-copy"></i>`;

  copy_button.addEventListener('click', () => {
    copy_button.innerHTML = `<i class="fas fa-copy"></i>`;
    navigator.clipboard.writeText(user_address);
  })
}

export { showAddressContainer };
