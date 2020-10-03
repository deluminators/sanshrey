import React, { useLayoutEffect, useEffect, useState } from "react";
import * as TaskManager from "expo-task-manager";
import { addLocation } from "../store/actions/locations";
import * as Location from "expo-location";
import axios from "axios";
import Geocoder from "react-native-geocoding";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Switch,
  ActivityIndicator,
} from "react-native";
import HeaderButton from "../components/HeaderButton";
import CardComponent from "../components/CardComponent";
import NewCard from "../components/NewCard";
import { useDispatch } from "react-redux";
const Filter = (props) => {
  return (
    <View style={styles.filter}>
      <Text style={styles.text}>{props.name}</Text>
      <Switch
        value={props.state}
        value={props.state}
        onValueChange={props.toggleSwitch}
        trackColor={{ true: "#4542f5" }}
        thumbColor={props.state ? "#4542f5" : ""}
      />
    </View>
  );
};

const Cards = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: "https://www.mohfw.gov.in/assets/images/icon-inactive.png",
        }}
        style={{ width: 50, height: 50, marginTop: 20 }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 20,
          textAlign: "center",
          marginTop: 10,
          fontWeight: "bold",
        }}
        numberOfLines={1}
      >
        {props.number}
      </Text>
      <Text
        style={{
          color: "white", //#015b25
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold",
        }}
        numberOfLines={1}
      >
        {props.title}
      </Text>
    </View>
  );
};

const HomeScreen = (props) => {
  const [show, setShow] = useState(false);

  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const defineTask = () =>
    TaskManager.defineTask("background-task-location", ({ data, err }) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("hello");
      const { locations } = data;
      const myLat = locations[0].coords.latitude;
      const myLon = locations[0].coords.longitude;
      // console.log(myLat, myLon);
      const myApiKey = "xKY10BBNp7cUAsRjzs70x205CQUqW0bu";
      fetch(
        `https://www.mapquestapi.com/geocoding/v1/reverse?key=${myApiKey}&location=${myLat}%2C${myLon}&thumbMaps=false`
      )
        .then((response, err) => {
          if (err) console.log(err);
          else return response.json();
        })
        .then((responseJson) => {
          // console.log(responseJson);
          dispatch(
            addLocation(responseJson.results[0].locations[0].adminArea5)
          );
          // console.log(responseJson.results[0].locations[0]);
        });
    });

  const fetchDetails = async () => {
    try {
      let data = await axios.get(
        "https://api.covid19india.org/districts_daily.json"
      );
      // let data2 = await axios.get(
      //   "https://api.covid19india.org/raw_data3.json"
      // );
      // console.log(data2.data["raw_data"].length);
      // console.log(data);
      // data = data.data.raw_data.filter((el) => {
      //   return (
      //     el.detectedcity === "bhubaneswar" && el.dateannounced === "05/05/2020"
      //   );
      // });
      let arr = data.data["districtsDaily"]["Odisha"]["Khordha"];
      // console.log(arr[arr.length - 1], "data");
      setData(arr[arr.length - 1]);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    defineTask();
    Location.startLocationUpdatesAsync("background-task-location", {
      accuracy: Location.Accuracy.High,
      timeInterval: 10000,
      distanceInterval: 1,
    });

    fetchDetails();
  }, []);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButton
            name="ios-menu"
            color="white"
            size={25}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        );
      },
      headerRight: () => {
        return (
          <HeaderButton
            name="ios-notifications"
            color="white"
            size={25}
            onPress={() => {}}
          />
        );
      },
    });
  });
  let el;
  if (!data) {
    el = <ActivityIndicator size={30} color="white" />;
  } else {
    el = (
      <View style={{ width: "100%", padding: 5 }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            marginVertical: 5,
            marginHorizontal: 12,
          }}
        >
          Corona Status At Khordha on {data.date}
        </Text>
        <View style={styles.info}>
          <Cards title="Total Cases" number={data.confirmed} />
          <Cards title="Active Cases" number={data.active} />
        </View>
        <View style={styles.info}>
          <Cards title="Cured/Discharged" number={data.recovered} />
          <Cards title="Deaths" number={data.deceased} />
        </View>
        <Button title="know more" color="red" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      {!show ? (
        <View style={{ width: "100%", padding: 5 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              marginVertical: 5,
              marginHorizontal: 12,
            }}
          >
            Corona Status
          </Text>
          <View style={styles.info}>
            <Cards title="Total Cases" number="46,621" />
            <Cards title="Active Cases" number="32,096" />
          </View>
          <View style={styles.info}>
            <Cards title="Cured/Discharged" number="12,948" />
            <Cards title="Deaths" number="1,573" />
          </View>
          <Button title="know more" color="red" />
        </View>
      ) : (
        el
      )}
      <Filter
        toggleSwitch={() => {
          if (data) {
            setShow((prevState) => !prevState);
          }
        }}
        name="show district data"
        state={show}
      />
      <NewCard
        imageUrl="https://cdn.mainichi.jp/vol1/2020/03/05/20200305p2a00m0na014000p/8.jpg?1"
        title="Learn More"
        desc="Washing hands in regular interval can prevent Corona.."
      />
      {/* {data ? (
        <View style={{ width: "100%", padding: 5 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              marginVertical: 5,
              marginHorizontal: 12,
            }}
          >
            Corona Status At Khordha on {data.date}
          </Text>
          <View style={styles.info}>
            <Cards title="Total Cases" number={data.confirmed} />
            <Cards title="Active Cases" number={data.active} />
          </View>
          <View style={styles.info}>
            <Cards title="Cured/Discharged" number={data.recovered} />
            <Cards title="Deaths" number={data.deceased} />
          </View>
          <Button title="know more" color="red" />
        </View>
      ) : (
        <ActivityIndicator size={30} color="white" />
      )} */}

      <CardComponent
        navigation={props.navigation}
        title="Donate"
        desc="Better health is enjoyed by those who donate their time, expertise or money to others who are in need."
        buttonDesc="Donate"
        imageUrl="data:image/jpeg;base64,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"
      />
      <CardComponent
        title="Help Others"
        desc="No one has ever become poor by giving. No one is useless in this world who lightens the burdens of another."
        buttonDesc="Join"
        imageUrl="https://3.bp.blogspot.com/-N1cjFDKoGhk/U5FtJOOgIqI/AAAAAAAAANM/MZBSQKAH85Q/s1600/The+Poor+People+of+Pakistan.jpg"
        navigation={props.navigation}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "black",
  },
  cardContainer: {
    width: "45%",
    height: 150,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f05454",
    margin: 10,
    alignItems: "center",
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filter: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

export default HomeScreen;
