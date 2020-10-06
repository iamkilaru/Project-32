class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.pointB = pointB
        this.string = Constraint.create(options);
        this.string.bodyA = bodyA;
        World.add(world, this.string);
    }

    fly() {
        this.string.bodyA= null;
    }

    attach(body) {
        this.string.bodyA = body;
    }

    display() {
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(255,0,0);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
    
}