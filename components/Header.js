import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Image,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Octicons from 'react-native-vector-icons/Octicons';

const window = Dimensions.get('window');

function Header(props){
	var theTitle="TU Opinion"
	if (props.myTitle!=undefined) {theTitle=props.myTitle};
	//console.warn(props.myTitle);
	return(	
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={() => { props.navigate.toggleDrawer()}} style={styles.navButton}>
      	<Octicons name={'three-bars'} solid size={32} color={'#000'}/>
    	</TouchableOpacity>				
			<View style={styles.subContent}>
				<Text style={styles.title}> {theTitle} </Text>
				
				<Image source={require('./../assets/icon.png')} style={styles.logo}/>
					
			</View>
			
		</SafeAreaView>
	);
};


const styles = StyleSheet.create({
	container:{
		backgroundColor: '#58B88E',
		paddingVertical: 0,
		paddingHorizontal: 0,
		flexDirection: 'row',
		 		
	},
	subContent:{
		flex: 1,
		flexDirection: 'row',
		marginVertical: 8, 
  	justifyContent: 'flex-end',

	},
	navButton:{
    paddingVertical:10,
		paddingHorizontal:10,
  },
  title:{
  	fontSize: 24,
  	textAlignVertical: 'center',
  	textAlign: 'center',
  	fontWeight: 'bold',
		width: 260,
  },  
  logo:{
  	width: 45, 
  	height: 45,
  }
});

export default Header;