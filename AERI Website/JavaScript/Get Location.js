function GetLocation(){
    let V;
    var requestOptions = {
      method: "GET",
    };

    fetch(
      "https://api.geoapify.com/v1/ipinfo?&apiKey=b1eafd427c864fd8ad4009a48be4ec1f",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.country.languages[0].name_native);
        V = result.country.languages[0].name_native;
        console.log(V);
        GetLoc(V);
        if (result.country.languages[0].name_native === "العربية") {
            LangBtn.innerHTML = "English";
            //   En_Nav.classList.add("D_None");
            //   Ar_Nav.classList.remove("D_None");
        } else {
            LangBtn.innerHTML = "عربي";
            //   Ar_Nav.classList.add("D_None");
            //   En_Nav.classList.remove("D_None");
        }
    })
    .catch((error) => console.log("error", error));
    // return V;
    // console.log(V);
}
function GetLoc(V){
    return V;
}