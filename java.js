const faqs = document.querySelectorAll(".faq"); 
for (const item of faqs) { 
  const curr_faq = item.childNodes; 
  const question = curr_faq[1]; 
  const answer = curr_faq[3]; 
  const icon = question.querySelector(".arrow-main"); 
  icon.addEventListener("click", function () { 
    answer.classList.toggle("non-active"); 
    const i = icon.querySelector("i"); 
    i.classList.toggle("fa-xmark"); 
    i.classList.toggle("fa-plus"); 
    console.log(i); 
  }); 
}

(function(document){
  var div = document.getElementById('arrow-container');
  var icon = document.getElementById('icon');
  var open = false;

  div.addEventListener('click', function(){
    if(open){
      icon.className = 'fa-solid fa-plus';  
    } else{
      icon.className = 'fa-solid fa-plus open';
    }

    open = !open;
  });
})(document);