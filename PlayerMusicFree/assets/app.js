const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = {
  curentIndex: 0,
  songs: [
    {
      name: "Thủy Triều",
      singer: "Quang Hùng Master D",
      path: "./assets/music/Thuytrieu.mp3",
      image: "./assets/img/ThuyTrieu.jpg",
    },
    {
      name: "Bánh Mì Không",
      singer: "Dạt G",
      path: "./assets/music/BanhMiKhong.mp3",
      image: "./assets/img/BanhMiKhong.jpg",
    },
    {
      name: "Lửng Lơ",
      singer: "Phong Max",
      path: "./assets/music/LungLo.mp3",
      image: "./assets/img/LungLo.jpg",
    },
    {
      name: "Tình Đắng Như Ly Cafe",
      singer: "MCK",
      path: "./assets/music/TinhDangNhuLyCafe.mp3",
      image: "./assets/img/TinhDangNhuLyCafe.jpg",
    },
    {
      name: "Từng Là",
      singer: "Vũ Cát Tường",
      path: "./assets/music/TungLa.mp3",
      image: "./assets/img/TungLa.jpg",
    },
    {
      name: "Anh Thanh Niên",
      singer: "Huy R",
      path: "./assets/music/AnhThanhNien.mp3",
      image: "./assets/img/AnhThanhNien.jpg",
    },
    {
      name: "500 Miles",
      singer: "Undefined",
      path: "./assets/music/500Miles.mp3",
      image: "./assets/img/500Miles.jpg",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
            <div class="song">
                <div class="thumb" style="background-image: url(${song.image})">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
      `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },
  handleEvents: function () {
    const cd = $(".cd");
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newWidth = cdWidth - scrollTop;
      cd.style.width = newWidth > 0 ? `${newWidth}px` : 0;
      cd.style.opacity = newWidth / cdWidth;
    };
  },
  start: function () {
    this.handleEvents();

    this.render();
  },
};
app.start();
