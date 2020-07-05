"use strict"
class Rating{
    constructor(key, wrap, items){
        this.lStorage = localStorage.getItem(key)
        this.block = document.querySelector(wrap)
    }
    start(){
        for ( let i = 0; i < 5; i++ ){
            this.block.innerHTML +=`<div class='st-wrap flex'> <i class="fa fa-star stars" aria-hidden="true"></i></div>`
        }
        let stars = document.querySelectorAll('.stars')
        this.stWrap = document.querySelectorAll('.st-wrap') 
        this.block.addEventListener('mouseout' , () => { this.post(stars)})
        if( this.lStorage === null ){this.lStorage = 0}
        this.storage(stars, this.lStorage)
        this.events(stars)
    };
    storage(stars, j = this.lStorage){
        for( let iII = 0;  iII < j ; iII++ ){
            stars[iII].classList.add('green')
        }
    };
    post(stars) { 
        stars.forEach( item => {            
            item.classList.remove('green')
        })
        this.storage(stars)
    };
    events(stars){
        this.stWrap.forEach((item, i) => {
            item.addEventListener('click' ,  () => { 
                this.lStorage = i + 1
                localStorage.setItem('rate', this.lStorage)
                this.post(stars)
            })
            item.addEventListener('mouseover' , ()=>{this.storage(stars, i+1)})
        }) 
    };
}
const rate = new Rating( 'rate', '.stars-wrap' );
rate.start()