function showVerticalMessage (text) {
    let buf = '';
    if(text[0] === 'м') {
        buf = 'М' + text.slice(1, 10);
    } else buf = text.slice(0, 10);

    let final = ''; 
    for (let w in buf) 
        final += buf[w] + '\n';

    console.log(final);
}
 
showVerticalMessage('марафон');