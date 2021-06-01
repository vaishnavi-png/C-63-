import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacityBase } from "react-native";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      displayText: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"#434"}
          centerComponent={{
            text: "Monkey-Chunky",
            style: { fontSize: 20, color: "#fff" },
          }}
        />
        <TextInput 
        style = {styles.inputBox}
        onChangeText = {(txt)=>{
          this.setState({
            text: txt
          })                            //no quotations
        }}
         value = {this.state.text}
        />
        <TouchableOpacity 
        style = {styles.goButton}
        onPress={()=>{
          this.setState({
            displayText: this.state.text //set whatever written in text box
          })
        }}>
          <Text style = {styles.buttonText}>Go</Text>
          
        </TouchableOpacity>
      
        <Text style={styles.displayText}>{this.state.displayText}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  inputBox: {
    marginTop: 200,
    width: "80%",
    height: 40,
    alignSelf: "center",
    textAlign : "center",
    borderWidth: 4,
  },

  goButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10
  },

  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

  displayText:{
    textAlign: "center",
    fontSize: 38
  },

});
