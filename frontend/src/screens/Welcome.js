import React from "react";
import {
  View,
  Dimensions,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import background from "../assets/Background.png";
import logo from "../assets/Logo.png";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

function Welcome() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.imageBack}
      >
        <Image source={logo} style={styles.imagelogo} />
        <ActivityIndicator style={{ top: 200 }} size={69} color="#724BB6" />
      </ImageBackground>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    flex: 1,
  },
  imagelogo: {
    width: 222,
    height: 82,
    marginTop: -200,
  },
  imageBack: {
    width: width,
    height: height + StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
