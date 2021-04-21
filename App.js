import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default class extends React.Component {
  // 사용자의 위치를 얻음
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      console.log(reponse);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
