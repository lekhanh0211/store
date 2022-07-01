import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.storeName}>Grab your</Text>
            <Text style={styles.storeTitle}>delicous meal!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    storeName: {
        fontSize: 35,
        color: '#000000',
        paddingLeft:30,
        paddingTop:50
    },
    storeTitle: {
        paddingLeft:30,
        color: '#000000',
        fontSize: 32,
        fontWeight: 'bold'
    },
})