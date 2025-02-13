import Search from "../Search/Search";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Innoscripta News</div>
      <div style={{ display: "flex" }}>
        <Search searchParam="" placeholder="Search by keyword" />
      </div>
    </header>
  );
};

export default Header;
