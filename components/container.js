// w-full gerekli: body flex-col olduğu için mx-auto onsuz içeriği daraltır
function Container({ children }) {
  return <div className="mx-auto w-full max-w-7xl px-8">{children}</div>;
}

export default Container;
