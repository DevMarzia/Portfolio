function sayHelloName(saluta) {
  
  let nome = "Marzia";
  console.log(`${saluta} ${nome}!`);
}

setTimeout(function(){
    sayHelloName("Hello");
}, 1000);

