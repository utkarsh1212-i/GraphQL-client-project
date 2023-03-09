import logo from "./assets/logo.png";
export default function Header() {
  return (
    <nav className="navbar text-white bg-dark mb-3 p-2">
      <div className="d-flex">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" className="mr-2" />
        </a>
          <div className="my-2">
            <h4>Project MGMT</h4>
          </div>
      </div>
    </nav>
  );
}
