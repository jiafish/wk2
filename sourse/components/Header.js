import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Albums</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#669999',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        paddingTop: 30,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2
      },
    textStyle: {
        fontSize: 20,
        color: '#e4eded'
    }
});

export default Header;