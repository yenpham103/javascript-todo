var keyword = "lorem";

var content = `Pham Yen f8 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
var count = 0;
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var result = "";
while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;

  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  count++;
}
result += content;

var title = `<p>Tim kiem tu khoa <b> ${keyword} </b></p>`;

var bottom = `<p>Da tim thay <b>${count}</b> ket qua voi tu khoa <b>${keyword}</b></p>`;
document.write(title + result + bottom);
