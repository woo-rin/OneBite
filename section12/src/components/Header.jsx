import './Header.css';

const Header = ({ title, lefchild, rightchild }) => {
  return (
    <header className="Header">
      <div className="header_left"></div>;<div className="header_center"></div>;
      <div className="header_reight"></div>;
    </header>
  );
};
export default Header;
