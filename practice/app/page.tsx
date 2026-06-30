import Image from "next/image";
import Gallery from "./components/Gallery";
import TodoList from "./components/TodoList";
import PackingList from "./components/PackingList";
import ProductTable from "./components/FilterableProductTable";
import Form from "./components/Form";
import Counter from "./components/Counter";
import Toolbar from "./components/Toolbar";
import FeedbackForm from "./components/FeedbackForm";
import QuizForm from "./components/QuizForm"
import TravelPlan from "./components/TravelPlan"

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function Home() {
  return (
    <>
       {/* <Gallery />
       <TodoList />
       <PackingList />
       */}
       {/* Todays work  tuesday 30-2026*/}
      {/* <ProductTable products={PRODUCTS} />
      <Form />
      <Counter /> 
      <Toolbar />
      <FeedbackForm/>
      <QuizForm/> */}
      <TravelPlan/>
    </>
  );
}
