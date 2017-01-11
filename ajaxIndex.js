$('btn').click(function() {
    $('.text').text('loading.....');

    $.ajax({
        type:"GET",
        url:"https://api.meetup.com/2/cities",
        success: function(data) {
            $('.text').text(JSON.stringify(data));
    },
        dataType : 'jsonp',
    });
});


$.ajax({
    type: "POST",
    url: prequalInput.action,
    data: postData,
    dataType: "json",
    success: prequalInput.success,
    error: prequalInput.error
});
