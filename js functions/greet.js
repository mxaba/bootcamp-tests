function greet(name){
  if (typeof(name) == 'string'){
    return "Hello, " + name;
  }
  else {
    console.log('This function only accepts a String');
    return false
  }
}
