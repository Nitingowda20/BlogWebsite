import { FlatList, Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";

export default function OrderDetilScreen() {

    const {id} = useLocalSearchParams();

    const order = orders.find((o)=> o.id.toString() === id);
if(!order){
    return<Text>Not Found</Text>
}

    return (
      <View style={{padding: 10, gap:20}}>
        <Stack.Screen options={{title : `Order #${id} `}} />
        <OrderListItem order={order} />

        <FlatList 
        data={ order.order_items}
        renderItem={({item}) => <OrderItemListItem item={item} />}
        />
      </View>
    
    );
}
