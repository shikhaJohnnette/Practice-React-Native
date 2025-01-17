/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React , {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, View , Alert  } from 'react-native';
import {TextInput , Button  ,Card , Title , Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigation = useNavigation();


    const handleLogin = () => {
        if(!email || !password) {
    Alert.alert("Error" , "Please fill in all field")
            }else {
    Alert.alert("Success" , `Welcome , ${email}`);
                }
            navigation.navigate()
        };

return (
    <View style = {styles.container}>
    <Card style ={styles.card} >
    <Card.Content>
    <TextInput
    label ="Email"
    value = { email }
     onChangeText={(text) => setEmail(text)}
    style={styles.input}
    keyboardType="email-address"
    mode="outlined"
/>
 <TextInput
             label="Password"
             value={password}
             onChangeText={(text) => setPassword(text)}
             style={styles.input}
             secureTextEntry
             mode="outlined"
           />

           <Button
             mode="fill"
             onPress={handleLogin}
             style={styles.button}
             contentStyle={styles.buttonContent}
           >
             Login
           </Button>



      </Card.Content>
     </Card>
    </View>
    );

    };
// end of loginFunction





// Main App Component
const App = () => {
  return (
      <SafeAreaView style={styles.container}>
    <PaperProvider>
      <LoginPage />
    </PaperProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: "center",
        alignItems: "center",
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
 card: {
        backgroundColor: '#f8f9fa',
        padding: 20, // Adds padding inside the card
        alignSelf: "center", // Ensures the card adjusts to its content and centers itself
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
    input: {
      marginBottom: 16,
      width: 250, // Optional: Set consistent width for inputs
    },

});

export default App;
