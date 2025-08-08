import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Welcome, {user.email || 'Guest'}!</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Welcome;
