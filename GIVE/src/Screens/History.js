
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Pressable,
  HStack,
  Badge,
  Spacer,
  ScrollView,
} from "native-base";
import { Dimensions } from "react-native";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import { UserContext } from "../../contexts/userContexts";

const History = () => {
  const [products, setProducts] = useState([]);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}products/date`);
        const userProducts = response.data.filter(
          (product) => product.userId === userContext.userId
        );
        const sortedProducts = userProducts.sort(
          (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
        );
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [userContext.userId]);

  const deviceWidth = Math.round(Dimensions.get("window").width);

  return (
    <ScrollView>
      <View style={{ marginTop: 20 }}>
        {products.map((product) => (
          <HistoryCard
            key={product.id}
            product={product}
            deviceWidth={deviceWidth}
          />
        ))}
      </View>
    </ScrollView>
  );
};

function HistoryCard({ product, deviceWidth }) {
  return (
    <View alignItems="center">
      <Pressable maxW={96}>
        {({ isHovered, isFocused, isPressed }) => (
          <View
            bg={
              isPressed
                ? "coolGray.200"
                : isHovered
                ? "coolGray.200"
                : "coolGray.100"
            }
            style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
            p={5}
            rounded={8}
            shadow={3}
            borderWidth={1}
            borderColor="coolGray.300"
            marginBottom={5}
            height={200}
            width={deviceWidth - 80}
          >
            <HStack alignItems="center">
              <Badge
                colorScheme="purple"
                _text={{ color: "white" }}
                variant="solid"
                rounded={4}
              >
                Sell
              </Badge>
              <Spacer />
            </HStack>
            <Text color="coolGray.800" mt={3} fontWeight="medium" fontSize="xl">
              {product.name}
            </Text>
            <Text mt={2} fontSize="sm" color="coolGray.700">
              {product.name} is bought or sold on {product.postedDate} by you.
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default History;
