import React from 'react';
import { ScrollView,StyleSheet, Text, View, Image } from 'react-native';
import AlbumData from "../json/Album.json";

const Album = () => {
    return (
        <ScrollView>
            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={ 
                            {uri : AlbumData[0].head}
                        }
                    />
                </View>
                <View style={styles.headContentStyle}>
                    <Text style={styles.headFontStyle}> {AlbumData[0].artist} </Text>
                </View>
            </View>

            <View> 

                <Image
                style={styles.imageStyle}
                source={{uri : AlbumData[0].image
                }}
                />
                <Text> {AlbumData[0].name} </Text>
            </View>
           
        </ScrollView>
    
    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
     },
    thumbnailContainerStyle:{
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    thumbnailStyle:{
        height: 50,
        width: 50
    },
    headContentStyle:{
        flexDirection: "column",
        justifyContent: "space-around",
        shadowColor: "#669999",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 0,
    },
    imageStyle:{
        height: 300,
        width: null,
        shadowColor: "#cc4b4b",
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2},
    },
    AlbumContentStyle:{

    },
    headFontStyle:{
        fontSize: 16
    }
});

export default Album;