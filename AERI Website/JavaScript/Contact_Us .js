var Final_Language = "Basic";
var PageTitle = document.getElementById("Contact_Us_Page_Title");
console.log(Language)
setTimeout(()=>{
    if(Language === "عربي"){
        console.log(" arabbbb")
        
      PageTitle.innerHTML = "الإتصال بنا";
      const h1 = document.getElementById("7amada");
      h1.textContent = "اسنلايشسهياشتسياتشغسلعايىشتستيغلهشعاس";
      Final_Language = "عربي";
    }
    else if (Language === "English") {
      console.log(" Engggggg");
      PageTitle.innerHTML = "AERI Contact Us Page";
        const h1 = document.getElementById("7amada");
        h1.textContent = "Agricultural Engineering Research Institute Website";
        Final_Language = "English";
    }
},300)

console.log(Language)

// module.exports = Final_Language;
// exports = {Final_Language};

