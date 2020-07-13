function dm() {
    if (window.document.getElementById('switch_check').checked) {
        window.document.body.style.backgroundColor = 'var(--background-color-2)'
        window.document.getElementById('search').style.borderBottom = '3px solid #F4F1DE'
        window.document.getElementsByClassName('bloco')[0].style.backgroundColor = '#F4F1DE'
        window.document.getElementsByClassName('bloco')[0].style.color = '#E07A5F'
        window.document.getElementsByClassName('bloco')[1].style.backgroundColor = '#F4F1DE'
        window.document.getElementsByClassName('bloco')[1].style.color = '#E07A5F'
        window.document.getElementsByClassName('bloco')[2].style.backgroundColor = '#F4F1DE'
        window.document.getElementsByClassName('bloco')[2].style.color = '#E07A5F'
        window.document.getElementsByClassName('bloco')[3].style.backgroundColor = '#F4F1DE'
        window.document.getElementsByClassName('bloco')[3].style.color = '#E07A5F'
    } else {
        window.document.body.style.backgroundColor = 'var(--background-color-1)'
        window.document.getElementsByClassName('bloco')[0].style.backgroundColor = 'whitesmoke'
        window.document.getElementsByClassName('bloco')[0].style.color = 'var(--background-color-1)'
        window.document.getElementsByClassName('bloco')[1].style.backgroundColor = 'whitesmoke'
        window.document.getElementsByClassName('bloco')[1].style.color = 'var(--background-color-1)'
        window.document.getElementsByClassName('bloco')[2].style.backgroundColor = 'whitesmoke'
        window.document.getElementsByClassName('bloco')[2].style.color = 'var(--background-color-1)'
        window.document.getElementsByClassName('bloco')[3].style.backgroundColor = 'whitesmoke'
        window.document.getElementsByClassName('bloco')[3].style.color = 'var(--background-color-1)'
    }

}