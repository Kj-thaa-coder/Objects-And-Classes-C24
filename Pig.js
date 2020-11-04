class Pig{
    constructor(x,y){
        var ball_options = {restitution: 1.0, friction: 2.0, density: 1.0}
        this.body = Bodies.rectangle(x,y,50,50,ball_options)
        this.width = 50
        this.height = 50
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("pink")
    rect(0,0,this.width,this.height)
    pop()
    }
    }