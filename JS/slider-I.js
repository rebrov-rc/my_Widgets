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
            img: ['https://lh3.googleusercontent.com/proxy/YwyDf165iSEkJksz_rXxDyisPEkYc70xwh8UK6K13pcSqrB9dj7DP-z1RPKlCXKUX4Dm5x2AEJcQdYKHMMvCjWaxqMmfE-wXrT-MAU0'],
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
    constructor(wrap, el){
        this.wrap = document.querySelector('.' + wrap)
        this.el = el
        this.counter = 0
        this.j = 0
        this.l = 0
    }
    sliderInfinite(){
        for(let i = 0; i < this.el.length; i++){
            this.wrap.innerHTML += `
                <img class='slI-img' src='${this.el[i].img[0]}'/>
            `
            this.img = document.querySelectorAll('.slI-img')
        }
    }
    auto(){
        this.interval = setInterval(() => {
            if ( this.counter >=  (1) * 100 ) {
                if ( this.j === this.el.length){this.j = 0}
                this.transition()
            }
            this.counter += 100
            this.wrap.style.left = '-' + this.counter + '%'
        },3000)
    }
    transition(){
        this.l = this.counter + (this.el.length - 1 ) * 100 - this.j * 100
        this.img[this.j].style.left =  this.l + '%'
        this.j += 1

    }
    start(){
        this.sliderInfinite() 
        this.auto()
    }
}
const widSliderI = new SliderI('slider--I-wrap', products.array)
widSliderI.start()
