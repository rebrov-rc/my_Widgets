class User{
    constructor(name){
        this.name = name
    }
    get _password(){}
}
class Pass extends User{
    constructor(){
        super()
        this.inp = document.querySelector('.inp-pass')
        this.eye = document.querySelector('.icon-pass')
        this.info = document.querySelector('.pass-info')
        this.emos = document.querySelector('.emotions-wrap').children
        this.hidden = true
        this.len = []
        this.prop = []
        this.complexity = ['.',',',';',':','/','|','*','=','&','%','?','$']
    }
    init(){
        this.eye.addEventListener('click', () => {this.events()})
        this.inp.addEventListener('input', () => {this.hadler()})
        this.prop[0] = 'initial'
        this.prop[1]  = 'none'
        this.icons()

    };
    hadler(){
        if(this.len.length < this.inp.value.length ){
            this.len.push(this.inp.value[this.inp.value.length-1]) 
        }else{
            this.len.pop( this.inp.value[this.inp.value.length-1]) 
        }
        if(this.hidden === true){
            this.inHidden()
        }
        this.emosHandler(this.len)
    };
    events(){
        this.eye.classList.toggle('active')
        let checking = this.eye.classList.value.indexOf('active')
        // console.log(checking);
        if (checking != -1){
            [this.prop[0],this.prop[1]]  = ['none' , 'initial']
            this.icons()
            this.switch()
            this.hidden = false
        }else{ 
            [this.prop[0],this.prop[1]]  = ['initial' , 'none']
            this.icons()
            this.inHidden() 
            this.hidden = true
        }
    };
    switch(){
        this.inp.value = ''
        for( let i = 0; i < this.len.length; i++ ){
            this.inp.value += this.len[i]
        }
    };
    inHidden(){
        this.inp.value = ''
        for( let i = 0; i < this.len.length; i++ ){
            this.inp.value += '*'
        }
    };
    icons(){
        this.eye.children[0].style.display = this.prop[0]
        this.eye.children[1].style.display = this.prop[1]
    }
    emosHandler(value){
        let complexityReturn = false;
        value.forEach(item => {
            if(this.complexity.indexOf(item) != -1){
                complexityReturn = true
            }
        });
        if(value.length === 0 ){
            this.emos[0].style.display = 'none'
            this.emos[1].style.display = 'none'
            this.emos[2].style.display = 'none'
            this.info.innerText = 'Enter password'
        }else if (value.length < 6){
            this.info.innerText = 'Пароль слишком лёгкий'
            this.emos[0].style.display = 'block'
            this.emos[1].style.display = 'none'
            this.emos[2].style.display = 'none'
        }else if ( complexityReturn === true && value.length >= 8 || complexityReturn === false && value.length > 10 ){
            this.emos[0].style.display = 'none'
            this.emos[1].style.display = 'none'
            this.emos[2].style.display = 'block'
            this.info.innerText = 'Отлично!'

        }
        else if ( value.length > 5 && value.length < 8 ){
            this.emos[1].style.display = 'block'
            this.emos[0].style.display = 'none'
            this.emos[2].style.display = 'none'
            this.info.innerText = 'Добавьте сомволов / ? * & = % $'

        }else{
            this.emos[1].style.display = 'block'
            this.emos[0].style.display = 'none'
            this.emos[2].style.display = 'none'
            this.info.innerText = 'Добавьте сомволов / ? * & = % $'
        }
        
    }
}
// --------------
const password = new Pass()
password.init()