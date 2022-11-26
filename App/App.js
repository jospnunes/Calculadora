import { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Btn } from '../components/Button';
import styles from './styles';

export default class App extends Component {
    constructor(props) {
          super(props);
          this.state = {result:'0'};
  
          this.btn = this.btn.bind(this);
      }
  
      btn(valueBtn) {
          let state = this.state;
  
          if(valueBtn == 'C') {
              state.result = '0';
          }
          else if(valueBtn == '=') {
              state.result = eval(state.result);
          }
          else {
              state.result == '0' ? state.result = valueBtn : state.result += valueBtn
      }
  
          this.setState(state);
      }
  render(){
    return (
      <View style={styles.container}>
            <View style={styles.line}>
					<Text style={styles.display}>{this.state.result}</Text>
				</View>
				<View style={styles.line}>
					<Btn size="3" txtBtn="C" backGround="grey" onPress={()=>{this.btn("C")}} />
					<Btn txtBtn="/" backGround="grey" onPress={()=>{this.btn("/")}} />
				</View>
				<View style={styles.line}>
					<Btn txtBtn="7" onPress={()=>{this.btn("7")}} />
					<Btn txtBtn="8" onPress={()=>{this.btn("8")}} />
					<Btn txtBtn="9" onPress={()=>{this.btn("9")}} />
					<Btn txtBtn="-" backGround="grey" onPress={()=>{this.btn("-")}} />
				</View>
				<View style={styles.line}>
					<Btn txtBtn="4" onPress={()=>{this.btn("4")}} />
					<Btn txtBtn="5" onPress={()=>{this.btn("5")}} />
					<Btn txtBtn="6" onPress={()=>{this.btn("6")}} />
					<Btn txtBtn="+" backGround="grey" onPress={()=>{this.btn("+")}} />

				</View>
				<View style={styles.line}>
					<Btn txtBtn="1" onPress={()=>{this.btn("1")}} />
					<Btn txtBtn="2" onPress={()=>{this.btn("2")}} />
					<Btn txtBtn="3" onPress={()=>{this.btn("3")}} />
					<Btn txtBtn="*" backGround="grey" onPress={()=>{this.btn("*")}} />
				</View>
				<View style={styles.line}>
					<Btn size="2" txtBtn="0" onPress={()=>{this.btn("0")}} />
					<Btn txtBtn="." onPress={()=>{this.btn(".")}} />
					<Btn txtBtn="=" backGround="grey" onPress={()=>{this.btn("=")}} />
				</View>
			</View>
  );
  }
}
