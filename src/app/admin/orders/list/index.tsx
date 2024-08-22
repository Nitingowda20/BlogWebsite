import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import { Stack } from "expo-router";
import { FlatList, StyleSheet, Text } from "react-native";

export default function OrdersScreen() {
  return (
        <>
          <Stack.Screen options={{ title: "Index" }} />
    <FlatList
      data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      renderItem={({ item }) => <OrderListItem order={item} />}
    />
        </>
  );
}

const style = StyleSheet.create({
  text: {
    marginBottom: 5,
    fontSize: 20,
    color: "white",
  },
});
// import { Text } from "@/src/components/Themed";

// export default function OrderScreen(){
//     <Text>Orders Screen</Text>
// } 