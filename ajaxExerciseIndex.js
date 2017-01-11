$('.btn').click(function() {
    $('.text').text('loading.....');

    $.ajax({
        type: "GET",
        url: "https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true",
        success: function(response) {
//            $('.text').text(JSON.stringify(response));
             $('.text').html('');

            for(var i = 0; i < response.data.children.length; i++) {
                var image = "<img src='" + response.data.children[i].data.thumbnail + "'/>";
                $('.text').append(image);
            }
        }
    });
});