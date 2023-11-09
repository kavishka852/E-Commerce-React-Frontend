import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/register");
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
      <Nav className="me-auto navbar_wrapper">
        {localStorage.getItem("user-info") ? (
          <>
            <Link to="/">Product List</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/update/:id">Update Product</Link>
            <Link to="/search">Search Product</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login </Link>
            <Link to="/register">Register </Link>
          </>
        )}
      </Nav>
      localStorage.getItem("user-info") ?
      <Nav>
        <NavDropdown title={user && user.name}>
          <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      :null
    </Navbar>
  );
}
export default Header;
