import { oneLinkHost } from "@/constants";

export default function Navbar() {
  // TODO：修正onelink中href，使其拼接上当前页面的keywords
  // /home ->  https://xxx.onelink.me/WRFSSF/website?keywords=home
  // /blog ->  https://xxx.onelink.me/WRFSSF/website?keywords=blog
  // /blog/xxx -> https://xxx.onelink.me/WRFSSF/website?keywords=blog_xxx

  return (
    <nav style={{ backgroundColor: "blue", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <a href="/home">home</a>
        <a href="/blog">blog</a>
        <a href={oneLinkHost}>onelink</a>
      </div>
    </nav>
  );
}
