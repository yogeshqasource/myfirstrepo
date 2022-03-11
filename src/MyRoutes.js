import { Link } from 'react-router-dom';

export default function MyRoutes() {
    return (
    <nav>
        <ul style={{ float: 'left', width: '100%' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
    </nav>
    );
}