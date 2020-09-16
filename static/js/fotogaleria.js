$(function () {
    $('.album').on('click', function () {
        var url = $(this).children()[0].src.replace(/[0-9]+(?!.*[0-9])/, 1);

        $('#fotky').empty();
        $('.carousel-inner').empty();
        $('.carousel-indicators').empty();
        $('.modal-header').empty()
        $('#zoznam_albumov').attr('hidden', true);
        $('#fotky').attr('hidden', false);

        count = $(this).attr("name")

        $('#fotky').append($('<h3>').text($(this).children()[1].innerHTML));
        $('.modal-header').prepend($('<h3>').text($(this).children()[1].innerHTML));

        for (i=1; i<=count; i++) {
            $('#fotky').append($('<img>')
                .attr('src', url)
                .attr('alt', 'fotka')
            );

            $('.carousel-inner').append($('<div>')
                .attr('class', 'item')
                .attr('id', 'photo'+i)
                .append($('<img>')
                    .attr('src', url)
                    .attr('alt', 'fotka')
                )
            )
            
            $('.carousel-indicators').append($('<li>')
                .attr('data-target', '#myCarousel')
                .attr('data-slide-to', i-1)
                .attr('id', 'indicator'+i)
            )

            url = increment_last(url);
        };

        $('#fotky').append($('<div>')
            .append($('<button>')
                .attr('id', 'button_back')
                .text('Späť')
                .attr('class', 'btn btn-primary')
            )
        );
    })

    $(document).on('click', '#button_back', function(){ 
        $('#zoznam_albumov').attr('hidden', false);
        $('#fotky').attr('hidden', true);
   });

   $(document).on('click', '#fotky img', function(){
       $('#PhotoModal').modal('toggle');
       number_photo = $(this).attr('src').match(/[0-9]+(?!.*[0-9])/)[0]
       console.log($(this).attr('src').match(/[0-9]+(?!.*[0-9])/)[0])
       $('.active').removeClass('active')
       $('#photo'+number_photo).addClass('active')
       $('#indicator'+number_photo).attr('class', 'active')
   })
});

function increment_last(v) {
    return v.replace(/[0-9]+(?!.*[0-9])/, parseInt(v.match(/[0-9]+(?!.*[0-9])/), 10) + 1);
};