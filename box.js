class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.visible=255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      score(){
          if(this.visible===0){
            score++;
          }
      }

      display(){
          var angle = this.body.angle;
          var pos = this.body.position;
      
          if(this.body.speed<=3){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
          } 
          else {
            push();
            this.visible = this.visible-5;
            tint(255,this.visible);
            Bodies.rectangle(pos.x,pos.y,50,50);
            pop();
            World.remove(world, this.body);
          }
        }
      }