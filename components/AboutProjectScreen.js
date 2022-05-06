//import React, ReactNative
import React from 'react';
import 
{
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

//import fonts 
import AppLoading from 'expo-app-loading';
import 
{ 
    useFonts,
    Comfortaa_400Regular
} from '@expo-google-fonts/comfortaa';



//About Project Screen
export default function AboutProjectScreen(){
    let [fontsLoaded] = useFonts({
        Comfortaa_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
        <View style={styles.container}>
                <Text style={styles.header}>About Our Project</Text>
                <View
                    style={styles.tablet}>
                <Text style={styles.text}>
                    If you're suffering from "not knowing what you want to watch" 
                    and you feel like "you watched everything on the Internet", 
                    try our randomizer or try to find something with our anime search.
                </Text>
                <Text style={styles.text}>
                    Если вы не знаете, какое аниме вам посмотреть и вам кажется,
                    что вы посмотрели всё, что есть в Интернете, 
                    то попробуйте наш поиск аниме или рандамайзер, чтобы попалось,
                     предназначеное вам судьбой, аниме.
                </Text>
                </View>
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/1499/1499992.png'}}
                    style={styles.image}
                />
        </View>
    )
}



//style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    header: {
        marginTop: 80,
        marginBottom: 30,
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Comfortaa_400Regular',
    },
    text: {
        margin: 10,
        textAlign: 'auto',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Comfortaa_400Regular',
        lineHeight: 20,
    },
    tablet: {
        margin: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 'auto',
        backgroundColor: '#9581d6',
        borderRadius: 20,
        shadowOffset:{
            width: 0,
            height: 0
        },
        shadowOpacity: 0.8,
        shadowColor: '#171717',
        shadowRadius: 15,
        fontFamily: 'Comfortaa_400Regular',
    },
    image:{
        width: 120,
        height: 120,
        margin: 20,
    }
});