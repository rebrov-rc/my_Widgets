'use strict'
class Weather {
    constructor (temp, img, name) {
        this.tempIn = document.querySelector(temp),
        this.animSun = document.querySelector(img),
        this.sevedNumber = 0,
        this.name = name,
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.name +
        "&appid=b1b35bba8b434a28a0be2a3e1071ae5b";
    };
    check() {
        setInterval(() => { 
            this.getWeath()
        }, 60000)
    };
    getWeath() {
        fetch(this.url)
        .then((response) => {return response.json()})
        .then( data => {
            // this.check()                         
            let temp = +data.main.temp.toFixed(2)
            // console.log( Math.floor(temp - 273,15))
            this.tempIn.innerHTML = '+' + Math.floor(temp - 273,15) + '&deg;'
            if ( this.sevedNumber != Math.floor(temp - 273,15) ) {
                this.animSun.classList.add('animation') 
                setTimeout(() => {this.animSun.classList.remove('animation')}, 4000 ) 
                this.sevedNumber = Math.floor(temp - 273,15)
            }  
        } )
    };
    start(){
        this.getWeath()
        this.check()
    };
}
const widWeatherSpb = new Weather('.temp-I', '.icon-wrap-weather img', 'Sankt Petersburg')
widWeatherSpb.start()
const widWeatherMsk = new Weather('.temp-II', '.icon-wrap-weather-II img', 'Moscow')
widWeatherMsk.start()