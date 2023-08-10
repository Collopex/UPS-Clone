import { View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { Divider } from "@rneui/themed";
import MapView, { Marker } from "react-native-maps";

type Props = {
  order: Order;
};

const DeliveryCard = ({ order }: Props) => {
  return (
    <View className="p-5">
      <View className="bg-[#59C1CC] rounded-lg px-2 py-3">
        <Icon name="box" type="entypo" size={40} color="white" />
        <Text className="text-xs text-white uppercase font-normal text-center">
          {order.carrier} - {order.trackingId}
        </Text>

        <View>
          <Text className="text-center mt-2 text-white font-bold text-lg mb-1">
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>

        <View className="mt-auto">
          <Text className="text-base text-center text-white font-bold mt-3">
            Address
          </Text>

          <Text className="text-sm text-center text-white font-normal ">
            {order.Address} - {order.City}
          </Text>

          <Text className=" italic text-xs text-center text-white font-normal mb-1">
            Shipping Cost: ${order.shippingCost}
          </Text>
        </View>
        <Divider color="white" />

        {order.trackingItems.items.map((item) => (
          <View key={item.item_id} className="mt-3">
            <View className="flex-row justify-between items-center px-4 py-1">
              <Text className="text-sm italic text-white">{item.name}</Text>
              <Text className="text-white text-xl">
                <Text className="text-sm ">x</Text> {""} {item.quantity}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <MapView
        initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="w-full h-64"
      >
        {order.Lat && order.Lng && (
          <Marker
            coordinate={{
              latitude: order.Lat,
              longitude: order.Lng,
            }}
            title="Delivery Loction"
            description={order.Address}
            identifier="destination"
          />
        )}
      </MapView>
    </View>
  );
};

export default DeliveryCard;
