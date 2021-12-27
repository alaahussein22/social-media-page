var btn =document.getElementById("val");

btn.addEventListener("click",function(){
  var body=  document.getElementById("input").value;
   document.querySelector("nav").innerHTML= "Welcome to " +body
})

