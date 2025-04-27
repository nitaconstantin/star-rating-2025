import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      <StarRating maxRating={7} />
      <StarRating size={24} color="red" />
    </>
  );
}

export default App;
