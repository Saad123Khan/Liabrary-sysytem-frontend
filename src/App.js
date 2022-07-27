import './App.css';
import User from './Page/User';
import Books from './Page/Books';
import UserList from './Page/UserList'
import BookList from './Page/BooksList'
import Header from './Header';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Header/>
        <Routes>
          <Route exact path="/userlist" element={<UserList/>} />
          <Route exact path="/booklist" element={<BookList/>} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/book" element={<Books />} />
        </Routes>
    </div>
  );
}

export default App;
