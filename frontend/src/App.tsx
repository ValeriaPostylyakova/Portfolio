import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="relative min-h-full flex flex-col">
            <Outlet />
        </div>
    );
}

export default App;
