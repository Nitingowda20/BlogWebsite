
import { StyleSheet , Text ,View , Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri : product.image}} style={styles.image}/>

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
      
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    // margin: 8,
    padding: 10,
    borderRadius : 20
  },

  image: {
    // width : 
    margin: 5,
    width : '90%',
    aspectRatio : '1'
  },

  title: {
    // color : Colors.dark.tint,
    // color : 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  price: {
    color : Colors.light.tint,
    fontWeight : 'bold'
  },
});
