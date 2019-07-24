const divs = ['#a', '#b', '#c', '#d','#e','#f','#g','#h','#i'];

$(window).on('resize', function(){
    colorPicker();
});

const colorPicker = function(){
    divs.forEach((id) => {
        let r = genHex(Math.random()*255);
        let g = genHex(Math.random()*255);
        let b = genHex(Math.random()*255);
        $(id).css('background-color', '#' + r + g + b);
    console.log('do we get here?');

    });
}

const gradient = function(){
    let rStart = Math.random()*255;
    let gStart = Math.random()*255;
    let bStart = Math.random()*255;
}

const genHex = function(num){
    let wholeNum = Math.floor(num);
    if(wholeNum < 16){
        return '0' + wholeNum.toString(16);
    } else{
        return wholeNum.toString(16);
    }
}