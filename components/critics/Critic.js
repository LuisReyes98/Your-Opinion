/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,StyleSheet,ScrollView,View,TouchableOpacity,Image} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Header from './../Header.js';



export default class Critic extends Component<{}>{
  render(){
    infoSec=[
      {
        categorie: 'Harry Potter',
        reviews: '+5',
        image: require('./../../assets/book.jpeg'),


      },{
        categorie: 'El alquimista',
        reviews: '+5',
        image: require('./../../assets/book.jpeg'),
        
      },{
        categorie: 'La Culpa es de la Vaca',
        reviews: '+5',
        image: require('./../../assets/book.jpeg'),
        
      }
    ]

    articles=[]
    for (var i = 0; i < infoSec.length; i++) {
      //console.warn(infoSec[i])
      aux= "article-"+i;
      articles.push(
        <TouchableOpacity key={aux}>
          <View style={styles.article}>
            <Image style={styles.articleImage} source={infoSec[i].image}  ></Image>
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>{infoSec[i].categorie}</Text>
              <Text style={styles.articleInfo}></Text>
            </View>
          </View>
          
        </TouchableOpacity>
        )
    }

    return(
      <SafeAreaView>
        <Header navigate={this.props.navigation} myTitle="Criticas"/>
        <ScrollView>
          <Text style={styles.subTitle}> Libros</Text>      
          {articles}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    color: '#000',
    backgroundColor: '#DDFBFB',
    flex:1,
  },
  subTitle:{
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  p:{
    fontSize: 18,    
  },
  articleSection:{
    alignItems: 'center',     
  },
  article:{
    width: (window.width - 30),
    height: 120,
    flexDirection: 'row',
    backgroundColor: '#80DFD3',
    marginVertical:5,
  },
  articleImage:{
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },
  articleContent:{
    //alignItems: 'center',         
  },
  articleTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    //textAlign:  'center', 
    paddingLeft: 10,
  }
});
