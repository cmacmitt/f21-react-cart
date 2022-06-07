const Header = (props) => {
  return (
    <header>
      <h1>MouseHeavan</h1>
      {props.children}
    </header>
  );
};

export default Header;
