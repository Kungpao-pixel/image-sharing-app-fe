

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">

            Share<strong>Pho</strong>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              
              <a href="/login"><strong>Sign In</strong></a>
              
            </li>
            <li>
              <a href="/register"><strong>Sign Up</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
