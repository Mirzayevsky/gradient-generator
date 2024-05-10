
// random color values 
const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]

const body = document.querySelector('body')
const button = document.querySelector('.container')
const colorText = document.querySelector('.colorText')

// making gradient color  using values array 
function getGradient() {
    let color = '#'
    for(let i = 1; i < 6; i++){
        const randomColor = Math.trunc(Math.random() * values.length + 1)
        color += values[randomColor]
    }
    return color
}


// setting background color to body of html
function setGradient(){
    const color1 = getGradient()
    const color2 = getGradient()
    const randomDeg = Math.trunc(Math.random() * 360)
    const bgColor =`linear-gradient( ${randomDeg},${color1},${color2})`
    body.style.background = bgColor
    colorText.textContent = bgColor

}
// setGradient function called here
button.addEventListener('click',()=>{
    setGradient()
})