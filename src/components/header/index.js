import "./style.scss";
import logo from "../../assets/images/svgexport-98.svg";

export const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={logo} alt="plutus" style={{ height: "100%", width: "100%" }} />
            </div>
      </div>
    )
}