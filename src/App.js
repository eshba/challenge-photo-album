import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Albums from './components/Albums';
import NotFound from './components/NotFound';
import Photos from './components/Photos';


import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='/albums/:id' element={<Photos />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
