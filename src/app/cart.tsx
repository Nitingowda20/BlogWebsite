import { View, Text, Platform, StyleSheet ,FlatList} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { CartContext , useCart } from '../provider/cartprovider'
import CartListItem from '../components/CartListItem'

const CartScreen = () => {
  const { items } = useCart()
  return (
    <View>
      <FlatList 
      data={items}
      renderItem={({ item}) => <CartListItem cartItem={item} />} />
      <Text style={style.text}>Cart items length : {items.length}</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  )
}
 
const style =StyleSheet.create({
  text:{
    fontSize : 30,
    color:"white"
  }
})
export default CartScreen