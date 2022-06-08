import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <Link to="/">
        <h1>MouseHeavan</h1>
      </Link>
      {props.children}
    </header>
  );
};

export default Header;
