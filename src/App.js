import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChessPlayerCard from './ChessPlayerCards';
import AddChessPlayerForm from './AddChessPlayerForm';
import EditChessPlayerForm from './EditChessPlayerForm';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add-player">Add Player</Link>
                        </li>
                        <li>
                            <Link to="/edit/:id">Edit Player</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<ChessPlayerCard/>}/>
                    <Route path="/add-player" element={<AddChessPlayerForm/>}/>
                    <Route path="/edit/:id" element={<EditChessPlayerForm/>}/>
                </Routes>
            </div>
        </Router>
    );
}
export default App;