var PageTitle = document.getElementById("Patents_Page_Title");

setTimeout(() => {
    console.log(Language);
    if (Language === "عربي") {
      console.log("new");
      PageTitle.innerHTML = "برءات الاختراع";
      console.log(" arabbbb");
      const h1 = document.getElementById("7amada");
      h1.textContent = "اسنلايشسهياشتسياتشغسلعايىشتستيغلهشعاس";
    } else if (Language === "English") {
      PageTitle.innerHTML = "AERI Patents Page";
      console.log(" Engggggg");
      const h1 = document.getElementById("7amada");
      h1.textContent = "Agricultural Engineering Research Institute Website";
    }
}, 300);