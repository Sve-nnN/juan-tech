import Logo from "@/assets/logo.webp";
import LightMode from "@/assets/lightMode.svg";
export default function Navbar() {
  return (
    <div className="flex spaceAround navbar">
      <img className="logo" src={Logo} />
      <div className="flex spaceBetween links">
        <a>Acerca de mi</a>
        <a>Blog</a>
        <a>Certificados</a>
      </div>
      <img src={LightMode} className="lightMode"/>
    </div>
  );
}
