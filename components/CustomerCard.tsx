import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useNavigation } from "@react-navigation/native";
import { CustomersScreenNavigationProp } from "../screens/CustomersScreen";
import { Icon } from "@rneui/themed";

export type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ userId, email, name }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const navigation = useNavigation<CustomersScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Modal", {
          name,
          userId,
        })
      }
    >
      <View className="p-3 mt-2">
        <View className="bg-white p-5 rounded-xl flex-row justify-between">
          <View>
            <Text className="text-xl font-bold">{name}</Text>
            <Text className="text-sm text-[#59C1CC] ">ID: {userId}</Text>
            <Text className="mt-6 text-zinc-600">{email}</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Text>{loading ? "..." : `${orders.length} x`}</Text>
            <Icon name="box" type="entypo" color="#59C1CC" size={60} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomerCard;
