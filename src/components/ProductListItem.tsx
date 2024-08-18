import { StyleSheet , Text ,View , Image } from 'react-native';
import Colors from '@/src/constants/Colors';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}
const ProductListItem = ({  product } :{product :Product})=>{
  return(
    <View style={styles.container}>
      <Image source={{uri : product.image}} style={styles.image}/>

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
      
    </View>
  )
}

export default ProductListItem


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    margin: 5,
    padding: 10,
    borderRadius : 20
  },

  image: {
    width : '100%',
    aspectRatio : '1'
  },

  title: {
    // color : Colors.dark.tint,
    // color : 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop :5
  },
  price: {
    color : Colors.light.tint,
    fontWeight : 'bold'
  },
});
