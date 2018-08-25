const url = "https://lit-fortress-6467.herokuapp.com/object";
let albumRow = document.getElementById("albums");
axios.get(url).then(response => {
  console.log(response.data.results);
  let albums = response.data.results;
  albums.forEach(el => {
    albumRow.insertAdjacentHTML(
      "beforeend",
      `
      <div id="${el.id}" class="album-list">
        <img src="./images/${el.title.replace(
          /\s+/g,
          "_"
        )}.jpg" class="img-thumbnail img-album" alt="album cover">
      </div>
    `
    );
  });
  let albumList = document.querySelectorAll(".album-list");
  let playlist = [];
  albumList.forEach(el => {
    el.addEventListener("click", e => {
      let playlistCollection = [];
      console.log(
        albums.find(album => album.id === Number(e.currentTarget.id))
      );
      document.querySelector(".album-tracks").insertAdjacentHTML(
        "beforeend",
        `
        <p>Artist: ${
          albums.find(album => album.id === Number(e.currentTarget.id)).artist
        }, Title: ${
          albums.find(album => album.id === Number(e.currentTarget.id)).title
        }</p>
      `
      );
      playlist.push(
        JSON.stringify(
          albums.find(album => album.id === Number(e.currentTarget.id))
        )
      );
    });
  });
  let clearTracks = document.getElementById("clear-tracks");
  let submitBin = document.getElementById("submit-bin");
  clearTracks.addEventListener("click", e => {
    document.querySelector(".album-tracks").innerHTML = "";
  });
  submitBin.addEventListener("click", e => {
    if (playlist) {
      axios
        .post("https://lit-fortress-6467.herokuapp.com/post", playlist)
        .then(response => {
          console.log(response.data);
          document.querySelector(".album-tracks").innerHTML = "";
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  });
  console.log(playlist);
});
