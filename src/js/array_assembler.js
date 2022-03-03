//process raw array
function arrayAssembler(arr) {

    let arr2 = []
    //ПРИВОДИТ arr[i].value К ОТРИЦАТЕЛЬНЫМ ЗНАЧЕНИЯМ И ДОБАВЛЯЕТ ТОЛЬКО НУЖНОЕ В arr2 ИЗ arr
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].tx_output_n < 0) {
            let newValue = 0 - arr[i].value
            arr2.push([arr[i].tx_hash, arr[i].confirmed, newValue, arr[i].confirmations]); //добавлять новое только в конец
        } else {
            arr2.push([arr[i].tx_hash, arr[i].confirmed, arr[i].value, arr[i].confirmations]); //добавлять новое только в конец
        }
    }

    //НАХОДИТ ОДИНАКОВЫЕ tx_hash И СУММИРУЕТ ИХ value
    let arr3 = []

    arr2.reduce(function (new_arr, old_arr) {
        if (!new_arr[old_arr[0]]) {
            new_arr[old_arr[0]] = Object.assign({}, old_arr)
            arr3.push(new_arr[old_arr[0]])
        }
        else {
            new_arr[old_arr[0]][2] += old_arr[2]
        }
        return new_arr;
    }, [])

    return arr3

}

export { arrayAssembler }

