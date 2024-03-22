const posts = [
  {
    title: "Tieu đề bai viết 1",
    img: "https://picsum.photos/536/354",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi unde mollitia tenetur",
  },
  {
    title: "Tieu đề bai viết 2",
    img: "https://picsum.photos/536/354",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi unde mollitia tenetur",
  },
  {
    title: "Tieu đề bai viết 3",
    img: "https://picsum.photos/536/354",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi unde mollitia tenetur",
  },
  {
    title: "Tieu đề bai viết 4",
    img: "https://picsum.photos/536/354",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi unde mollitia tenetur",
  },
];

const html = ` <div class="posts">
${
  posts?.length
    ? posts
        ?.map?.((post, index) => {
          return ` <div class="post-item ${index % 2 !== 0 ? "img-right" : ""}">
                      <img src="${post.img}" alt="">
                    <div>
                         <h2>${post.title}</h2>
                        <p>${post.des}</p>
                    </div>
                 </div> `;
        })
        .join("")
    : "<h3>Không có bài viết</h3>"
}
</div>`;
document.write(html);
