import Search from "../Search";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo" data-test="company-name">
        Innoscripta News
      </div>
      <div style={{ display: "flex" }}>
        <Search
          searchParam="q"
          name="q"
          id="q"
          placeholder="Search by keyword"
        />
      </div>
    </header>
  );
};

export default Header;
