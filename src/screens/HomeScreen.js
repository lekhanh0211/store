import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/header'
import Search from '../components/search'
import Stores from '../components/store'


const HomeScreen = () => {
  const [term, setTerm] = useState("Burger")
  const commonCategory = [
    {
      name: "Burger",
      imageUrl: require("../assets/images/burger.png")
    },
    {
      name: "Cake",
      imageUrl: require("../assets/images/cake.png")
    },
    {
      name: "Pasta",
      imageUrl: require("../assets/images/pasta.png")
    },
    {
      name: "Smoothies",
      imageUrl: require("../assets/images/smoothies.png")
    },
    {
      name: "Steak",
      imageUrl: require("../assets/images/steak.png")
    },
    {
      name: "Pizza",
      imageUrl: require("../assets/images/pizza.png")
    }
  ]
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <Search
        setTerm={setTerm}
      />
      <View style={styles.catContainer}>

        <FlatList
          data={commonCategory}
          renderItem={({ item }) => {
            console.log(item)
            return <CategoryItem
              name={item.name}
              imageUrl={item.imageUrl}
              active={item.name === term}
              handlePress={() => setTerm(item.name)}
            />;
          }}
          //để item hiển thị theo hướng ngang
          horizontal
          showsHorizontalScrollIndicator={false} //ẩn thanh trượt ngang
          keyExtractor={(category) => category.name}
        />
        <Stores term={term} />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb( 241,186,87)"

  },
})