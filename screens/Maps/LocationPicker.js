import HeaderButton from "../../components/HeaderButton";
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

const LocationPicker = (props) => {
  const locations = useSelector((state) => state.location.locations);
  console.log(locations);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButton
            name="ios-menu"
            color="black"
            size={25}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        );
      },
    });
  });
  return (
    <View style={styles.screen}>
      {locations.map((el) => {
        return (
          <View
            key={Date.now().toString()}
            style={{
              borderColor: "black",
              borderWidth: 1,
              padding: 5,
              width: "80%",
              alignItems: "center",
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 15,
              }}
            >
              {el}
            </Text>
            <Text style={{ color: "black", fontSize: 15 }}>
              {new Date().toISOString().substring(0, 10)}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

export default LocationPicker;

{
  /* <View
        style={{
          alignItems: "center",
          justifyContent: "space-evenly   ",
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <Text>latitude</Text>
        <Text>longitude</Text>
        <Text>time</Text>
      </View> */
}
{
  /* {locations.map((el) => {
        return (
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: 20,
              marginVertical: 20,
            }}
            key={el.timestamp}
          >
            <Text>{el.coords.latitude}</Text>
            <Text>{el.coords.longitude}</Text>
            <Text>{el.timestamp}</Text>
          </View>
        );
      })} */
}
{
  /* {locations.map((el) => {
        return (
          <View
            key={JSON.stringify(el)}
            style={{
              borderColor: "black",
              borderWidth: 1,
              padding: 5,
              width: "80%",
              alignItems: "center",
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 15,
              }}
            >
              {el.coords.altitude}
            </Text>
            <Text style={{ color: "black", fontSize: 15 }}>{el.timestamp}</Text>
          </View>
        );
      })} */
}

// import React, { useEffect, useState, useLayoutEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   Alert,
//   Button,
//   Dimensions,
//   SafeAreaView,
// } from "react-native";
// import * as Location from "expo-location";
// import MapView from "react-native-maps";

// const LocationPicker = (props) => {
//   useLayoutEffect(() => {
//     props.navigation.setOptions({
//       headerLeft: () => {
//         return (
//           <HeaderButton
//             name="ios-menu"
//             color="black"
//             size={25}
//             onPress={() => {
//               props.navigation.toggleDrawer();
//             }}
//           />
//         );
//       },
//     });
//   });
//   // const fetchLocation = async () => {
//   //   try {
//   //     let { status } = await Location.requestPermissionsAsync();
//   //     if (status !== "granted") {
//   //       return Alert.alert("permission denied.", "enable permissions");
//   //     }

//   //     let location = await Location.getCurrentPositionAsync({});
//   //     console.log(location);
//   //     setLocation(location);
//   //   } catch (er) {
//   //     Alert.alert("error fetching location", "choose location manually");
//   //   }
//   // };
//   // let text;
//   // const [location, setLocation] = useState(null);
//   // const [fetching, setFetching] = useState(false);

//   return (
//     <View style={styles.screen}>
//       {/* <View style={styles.mapStyle}>
//         {location ? (
//           <Text>{JSON.stringify(location)}</Text>
//         ) : (
//           <Text>{text}</Text>
//         )}
//       </View> */}
//       {/* {location ? (
//         <MapView
//           initialRegion={{
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//             latitudeDelta: 0.00922,
//             longitudeDelta: 0.00521,
//           }}
//           style={styles.mapStyle}
//         />
//       ) : (
//         <MapView style={styles.mapStyle} />
//       )}
//       {/* <MapView style={styles.mapStyle} /> */}
//       {/* <Button title="get location" onPress={fetchLocation} /> */} */}
//     </View>
//   );
// };

// export default LocationPicker;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mapStyle: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height - 100,
//   },
// });
