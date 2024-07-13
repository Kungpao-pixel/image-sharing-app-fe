import { LuUpload } from "react-icons/lu";

const NavbarLogout = () => {
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
              <a href="/create"><LuUpload /><strong>Upload</strong></a>
            </li>
            <li>
              
              <a href="/"><strong>Logout</strong></a>
              
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarLogout
