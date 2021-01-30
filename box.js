class box {
    constructor(x,y,width,height,color) {
      var options = {
          isStatic: false,
          density:1.6
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color=color;
      
      this.fade=255;
      World.add(world, this.body);
    }
    Score(){
      if(this.fade<0&&this.fade>-105){
        score++;
      }
    }
    display(){
     


      if(this.body.speed>=4.0){
        tint(255,this.fade);
        this.fade=this.fade-15;
        World.remove(world,this.body);
      }else{
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      strokeWeight(5);
      rect(pos.x, pos.y, this.width, this.height);
      }
    }
  };
