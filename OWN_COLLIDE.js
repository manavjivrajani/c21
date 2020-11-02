function Collide(Obullet,Owall){
  ObulletRightEdge = Obullet.x + Obullet.width;
  OwallLeftEdge = Owall.x;
  if(ObulletRightEdge >= OwallLeftEdge){
    return true;
  }else{
    return false;
  }
}