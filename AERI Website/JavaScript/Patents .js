setTimeout(()=>{
    console.log(Language);
        if (Language === "عربي") {
          console.log(" arabbbb");
          const h1 = document.getElementById("7amada");
          h1.textContent = "اسنلايشسهياشتسياتشغسلعايىشتستيغلهشعاس";
          Final_Language = "عربي";
        } else if (Language === "English") {
          console.log(" Engggggg");
          const h1 = document.getElementById("7amada");
          h1.textContent =
            "Agricultural Engineering Research Institute Website";
          Final_Language = "English";
        }
},200)