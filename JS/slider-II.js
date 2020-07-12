const productsII = {
    array: [
        {
            id: 01,
            img: ['../img/unnamed (1).jpg'],
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
            img: ['../img/ij.jpg'],
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
            img: ['../img/is.jpg'],
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
            img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS6__jkfNWjDiw9ggnKcdieqO9LUBmKWr3Eg&usqp=CAU'],
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
class SliderII {
    constructor(prod, wrap, elements){
      this.prod = prod
      this.wrap = document.querySelector('.' + wrap)
      this.el = document.querySelector('.' + elements)
    };
    clean(disp){
        for(let i = 0; i < this.prod.length; i++ ){
            this.retEl[i].classList.remove('sl-ii--active')
            this.retEl[i].style.display = disp
            this.wrap.children[0].src = this.prod[0].img
        }
    }
    start(){
            this.wrap.children[0].src = this.prod[0].img
            for(let i = 0; i < this.prod.length; i++){
                this.el.innerHTML += `<div class='items'>
                    <div class='return-elements-wrap'>
                        <div class='return-elements'></div>
                    </div>
                </div>`
            }

            this.events()
    }
    events(){
        this.items = document.querySelectorAll('.items')
        this.retEl = document.querySelectorAll('.return-elements')
        this.wrap.addEventListener('mouseout', () => this.clean('none'))
        this.items.forEach((item, i) => {
            item.addEventListener('mouseover', () => { this.change(i) })
        });
    }
    change(i){
        this.clean('block')
        this.retEl[i].classList.add('sl-ii--active')
        this.wrap.children[0].src = this.prod[i].img
    }
}

const slider = new SliderII( productsII.array, 'slider--II', 'returnElements' )
slider.start()