import {View} from "react-native";

type TRow = {
  children: any
}

const Row = ({children}: TRow) => (
  <View style={{flexDirection: "row"}}>{children}</View>
);

export default Row;