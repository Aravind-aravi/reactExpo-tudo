// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet,SafeAreaView,Text, View,TextInput, Button } from 'react-native';
//  import {useDimensions} from  '@react-native-community/hooks'
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: '',
//       todo:["hi","bye"]
//     }
//   } 
//   addTodo = () => {
//     const arr = this.state.todo;
//    arr.push(this.state.text)
//    this.setState({ todo: arr ,text:''});
    
//   }

//   deleteTodo = (t) => {
//     const arr = this.state.todo;
//     const a = arr.filter((arr)=>arr !== t);
//     this.setState(({todo:a}))

//   }
//   render() {
    
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text style={{textAlign:'center'}}> Todo Lists</Text>
//         <TextInput style={styles.inputStyle}
//           onChangeText={(text) => this.setState({ text })}
//           value={this.state.text}
//         />
//         <Button
//           title="Add Todo"
//           color="green"
//           onPress={this.addTodo}
//         />
//         {this.state.todo.map((t,i) => {
//         return <View style={styles.item}> <Text key={i} onPress={()=>this.deleteTodo(t)}>{t}</Text></View>
//         })}
//         {/* <StatusBar style="auto" /> */}
//         {/* <View style={{backgroundColor:'dodgerblue',width:'50%',height:70}}></View> */}
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {

//     backgroundColor: '#fff',
//     margin:10,

//   },
//   inputStyle: {
//     borderColor: 'black',
//     borderWidth: 1,
//     height: 30,
    
//   },
//   item: {
//     margin:10,
//     borderColor: 'black',
//     borderWidth:1,
//   }



// });
// export default App;


// import React from 'react';
// // import { AppLoading } from 'expo';
// import {AppLoading} from 'expo'
// import { Container, Text } from 'native-base';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
// import HomePage from './Components/HomePage';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isReady: false,
//     };
//   }

//   async componentDidMount() {
//     await Font.loadAsync({
//       Roboto: require('native-base/Fonts/Roboto.ttf'),
//       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
//       ...Ionicons.font,
//     });
//     this.setState({ isReady: true });
//   }

//   render() {
//     if (!this.state.isReady) {
//       return <AppLoading />;

//     }

//     return (
//       <Container>
//         <AppLoading></AppLoading>
//         <Text>Open up App.js to start working on your app!</Text>
//      {/* <HomePage></HomePage> */}
//       </Container>
//     );
//   }
// }
