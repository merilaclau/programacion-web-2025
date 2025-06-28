import { useState } from "react";
import Saludo from "./components/Saludo";
import Card from "./components/Card";

import "./App.css";

const INFO_CARDS = [
  {
    imagen:
      "https://38.media.tumblr.com/f264b862a6bf8ba5b9f06bf8bf4ea635/tumblr_na0kcnVUoi1st5lhmo1_1280.jpg",
    titulo: "Lorem ipsum",
    descripcion: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolores facere atque est? Ea libero, fugit ullam quis. Cupiditate
      dolor molestias error eum eius mollitia neque sint temporibus  facilis veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing 
      elit. Harum perspiciatis illum maxime earum ipsam quas  corporis suscipit blanditiis similique, iste unde, optio error incidunt, magni 
      alias animi dolore dolorem, quae.`,
  },
  {
    imagen:
      "https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8fDA%3D",
    titulo: "Lorem ipsum 2",
    descripcion: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              dolores facere atque est? Ea libero, fugit ullam quis. Cupiditate
              dolor molestias error eum eius mollitia neque sint temporibus
              facilis veritatis.`,
  },
  {
    imagen: "https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg",
    titulo: "Lorem ipsum 3",
    descripcion: `Esta es la 3era card`,
  }
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", columnGap: 16 }}>
      {INFO_CARDS.map((item) => (<Card titulo={item.titulo} imagen={item.imagen} descripcion={item.descripcion} />))}
    </div>
  );
}

export default App;
