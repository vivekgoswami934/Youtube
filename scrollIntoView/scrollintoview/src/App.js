import logo from "./logo.svg";
import "./App.css";
import Box from "./Box";

const getRandomColor = () => {
  // Generate a random hex color code
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function App() {
  const array = new Array(20).fill(0).map((_, index) => index + 1);

  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",  
        alignItems: "center"
      }}
    >
      {array.map((el, i) => {
        return <Box key={i} color={getRandomColor()} i={i} />;
      })}
    </div>
  );
}

export default App;
