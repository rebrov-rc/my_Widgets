"use strict"
function onLoad(){
    let lStorage = localStorage.getItem('rate'),
    block = document.querySelector('.stars-wrap');
    block.addEventListener('mouseout' , post)
    // block.addEventListener('mouseover' ,  () => {  })
    for ( let i = 0; i < 5; i++ ){
        block.innerHTML +=`<div class='st-wrap flex'> <i class="fa fa-star stars" aria-hidden="true"></i></div>`
    }

    let stars = document.querySelectorAll('.stars'),
    stWrap = document.querySelectorAll('.st-wrap');
    if( lStorage === null ){lStorage = 0}
    ////////////
    storage()
    ppp()
    //////////////////////////////////////////////////////
    function storage(){
        for( let iII = 0;  iII < lStorage ; iII++ ){
            stars[iII].classList.add('green')
        }
    }
    function post() { 
        stars.forEach( item => {
            item.classList.remove('green')
        })
        storage()
    }
    function ppp(){
        stWrap.forEach((item, i) => {
            item.addEventListener('click' ,  () => { 
                lStorage = i + 1
                localStorage.setItem('rate', lStorage)
                post()
            })
            item.addEventListener('mouseover' , function choise() {
        
                for( let iII = 0;  iII < i + 1 ; iII++ ){
                    stars[iII].classList.add('green')
                }
            })
            // item.addEventListener('mouseout' ,  () => { 
            //  for( let iII = 0;  iII < i + 1 ; iII++ ){stars[iII].classList.remove('green')}})
        })
        
    }
}
onLoad()