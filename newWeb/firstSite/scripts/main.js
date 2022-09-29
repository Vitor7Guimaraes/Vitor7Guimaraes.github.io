/* const myHeader = document.querySelector('h1')
myHeader.textContent = 'Hello World' */

let myImage = document.querySelector('img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/architecture.jpg') {
        myImage.setAttribute('src', 'images/architectureDrawning.jpg')
    }else {
        myImage.setAttribute('src','images/architecture.jpg')
    }
}

let myButton = document.querySelector('button')
let myHeader = document.querySelector('h1')

function userNameDefine(){
    let myName = prompt('Please ,type your name.')
    localStorage.setItem('name', myName)
    myHeader.textContent = 'Arch is Awesome! ' + myName
}
if (!localStorage.getItem('name')) {
    userNameDefine()
}else{
    let nameKept = localStorage.getItem('name')
    myHeader.textContent = 'Arch is Awesome! ' + nameKept
}
myButton.onclick = function() {
    userNameDefine()
}

function userNameDefine() {
            let myName = prompt('Please, type your name.')
            if(!myName || myName === null){
                userNameDefine()
            }else{
                localStorage.setItem('name', myName)
                myHeader.innerHTML = 'Arch is Awesome! ' + myName
            }
}
