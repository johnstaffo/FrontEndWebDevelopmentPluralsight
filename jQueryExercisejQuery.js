$(".alert-btn").click(function() {
    //var name = $('.user-input').val();
    //$(".user-text").text(name);
    $(".user-text").text($('.user-input').val());
    $('.user-input').val('');
});

