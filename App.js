import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [data, setData] = useState("0");
  const [operator, setOperator] = useState(null);

  const handleData = (value) => {
    if (displayValue === "0") {
      setDisplayValue(value.toString());
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleOperator = (operator) => {
    setOperator(operator);
    setData(displayValue);
    setDisplayValue("0");
  };

  const handleEqual = () => {
    const num1 = parseFloat(data);
    const num2 = parseFloat(displayValue);
    console.log(operator);
    switch (operator) {
      case "+":
        setDisplayValue((num1 + num2).toString());
        break;
      case "-":
        setDisplayValue((num1 - num2).toString());
        console.log("hey", operator);
        break;
      case "*":
        setDisplayValue((num1 * num2).toString());
        break;
      case "/":
        setDisplayValue((num1 / num2).toString());
        break;
      default:
        setOperator(null);
        setData("");
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.answerPanel}>
        <View>
          <Text style={styles.answerText}>
            {displayValue}
            {/* {parseFloat(data).toLocaleString()} */}
          </Text>
        </View>
      </View>
      <View style={styles.inputPanel}>
        <View style={styles.inputs}>
          <TouchableOpacity
            style={styles.inputStyle}
            onPress={() => setDisplayValue("0")}
          >
            <Text style={styles.inputText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputStyle}>
            <Text style={styles.inputText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputStyle}>
            <Text style={styles.inputText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle1}
            onPress={() => handleOperator("/")}
          >
            <Text style={styles.inputText1}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TouchableOpacity
            style={styles.inputStyle4}
            onPress={() => handleData("7")}
          >
            {/* <Button title="7" color="#000" st /> */}
            <Text style={styles.inputText1}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle4}
            onPress={() => handleData("8")}
          >
            <Text style={styles.inputText1}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle4}
            onPress={() => handleData("9")}
          >
            <Text style={styles.inputText1}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle1}
            onPress={() => handleOperator("*")}
          >
            <Text style={styles.inputText1}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TouchableOpacity
            style={styles.inputStyle4}
            onPress={() => handleData("4")}
          >
            <Text style={styles.inputText1}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle4}
            onPress={() => handleData("5")}
          >
            <Text style={styles.inputText1}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle4}
            onPress={() => handleData("6")}
          >
            <Text style={styles.inputText1}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle1}
            onPress={() => handleOperator("-")}
          >
            <Text style={styles.inputText1}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TouchableOpacity
            style={styles.inputStyle4}
            onPress={() => handleData("1")}
          >
            <Text style={styles.inputText1}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle4}
            onPress={() => handleData("2")}
          >
            <Text style={styles.inputText1}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle4}
            onPress={() => handleData("3")}
          >
            <Text style={styles.inputText1}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputStyle1}
            onPress={() => handleOperator("+")}
          >
            <Text style={styles.inputText1}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TouchableOpacity style={styles.inputStyle3}>
            <Text style={styles.inputText1}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputStyle4}>
            <Text style={styles.inputText1}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputStyle1} onPress={handleEqual}>
            <Text style={styles.inputText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  answerPanel: {
    height: "35%",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "black",
    paddingHorizontal: 30,
  },
  inputPanel: {
    height: "65%",
    width: "100%",
    backgroundColor: "#000",
    // paddingHorizontal: 10,
  },
  answerText: {
    fontSize: 100,
    color: "white",
  },
  inputs: {
    height: "19%",
    width: "100%",
    display: "flex",
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
  },
  inputStyle: {
    height: "80%",
    width: "22%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edede9",
    borderRadius: 50,
  },
  inputStyle1: {
    height: "80%",
    width: "22%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#ffb703",
  },
  inputStyle2: {
    height: "80%",
    width: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#6c757d",
  },
  inputStyle3: {
    height: "80%",
    width: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    borderRadius: 50,
    paddingHorizontal: 30,
    backgroundColor: "#343a40",
  },
  inputStyle4: {
    height: "80%",
    width: "22%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#343a40",
  },
  inputText: {
    fontSize: 30,
    color: "#000",
  },
  inputText1: {
    fontSize: 30,
    color: "#fff",
  },
});
