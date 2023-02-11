const colorInput = document.getElementById("colourInput")
const paletteContainer = document.getElementById("paletteContainer")
document.getElementById("generateBtn").addEventListener("click", function () {
    paletteContainer.innerHTML = ""
    let colorInputText = colorInput.value.slice(1, colorInput.length)
    // console.log(colorInputText)
    // console.log(schemeSelected.value.toLowerCase())
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInputText}&mode=${schemeSelected.value.toLowerCase()}&count=5`, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            for (let color of data.colors) {
                // console.log(color.hex.value)
                paletteContainer.innerHTML += `<div id="${color.hex.value}">${color.hex.value}</div>`
                document.getElementById(color.hex.value).style.background = color.hex.value
            }
        })
})