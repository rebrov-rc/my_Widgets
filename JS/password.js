class Pass {
    constructor(){
        this.inp = document.querySelector('.inp-pass')
        this.eye = document.querySelector('.icon-pass')
        this.len = []
    }
    init(){
        console.log(this.len.length, this.inp.value.length)
        this.eye.addEventListener('click', () => {this.events()})
        this.inp.addEventListener('input', () => {this.hadler()})
    };
    hadler(){
        if(this.len.length < this.inp.value.length ){
            this.len.push(this.inp.value[this.inp.value.length-1]) 
        }else{
            this.len.pop( this.inp.value[this.inp.value.length-1]) 
        }
        // console.log(this.inp.value[this.inp.value.length-1]);
        this.inp.value = ''
        for( let i = 0; i < this.len.length; i++ ){
            this.inp.value += '*'
        }

    };
    events(){
        this.eye.classList.toggle('active')
        let checking = this.eye.classList.value.indexOf('active')
        console.log(checking);
        if (checking != -1){
            this.switch()
        }
    };
    switch(){
        // let 
        this.inp.value = ''
        for( let i = 0; i < this.len.length; i++ ){
            this.inp.value += this.len[i]
        }
    }
}
// --------------
const password = new Pass()
password.init()