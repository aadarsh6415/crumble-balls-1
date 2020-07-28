class Paper{
constuctor(x,y,width,height){
var options={
   isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:1.2,
}
this.body = Bodies.rectangle(x, y, width, height, options);
       World.add(world,this.body)
//Matter.Body.applyForce(body,paper,20)
}
display(){

rect(this.body.position.x,this.body.position.y,20,20)

}






}