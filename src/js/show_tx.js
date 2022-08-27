//process transactions list and pagination
import $ from 'jquery'

console.log('show_tx.js starts')

document.querySelector('#data_container').insertAdjacentHTML('afterend', `
<span id="tx_container_div"></span>`);

if (!document.querySelector('#table-body')) {
  document.querySelector('#data_container').insertAdjacentHTML('afterend', `
    <div class="pagination_container">
      <div id="pagination_wrapper" class="pagination_wrapper"></div>
    </div>
    <div class="container mt-3" id="table-body"></div>
    <div class="pagination_container">
      <div id="pagination_wrapper_down" class="pagination_wrapper"></div>
    </div>
  `)
}

function showTx(show_tx) {

  console.log('show_tx() starts')

  let state = {
    'querySet': show_tx,

    'page': 1,
    'rows': 50,
    'window': 7,
  }

  buildTable()

  function pagination(querySet, page, rows) {

    let trimStart = (page - 1) * rows
    let trimEnd = trimStart + rows

    let trimmedData = querySet.slice(trimStart, trimEnd)

    let pages = Math.ceil(querySet.length / rows);

    return {
      'querySet': trimmedData,
      'pages': pages,
    }
  }

  function pageButtons(pages) {
    let wrapper = document.querySelector('#pagination_wrapper')
    let wrapper_down = document.querySelector('#pagination_wrapper_down')

    wrapper.innerHTML = ``
    wrapper_down.innerHTML = ``

    let maxLeft = (state.page - Math.floor(state.window / 2))
    let maxRight = (state.page + Math.floor(state.window / 2))

    if (maxLeft < 1) {
      maxLeft = 1
      maxRight = state.window
    }

    if (maxRight > pages) {
      maxLeft = pages - (state.window - 1)

      if (maxLeft < 1) {
        maxLeft = 1
      }
      maxRight = pages
    }

    for (let page = maxLeft; page <= maxRight; page++) {
      wrapper.innerHTML += `<button value=${page} class="page page-link" style="border-radius: 0px; border: 0; color: #000000">${page}</button>`
      wrapper_down.innerHTML += `<button value=${page} class="page page-link" style="border-radius: 0px; border: 0; color: #000000" onclick="window.scroll(0,0);">${page}</button>`

    }

    wrapper.innerHTML = `<button value=${1} class="page page-link" style="border-radius: 4px 0 0 4px; border: 0; color: #000000">&#171;</button>` + wrapper.innerHTML
    wrapper_down.innerHTML = `<button value=${1} class="page page-link" style="border-radius: 4px 0 0 4px; border: 0; color: #000000" onclick="window.scroll(0,0);">&#171;</button>` + wrapper_down.innerHTML

    wrapper.innerHTML += `<button value=${pages} class="page page-link" style="border-radius: 0 4px 4px 0; border: 0; color: #000000">&#187;</button>`
    wrapper_down.innerHTML += `<button value=${pages} class="page page-link" style="border-radius: 0 4px 4px 0; border: 0; color: #000000" onclick="window.scroll(0,0);">&#187;</button>`

    $('.page').on('click', function () {
      $('#table-body').empty()

      state.page = Number($(this).val())

      buildTable()
    })

  }

  function buildTable() {

    console.log('buildTable()')

    let table = $('#table-body')

    let data = pagination(state.querySet, state.page, state.rows)
    let myList = data.querySet
    console.log(myList)

    for (let i in myList) {
      //Keep in mind we are using "Template Litterals to create rows"


      function dateChange() { //ФОРМАРИТУЕТ ДАТУ TODO ИСПРАВИТЬ ВРЕМЯ И ДАТУ, НЕ СООТВЕТСТВУЕТ СТОРОННИМ РЕСУРСАМ
        let b = myList[i][1].replace(/[T\Z\-]/gi, ' '); //удаляет ненужный мусор из строки с датой
        let c = b.substr(8, 2) + b.substr(4, 4) + b.substr(0, 4) + b.substr(10, 10); //расставляет символы в правильном порядке
        return c;
      };

      function ammountChange() { //ФОРМАТИРУЕТ СУММУ
        let a = String((myList[i][2] / 100000000).toFixed(8));
        let b = a.replace(/(\d+)(\.\d+)?/g, function (c, b, a) {
          return b.replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + (a ? a : "")
        })
        return b
      };

      if (myList[i][3] < 300) { //ЕСЛИ ПОДТВЕРЖДЕНИЙ МЕНЬШЕ ЧЕМ 6
        if (myList[i][2] < 0) {
          var row = `
          <div class="h-10 alert alert-warning" style="box-shadow: 0 0 5px rgba(0,0,0,0.5);">
            <span class="tx_date">NEW ${dateChange()}</span>
            <span id="tx_ammount" class="tx_ammount_minus">${ammountChange()}</span>
            <span id="tx_hash" class="tx_hash"><a href="#" class="hash_link"> ${myList[i][0]}</a></span>
          </div>
           `;
        } else {
          var row = `
          <div class="h-10 alert alert-warning" style="box-shadow: 0 0 5px rgba(0,0,0,0.5);">
            <span class="tx_date">NEW ${dateChange()}</span>
            <span id="tx_ammount" class="tx_ammount">+${ammountChange()}</span>
            <span id="tx_hash" class="tx_hash"><a href="#" class="hash_link"> ${myList[i][0]}</a></span>
          </div>
           `;
        }
      } else if (myList[i][2] < 0) { //ЕСЛИ МИНУС
        var row = `
          <div class="alert alert-light" style="box-shadow: 0 0 5px rgba(0,0,0,0.5);">
            <span class="tx_date">${dateChange()}</span>
            <span id="tx_ammount" class="tx_ammount_minus">${ammountChange()}</span>
            <span id="tx_hash" class="tx_hash"><a href="#" class="hash_link"> ${myList[i][0]}</a></span>
          </div>
           `;
      } else { //ИНАЧЕ СТАНДАРНЫЙ СТИЛЬ
        var row = `
          <div class="alert alert-light" style="box-shadow: 0 0 5px rgba(0,0,0,0.5);">
            <span class="tx_date">${dateChange()}</span>
            <span id="tx_ammount" class="tx_ammount">+${ammountChange()}</span>
            <span id="tx_hash" class="tx_hash"><a href="#" class="hash_link"> ${myList[i][0]}</a></span>
          </div>
           `;
      }

      table.append(row)
    }

    pageButtons(data.pages)

  }

}

export { showTx }
