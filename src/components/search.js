import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Search({ setTerm }) {
    const [input, setInput] = useState("");
    const handleEndEditing = () => {
        if (!input)
            return;
        setTerm(input)
        setInput("")
    }
    return (
        <View style={styles.container}>
            <Icon style={styles.iconSearch} name="search" color='#000000' size={25} />
            <TextInput style={styles.inputSearch}
                placeholder='Restaurants, Food...'
                value={input}
                onChangeText={(text) => {
                    setInput(text);
                }}
                onEndEditing={handleEndEditing}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: "#FFF",
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        elevation: 5,
        shadowOpacity: 0.1,

    },
    iconSearch: {
        paddingLeft: 20
    },
    inputSearch: {
        marginLeft: 10,
    },
})