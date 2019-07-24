const divs = ['#a', '#b', '#c', '#d','#e','#f','#g','#h','#i'];

$(window).on('resize', function(){
    gradient();
});


//this is a random color picker. no relationship between the colors of each div.
const colorPicker = function(){
    divs.forEach((id) => {
        let r = genHex(Math.random()*255);
        let g = genHex(Math.random()*255);
        let b = genHex(Math.random()*255);
        $(id).css('background-color', '#' + r + g + b);
    });
}


//this is a gradient generator. the divs will appear 
const gradient = function(){
    //initial r, g, and b values for first random color. we will increment these values.
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;

    //r, g, and b values for steps. the new random numbers represent the rgb values of the target color; we are not storing it directly, but rather calculating the distance between each step
    let rStep = (Math.random()*255 - r)/divs.length;
    let gStep = (Math.random()*255 - g)/divs.length;
    let bStep = (Math.random()*255 - b)/divs.length;

    //iterate through the divs and assign the gradient colors. 
    divs.forEach((id) =>{
        $(id).css('background-color', '#' +genHex(r) + genHex(g) + genHex(b));
        r+=rStep;
        g+=gStep;
        b+=bStep;
    });
}


//given a number, rounds down to an integer and outputs a two-digit hex string.
const genHex = function(num){
    let wholeNum = Math.floor(num);
    if(wholeNum < 16){
        return '0' + wholeNum.toString(16);
    } else{
        return wholeNum.toString(16);
    }
}