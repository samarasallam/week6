console.log("Homework week 6");

$(document).ready( function (){
    $('#btnClick').click(function() {
    let resultElements = $('#hyfResults');

    $.ajax( {

            url: 'https://api.github.com/orgs/HackYourFuture/repos',
            method: 'get',
            dataType: 'json',
            success: function(data) {
                data.forEach(function(repo){
                    resultElements.append('<p>' + repo.name + '</p>');
                });
            }
        });
    });
});

