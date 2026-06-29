import Image from "next/image";
import Gallery from "./components/Gallery";
import TodoList from "./components/TodoList";
import PackingList from './components/PackingList'

export default function Home() {
  return (
    <>
      <Gallery />
      <TodoList />
      <PackingList />
    </>
  );
}
