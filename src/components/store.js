import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import useStore from '../hook/useStore'
import StoreItem from './storeItem'
import Icons from 'react-native-vector-icons/FontAwesome'
const Stores = (term) => {
    const [{ data, loading, error }, searchStore] = useStore()
    useEffect(() => {
        searchStore(term)

    }, [term])
    // console.log({ data, loading, error })
    if (loading)
        return
    <ActivityIndicator size="large" maginVertical={30} />;
    if (error)
        return (
            <View style={styles.container}>
                <Text style={styles.textRest}>{error}</Text>
            </View >
        )
    // <Text>Loading...</Text>
    return (
        <View style={styles.container}>
            <Text style={styles.textRest}>TOP RESTAURANTS</Text>
            <FlatList
                data={data}
                keyExtractor={(store) => store.id}
                renderItem={({ item }) =>
                    // <Text>{item.name}</Text>
                    <StoreItem store={item}
                    />
                }
            />
        </View >
    )
}

export default Stores

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 10,
    },
    textRest: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'green',
        marginBottom:20
    },
})