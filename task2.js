function revision(a,b,c){
  let x;
  if(c=='*' && typeof(a)=='number' && typeof(b)=='number'){x = a* b;}
  else if(c=='/'&& typeof(a)=='number' && typeof(b)=='number' && b!=0){x = a/b;}
  else if(c=='+'&& typeof(a)=='number' && typeof(b)=='number'){x = a+b;}
  else if(c=='-'&& typeof(a)=='number' && typeof(b)=='number'){x = a-b;}
  else{console.log('incorrectly entered data');}
  console.log(x);
}
try{
    revision(k,y,'8');
}catch(e){
    console.log('Ошибка ' + e.name + ":" + e.message);
}
try{
    revision(1,8,'*');
}catch(e){
    console.log('Ошибка ' + e.name + ":" + e.message);
}
