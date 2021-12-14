class Ball {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.1
    };

    this.body = Bodies.rectangle(x, y, w, h,options);
    this.w = w;
    this.h = h;
this.ball_img = loadImage("ball.PNG")
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.ball_img,0,0,50,50)
    pop();
  }
}
