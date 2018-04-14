import React, {Component} from 'react'
import {Foundation} from '@expo/vector-icons'
import {purple, white} from '../utils/colors'
import {View, Text, ImageEditor, TouchableOpacity, Image,StyleSheet} from "react-native"
import {ImagePicker} from "expo"

export default class mage extends Component {
    state = {
        image: null,  
    }

    pickImage = () => {
        ImagePicker.launchImageLibraryAsync ({
        allowEditing: true, 
        aspect: [2,1]
        }).then((result) => {
          if (result.cancelled) {
            return  
          }
          
          ImageEditor.cropImage(result.uri, {
          offset: {x:0,y:0},
          size: {width:result.width , height:result.height},
          displaySize: {width:200, height:200},
          resizeMode: 'contain',
           },
          (uri) => this.setState( ()=>({ image:uri} ) ),  
           ( )=> console.log('Error'))
          })
        }
        
    render() {
		const { image } = this.state
        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={this.pickImage}>
            <Text>   点击 </Text>
            </TouchableOpacity >
            
            {image && (
            <Image   style={styles.img} source={{uri: image}} />
            )}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     alignItems: 'center',
    justifyContent: 'center',
    },
    img: {
        width:200,
        height:200,
        
    }
})