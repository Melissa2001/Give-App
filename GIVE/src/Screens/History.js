import React, { useState } from 'react';
import { View, Text, Pressable, HStack, Badge, Flex, Spacer, ScrollView } from 'native-base';
import { Calendar } from 'react-native-calendars';

const History = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  return (
    <ScrollView>
      <View style={{ marginTop: 10 }}>
        <Calendar onDayPress={handleDateSelect} />
      </View>
      <View style={{ marginTop: 40 }}>
        <HistoryCard />
      </View>
      <View style={{ marginTop: 40 }}>
        <HistoryCard />
      </View>
      <View style={{ marginTop: 40,marginBottom:40 }}>
        <HistoryCard />
      </View>
    </ScrollView>
  );
};

function HistoryCard() {
  return (
    <View alignItems="center">
      <Pressable maxW={96}>
        {({ isHovered, isFocused, isPressed }) => (
          <View
            bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'}
            style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
            p={5}
            rounded={8}
            shadow={3}
            borderWidth={1}
            borderColor="coolGray.300"
          >
            <HStack alignItems="center">
              <Badge colorScheme="purple" _text={{ color: 'white' }} variant="solid" rounded={4}>
                Sell
              </Badge>
              <Spacer />
              <Text fontSize={10} color="coolGray.800">
                1 month ago
              </Text>
            </HStack>
            <Text color="coolGray.800" mt={3} fontWeight="medium" fontSize="xl">
              Tshirt
            </Text>
            <Text mt={2} fontSize="sm" color="coolGray.700">
              Unlock powerful time-saving tools for creating email delivery and collecting marketing data
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default History;
