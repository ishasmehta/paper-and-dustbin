class Paper{
    constructor(xPos,yPos,radius){
        var paper_options = {
            restitution: 0.4,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(xPos,yPos,radius,paper_options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var posx = this.body.position.x;
        var posy = this.body.position.y;
        push();
        translate(posx,posy);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}