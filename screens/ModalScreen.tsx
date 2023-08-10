import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "Modal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "Modal">;

const ModalScreen = () => {
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <View>
      <TouchableOpacity
        className="absolute right-5 top-4 z-50"
        onPress={() => navigation.goBack()}
      >
        <Icon name="closecircle" type="antdesign" size={28} />
      </TouchableOpacity>

      <View className="mt-7">
        <View className="py-5 border-b border-[#59C1CC]">
          <Text className="text-center text-lg font-bold text-[#59C1CC]">
            {name}
          </Text>
          <Text className="text-center mt-1 text-xs italic font-normal">
            deliveries
          </Text>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </View>
  );
};

export default ModalScreen;
