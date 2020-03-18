import React from 'react';
import { ScrollView,StyleSheet, Text, View, Image } from 'react-native';
import AlbumData from "../json/Album.json";

const Album = () => {
    return (
        <ScrollView>

            <View style={styles.Newst}>
                <Text style={styles.NewstFont}>NEWST /</Text>
            </View> 
            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={ 
                            {uri : AlbumData[0].head}
                        }
                    />
                    <View style={styles.headContentStyle}>
                    <Text style={styles.headFontStyle}> {AlbumData[0].artist} </Text>
                    </View>
                </View> 
            </View>

            <View style={styles.AlbumContentStyle}> 

                <Image
                style={styles.imageStyle}
                source={{uri : AlbumData[0].image
                }}
                />
                <Text style={styles.AlbumFontStyle}> {AlbumData[0].name} </Text>
            </View>
           

            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={ 
                            {uri : AlbumData[1].head}
                        }
                    />
                    <View style={styles.headContentStyle}>
                    <Text style={styles.headFontStyle}> {AlbumData[1].artist} </Text>
                    </View>
                </View> 
            </View>

            <View style={styles.AlbumContentStyle}> 

                <Image
                style={styles.imageStyle}
                source={{uri : AlbumData[1].image
                }}
                />
                <Text style={styles.AlbumFontStyle}> {AlbumData[1].name} </Text>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={ 
                            {uri : AlbumData[2].head}
                        }
                    />
                    <View style={styles.headContentStyle}>
                    <Text style={styles.headFontStyle}> {AlbumData[2].artist} </Text>
                    </View>
                </View> 
            </View>

            <View style={styles.AlbumContentStyle}> 

                <Image
                style={styles.imageStyle}
                source={{uri : AlbumData[2].image
                }}
                />
                <Text style={styles.AlbumFontStyle}> {AlbumData[2].name} </Text>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={ 
                            {uri : AlbumData[3].head}
                        }
                    />
                    <View style={styles.headContentStyle}>
                    <Text style={styles.headFontStyle}> {AlbumData[3].artist} </Text>
                    </View>
                </View> 
            </View>

            <View style={styles.AlbumContentStyle}> 

                <Image
                style={styles.imageStyle}
                source={{uri : AlbumData[3].image
                }}
                />
                <Text style={styles.AlbumFontStyle}> {AlbumData[3].name} </Text>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={ 
                            {uri : AlbumData[4].head}
                        }
                    />
                    <View style={styles.headContentStyle}>
                    <Text style={styles.headFontStyle}> {AlbumData[4].artist} </Text>
                    </View>
                </View> 
            </View>

            <View style={styles.AlbumContentStyle}> 

                <Image
                style={styles.imageStyle}
                source={{uri : AlbumData[4].image
                }}
                />
                <Text style={styles.AlbumFontStyle}> {AlbumData[4].name} </Text>
            </View>
            <View style={styles.Height}></View>
                

        </ScrollView>
    
    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#82c9ff',
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
        padding: 5
    },
    thumbnailStyle:{
        height: 50,
        width: 50,
        resizeMode: "cover"
    },
    headContentStyle:{
        flexDirection: "column",
        justifyContent: "space-around",
        /*shadowColor: "#669999",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 0,*/
    },
    imageStyle:{
        height: 300,
        width: null,
        
    },
    AlbumContentStyle:{
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff',
        borderColor: '#82c9ff',
        borderBottomWidth: 2,
        shadowColor: "#82c9ff",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 2,
        elevation: 2
    },
    headFontStyle:{
        fontSize: 16,
        paddingTop: 15
    },
    AlbumFontStyle:{
        paddingLeft: 137,
        paddingTop: 10,
        paddingBottom: 5
    },
    Height:{
        height:100
    },
    Newst:{
        margin: 10
    },
    NewstFont:{
        fontSize: 16,
        color: '#669999'
    },
});

export default Album;