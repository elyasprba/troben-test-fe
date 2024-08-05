import navbarStyle from './navbar-style';

function Navbar() {
  const { navbar } = navbarStyle();

  return (
    <>
      <div className={navbar}>
        <h3>
          Troben <span>Test FE</span>
        </h3>
      </div>
    </>
  );
}

export default Navbar;
