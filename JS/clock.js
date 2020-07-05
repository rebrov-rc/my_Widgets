'use strict'
class TimeClass{
    constructor(s, m, h){
        this.secLine = document.querySelector(s),
        this.minLine = document.querySelector(m),
        this.hourLine = document.querySelector(h)
    };
    timeData() {
        this.getTime = new Date,  
        this.getHour = this.getTime.getHours(),
        this.getMinutes = this.getTime.getMinutes(),
        this.getSec = this.getTime.getSeconds(),
        this.secCounter = this.getSec, 
        this.minCounter = this.getMinutes * 6,   
        this.hourCounter = this.getHour * 30;
    };
    start() {
        let interval = setInterval(() => {this.stconds()}, 1000)
        this.timeData()
        this.check()
    };
    check(){
        setInterval(() => { this.timeData(); }, 360000)
    };
    stconds() {
        let dependCount = this.minCounter + this.secCounter / 10,
        dependCountHour = this.minCounter / 12 + this.hourCounter; 
        this.secLine.style.transform = 'rotate(' + ++this.secCounter * 6 + 'deg)'
        this.minLine.style.transform = 'rotate(' + dependCount + 'deg)'
        this.hourLine.style.transform = 'rotate(' + dependCountHour + 'deg)'
        if ( this.secCounter === 60 ){
            this.minCounter += this.secCounter / 10
            this.secCounter = 0
        }
        if ( this.minCounter === 360 ){
            this.minCounter = 0
            this.hourCounter += 30
        }
        if ( this.hourCounter === 360 ){ 
            this.hourCounter = 0
        }
    };
}
const oClock = new TimeClass('.seconds', '.minutes', '.hours')
oClock.start()
