import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {Button} from "native-base";


var itemArray = new Array(9).fill('empty');
export default class App extends React.Component {
  constructor (props){
    super(props);x
    this.state = {
      isCircle: false,
      winMessage: ""
    };
  }

  drawItem = itemNumber => {
    //decide what to draw: circle or cross or default
    if(itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({isCross: !itemArray[itemNumber]}, () => {});
    }
    // TODO: check for win
  this.winGame();
  };

  chooseItemIcon = itemNumber => {
    //Choose appropriate icon
    if (itemArray[itemNumber] !== "empty"){
      return itemArray[itemNumber] ? "cross" : "circle"
    }
    return "pencil";


  };

  chooseItemColor = itemNumber => {
    // choose color for icon
    if (itemArray[itemNumber] !== "empty"){
      return itemArray[itemNumber] ? "red" : "green"
    }
    return "black";
  };

  resetGame = () => {
    //reset all values and states
    itemArray.fill("empty");
    this.setState({ winMessage: ''})
    //force update to component
    this.forceUpdate();
  };

  winGame =() => {
    // decide/check winner
if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[1])  && (itemArray[1] == itemArray[2])) {
  this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat('win')})
} else if ((itemArray[3] !== "empty") && (itemArray[3] == itemArray[4])  && (itemArray[4] == itemArray[5])) {
  this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat('win')})
} else if ((itemArray[6] !== "empty") && (itemArray[6] == itemArray[7])  && (itemArray[7] == itemArray[8])) {
  this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat('win')})
} else if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[3])  && (itemArray[3] == itemArray[6])) {
  this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat('win')})
} else if ((itemArray[1] !== "empty") && (itemArray[1] == itemArray[4])  && (itemArray[4] == itemArray[7])) {
  this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat('win')})
} else if ((itemArray[2] !== "empty") && (itemArray[2] == itemArray[5])  && (itemArray[5] == itemArray[8])) {
  this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat('win')})
} else if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[4])  && (itemArray[4] == itemArray[8])) {
  this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat('win')})
} else if ((itemArray[2] !== "empty") && (itemArray[2] == itemArray[4])  && (itemArray[4] == itemArray[6])) {
  this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat('win')})
}
};


  render()
 {
  return (
    <View style ={styles.container}>
      <View style= {styles.grid}>
        <View style= {styles.row}>
          <View style= {styles.item}>
            <TouchableOpacity
            onPress={() => this.drawItem(0)}
            >
              <Entypo
              name={this.chooseItemIcon(0)}
              size= {50}
              color={this.chooseItemColor(0)}>

              </Entypo>
            </TouchableOpacity>
          </View> 

          <View style= {styles.item}>
            <TouchableOpacity
            onPress={() => this.drawItem(1)}
            >
              <Entypo
              name={this.chooseItemIcon(1)}
              size= {50}
              color={this.chooseItemColor(1)}>

              </Entypo>
            </TouchableOpacity>
          </View> 

          <View style= {styles.item}>
            <TouchableOpacity
            onPress={() => this.drawItem(2)}
            >
              <Entypo
              name={this.chooseItemIcon(2)}
              size= {50}
              color={this.chooseItemColor(2)}>

              </Entypo>
            </TouchableOpacity>
          </View> 
        </View>  
        <View style= {styles.row}>
          <View style= {styles.item}>
            <TouchableOpacity
            onPress={() => this.drawItem(3)}
            >
              <Entypo
              name={this.chooseItemIcon(3)}
              size= {50}
              color={this.chooseItemColor(3)}>

              </Entypo>
            </TouchableOpacity>
          </View> 

          <View style= {styles.item}>
            <TouchableOpacity
            onPress={() => this.drawItem(4)}
            >
              <Entypo
              name={this.chooseItemIcon(4)}
              size= {50}
              color={this.chooseItemColor(4)}>

              </Entypo>
            </TouchableOpacity>
          </View> 

          <View style= {styles.item}>
            <TouchableOpacity
            onPress={() => this.drawItem(5)}
            >
              <Entypo
              name={this.chooseItemIcon(5)}
              size= {50}
              color={this.chooseItemColor(5)}>

              </Entypo>
            </TouchableOpacity>
          </View> 
        </View>  
        <View style= {styles.row}>
          <View style= {styles.item}>
            <TouchableOpacity
            onPress={() => this.drawItem(6)}
            >
              <Entypo
              name={this.chooseItemIcon(6)}
              size= {50}
              color={this.chooseItemColor(6)}>

              </Entypo>
            </TouchableOpacity>
          </View> 

          <View style= {styles.item}>
            <TouchableOpacity
            onPress={() => this.drawItem(7)}
            >
              <Entypo
              name={this.chooseItemIcon(7)}
              size= {50}
              color={this.chooseItemColor(7)}>

              </Entypo>
            </TouchableOpacity>
          </View> 

          <View style= {styles.item}>
            <TouchableOpacity
            onPress={() => this.drawItem(8)}
            >
              <Entypo
              name={this.chooseItemIcon(8)}
              size= {50}
              color={this.chooseItemColor(8)}>

              </Entypo>
            </TouchableOpacity>
          </View> 
        </View>  
      
      </View>
      <Text style= {styles.winMessage}> {this.state.winMessage}</Text>
      <Button full rounded primary style={styles.button} 
      onPress = {() => this.resetGame()}>
        <Text style= {styles.btnText}>Reset Game</Text>
      </Button>
    </View>
  );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {
    backgroundColor : "grey"
  },
  row: {
    flexDirection: "row"
  },
  item: {
    borderWidth : 2,
    borderColor: "#000",
    padding: 30
  },
  winMessage:{
    padding: 20,
    fontSize: 25,
    fontWeight: "bold"
  },
  button: {
    margin: 20,
    padding: 10
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold"
  }
});