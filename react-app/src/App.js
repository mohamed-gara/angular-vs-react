import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function UnordredList(props) {
  return (
    <ul className="list-group">{props.children}</ul>
  );
}

function Item({children}) {
  return (
    <li className="list-group-item">{children}</li>
  );
}

function LabeledProgress({id, label, ...progressProps}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <Progress {...progressProps}/>
    </div>
  );
}

LabeledProgress.propTypes = {
  ...Progress.propTypes,
  id: PropTypes.string,
  label: PropTypes.string
};

class App extends Component {
  render() {
    return (
      <div className="App">        
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="alert alert-light" role="alert">Style abstraction</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <ul className="list-group">
                <li className="list-group-item">Style encapsulation and abstraction</li>
                <li className="list-group-item">Component wrapping</li>
                <li className="list-group-item">High order component</li>
              </ul>                             
            </div>
            <div className="col-sm">
              <UnordredList>
                <Item>Style encapsulation and abstraction</Item>
                <Item>Component wrapping</Item>
                <Item>High order component</Item>
              </UnordredList>               
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="alert alert-light" role="alert">Component Wrapping</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="project1">Project 1</label>
                <Progress id="project1" color="success" value={80}/>
              </div>
              <div className="form-group">
                <label htmlFor="project2">Project 2</label>
                <Progress id="project2" color="info" value={50}/>
              </div>              
            </div>
            <div className="col-sm">
              <LabeledProgress id="project1" label="Project 1" color="success" value={80}></LabeledProgress>              
              <LabeledProgress id="project2" label="Project 2" color="info" value={50}></LabeledProgress>              
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="alert alert-light" role="alert">High Order Component</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              todo ...
            </div>
            <div className="col-sm">
              todo ...
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;