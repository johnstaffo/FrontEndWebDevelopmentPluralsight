$('.btn').click(function() {
    $('.text').text('loading.....');

    $.ajax({
        type: "GET",
        url: "https://api.meetup.com/2/cities",
        success: function(data) {
            $('.text').html('');
            for(var i = 0; i < data.results.length; i++) {
                var cityObject = data.results[i];
                var place= "";

                for (var prop in cityObject) {
                    if(cityObject.hasOwnProperty(prop)) {
                        place += prop + "-" + cityObject[prop] + " ";
                    }
                }

//                var place = data.results[i].city + "," + data.results[i].localized_country_name;
               $('.text').append('<p>' + place + '</p>');
            }
        },
        dataType : 'jsonp',
    });
});