
$("form").submit(function (e) {
    e.preventDefault()
    let weight = $("#weight").val()
    let height = $("#height").val()
    const imc = (weight / ((height * height) / 10000))
    $("#results").text(`${imc}`)
    if (imc < 18.6) {
        $('p:nth-of-type(1)').css('color', 'red')
    }
    else if (imc >= 18.6 && imc <= 24.9) {
        $('p:nth-of-type(1)').css('color', 'red')
    }
    else {
        $('p:nth-of-type(3)').css('color', 'red')
    }
});

