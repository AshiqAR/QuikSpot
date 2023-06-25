import React, { useState } from "react";

import MyButton from "../../components/MyButton";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView ,
  Keyboard,
    Pressable,
  TextInput,
  Alert,
} from "react-native";
import {styles} from '../../styles/loginStyles.js'

const LoginScreen = ( {navigation}) => {
    
    const [mobileNumber, setmobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumberIsFocused, setmobileNumberIsFocused] = useState(false);
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);

    const handleLogin = () => {
        if (mobileNumber === "9876543210" && password === "user") {
          // Alert.alert( "Welcome to the ParKing!", "You have successfully logged in!");
          navigation.navigate("Home");
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        } else {
          Alert.alert("Sign in Failed", "Invalid Mobile Number or password");
        }
    };


    const navigateToSignUp = () => {
      navigation.navigate("SignUp");
    };

  return (
    <>
    <View style={styles.container}>
        <View style={styles.card}>
            <Image
                source={require("../../images/quikspot.png")}
                style={{ width:150, height: 50, marginVertical: 30 }}
            />
            <TextInput
                style={[styles.input,mobileNumberIsFocused && styles.inputIsFocused]}
                placeholder="Mobile Number"
                onChangeText={(text) => setmobileNumber(text)}
                onFocus={() => setmobileNumberIsFocused(true)}
                onBlur={() => setmobileNumberIsFocused(false)}
                value={mobileNumber}
                keyboardType="numeric"
            />
            <TextInput
                style={[styles.input,passwordIsFocused && styles.inputIsFocused]}
                placeholder="Password"
                onFocus={() => setPasswordIsFocused(true)}
                onBlur={() => setPasswordIsFocused(false)}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {/* <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={()=>console.log("Forgot Password pressed")}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
                
            </View> */}

            <View>

            <MyButton
                title="Sign In"
                onPress={() => handleLogin()}
                buttonStyle={styles.button}
                />
            </View>
        </View>
    </View>
    <View style={styles.signUpPart}>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => navigateToSignUp()}>
        <Text style={styles.signUp}>Sign Up</Text>
        </Pressable>
    </View>
    </>
  );
};

export default LoginScreen;