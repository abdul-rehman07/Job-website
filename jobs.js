// const jobtitle = document.querySelectorAll(".job-title-front");
// console.log(jobtitle);

fetch("https://6674243575872d0e0a95448f.mockapi.io/v1/mkjg")
  .then((response) => {
    return response.json();
  })
  .then((names) => {
    names.forEach((element) => {
      const markup = `<div>${element}</div>`;
      const windowObj = window.document.querySelectorAll(
        ".job-thumbnail-front"
      );
      console.log(windowObj[0].insertAdjacentHTML("beforeend", markup));
    });
  })

  .catch((error) => console.log(error));
