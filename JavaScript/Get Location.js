// var Tesst = "AY HABAAAAAAAAl";

// // function GetLocation_Fetch(){
// //     let V;
// //     var requestOptions = {
// //       method: "GET",
// //     };

// //     fetch(
// //       "https://api.geoapify.com/v1/ipinfo?&apiKey=b1eafd427c864fd8ad4009a48be4ec1f",
// //       requestOptions
// //     )
// //       .then((response) => response.json())
// //       .then((result) => {
// //         console.log(result.country.languages[0].name_native);
// //         V = result.country.languages[0].name_native;
// //         console.log(V);
// //         GetLoc(V);
// //         if (result.country.languages[0].name_native === "العربية") {
// //             LangBtn.innerHTML = "English";
// //             //   En_Nav.classList.add("D_None");
// //             //   Ar_Nav.classList.remove("D_None");
// //         } else {
// //             LangBtn.innerHTML = "عربي";
// //             //   Ar_Nav.classList.add("D_None");
// //             //   En_Nav.classList.remove("D_None");
// //         }
// //     })
// //     .catch((error) => console.log("error", error));
// //     // return V;
// //     // console.log(V);
// // }
// // function GetLoc(V){
// //     return V;
// // }
// // var Permenant_Language = "";
// const xhr = new XMLHttpRequest();
// function GetLocation_XHR(){
//   xhr.open(
//     "GET",
//     "https://api.geoapify.com/v1/ipinfo?&apiKey=b1eafd427c864fd8ad4009a48be4ec1f"
//   );
//   xhr.onload = function () {
//     // localStorage.setItem("Permenant_Language", " ");
//     JSON.parse(xhr.responseText);
//     console.log(JSON.parse(xhr.responseText));
//     if (
//       JSON.parse(xhr.responseText).country.languages[0].name_native ===
//       "العربية"
//     ) {
//       localStorage.setItem("Permenant_Language", "عربي");
//       // sessionStorage.setItem("Permenant_Language", "عربي");
//       // sessionStorage.getItem()
//       // Permenant_Language = "عربي";
//       NavIsAR();
//     } else {
//       localStorage.setItem("Permenant_Language", "English");
//       // sessionStorage.setItem("Permenant_Language", "English");
//       // Permenant_Language = "English";
//       NavIsEn();
//     }
//   };

//   xhr.send();

//   // return Permenant_Language
// }

// // setTimeout(()=>{
// //   GetLocation_XHR();
  
// // },500)

// GetLocation_XHR();
// // exports = { GetLocation_XHR, Permenant_Language };



    // alert(`The Password Is :: \t\n\n ${password}`)
    // localStorage.clear()
    // // console.log(Bubbles)
    // // localStorage.setItem("Permenant_Language", "HALAAAA");
    // if (!(location.href.includes("/Home") || location.href.includes("/home"))){
    //     // alert("The Page URL Before Modifications  " + location.href)
    //     location.href += "/Home";
    //     // alert("The Page URL After Modifications  " + location.href)
    // }
    // else{
    //     // alert("The URL Is On Home Page")
    // }

    // if(
    // (localStorage.getItem("Permenant_Language") != "English" && localStorage.getItem("Permenant_Language") != "عربي"))
    // {

    //     const xhr = new XMLHttpRequest();
    //         xhr.open(
    //           "GET",
    //           "https://api.geoapify.com/v1/ipinfo?&apiKey=b1eafd427c864fd8ad4009a48be4ec1f"
    //         );
    //         xhr.onload = function () {
    //         //   localStorage.setItem("Permenant_Language", " ");
    //           JSON.parse(xhr.responseText);
    //           console.log(JSON.parse(xhr.responseText));
    //           if (
    //             JSON.parse(xhr.responseText).country.languages[0].name_native ===
    //             "العربية"
    //           ) {
    //             localStorage.setItem("Permenant_Language", "عربي");
    //             console.log("Lang From Home Conversion :: " + localStorage.getItem("Permenant_Language"));
    //             // sessionStorage.setItem("Permenant_Language", "عربي");
    //             // sessionStorage.getItem()
    //             // Permenant_Language = "عربي";
    //             NavIsAR();
    //           } else {
    //             localStorage.setItem("Permenant_Language", "English");
    //             alert("Lang From Home After Conversion :: " + localStorage.getItem("Permenant_Language"));
    //             // sessionStorage.setItem("Permenant_Language", "English");
    //             // Permenant_Language = "English";
    //             NavIsEn();
    //           }
    //         };
        
    //         xhr.send();
    // }