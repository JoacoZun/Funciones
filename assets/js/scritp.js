
const colors = ['blue', 'red', 'green', 'yellow']
colors.forEach(color => {
    const div = document.getElementById(color)
    div.addEventListener("click", function() {
        this.style.backgroundColor = 'black'
    })
})

const colorMap = {
    'a': 'pink', 
    's': 'orange',
    'd': 'lightblue',
    'q': 'purple',
    'w': 'gray',
    'e': 'brown'
}

document.addEventListener('keydown', function(event) {
    const color = colorMap[event.key]
    if (color) {
        if (['a', 's', 'd'].includes(event.key)) {
            document.getElementById('key').style.backgroundColor = color
        } else if (['q', 'w', 'e'].includes(event.key)) {
            const newDiv = document.createElement('div')
            newDiv.style.width = '200px'
            newDiv.style.height = '200px'
            newDiv.style.backgroundColor = color
            newDiv.style.border = '1px solid black'
            newDiv.style.marginTop = '20px'
            document.body.appendChild(newDiv)
        }
    }
})
