import { keyWordsMap } from "@/constants";

// 静态页面维护映射
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <p>keywords: {keyWordsMap["/home"]}</p>
    </div>
  );
}
