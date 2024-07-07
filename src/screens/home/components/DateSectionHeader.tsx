import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function DateSectionHeader() {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.dateContainer]}>
        <View style={styles.dayContainer}>
          <Text>lun</Text>
        </View>

        <Text style={styles.dayNumber}>1</Text>
        <Text style={styles.date}>Ene. 2022</Text>
      </View>

      <View style={[styles.row, styles.inOutContainer]}>
        <Text style={{ color: "red" }}>$123,123.50</Text>
        <Text style={{ color: "green" }}>$123,123.50</Text>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(() => ({
  container: {
    marginHorizontal: 24,
    marginVertical: 5,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  inOutContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  dateContainer: { flex: 1, alignItems: "center" },
  dayContainer: {
    backgroundColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  dayNumber: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  date: {
    color: "gray",
  },
}));
