import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import Button from '@/src/components/button';
import products from '@/assets/data/products';
import { CartItem, WeightSize, VolumeSize, PackSize, CountSize } from '@/src/types';
import { useCart } from '@/src/provider/cartprovider';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';

// Define size options as a type
type SizeOption = WeightSize | VolumeSize | PackSize | CountSize;

const weightSizes: WeightSize[] = ['250g', '500g', '1kg', '2kg'];
const volumeSizes: VolumeSize[] = ['250ml', '500ml', '1L', '2L'];
const packSizes: PackSize[] = ['Single Pack', 'Pack of 2', 'Pack of 4'];
const countSizes: CountSize[] = ['6 pcs', '12 pcs', '24 pcs'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === Number(id));
  const router = useRouter();

  // Initialize sizes with a default value
  let sizes: SizeOption[] = [];

  // Check if product is defined
  if (product) {
    // Determine the size options based on the product type
    switch (product.type) {
      case 'weight':
        sizes = weightSizes;
        break;
      case 'volume':
        sizes = volumeSizes;
        break;
      case 'pack':
        sizes = packSizes;
        break;
      case 'count':
        sizes = countSizes;
        break;
      default:
        sizes = [];
    }
  }

  const [selectedSize, setSelectedSize] = useState<SizeOption>(sizes[0]);

  const addToCart = () => {
    if (!product) {
      console.error('Product not found');
      return;
    }
    addItem(product, selectedSize);
    router.push('/cart')
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/admin/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen options={{ title: product?.name || "Product" }} />

      <Image
        source={{ uri: product?.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.price}>Name: {product?.name}</Text>

      <Text style={styles.price}>Price: ${product?.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  subtitle: {
    marginVertical: 10,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  size: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});

export default ProductDetailsScreen;
