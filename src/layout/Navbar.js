import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function navbar({actualPage, tradePage}) {
 return (
   <View style={styles.navbar}> 

        <TouchableOpacity style={styles.button} onPress={tradePage}> 
            
            <Text style={styles.text}> {actualPage} </Text> 
        
        </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({
    navbar: {
      flexDirection: "row",   
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "rgba(191, 188, 188, 0.30)"
    },
    text: {

        color: "red",
        fontSize: 30,
        borderRadius: .5,
        padding: 20,

    },
    button: {

        marginHorizontal: 20,

    }
    
});
  