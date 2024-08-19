import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import Button from '@/src/components/button';
import products from '@/assets/data/products';
// Define size options as a type
type SizeOption = '250g' | '500g' | '1kg' |'1.5kg'| '2L'|'250ml' | '500ml' | '1L' | 'Single Pack' | 'Pack of 2' | 'Pack of 4' | '6 pcs' | '12 pcs' | '24 pcs';

const weightSizes: SizeOption[] = ['250g', '500g', '1kg', '1.5kg'];
const volumeSizes: SizeOption[] = ['250ml', '500ml', '1L', '2L'];
const packSizes: SizeOption[] = ['Single Pack', 'Pack of 2', 'Pack of 4'];
const countSizes: SizeOption[] = ['6 pcs', '12 pcs', '24 pcs'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));

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
    if (!product) return;
    console.warn('Add to cart:', selectedSize);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name || 'Product' }} />
      <Image
        source={{ uri: product?.image }}
        style={styles.image}
        resizeMode="contain"
      />
      
      <Text style={styles.subtitle}>Select quantity</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={size}
            style={[
              styles.size,
              {
                backgroundColor: size === selectedSize ? 'gainsboro' : 'white',
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: size === selectedSize ? 'black' : 'gray' },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>Price: ${product?.price.toFixed(2)}</Text>
      <Button onPress={addToCart} text="Add to cart" />
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
    marginTop: 'auto',
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
