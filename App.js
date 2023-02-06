import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Modal, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import Navbar from './src/layout/Navbar';

export default function App() {

  const [actualPageVisible, setActualPageVisible] = useState(true)
  const [actualPage, setActualPage] = useState("°C")

  const [value, setValue] = useState(-129293392)

  function tradePage(){

    setActualPageVisible(!actualPageVisible)

    if(actualPage == "°C"){

      setActualPage("°F")
      setValue(-129293392)

    }else{

      setActualPage("°C")
      setValue(-129293392)

    }

  }

  function celsiustofahrenheit(c){

    return ((c * 1.8) + 32.0)

  }

  function fahrenheittocelsius(f){

    return ((f - 32) / 1.8)

  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" hidden={true}/>

      <Modal visible={actualPageVisible}>

        <Navbar actualPage={actualPage} tradePage={tradePage}/>

        <View style={styles.insideContainer}>
        
          <View style={styles.inputArea}>

            <Text style={styles.temp}> °F </Text> 
            <TextInput keyboardType='numeric' placeholder='Escreva aqui!' placeholderTextColor={"gray"} style={styles.input} onChangeText={setValue}></TextInput>

          </View>

          {value >= 100000000 && <Text style={{color: "red", fontSize: 20}}> Número muito grande! </Text>}

          {value == "" && setValue(-129293392)}

          {value != -129293392 && value < 100000000 &&
            
            <View style={styles.resultArea}>

              <Text style={styles.tempResult}> °C </Text> 
              <Text style={styles.result}> {fahrenheittocelsius(value)} </Text>
 
            </View>
            
          }

        </View>
        
      </Modal>

      <Modal visible={!actualPageVisible}>

        <Navbar actualPage={actualPage} tradePage={tradePage}/>

        <View style={styles.insideContainer}>
        
          <View style={styles.inputArea}>

            <Text style={styles.temp}> °C </Text> 
            <TextInput keyboardType='numeric' placeholder='Escreva aqui!' placeholderTextColor={"gray"} style={styles.input} onChangeText={setValue}></TextInput>
 
          </View>

          {value >= 100000000 && <Text style={{color: "red", fontSize: 20}}> Número muito grande! </Text>}

          {value == "" && setValue(-129293392)}

          {value != -129293392 && value < 100000000 && 
            
            <View style={styles.resultArea}>

              <Text style={styles.tempResult}> °F </Text> 
              <Text style={styles.result}> {celsiustofahrenheit(value)} </Text>
 
            </View>
            
          }

        </View>

      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  insideContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "transparent",
    padding: 1.75,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,

  },
  temp: {

    paddingRight: 5,
    fontSize: 30,

  },
  input: {

    paddingRight: 15,

  },
  resultArea: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "transparent",
    padding: 1.75,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: "50%",

  },
  tempResult: {

    width: "35%",
    fontSize: 30,

  },
  result: {

    width: "60%",
    textAlign: "center",

  }
});
