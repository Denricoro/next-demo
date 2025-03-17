const getData = () => {
  return fetch("http://localhost:3000/api/getData")
    .then((response) => response.json())
    .then((data) => data);
};

// 需要从api动态获取数据的页面
export default async function Home() {
  const { keywords } = await getData();
  return (
    <div>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
      <p>keywords: {keywords}</p>
    </div>
  );
}
