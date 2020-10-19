import React from 'react';
import { View, Text, Image} from 'react-native';
import Header from './components/header';
import Welcome from './components/welcome';

const App = ()=>{
  const [showHeader,setShowHeader] = React.useState(false);

  {setTimeout(()=>{
    setShowHeader(true);
  },4000)}

  return (
    <>
        {
          showHeader?
            <Header title="SHOPPING LIST"/>
          :
            <>
              <Welcome/>
            </>
        }
    </>
  );
}

const styles={
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  text:{
    color:'darkslateblue',
    fontSize:30
  },
  img:{
    width:100,
    height:100,
    borderRadius: 90/2
  }
}

export default App;