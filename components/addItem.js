import React from 'react';
import {Text,View,TouchableOpacity,TextInput} from 'react-native';
const AddItem = (props)=>{

    const [newItem,setNewItem]=React.useState('');
    const inputChange = (newItem)=>{
          setNewItem(newItem);
      }
    const submit = ()=>{
        setNewItem('');
        props.submit(newItem);
    }
  return (
    <>
        <View>
            <TextInput value={newItem} onChangeText={(text)=>{inputChange(text)}} placeholder='NEW ITEM...' style={styles.input}/>
            <TouchableOpacity>
                <Text onPress={submit} style={styles.text}>ADD</Text>
            </TouchableOpacity>
        </View>
    </>
  );
}

const styles={
  text:{
    color:'blue',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    marginBottom:10,
    marginLeft: 15,
    marginRight:15,
    backgroundColor:'lightblue'
  },
  input:{
    backgroundColor:'#eee',
    borderBottomWidth:2,
    borderBottomColor: 'lightblue',
    marginBottom:5,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
  },
}

export default AddItem;