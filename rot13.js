function rot13(str) {
  let res = "";
  for(let i = 0; i < str.length; i++){
    let current = str.charCodeAt(i);
    current = current - 65;
    if(current >= 0 && current < 26){
      current = current - 13;
      if(current < 0){
        current = current + 26;
      }
      current = current + 65;
      res = res + String.fromCharCode(current);
    }
    else{
      res = res + str[i];
    }
  }
  return res;
}
