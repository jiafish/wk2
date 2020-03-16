import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AlbumData from '../Json/List.json';

const Album = () => {
    return (
        
    <View style={styles.cardContainerStyle}>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={ require ( AlbumData[0].head )
            }
          />
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
    </View>
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
        flexDirection: "colum",
        justifyContent: "space-around",
        shadowColor: "#669999",
        shadowOpacity: 1,
        shadowOffset: { width= 0, height: 2},
        shadowRadius: 0,
    },
    imageStyle:{
        height: 30,
        width: null,
        shadowColor: "#cc4b4b",
        shadowOpacity: 0.2,
        shadowOffset: { width= 2, height: 2},
    },
    AlbumContentStyle:{

    },
    headFontStyle:{
        fontSize: 16
    }
});

export default Album;