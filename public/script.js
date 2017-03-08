var url = 'http://localhost:3000/';
var extr = document.getElementById('extr');
var ars = document.getElementById('ars');


window.onload = function () {
    var msg = 'a='+0.2+'&b='+2+'&k='+0.004;
    $.ajax({
        type: "POST",
        url: "test",
        data: msg,
        success: function(msg){
            console.log( JSON.parse(msg) );
            showResults(JSON.parse(msg) );
        },
        error: function(msg){
            console.log( "Возникла ощибка" + msg );
        }
    });
};



function sendForm() {
    var msg = $('#formx').serialize();
    $.ajax({
        type: "POST",
        url: "test",
        data: msg,
        success: function(msg){
            console.log( JSON.parse(msg) );
            showResults(JSON.parse(msg) );
        },
        error: function(msg){
            console.log( "Возникла ощибка" + msg );
        }
    });
}


function showResults(obj) {
    extr.innerHTML = 'Максимальный Y = '+obj.arY[obj.maxY].toFixed(3) + ' при X = ' +obj.arX[obj.maxY].toFixed(3) +'<br>';
    extr.innerHTML += 'Минимальный Y = '+obj.arY[obj.minY].toFixed(3) + ' при X = ' +obj.arX[obj.minY].toFixed(3);
    ars.innerHTML = '';
    var f = document.createDocumentFragment();
    var s = document.createElement('div');
    for (var i = 0; i < obj.arY.length; i++) {
        s.innerHTML += 'X = ' + obj.arX[i].toFixed(3) + '     Y = ' + obj.arY[i]+'<br>';
        f.appendChild(s);
    }
    ars.appendChild(f);
}