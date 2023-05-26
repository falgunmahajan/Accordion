import {faq} from "/json.js";

  const accordionContainer = document.querySelector(".accordion");
  let maxFaq=0;
  createFaq(faq.slice(0,5));
  function createFaq(faq)
  {
  faq.forEach((item)=>{
    let faqContainer = document.createElement("div");
      faqContainer.innerHTML=`<h2 class="accordion-header">
      <button class="accordion-button collapsed faqItem" type="button"  id="${item.id}"data-bs-toggle="collapse" data-bs-target="#collapse${item.id}" aria-expanded="false" aria-controls="collapse${item.id}" >
        ${item.title}
      </button>
    </h2>
    <div id="collapse${item.id}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${item.content};
      </div>
    </div>`
    accordionContainer.appendChild(faqContainer);
    let br =document.createElement("hr");
    accordionContainer.appendChild(br);
  })
 

  maxFaq+=faq.length;
  console.log(maxFaq)
 
  }

 
  
    accordionContainer.addEventListener("click",(e)=>{
      let areaExpanded=e.target.getAttribute("aria-expanded");
      console.log(areaExpanded)
      if((areaExpanded=="true") && (maxFaq<20))
      {
      let start=maxFaq;
      let end=start+3
      console.log(start,end)
      createFaq(faq.slice(start,end));
       
      } 
  })
  
