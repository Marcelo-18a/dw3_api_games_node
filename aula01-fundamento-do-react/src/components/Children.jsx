const Children = ({ children }) => {
  return (
    <>
      <div>
        <p>O conteudo abaixo está sendo recebido através de "Children"</p>
        {children}
      </div>
    </>
  );
};
export default Children;
