import React from 'react';
import MainPage from "./components/MainPage";
// @ts-ignore
import {Provider} from'react-redux'
import state from "./redux/store";

const App:React.FC = (props)=>{
  return(
      <Provider store={state}>
      <MainPage/>
      </Provider>
  )
}

export default App;
