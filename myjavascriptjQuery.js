$('.caption-text').text('Magic!').css('background-color', 'orange');

$(".alert-btn").click(function() {
    alert("Hey there");
});

$(".alert-btn").click(function() {
    $(".alert-btn").text('changed');
});

$(".alert-btn").click(function() {
    var name = $('.name-input').val();
    alert(name);
    $('.name-input').val('');

});

