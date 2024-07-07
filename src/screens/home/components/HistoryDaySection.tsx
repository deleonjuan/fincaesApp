import { View } from "react-native";
import DateSectionHeader from "./DateSectionHeader";
import Transaction from "./Transaction";

export default function HistoryDaySection() {
  return (
    <View>
      <DateSectionHeader />
      {Array.from({ length: 10 }).map((_, i) => (
        <Transaction
          key={i}
          title="lorem ipsum dolor sitt amment consectectur adispisimit init"
          account="cuenta"
          category="category"
          amount="123,123.50"
          type="income"
        />
      ))}
    </View>
  );
}
