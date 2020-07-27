let paintbox= document.getElementById('paintbox')
let context= paintbox.getContext('2d');
class Box{
    constructor(size,color){
        this.size=size
        this.color=color
        this.x=0
        this.y=0
    }
}
class Player extends Box{
    constructor(){
        super(50,'blue')
        this.x=0
        this.y=250

    }
}
class enemy extends Box{
    constructor(speed){
        super(50,'red')
        this.speed=speed
    }

     move(){   //in a class function dont need function keyword
        this.y+=this.speed

        if(this.y + this.size > 500){//if box reaches the bottom
            this.speed = -Math.abs(speed) //make the speed negative
        }
        if(this.y < 0){//if the box reaches the top make the speed positive
            this.speed = Math.abs(this.speed)
        }

    }
}
let player= new Player()
let e1= new enemy(1)
let e2= new enemy(2)
e1.x=120
e2.x=240


function drawBox(box) {
    context.fillStyle = box.color
    context.fillRect(box.x, box.y, box.size, box.size)
  }

  function updateGame() {
window.requestAnimationFrame(()=> {
    console.log('frame update')
    context.clearRect(0, 0, 500, 500);
    e1.move()
    e2.move()
    drawBox(e1)
    drawBox(e2)
    updateGame()

})
  }
  updateGame()
