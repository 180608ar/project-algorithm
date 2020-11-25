function touch(obj1,obj2){
    if(obj1.x-obj2.x <= obj1.width/2 + obj2.width/2
      && obj2.x-box1.x <= obj2.width/2 + obj1.width/2
      && obj1.y-box2.y <= obj1.height/2 + obj2.height/2
      && obj2.y-box1.y <= obj2.height/2 + obj1.height/2 ){
      return true;   
      
    }
    
    else{
    
     return false;
    }
    
  }
  