function Saludo({ nombre, children }) {
  return (
    <>
      <p>Esto es un saludo.</p>
      {children}
      <p>Hola, {nombre} </p>;
    </>
  );
}

export default Saludo;
