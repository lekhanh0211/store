import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
export default function CategoryItem({ name, imageUrl, active, handlePress }) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.container,
            active ? { backgroundColor: ("rgb(241,186,87)") } : { backgroundColor: "#FFF" }
            ]} >
                {/* <Button title='Click here!!! ' /> */}
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={imageUrl} />
                </View>
                <Text style={styles.textCate}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#FFF",
        // backgroundColor: "rgb(241,186,87)",
        marginVertical: 15,
        marginRight: 20,
        marginLeft: 2,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        elevation: 5,
        shadowOpacity: 0.1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textCate: {
        color: "#000",
        fontWeight: 'bold',
    },
    img: {
        width: 40,
        height: 30,
    },
    imgContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5,
    },
})