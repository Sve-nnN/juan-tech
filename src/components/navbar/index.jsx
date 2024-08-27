export default function Navbar() {
  return (
    <div className="flex spaceAround navbar">
      <img src="/src/assets/logo.webp" />
      <div className="flex spaceBetween">
        <a>Acerca de mi</a>
        <a>Blog</a>
        <a>Certificados</a>
      </div>
      <img src="/src/assets/lightMode.svg" />
    </div>
  );
}
