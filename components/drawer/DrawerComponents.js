import React, { Component } from 'react';
import {NavigationActions,SafeAreaView} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground,TouchableOpacity,TouchableHighlight,ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

import { white } from 'ansi-colors';

export default class DrawerComponents extends Component {

		navigateToScreen = ( route ) =>(
				() => {
				const navigateAction = NavigationActions.navigate({
						routeName: route
				});
				this.props.navigation.dispatch(navigateAction);
		})

	render() {
		return (
			<SafeAreaView style={styles.container}>
				{/*Header del navbar*/}
				<View style={styles.header}>
					<TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer()}} style={styles.navButton}>
							<Octicons name={'three-bars'} solid size={32} color={'#000'}/>
					</TouchableOpacity> 					
				</View>
				
				
				<ScrollView style={styles.screenContainer}>					 
					<TouchableHighlight underlayColor='#9ecaed' style={styles.navOption} onPress={this.navigateToScreen('Home')}>
						
						<Text style={styles.textOption} >Inicio</Text>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='#9ecaed' style={styles.navOption} onPress={this.navigateToScreen('Critic')}>
						<Text style={styles.textOption} >Criticas</Text>
					</TouchableHighlight>
				</ScrollView>
			</SafeAreaView>
		
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
	},
	navOption:{		
		width: 280,
    borderColor: '#9ecaed',
    borderWidth: 2,
		paddingVertical:15,
		paddingHorizontal:10,		

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
	},	
	textOption:{
		fontSize: 18,
		fontWeight: 'bold',

	},		
	navButton:{
		paddingVertical:10,
		paddingHorizontal:10,
	},
	header:{			
		backgroundColor: '#58B88EFF',
		width: '100%',
	},
});