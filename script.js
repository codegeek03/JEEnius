var button = document.getElementsByClassName("box"); // Assuming there is only one element with the class "box"
for(i=0;i<button.length;i++)
{
  button[i].addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfGJ735SWV2AaTQ0pEqveuvxPjyNbMlL8ZDPXXqEBk4LWI86Q/viewform?usp=sf_link");
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

