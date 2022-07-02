// import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'
// import React, { useState } from 'react'
// import Header from '../components/header'
// import Search from '../components/search'
// import CategoryItem from '../components/categoryItem'
// import Stores from '../components/store'

// const commonCategory = [
//     {
//         name: "Burger",
//         imageUrl: require("../assets/images/burger.png")
//     },
//     {
//         name: "Cake",
//         imageUrl: require("../assets/images/cake.png")
//     },
//     {
//         name: "Pasta",
//         imageUrl: require("../assets/images/pasta.png")
//     },
//     {
//         name: "Smoothies",
//         imageUrl: require("../assets/images/smoothies.png")
//     },
//     {
//         name: "Steak",
//         imageUrl: require("../assets/images/steak.png")
//     },
//     {
//         name: "Pizza",
//         imageUrl: require("../assets/images/pizza.png")
//     }
// ]
// // const term = "Burger"
// const page = () => {
//     const [term, setTerm] = useState("Burger")
//     return (
//         <View style={styles.container}>
//             <StatusBar />
//             <Header />
//             <Search
//                 setTerm={setTerm}
//             />
//             <View style={styles.catContainer}>

//                 <FlatList
//                     data={commonCategory}
//                     renderItem={({ item }) => {
//                         console.log(item)
//                         return <CategoryItem
//                             name={item.name}
//                             imageUrl={item.imageUrl}
//                             active={item.name === term}
//                             handlePress={() => setTerm(item.name)}
//                         />;
//                     }}
//                     //để item hiển thị theo hướng ngang
//                     horizontal
//                     showsHorizontalScrollIndicator={false} //ẩn thanh trượt ngang
//                     keyExtractor={(category) => category.name}
//                 />
//             </View>
//             <Stores term={term} />
//             {/* <View style={styles.catContainer}>
//                 <CategoryItem name="Burger" imageUrl={require("../assets/images/burger.png")} />
//                 <CategoryItem name="Cake" imageUrl={require("../assets/images/cake.png")} />
//                 <CategoryItem name="Pasta" imageUrl={require("../assets/images/pasta.png")} />
//                 <CategoryItem name="Smoothies" imageUrl={require("../assets/images/pizza.png")} />
//                 <CategoryItem name="Steak" imageUrl={require("../assets/images/smoothies.png")} />
//                 <CategoryItem name="Pizza" imageUrl={require("../assets/images/steak.png")} />
//             </View> */}
//             {/* Ta có thể thay thế cách trên bằng FlatLists để duyệt mảng */}


//         </View>
//     )
// }

// export default page

// const styles = StyleSheet.create({
//     container: {

//     },
//     catContainer: {
//         marginHorizontal: 30
//     }
// })