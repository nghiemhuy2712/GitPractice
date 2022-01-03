

function Mouse(name){
    this.name=name;
    this.isDead=false;
}
Mouse.prototype.die=function(){
    this.isDead=true;
}
<<<<<<< HEAD
Mouse.prototype.run=function(){
    console.log('Run');
=======
Mouse.prototype.sleep=function(){
    console.log('Sleepppp');
>>>>>>> master
}
module.export=Mouse;