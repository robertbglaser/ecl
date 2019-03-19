import React, { Component } from 'react';
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


    var sortedData = extractedData.sort(function(a, b){
      return a.score-b.score
    
    });

    var finalData = JSON.stringify(sortedData)
   console.log(finalData)
   
    

return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
