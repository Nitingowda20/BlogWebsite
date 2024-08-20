import { View, Text, Platform, StyleSheet ,FlatList} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useCart } from '../provider/cartprovider'
import CartListItem from '../components/CartListItem'
import Button from '../components/button'

const CartScreen = () => {
  const { items , total } = useCart()
  return (
    <View>
      <FlatList 
      data={items}
      renderItem={({ item}) => <CartListItem cartItem={item} />} 
      contentContainerStyle ={{ gap:20}} />

      <Text style={style.text}>Total ${total}</Text>
      <Button text='Checkout'/>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  )
}
 
const style =StyleSheet.create({
  text:{
    marginTop:20,
    marginBottom: 5,
    fontSize : 30,
    color:"white"
  }
})
export default CartScreen