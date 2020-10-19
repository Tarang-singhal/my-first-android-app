import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
const ListItem = (props)=>{

  return (
    <>
      <TouchableOpacity>
        <View style={styles.listItem}>
          <Text style={styles.text}>{props.item}</Text>
          <Icon style={styles.icon} name="shopping-basket-remove" onPress={()=>props.deleteItem(props.id)} size={20} color='firebrick'/>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles={
  listItem:{
    backgroundColor: '#fff',
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    borderWidth: 1,
    borderColor: '#f8f8f8',
    borderBottomWidth: 3, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text:{
    color:'#aaa',
    fontSize: 15,
    padding: 10,
    marginLeft: 10,
    marginRight: 5
  },
  icon:{
    marginRight: 20
  }
}

export default ListItem;