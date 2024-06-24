const jobtitle = document.querySelectorAll(".job-title-front");
console.log(jobtitle);

fetch("https://6674243575872d0e0a95448f.mockapi.io/v1/mkjg")
  .then((response) => {
    return response.json();
  })
  .then((names) => {
    // var values = names.[9
    // console.log("names", names[0]);
    names.forEach((element) => {
      var uses = element;
      //   console.log(element);
      //   return uses;
      const text = document.createTextNode(jobtitle);
      console.log(text);
    });
  })

  .catch();
// console.log(names);
