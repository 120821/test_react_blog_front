import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
//import App from './App';
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
        <Route path="/about" element={<About />} />
        <Route path="/hi" element={<Hi />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route exact path="/" render={() => <Home count={this.state.count} />} />
        <Route exact path="/about" render={() => <About count={this.state.count} handleIncrement={this.handleIncrement} />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
