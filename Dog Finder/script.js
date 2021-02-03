var dropDown = $('#dog_breed');
var img = $('#dog_img');
var breed;
var allow = true;

$.get('https://dog.ceo/api/breeds/list/all', function(data){
    let dogBreed = data.message;
    for(let breed in dogBreed){
        dropDown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropDown.change(function(){
    allow = true;
});


function displayBreed(breed){
    let url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
    $('#dog_img img').remove();

    $.get(url,function(data){
        let imgURL = data.message;
        // img.append('<img src="' + imgURL + '" alt="' + breed + '">')
        img.attr('src',imgURL);
    });
}

$('#get_btn').click(function(e){
    e.preventDefault();

    if(allow){
        breed = dropDown.val();
        displayBreed(breed);
        allow = false;
    }
});

$('#next_btn').click(function(e){
    e.preventDefault();
    if(breed !== undefined){
        displayBreed(breed);
    }
});