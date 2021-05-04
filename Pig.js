class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibelity=255
  }
display(){
  console.log(this.body.speed)
  if(this.body.speed<3){
  super.display();}
  else{
    World.remove(world,this.body)
    push();
    this.visibelity=this.visibelity-5
    tint(255,this.visibelity)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop();

  }

}
};