const products = {
    array: [
        {
            id: 01,
            img: ['../img/unnamed.jpg'],
            name: '',
            description: {
                title: ''
            },
            prise: {
                new: '',
                old: ''
            }
        },
        {
            id: 02,
            img: ['https://img.usamodelkina.ru/uploads/posts/2014-04/1396584250_idei-iz-dereva.jpg'],
            name: '',
            description: {
                title: ''
            },
            prise: {
                new: '',
                old: ''
            }
        },
        {
            id: 03,
            img: ['https://luxury-house.org/wp-content/uploads/elementy-dekora-interera-3.jpg'],
            name: '',
            description: {
                title: ''
            },
            prise: {
                new: '',
                old: ''
            }
        },
        {
            id: 04,
            img: ['https://www.charlescameron.ru/images/2019/1T9A4428-v.jpg'],
            name: '',
            description: {
                title: ''
            },
            prise: {
                new: '',
                old: ''
            }
        },
        {
            id: 05,
            img: ['https://web-3.ru/data/articles/6461/1.jpg'],
            name: '',
            description: {
                title: ''
            },
            prise: {
                new: '',
                old: ''
            }
        },
        {
            id: 06,
            img: ['../img/ii.jpg'],
            name: '',
            description: {
                title: ''
            },
            prise: {
                new: '',
                old: ''
            }
        }
    ]
};
class SliderI{
    counter = 0
    j = 0
    l = 0
    constructor(wrap, el, right, left){
        this.wrap = document.querySelector('.' + wrap)
        this.btnRight = document.querySelector('.' + right)
        this.btnLeft = document.querySelector('.' + left)
        this.el = el
    }
    sliderInfinite(){
        for(let i = 0; i < this.el.length; i++){
            this.wrap.innerHTML += `
                <img class='slI-img' src='${this.el[i].img[0]}'/>
            `
            this.img = document.querySelectorAll('.slI-img')
        }
    }
    auto(a = '+', b){
            let r = +this.img[this.j].style.left.replace('%', '') + (this.j * 100)
            // console.log(+this.counter - r);
            // if ( this.counter >=  100 ) {
            if ( this.counter - r  ===  100 || b === 'left' ) {
                // this.img[this.j].style.left =  this.l + '%'
                this.transition(a)
            }
            a === '+'? this.counter += 100 :this.counter -= 100 
            this.wrap.style.left = '-' + this.counter + '%'
        
    }
    transition(side = '+'){
        this.l = this.counter + (this.el.length - 1 ) * 100 - this.j * 100
        if(side === '-') {
            this.j = (this.el.length - 1)  - this.j // !!!
            this.img[this.j].style.left =  -this.l + '%'

        }else {this.img[this.j].style.left =  this.l + '%'}
        
        side === '+'?  this.j +=  1 : this.j -=  1
        console.log(this.j);
        if ( this.j === this.el.length ){this.j = 0;}

    }
    events(){
        this.btnRight.addEventListener('click', ()=> {this.auto('+')})
        this.btnLeft.addEventListener('click', ()=> {this.auto('-', 'left')})
    }
    start(){
        this.sliderInfinite() 
        this.events()
        this.interval = setInterval(() => {this.auto('+')},3000)
    }
}
const widSliderI = new SliderI('slider--I-wrap', products.array, 'dot-right', 'dot-left')
widSliderI.start()

// fetch( "../JSON/data_I.json") 
// .then(response => {return response.json()})
// .then(products => { 
//     console.log(products.products);
//     const widSliderI = new SliderI('slider--I-wrap', products.products.array)
//     widSliderI.start()
// })