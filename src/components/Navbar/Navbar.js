export default function Navbar(props) {
  return (
    <nav className={props.isOpen ? 'navbar navbar__open': 'navbar'}>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <hr />

      <span>Login</span>
      <button>Sign up</button>
    </nav>
  )
}