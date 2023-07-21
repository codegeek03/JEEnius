var button = document.getElementsByClassName("box"); // Assuming there is only one element with the class "box"
for(i=0;i<4;i++)
{
  button[0].addEventListener("click", function() {
    window.open("jee-adv.html");
  });
  button[1].addEventListener("click", function() {
    window.open("neet.html");
  });
  button[2].addEventListener("click", function() {
    window.open("jee-mains.html");
  });
  button[3].addEventListener("click", function() {
    window.open("jeef.html");
  });

}
var demo=document.getElementById("demo");
demo.addEventListener("click",function(){
  window.open("https://forms.gle/YkX1FdXzYyXkEh4F6");
})
var course=document.getElementById("course");
course.addEventListener("click",function(){
  window.open("plan.html");
})

