//import React, ReactNative
import React, {useState} from 'react';
import 
{
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Image,
    Pressable
} from 'react-native';

//import fonts 
import AppLoading from 'expo-app-loading';
import 
{ 
    useFonts,
    Comfortaa_400Regular
} from '@expo-google-fonts/comfortaa';



//Search Screen function                            
export default function SearchScreen(){

//setting const 
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

//change check function
    const ChangeCheck = (val) => {
        setSearch(val);
    };

//submit button function
    const submit = async () => {
        await fetch (`https://api.jikan.moe/v4/anime?q=${search}`)
        .then(res => res.json())
        .then(json => {
            setData(json.data);
        });
    };
    
//item template
    const ItemView = ({item}) => {
        return(
            <View style={styles.animeCard}>
                <Text
                    style={styles.animeTitle}>
                    {item.title}
                </Text>
                <Text
                    style={styles.animeTitleEng}>
                    ({item.title_english})
                </Text>
                <Image
                    style={styles.animeImage}
                    source={{uri: item.images.jpg.large_image_url}}
                />
                <Text
                    style={styles.animeDescri}>
                    {item.synopsis}
                </Text>
                <Text
                    style={styles.animeYear}>
                    Year: {item.year}
                </Text>
                <Text
                    style={styles.animeYear}>
                    Episodes: {item.episodes}
                </Text>
            </View>
        );
    };

//setting font
let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

//main template
    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput 
                    onChangeText={ChangeCheck}
                    value={search || ''}
                    style={styles.input}
                    placeholder='search..'
                    placeholderTextColor='white'
                />
                <Pressable
                    style={styles.btn}
                    onPress={submit}
                ><Text style={styles.text}>find</Text></Pressable>
            </View>
            <FlatList
                data = {data}
                style = {styles.animeList}
                keyExtractor={item => item.mal_id}
                renderItem={ItemView}
            />
            
        </View>
    );
};



//style
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    searchBar:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 80,
        marginBottom: 20,
        height: 50,
    },
    input:{
        padding: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        width: '70%',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#f0f0f0',
        color: '#9581d6',
        fontFamily: 'Comfortaa_400Regular',
    },
    animeList:{
        flexDirection: 'row',
        flexWrap: 'wrap',
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
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Comfortaa_400Regular',
    },
    animeTitleEng:{
        fontSize: 15,
        color: 'darkgrey',
        fontFamily: 'Comfortaa_400Regular',
    },
    animeImage:{
        width: 180,
        height: 280,
        marginVertical: 15,
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
        width: 70,
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
    text: {
        padding: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'Comfortaa_400Regular',
    }
});
