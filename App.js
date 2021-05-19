import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Alert extends Component {
       displayAlert =()=> {
         alert("Play Sound 1");
       }

       render() {
         return(
      <View style={{width:100, height:50, marginTop:40, marginLeft:100}}>
       <Button title="sound1" color="red" onPress={this.displayAlert}/>
      </View>
         );
       }
}

class Alert1 extends Component {
       Alert =()=> {
         alert("Play Sound 2");
       }

       render() {
         return(
      <View style={{width:100, height:50, marginTop:50, marginLeft:100}}>
       <Button title="sound2" color="blue" onPress={this.Alert}/>
      </View>
         );
       }
}

class Alert2 extends Component {
       Alert =()=> {
         alert("Play Sound 3");
       }

       render() {
         return(
      <View style={{width:100, height:50, marginTop:50, marginLeft:100}}>
       <Button title="sound3" color="purple" onPress={this.Alert}/>
      </View>
         );
       }
}

class Alert3 extends Component {
       Alert =()=> {
         alert("Play Sound 4");
       }

       render() {
         return(
      <View style={{width:100, height:50, marginTop:50, marginLeft:100}}>
       <Button title="sound4" color="green" onPress={this.Alert}/>
      </View>
         );
       }
}

export default class App extends Component {
 render() {
   return(
     <View style={{width:30, height:50, marginTop:50, marginLeft:50}}>
        <Alert/>
        <Alert1/>
        <Alert2/>
        <Alert3/>
     </View>
   );
   
 }
}
