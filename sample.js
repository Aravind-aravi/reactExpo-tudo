import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView,Text, View,TextInput, Button } from 'react-native';
 import {useDimensions} from  '@react-native-community/hooks'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      todo:[]
    }
  } 
  addTodo = () => {
    const arr = this.state.todo;
   arr.push(this.state.text)
   this.setState({ todo: arr ,text:''});
    
  }

  deleteTodo = (t) => {
    const arr = this.state.todo;
    const a = arr.filter((arr)=>arr !== t);
    this.setState(({todo:a}))

  }
  render() {
    
    return (
      <SafeAreaView style={styles.container}>
        <Text> app!</Text>
        <TextInput style={styles.inputStyle}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          title="Add Todo"
          color="green"
          onPress={this.addTodo}
        />
        {this.state.todo.map((t,i) => {
        return  <Text key={i} onPress={()=>this.deleteTodo(t)}>{t}</Text>
        })}
        {/* <StatusBar style="auto" /> */}
        {/* <View style={{backgroundColor:'dodgerblue',width:'50%',height:70}}></View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',  
    justifyContent: 'center',
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    
  }



});
export default App;