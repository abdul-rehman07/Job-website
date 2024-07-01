function customdiv(element) {
  //job titles
  let outterDiv = document.getElementById("dummy");
  var jobtitles = document.createElement("div"); //new div for all data
  jobtitles.classList.add("job-title-front");

  //   <div class="job-thumbnail-front">
  //   <img src="CPPA.png" />
  // </div>

  const imgdiv = document.createElement("img");
  imgdiv.classList.add("job-thumnail-front");
  const img2 = imgdiv.setAttribute("src", element.imageURL);
  const imgpic = document.createTextNode(img2);
  imgdiv.appendChild(imgpic);

  const h2 = document.createElement("h2");
  h2.classList.add("job-title");
  const titles = document.createTextNode(element.title);
  h2.appendChild(titles);

  const p1 = document.createElement("p");
  p1.classList.add("para-3");
  const posts = document.createTextNode(element.post);
  p1.appendChild(posts);

  jobtitles.appendChild(imgdiv);
  jobtitles.appendChild(h2); //appending the div
  jobtitles.appendChild(p1);
  outterDiv.appendChild(jobtitles);
  // locations data

  var locational = document.createElement("div");
  locational.classList.add("location");

  const p2 = document.createElement("p");
  p2.classList.add("para-5");
  const publish = document.createTextNode("Publish Date :");
  p2.appendChild(publish);

  const p3 = document.createElement("p");
  p3.classList.add("para-6");
  const Date = document.createTextNode(element.publishdate);
  p3.appendChild(Date);

  const p4 = document.createElement("p");
  p4.classList.add("para-8");
  const cities = document.createTextNode(element.city);
  p4.appendChild(cities);

  locational.appendChild(p2);
  locational.appendChild(p3);
  locational.appendChild(p4);
  jobtitles.appendChild(locational);

  // it is left side of changing
  // const rightside = document.createElement("div");
  // rightside.classList.add("job-right-box");

  // const p5 = document.createElement("div");
  // p5.classList.add("para-1");
  // const last = document.createTextNode("Last Date :");
  // p5.appendChild(last);

  // const p6 = document.createElement("div");
  // p6.classList.add("para-2");
  // const lastdate = document.createTextNode(element.city);
  // p6.appendChild(lastdate);

  // const p7 = document.createElement("div");
  // p7.classList.add("para-4");
  // const applyview = document.createTextNode("view & apply");
  // p7.appendChild(applyview);

  // rightside.appendChild(p5);
  // rightside.appendChild(p6);
  // rightside.appendChild(p7);
  // locational.appendChild(rightside);
}

// }
// run();

// // // console.log(jobtitle);

fetch("https://6674243575872d0e0a95448f.mockapi.io/v1/mkjg")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    function run() {
      response.forEach((element) => {
        customdiv(element);
      });
    }
    run();
  })
  .catch((error) => console.log(error));

//   // function run() {
//   response.forEach((element) => {
//     //job titles
//     let outterDiv = document.getElementById("dummy");
//     var jobtitles = document.createElement("div"); //new div for all data
//     jobtitles.classList.add("job-title-front");
//     const h2 = document.createElement("h2");
//     h2.classList.add("job-title");
//     const titles = document.createTextNode(element.title);
//     h2.appendChild(titles);
//     const p1 = document.createElement("p");
//     p1.classList.add("para-3");
//     const posts = document.createTextNode(element.post);
//     p1.appendChild(posts);
//     jobtitles.appendChild(h2); //appending the div
//     jobtitles.appendChild(p1);
//     outterDiv.appendChild(jobtitles);
//     // locations data
//     var locational = document.createElement("div");
//     locational.classList.add("location");
//     const p2 = document.createElement("p");
//     p2.classList.add("para-5");
//     const publish = document.createTextNode("Publish Date :");
//     p2.appendChild(publish);
//     const p3 = document.createElement("p");
//     p3.classList.add("para-6");
//     const Date = document.createTextNode(element.publishdate);
//     p3.appendChild(Date);
//     const p4 = document.createElement("p");
//     p4.classList.add("para-8");
//     const cities = document.createTextNode(element.city);
//     p4.appendChild(cities);
//     locational.appendChild(p2);
//     locational.appendChild(p3);
//     locational.appendChild(p4);
//     jobtitles.appendChild(locational);
//     // it is left side of changing
//     const rightside = document.createElement("div");
//     rightside.classList.add("job-right-box");
//     const p5 = document.createElement("div");
//     p5.classList.add("para-1");
//     const last = document.createTextNode("Last Date :");
//     p5.appendChild(last);
//     const p6 = document.createElement("div");
//     p6.classList.add("para-2");
//     const lastdate = document.createTextNode(element.city);
//     p6.appendChild(lastdate);
//     const p7 = document.createElement("div");
//     p7.classList.add("para-4");
//     const applyview = document.createTextNode("view & apply");
//     p7.appendChild(applyview);
//     locational.appendChild(p5);
//     locational.appendChild(p6);
//     locational.appendChild(p7);
//   });
//   // }
//   // run();
// })
// .catch((error) => console.log(error));
