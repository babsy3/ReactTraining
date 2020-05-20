import React, {Component} from 'react'
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
import Counter from './components/Counter'

class App extends Component{
    render(){
      return(
        <div className='App'>
          <Counter/>
          {/* <Message/> */}
       {/* <Greet name="Bruce" heroName="Superman"/>
       <Greet name="Diana" heroName="WonderWoman"/>
       <Greet name="Luke" heroName="Batman"/>
       <Welcome name="Bruce" heroName="Superman"/>
       <Welcome name="Bruce" heroName="Superman"/>
       <Welcome name="Bruce" heroName="Superman"/> */}
       </div>
      );
    }
  }
