import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LoginPage from "./login/page";

export default function Home() {
  return (
    <main className="">
      <LoginPage/>
    </main>
  );
}
