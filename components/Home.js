import React, {Component} from 'react';
import {StyleSheet, Text,View,ScrollView,Dimensions,Image,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Header from './Header.js';

const window = Dimensions.get('window');

export default class Home extends Component<{}>{  
  render() {
    infoSec=[
      {
        categorie: 'Libros',
        reviews: '+5',
        image: require('./../assets/book.jpeg'),


      },{
        categorie: 'Peliculas',
        reviews: '+5',
        image: require('./../assets/movie-icon.png'),
        
      },{
        categorie: 'Restaurantes',
        reviews: '+5',
        image: require('./../assets/food.jpg'),
        
      },{
        categorie: 'Libros',
        reviews: '+5',
        image: require('./../assets/book.jpeg'),
        
      },{
        categorie: 'Peliculas',
        reviews: '+5',
        image: require('./../assets/movie-icon.png'),
        
      },{
        categorie: 'Restaurantes',
        reviews: '+5',
        image: require('./../assets/food.jpg'),
        
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

    const navigate  = this.props.navigation
    return (
      <SafeAreaView style={styles.main}>
        <Header navigate={navigate} />
        <ScrollView>
          <Text style={styles.subTitle}> Bienvenido</Text>
          <Text style={styles.p}> Enterate de los temas mas populares y las criticas mas relevantes AQUÍ y AHORA.</Text>
          <View style={styles.articleSection}>
            {articles}            
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  main:{
    color: '#000',
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
    backgroundColor: '#80FF9CFF',
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
