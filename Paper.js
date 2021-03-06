class Paper {
    constructor(x,y,r) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
           'isStatic':false
      }
      this.x = x;
      this.y= y;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);

      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      strokeWeight(3);
      fill("pink");
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };