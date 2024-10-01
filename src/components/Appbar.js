import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Appbar() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://imgs.search.brave.com/QzWKHRlLgVyKnkNSf2hny2uPlOrewCx4_N6yceJCZ88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODAwNDc4ODM4MzEt/NWRiMDM4MzdiMGIz/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE5ueDhZMjlo/ZEh4bGJud3dmSHd3/Zkh4OE1BPT0' }} // Replace with your image URL
          style={styles.circleImage}
        />
        <Text style={styles.text}>KPR Transaport</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
  },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
  },
});
