import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Blogs from './Blogs';
import Blog from './Blog';
import Home from './Home';
import About from './About';
import Hi from './Hi';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
