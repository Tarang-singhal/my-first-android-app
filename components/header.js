import React,{useState} from 'react';
import { View, Text, FlatList,TextInput} from 'react-native';
import ListItem from './listItem';
import AddItem from './addItem';
const { v4: uuidV4 } = require('uuid');
const Header = (props)=>{
    const [items,setItems]=React.useState(
        [
            {id:uuidV4(),item:'Milk'},
            {id:uuidV4(),item:'Eggs'},
            {id:uuidV4(),item:'Chicken'},
            {id:uuidV4(),item:'Oil'},
            {id:uuidV4(),item:'Butter'},
            {id:uuidV4(),item:'Ketchup'},
        ]
    );

    const deleteItem = (id) => {
      setItems((prevItems=>
        prevItems.filter((item=>
          item.id!==id
        ))
      ))
    }

    const addItem = (newItem) =>{
      if(newItem.trim()){
        setItems((prevItems)=>{
          var item = {
            id:uuidV4(),
            item:newItem.trim(),
          };
          return [item,...prevItems];
        })
      }
    }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
        <AddItem submit={addItem}/>
        <FlatList data={items} renderItem={({item})=><ListItem deleteItem={deleteItem} item={item.item} id={item.id} />} />
      </View>
    </>
  );
}

const styles={
  container:{
    flex:1,
  },
  text:{
    color:'white',
    fontSize:20,
    backgroundColor:'violet',
    padding: 20,
    textAlign: 'center',
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
  }
}

export default Header;