// // // console.log(jobtitle);

fetch("https://6674243575872d0e0a95448f.mockapi.io/v1/mkjg")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    function run() {
      const jobtitle = document.querySelectorAll(".job-title-front");
      response.forEach((element) => {
        const h2 = document.createElement("h2");
        h2.classList.add("job-title");

        const titles = document.createTextNode(element.title);
        h2.appendChild(titles);

        const p1 = document.createElement("p");
        p1.classList.add("para-3");
        const posts = document.createTextNode(element.post);
      });
    }
  })

  .catch((error) => console.log(error));

// const markup = `<div>${element}</div>`;
// console.log(element.title);
// // const markup = element;
// const windowObj = window.document.querySelectorAll(".job-title");
// for (let i = 0; i < windowObj.length; i++) {
//   const element1 = windowObj[i];
//   console.log(element1.insertAdjacentHTML("beforeend", markup));
// }
