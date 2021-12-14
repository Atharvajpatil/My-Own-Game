class BlowerMouth {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.blower_img = loadImage("balloon.png")
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.blower_img,0,0,130,70)
    pop();
    noFill()
  }
}
