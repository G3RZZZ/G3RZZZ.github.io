

// 1.
function mouseMovement(event)
{
    const mouse_position = document.getElementById("mousePosition")

    mouse_position.innerHTML = `Posición del mouse: ${event.clientX} - ${event.clientY}`
    // console.log(mouse_position)
    // console.log("X", event.clientX)
    // console.log("Y", event.clientY)
}


// 2.
function getFormvalue(event)
{
    const form = document.getElementById("form1")

    const cName = document.getElementById("fullName")


    const fname = form.elements[0].value

    const lname = form.elements[1].value


    cName.textContent = `${fname} ${lname}`

    event.preventDefault();

}


// 3.
function insertRow(event)
{
    const sTable = document.getElementById("sampleTable")

    const currentRow = sTable.rows.length + 1
    const currentCol = sTable.rows[0].cells.length


    const iRow = document.createElement("tr")

    for(let i = 1; i <= currentCol; i++)
    {
        let iCol = document.createElement("td")

        let cText = document.createTextNode(`Row ${currentRow} column ${i}`)

        iCol.appendChild(cText)

        iRow.appendChild(iCol)
    }

    sTable.appendChild(iRow)
}


// 4.
function insertColumn(event)
{
    let nCols = 1

    const sTable = document.getElementById("sampleTable")
    
    const currentCol = sTable.rows[0].cells.length + 1
    
    // const currentRow = document.sTable.rows.length
    const currentRow = sTable.getElementsByTagName("tr")

    for(let iRow of currentRow)
    {
        let iCol = document.createElement("td")

        let cText = document.createTextNode(`Row ${nCols} column ${currentCol}`)
        iCol.appendChild(cText)
        
        iRow.appendChild(iCol)

        nCols++
    }
}


// 5.
function changeContent(event)
{
    const mTable = document.getElementById("myTable")

    const form2 = document.getElementById("f2")

    const nf = form2.elements[0].value
    const nc = form2.elements[1].value
    const chText = form2.elements[2].value

    const selCell = mTable.getElementsByTagName("tr")[nf-1].getElementsByTagName("td")[nc-1]

    selCell.textContent = chText

}

// 6.
function addColor(event)
{
    const colorS = document.getElementById("colorSelect")

    const colorsP = ['Orange', 'Red', 'Violet', 'Blue', 'Green', 'Yellow', 'White', 'Black']


    const rColor = colorsP[Math.floor(Math.random() * colorsP.length)]

    const nColor = document.createElement("option")

    nColor.appendChild(document.createTextNode(rColor))
    
    colorS.appendChild(nColor)

}

function remColor(event)
{
    const colorS = document.getElementById("colorSelect")

    const dColor = colorS.getElementsByTagName("option")

    const rColor = Math.floor(Math.random() * colorS.getElementsByTagName("option").length)
    // const rColor = Math.floor(Math.random() * dColor.length)


    // colorS.removeChild(colorS.children[rColor])
    colorS.removeChild(dColor[rColor])


}

// 7.
function swapI(event)
{
    const imgs = document.getElementById("imgs")

    const rWidth = Math.random() * (300) + 300

    const rHeight = Math.random() * (300) + 300

    const rN = Math.floor(Math.random() * (2) + 1)

    imgs.setAttribute("src", `../images/kitten${rN}.jpg`)
    // imgs.setAttribute("src", `http://placekitten.com/200/300`)
    // im6.setAttribute("src", `../images/kitten2.jpg`)

    imgs.setAttribute("width", `${rWidth}px`)

    imgs.setAttribute("height", `${rHeight}px`)

}

document.addEventListener("mousemove", mouseMovement)

document.getElementById("form1").addEventListener("submit", getFormvalue)

// document.getElementById("rowI").document.addEventListener("click", insertRow)
// // document.getElementById("rowI").addEventListener("click", insertRow)


// document.getElementById("colI").document.addEventListener("click", insertColumn)

// document.getElementById("f2").addEventListener("click", changeContent)

// document.getElementById("aColor").addEventListener("click", addColor)

// document.getElementById("rColor").addEventListener("click", remColor)

// document.getElementById("imgs").document.addEventListener("mouseover", swapI)
document.getElementById("imgs").addEventListener("mouseover", swapI)
// document.addEventListener("mouseover", swapI)