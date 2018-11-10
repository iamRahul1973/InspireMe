/**
 * Created by iamRahul95 on 31-08-2018.
 * @package InspireMe
 */

$(function () {
    var rand = Math.floor(Math.random() * 8);
    $('body').addClass('inspireMeBg-' + rand);
    $.support.cors = true;
    $.ajax({
        // url: 'https://talaikis.com/api/quotes/random/',
        // url:'http://quotes.rest/qod.json',
        url: 'http://api.forismatic.com/api/1.0/',
        type: 'GET',
        // dataType: 'JSON',
        dataType: 'jsonp',
        data: 'method=getQuote&format=jsonp&lang=en&jsonp=?',
        cache: false,
        success: function (data) {
            // var quote = data.quote;
            // var author = data.author;
            // var quote = data.contents.quotes[0].quote;
            // var author = data.contents.quotes[0].author;
            var quote = data.quoteText;
            var author = data.quoteAuthor;
            $('#main-quote').find('h3').html(quote);
            $('#author').html(author);
        },
        fail: function () {
            $('#main-quote').find('h3').html('HELLO WORLD !');
            $('#author').html('iamRahul95');
        }
    });
});
