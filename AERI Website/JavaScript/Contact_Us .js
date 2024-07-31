var Final_Language = "Basic";
console.log(Language)
setTimeout(()=>{
    if(Language === "عربي"){
        console.log(" arabbbb")
        const h1 = document.getElementById("7amada");
        h1.textContent = "اسنلايشسهياشتسياتشغسلعايىشتستيغلهشعاس";
        Final_Language = "عربي";
      }
      else if (Language === "English") {
        console.log(" Engggggg");
        const h1 = document.getElementById("7amada");
        h1.textContent = "Agricultural Engineering Research Institute Website";
        Final_Language = "English";
    }
},200)

console.log(Language)

// module.exports = Final_Language;
// exports = {Final_Language};

