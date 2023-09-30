import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(20);
  const [items, setItems] = useState([]);

  const onScroll = () => {
    // console.log("total height of the visible window" + window.innerHeight);
    // console.log("it show where I am right now vertically" + window.scrollY);
    // console.log(
    //   "total height of the the window",
    //   window.document.body.offsetHeight
    // );
    console.log(
      window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 50
    );
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight - 50
    ) {
      console.log("fetching items...");
      setCount((p) => p + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  useEffect(() => {
    // Create an array of items based on the count
    const newItems = Array.from({ length: count }, (_, index) => index + 1);
    setItems(newItems);
  }, [count]);

  return (
    <AppWrapper>
      <Navbar>
        <h1>Infinte Scrolling in React...</h1>
      </Navbar>
      <Body>
        {items.map((item) => (
          <h1 key={item}>{`This if ${item} item `}</h1>
        ))}
      </Body>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  background-color: orange;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
