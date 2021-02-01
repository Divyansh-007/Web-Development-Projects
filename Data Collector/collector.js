$('#roll').attr('placeholder','2KXX/XX/XXX');
$('#name').attr('placeholder','John Smith');
$('#marks').attr('placeholder','80');
var display = $('#display');

$('#btn').click(function(){
    let roll = $('#roll');
    let name = $('#name');
    let marks = $('#marks');

    let rollVal = roll.val();
    let nameVal = name.val();
    let marksVal = marks.val();

    if(rollVal === "" || nameVal === "" || marksVal === ""){
        alert('Please Enter All the Details');
    }else{
        let entry = '<div class="items">Roll no - <span class="highlight">' + rollVal + '</span> , <span class="highlight">' + nameVal + '</span> have got <span class="highlight">' + marksVal + '</span> marks.</div>';
        display.append(entry);

        roll.val("");
        name.val("");
        marks.val("");
    }
});