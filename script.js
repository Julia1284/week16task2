
document.querySelector('.marka_select').onchange = function(){
    let select = document.querySelector ('.marka_select').value;
    //создаем массив с марками машин
    let markaRenault = [
        [1200000, 'Duster'],
        [1000000, 'Logan'],
        [900000, 'Sandero Stepway']
    ]
    let markaPeugeot = [
        [1700000, '2008'],
        [2200000, '3008'],
        [2430000, '5008']
    ]
    let values = []; 
    let model = document.querySelector ('.model_select');
    model.innerHTML = ''
    //проверяем, если марка не выбрана, то следущая строчка не активна, и функция не работает
    if (select == 0){
        model.disabled = true;
        return;
    }
    // если выбран Рено, то в массив values добавляется markaRenualt, перед эти он очищается
    else if (select == 1) {
        values = [];
        values = [...markaRenault];
    }
    // если выбран Пежо, то в массив values добавляется markaPeugeot, перед эти он очищается
    else if (select == 2) {
        values = [];
        values = [...markaPeugeot]   
    }
    // строчка модели становится активной
    model.disabled = false;
    //добавляем опции
    for (val of values){
        let option = document.createElement ('option');
        option.value = val[0];
        option.text = val[1]; 
        model.appendChild (option);
    }
}
//функция расчеты цены
document.querySelector ('.calc_price').onclick = function(event){
    event.preventDefault()
    let select = document.querySelector ('.marka_select').value;
    if (select == 0){
        document.querySelector ('.result').innerHTML = '';
        return
    }
    else{
        let modelPrice = document.querySelector ('.model_select').value;
        let yearPrice = document.querySelector ('.year_select').value;
        let mileage = document.querySelector ('.mileage').value;
        let mileagePrice = 0
    if (mileage <= 1000){
            mileagePrice = 150000;
        }
        
    else if (mileage > 1000 && mileage < 100000 ){
            mileagePrice = 75000;
        }
    // если пробег не заполнен, то выходит ошибка и функция прекращает работать
    if (mileage === ''){
            document.querySelector ('.mileageError').innerHTML = 'Заполните пробег';
            return
        }
    else {
            document.querySelector ('.mileageError').innerHTML = '';
        }

        let controlPrice = document.querySelectorAll ('input[name="control"]:checked')[0].value;
        console.log (controlPrice)
        let price =  Number(modelPrice) + Number(yearPrice) + Number(controlPrice) + Number (mileagePrice);
        document.querySelector ('.result').innerHTML = `Цена: ${price} рублей`;
    }
}


