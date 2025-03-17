import Navbar from "./navbar";

export default function BaseLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
