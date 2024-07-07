import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface TransactionProps {
  title: string;
  category: string;
  account: string;
  amount: string;
  type: "income" | "outcome" | string;
}

export default function Transaction(props: TransactionProps) {
  const { styles } = useStyles(stylesheet);
  const ammountColor = props.type === "income" ? "green" : "red";

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "column", flex: 2 }}>
        <Text numberOfLines={1}>{props.title}</Text>
        <Text style={styles.subtitle}>
          {props.category} - {props.account}
        </Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        <Text style={[{ color: ammountColor }]}>${props.amount}</Text>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(() => ({
  container: {
    backgroundColor: "white",
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 5,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
  },
  subtitle: {
    color: "gray",
  },
}));
