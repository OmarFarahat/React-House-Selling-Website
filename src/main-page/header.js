import Globo from "./GloboLogo.png";
import "./main-page.css";
const Header = () => {
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={Globo} className="logo" alt="logo" />
      </div>
      <div className="col-md-7 mt-5 subtitle">
        Providing Houses All Over The World
      </div>
    </header>
  );
};
export default Header;
