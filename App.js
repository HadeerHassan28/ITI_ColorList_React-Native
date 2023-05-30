import Box from "./component/Box/Box.js";
import {
  FlatList,
  Platform,
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const COLORS = [
    { colorName: "Base03", hexCode: "#002b36" },
    { colorName: "Base02", hexCode: "#073642" },
    { colorName: "Base01", hexCode: "#586e75" },
    { colorName: "Base00", hexCode: "#657b83" },
    { colorName: "Base0", hexCode: "#839496" },
    { colorName: "Base1", hexCode: "#93a1a1" },
    { colorName: "Base2", hexCode: "#eee8d5" },
    { colorName: "Base3", hexCode: "#fdf6e3" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Red", hexCode: "#dc322f" },
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    { colorName: "Green", hexCode: "#859900" },
  ];
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 30 : 0,
        padding: 15,
        marginHorizontal: 10,
      }}
    >
      <FlatList
        data={COLORS}
        renderItem={({ item }) => <Box {...item}></Box>}
        keyExtractor={(data) => data.hexCode}
        ListHeaderComponent={
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 34,
              textAlign: "center",
              color: "red",
            }}
          >
            Color List
          </Text>
        }
        ItemSeparatorComponent={
          <View style={{ backgroundColor: "#C0C0C0", height: 2 }}></View>
        }
      ></FlatList>
      {/* <ScrollView>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Here are some boxes of different colors
        </Text>
        {COLORS.map((ele) => (
          <Box {...ele} key={ele.hexCode}></Box>
        ))}

        <Box
          colorName={Platform.OS === "android" ? "Iam android" : "ios"}
          hexCode={"black"}
        ></Box>
      </ScrollView> */}
    </SafeAreaView>
  );
}
