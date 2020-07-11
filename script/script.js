function dm() {
    if (window.document.getElementById('switch-shadow').checked) {
        window.document.body.style.backgroundColor='#3D405B'
        window.document.getElementById('search').style.borderBottom='3px solid #F4F1DE'
        window.document.getElementsByClassName('bloco')[0].style.backgroundColor='#F4F1DE'
        window.document.getElementsByClassName('bloco')[0].style.color='#E07A5F'
        window.document.getElementsByClassName('bloco')[1].style.backgroundColor='#F4F1DE'
        window.document.getElementsByClassName('bloco')[1].style.color='#E07A5F'
        window.document.getElementsByClassName('bloco')[2].style.backgroundColor='#F4F1DE'
        window.document.getElementsByClassName('bloco')[2].style.color='#E07A5F'
        window.document.getElementsByClassName('bloco')[3].style.backgroundColor='#F4F1DE'
        window.document.getElementsByClassName('bloco')[3].style.color='#E07A5F'
    } else {
        window.document.body.style.backgroundColor='#f04f42'
        window.document.getElementsByClassName('bloco')[0].style.backgroundColor='whitesmoke'
        window.document.getElementsByClassName('bloco')[0].style.color='#f04f42'
        window.document.getElementsByClassName('bloco')[1].style.backgroundColor='whitesmoke'
        window.document.getElementsByClassName('bloco')[1].style.color='#f04f42'
        window.document.getElementsByClassName('bloco')[2].style.backgroundColor='whitesmoke'
        window.document.getElementsByClassName('bloco')[2].style.color='#f04f42'
        window.document.getElementsByClassName('bloco')[3].style.backgroundColor='whitesmoke'
        window.document.getElementsByClassName('bloco')[3].style.color='#f04f42'
    }
    
}