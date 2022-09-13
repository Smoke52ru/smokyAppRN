import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import Row from "./Row";
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentValue} from "../../store/slice/calculator";
import {CalculatorSlice} from "../../store/slice";
import {CalculatorActionTypes, TCalculatorAction} from "../../store/slice/calculator/entities";


const CalculatorScreen = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector(getCurrentValue)

  const handleTapConstructor = (action: TCalculatorAction) => () => {
    dispatch(CalculatorSlice.handleButton(action));
  };

  return (
    <View style={styles.list}>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView>
        <Text style={styles.value}>
          {currentValue}
        </Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={handleTapConstructor({type: CalculatorActionTypes.Clear})}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={handleTapConstructor({type: CalculatorActionTypes.Reverse})}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={handleTapConstructor({type: CalculatorActionTypes.Percentage})}
          />
          <Button
            text="/"
            theme="accent"
            onPress={handleTapConstructor({type: CalculatorActionTypes.Operator, value: '/'})}
          />
        </Row>

        <Row>
          <Button text="7" onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '7'})}/>
          <Button text="8" onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '8'})}/>
          <Button text="9" onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '9'})}/>
          <Button
            text="*"
            theme="accent"
            onPress={handleTapConstructor({type: CalculatorActionTypes.Operator, value: '*'})}
          />
        </Row>

        <Row>
          <Button text="4" onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '4'})}/>
          <Button text="5" onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '5'})}/>
          <Button text="6" onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '6'})}/>
          <Button
            text="-"
            theme="accent"
            onPress={handleTapConstructor({type: CalculatorActionTypes.Operator, value: '-'})}
          />
        </Row>

        <Row>
          <Button text="1" onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '1'})}/>
          <Button text="2" onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '2'})}/>
          <Button text="3" onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '3'})}/>
          <Button
            text="+"
            theme="accent"
            onPress={handleTapConstructor({type: CalculatorActionTypes.Operator, value: '+'})}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '0'})}
          />
          <Button text="." onPress={handleTapConstructor({type: CalculatorActionTypes.Number, value: '.'})}/>
          <Button
            text="="
            theme="accent"
            onPress={handleTapConstructor({type: CalculatorActionTypes.Equal})}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export default CalculatorScreen;