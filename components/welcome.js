import React from 'react';
import { View, Text, Image} from 'react-native';

const Welcome = ()=>{
  const [showHeader,setShowHeader] = React.useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
        <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}></Image>
    </View>
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

export default Welcome;