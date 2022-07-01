import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function StoreItem({ store }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: store.image_url }} />
            <View style={styles.viewContainer}>
                <Text style={styles.name}>{store.name}</Text>
                <View style={styles.viewContent}>
                    <Text style={styles.ratting}>
                        {store.rating}
                        <Icon style={styles.icon} name="star" size={20} color='gold' />
                    </Text>
                    <Text style={styles.price}>{store.price}</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 50,
        marginVertical: 10,
        height: 100,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    image: {
        width: 75,
        height: 75,
        marginLeft: 10,
        borderRadius: 50,

    },
    viewContainer: {
        paddingHorizontal: 10
    },
    name: {
        marginBottom: 4,
        fontSize: 22,
        fontWeight: 'bold',
    },
    viewContent: {
        flexDirection: 'row'
    },
    ratting: {
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18
    },
})
