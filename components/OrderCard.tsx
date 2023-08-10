import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {
  item: Order;
};

const OrderCard = ({ item }: Props) => {
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { order: item })}
    >
      <View className="p-2">
        <View className="bg-white p-4 rounded-xl flex-row justify-between items-center">
          <View>
            <Icon
              name="truck-delivery"
              type="material-community"
              color={"#EB6A7C"}
            />
            <Text className="text-xs mt-1 text-zinc-700">
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>

          <View>
            <Text className="text-xs mb-1 text-zinc-700">
              {item.trackingId}
            </Text>
            <Text className="text-xs text-zinc-700">
              {item.trackingItems.customer.name}
            </Text>
          </View>

          <View className="flex-row items-center space-x-2">
            <Text className="text-zinc-700">
              {item.trackingItems.items.length}x
            </Text>
            <Icon name="box" type="feather" color={"#3F3F46"} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
