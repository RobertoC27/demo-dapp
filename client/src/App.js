import React, { Component } from 'react';
import './App.scss';
import headerImg from './theme_styles/img/header-4.jpg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Hello world</div>
        <button type="button" className="btn btn-warning">Coming Soon!</button>
        <button type="button" className="btn btn-primary m-1">Wenas!</button>
        <section className="row no-gutters p-0 bg-white">
          <div className="col-md-5 col-xl-6 d-flex flex-column order-md-2">
            <img src={headerImg} alt="Image" className="flex-grow-1" />
          </div>
          <div className="col-md-7 col-xl-6 order-md-1 height-60 height-md-70">
            <div className="row w-100 no-gutters justify-content-center py-4">
              <div className="col-md-10 col-lg-9 col-xl-8 p-3">
                <h1 className="display-4 display-4">Build a stylish website with ease.</h1>
                <p className="lead">Speed up your workflow with tons of pre-made content blocks. Assembling
          your site is easier than ever before.</p> <a href="#" className="btn btn-lg btn-primary">Learn More</a>

              </div>
            </div>
          </div>
        </section>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <a className="d-flex align-items-center flex-fill" href="#" data-toggle="collapse" data-target="#accordion-panel-1">
                <span className="mb-0 text-primary py-1 font-weight-bold">How do I perform check out?</span>
              </a>
              <i className="material-icons d-block text-dark">keyboard_arrow_right</i>
            </div>
            <div id="accordion-panel-1" className="collapse">
              <div className="py-1">
                Answer 1
            </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <a className="d-flex align-items-center flex-fill" href="#" data-toggle="collapse" data-target="#accordion-panel-2">
                <span className="mb-0 text-primary py-1 font-weight-bold">What if I change my mind?</span>
              </a>
              <i className="material-icons d-block text-dark">keyboard_arrow_right</i>
            </div>
            <div id="accordion-panel-2" className="collapse">
              <div className="py-1">
                Answer 2
            </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <a className="d-flex align-items-center flex-fill" href="#" data-toggle="collapse" data-target="#accordion-panel-3">
                <span className="mb-0 text-primary py-1 font-weight-bold">Are meals provided with accommodation?</span>
              </a>
              <i className="material-icons d-block text-dark">keyboard_arrow_right</i>
            </div>
            <div id="accordion-panel-3" className="collapse">
              <div className="py-1">
                Answer 3
            </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
