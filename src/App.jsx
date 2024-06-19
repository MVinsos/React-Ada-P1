import React from "react";
import "./styles/App.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Article } from "./components/Article/Article";
import Article1 from "./assets/images/article1.jpeg";
import Article2 from "./assets/images/article2.jpeg";
import Article3 from "./assets/images/article3.jpeg";
import Article4 from "./assets/images/article4.jpeg";
import { Counter } from "./components/Counter/Counter";


class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum expedita neque, pariatur placeat veritatis sit quia. Aut pariatur error recusandae, sequi facilis, dolores atque necessitatibus porro aliquid est ipsum." thumbnail={Article1} />

          <Article title="Vibrant Portraits of 2020" provider="Space News" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum expedita neque, pariatur placeat veritatis sit quia. Aut pariatur error recusandae, sequi facilis, dolores atque necessitatibus porro aliquid est ipsum." thumbnail={Article2} />

          <Article title="36 Days of Malayalam type" provider="Spacefligth Now" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum expedita neque, pariatur placeat veritatis sit quia. Aut pariatur error recusandae, sequi facilis, dolores atque necessitatibus porro aliquid est ipsum." thumbnail={Article3} />

          <Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum expedita neque, pariatur placeat veritatis sit quia. Aut pariatur error recusandae, sequi facilis, dolores atque necessitatibus porro aliquid est ipsum." thumbnail={Article4}/>
        </section>
        <Counter />
      </>
    );
  }
}

export default App;
