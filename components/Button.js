import { Component } from "react"
import {  StyleSheet, TouchableOpacity, Text } from 'react-native';

export class Btn extends Component {

    constructor(props){
        super(props);
        this.state = {};
        
        let size =1;
        if(props.size){
            size = parseInt(props.size);
        }
        let backGround = 'black';
		if(props.backGround) {
			backGround = props.backGround;
		};


		this.styles = StyleSheet.create({
			box:{
				justifyContent:'center',
				alignItems:'center',
				flex:size,
				borderRadius:30,
				backgroundColor:backGround
			},
			text:{
				fontSize:20,
                color:'white',
			}
		});
	};
    render(){
        return(
            <TouchableOpacity style={this.styles.box} onPress={this.props.onPress}>
				<Text style={this.styles.text}>{this.props.txtBtn}</Text>
			</TouchableOpacity>
        )
    }
}


