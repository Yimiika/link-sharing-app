import Image from "next/image";
import HomePage from "../components/HomePage";
import Nav from "../components/Navbar";


export default function Home() {
  return (
    <main className="">
      <Nav/>
      <HomePage />
    </main>
  );
}