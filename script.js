var w = document.getElementById('inp_1').value;
var h = document.getElementById('inp_2').value;
var result = w / ((h / 100) ** 2);

function BMI() {
    document.getElementById('text').innerHTML = ("ค่าดัชนีมวลกายของคุณ" + " " + result.toFixed(2));;
}
