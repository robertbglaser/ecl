import React, { Component } from 'react';
//import logo from './logo.svg';
import inputData from './goodData';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      scoreData:[]
    };
  }


  componentDidMount(){

    this.setState({scoreData:inputData});

  }
   


  
  render() {

    var extractedData =[];
    for (let idx of this.state.scoreData){
      extractedData.push({
        score:idx.score,
        id:idx.id
    });
    }

   // var stringExtractedData = JSON.stringify(extractedData);
    var sortedData = extractedData.sort(function(a, b){
      console.log("in the sort")
      return a.score-b.score
    
    });
    console.log("after the sort",  sortedData)
    /*var sortedData = stringExtractedData.sort(function(obj1, obj2) {
      // Ascending: first age less than the previous
      return obj2.score - obj1.score;
      
  }); */

  

  
    

   
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
