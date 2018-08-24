console.log("Hello?");
const url = "https://lit-fortress-6467.herokuapp.com/object";

axios.get(`${url}`).then(response => {
  console.log(response.data.results);
  let albums = response.data.results;
  let mainRight = document.getElementById("main-right-content");
  randomAlbums(albums).forEach(el => {
    mainRight.insertAdjacentHTML(
      "beforeend",
      `
    <div class="row">
        <div class="col-md-6 offset-md-4">
          <img src="./images/${el.title.replace(
            /\s+/g,
            "_"
          )}.jpg" class="img-thumbnail img-cover" alt="album cover">
        </div>
    </div>
           `
    );
  });
});

const randomAlbums = arr => {
  let newArr = [];
  for (let i = 0; i < 3; i++) {
    newArr.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return newArr;
};
