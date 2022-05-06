//import React, ReactNative
import { useState } from "react";
import 
{ 
    StyleSheet, 
    View, 
    Text, 
    Pressable, 
    Image 
} from "react-native";

//import fonts 
import AppLoading from 'expo-app-loading';
import 
{ 
    useFonts,
    Comfortaa_400Regular
} from '@expo-google-fonts/comfortaa';
  


//Rand Screen function
export default function RandScreen() {
//setting consts
    const [animeData, setAnime] = useState([]);
    const [image, setImage] = useState('');
    const [title, setTitle] = useState([]);
    
//get random anime function
    const getAnime = () => {
        var id = Math.floor(Math.random() * 740);
        const url =`https://api.jikan.moe/v4/anime/${id}`;

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            setAnime(responseJson.data);
            setImage(responseJson.data.images.jpg.large_image_url);
            setTitle(responseJson.data.title);
        })
        .catch((error) => {
            console.error(error);
          });
    };

//setting font
    let [fontsLoaded] = useFonts({
        Comfortaa_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

//main template
    return (
        <View style={styles.container}>
            <View
            style={styles.animeCard} 
            data={animeData}>
                <Text style={styles.animeTitle}>
                    {title}
                </Text>
                <Image
                    style={styles.animeImage}
                    source={{uri: image || 'image'}}
                />
            </View> 
            <Pressable style={styles.btn} onPress={getAnime}><Text style={styles.btnText}>get anime</Text></Pressable>
        </View>
    );
}



//style  
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    animeCard:{
        padding: 20,
        margin: 10,
        marginTop: 20,
        width: 340,
        maxHeight: 1500,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOffset:{
            width: 0,
            height: 0
        },
        shadowColor: '#171717',
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    animeTitle:{
        margin: 'auto',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Comfortaa_400Regular',
    },
    animeTitleEng:{
        color: 'darkgrey',
        fontSize: 15,
        fontFamily: 'Comfortaa_400Regular',
    },
    animeImage:{
        margin:'auto',
        width: 180,
        height: 280,
        borderRadius: 10,
    },
    animeDescri:{
        fontSize: 10,
        fontFamily: 'Comfortaa_400Regular',
    },
    animeYear:{
        marginTop: 15,
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Comfortaa_400Regular',
    },
    btn:{
        padding: 10,
        marginTop: 20, 
        width: 120,
        alignContent: 'center',
        backgroundColor: '#9581d6',
        borderRadius: 10,
        shadowOffset:{
            width: 0,
            height: 0
        },
        shadowColor: '#171717',
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    btnText:{
        padding: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'Comfortaa_400Regular',
    }
});