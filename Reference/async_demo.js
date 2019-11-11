console.log('First');
jQuery.get('page.html', function (data) {
    console.log('Second');
});
console.log('Third');