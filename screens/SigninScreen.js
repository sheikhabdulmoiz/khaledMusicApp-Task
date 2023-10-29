import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Title from '../components/Title';
import GradientButton from '../components/GradientButton';
import SimpleButton from '../components/SimpleButton';
import ImgBackground from '../components/ImgBackGround';
import TitleInputSet from '../components/TitleInputSet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';

const SignupScreen = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckBoxPress = () => {
    setIsChecked(!isChecked);
  };

  function pressHandler() {
    navigation.navigate('dashboard');
  }
  return (
    <View style={styles.container}>
      <ImgBackground></ImgBackground>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 56,
          marginBottom: 4,
          marginLeft: 20,
        }}>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 12,
            backgroundColor: '#373F45',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="chevron-back" size={26} color="white" />
        </View>
        <View style={{marginRight: 20}}>
          <Text style={{zIndex: 100, color: 'white', fontSize: 24}}>
            Sign In
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={styles.InputContainer}>
            <Text style={styles.text}>Welcome!</Text>

            <TitleInputSet
              title={'Email'}
              placeholder={'Enter you email'}
              icon={'email'}
              type="fontisto"
            />
            <TitleInputSet
              title={'Password'}
              icon={'lock'}
              type="evilicon"
              placeholder={'Enter you password'}
              icon2={'eye-off'}
            />

            <View style={styles.info}>
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  onClick={onCheckBoxPress}
                  isChecked={isChecked}
                  checkBoxColor="white"
                />
                <View style={{flex: 1, marginLeft: 6}}>
                  <Title>Remember Me</Title>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Title>Forget password?</Title>
              </View>
            </View>

            <View style={{height: 64, width: '100%'}}>
              <GradientButton
                onPress={pressHandler}
                styleExcel={{height: 52, borderRadius: 16}}>
                Sign In
              </GradientButton>
            </View>

            <View style={{marginVertical: 16}}>
              <Text style={styles.exceptText}>-OR-</Text>
            </View>
            <Text
              style={[styles.exceptText, {fontSize: 14, letterSpacing: 0.7}]}>
              Sign Up with
            </Text>
            <View style={styles.ButtonContainer}>
              <View style={{flex: 1}}>
                <SimpleButton icon="logo-facebook">Facebook</SimpleButton>
              </View>
              <View style={{flex: 1, marginLeft: 25}}>
                <SimpleButton icon="logo-google">Google</SimpleButton>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View>
                <Text
                  style={[
                    styles.exceptText,
                    {fontSize: 15, marginHorizontal: 2},
                  ]}>
                  Already have an account?
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      letterSpacing: 0.8,
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: 16,
                    }}>
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    // height: 232,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E272E',
  },
  InputContainer: {
    paddingHorizontal: 20,
    // top: 153,
    width: '100%',
    minHeight: 630,
    backgroundColor: '#373F45',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    opacity: 1,
    flex: 1,
    paddingBottom: 25,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 47,
    letterSpacing: 1.1,
    opacity: 1,
    marginTop: 30,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkBoxContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  exceptText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  ButtonContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 6,
  },
  scrollViewContainer: {
    paddingTop: 62,
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default SignupScreen;
