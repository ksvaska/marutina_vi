function check(){
    let link = document.getElementById('link');
    if(document.getElementById('politics').checked){
        link.classList.remove('btn__form');
        link.style.backgroundColor = '#E7ECFF';
    } else{
        link.classList.add('btn__form');
        link.style.backgroundColor = 'gray';

    }

    }
