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
  // const findAlbum = albumId => {
  //   return albums.id === albumId;
  // };
  console.log(albumList);
  albumList.forEach(el => {
    el.addEventListener("click", e => {
      let playlistCollection = [];
      console.log(e.target);
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
      playlistCollection.push(
        albums.find(album => album.id === Number(e.currentTarget.id))
      );
      console.log(playlistCollention);
    });
  });
});
