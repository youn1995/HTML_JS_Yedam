var jsonData = [{ "id": 1, "first_name": "Dalton", "last_name": "Macellar", "email": "dmacellar0@webs.com", "gender": "Male" },
{ "id": 2, "first_name": "Kathrine", "last_name": "Goodlake", "email": "kgoodlake1@google.com.au", "gender": "Female" },
{ "id": 3, "first_name": "Cosmo", "last_name": "Arnoll", "email": "carnoll2@seesaa.net", "gender": "Male" },
{ "id": 4, "first_name": "Hyacinthe", "last_name": "Bonellie", "email": "hbonellie3@tinyurl.com", "gender": "Female" },
{ "id": 5, "first_name": "Ozzie", "last_name": "Camber", "email": "ocamber4@ucsd.edu", "gender": "Male" },
{ "id": 6, "first_name": "Tadeas", "last_name": "Larcier", "email": "tlarcier5@independent.co.uk", "gender": "Male" },
{ "id": 7, "first_name": "Forrest", "last_name": "Bourhill", "email": "fbourhill6@ucsd.edu", "gender": "Male" },
{ "id": 8, "first_name": "Minetta", "last_name": "Kupka", "email": "mkupka7@nyu.edu", "gender": "Female" },
{ "id": 9, "first_name": "Guido", "last_name": "Rolfo", "email": "grolfo8@chicagotribune.com", "gender": "Male" },
{ "id": 10, "first_name": "Trixi", "last_name": "Anespie", "email": "tanespie9@wikia.com", "gender": "Female" },
{ "id": 11, "first_name": "Noland", "last_name": "Vasyagin", "email": "nvasyagina@lycos.com", "gender": "Male" },
{ "id": 12, "first_name": "Rhiamon", "last_name": "Sive", "email": "rsiveb@google.es", "gender": "Female" },
{ "id": 13, "first_name": "Nikolaos", "last_name": "Pollins", "email": "npollinsc@gravatar.com", "gender": "Male" },
{ "id": 14, "first_name": "Lennie", "last_name": "Tench", "email": "ltenchd@usatoday.com", "gender": "Male" },
{ "id": 15, "first_name": "Crystal", "last_name": "Bompass", "email": "cbompasse@chronoengine.com", "gender": "Female" }];

var titles = ['id', 'first_name', 'last_name', 'email', 'gender'];

$(document).ready(function () {
    var $table = $('<table />').attr('border', '1');
    var $tr = $('<tr />');
    titles.forEach(function (o) {
        $tr.append($('<th />').text(o))
    });
    $table.append($tr)
    //데이터영역
    jsonData.forEach(function (o, i, a) {
        var $tr = $('<tr />').mouseenter(mouseenterFunc).mouseleave(mouseleaveFunc);

        titles.forEach(function (f) {
            $tr.append($('<td />').text(o[f]))
        });
        $tr.append($('<td />').html('<button>click</button>').click(btnFunc));
        $table.append($tr)
    })
    $('#show').append($table);
});

function mouseenterFunc(){
    $(this).css('background', 'yellow');
}

function mouseleaveFunc(){
    $(this).css('background', '');
}

function btnFunc(){
    // $(this).parent().remove();
    $(this).parent().hide();
}