import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Title from '../components/Title';
import GradientButton from '../components/GradientButton';
import SimpleButton from '../components/SimpleButton';
import ImgBackground from '../components/ImgBackGround';
import ProfileImage from '../components/ProfileImage';
import TitleInputSet from '../components/TitleInputSet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImgBackground></ImgBackground>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 56,
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
            Sign Up
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={styles.InputContainer}>
            <View style={{alignItems: 'center', marginTop: -50}}>
              <ProfileImage />
              <View style={{marginTop: -20, marginRight: -42}}>
                <AntDesign name="pluscircle" size={26} color="#9EBEC4" />
              </View>
            </View>
            <TitleInputSet
              title={'First Name*'}
              placeholder={'Enter your first name'}
              icon={'person'}
              type="ionicons"
            />
            <TitleInputSet
              title={'Last Name*'}
              placeholder={'Enter you last name'}
              icon={'person'}
              type="ionicons"
            />
            <TitleInputSet
              title={'Phone'}
              placeholder={'Enter you phone'}
              icon={'phone'}
            />
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
                <GradientButton styleExcel={{height: 56, borderRadius: 16}}>
                  {' '}
                  Sign Up
                </GradientButton>
                {/* <View>
                  <Title>Forget Password</Title>
                </View> */}
              </View>
              {/* <View>
                <Title>Remember me</Title>
              </View> */}
            </View>

            <View style={{marginVertical: 10}}>
              <Text style={styles.exceptText}>-OR-</Text>
            </View>
            <Text style={[styles.exceptText, {fontSize: 14}]}>
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
                <TouchableOpacity onPress={() => navigation.navigate('signin')}>
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
    height: 232,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E272E',
  },
  InputContainer: {
    paddingHorizontal: 20,
    // top: 153,
    width: '100%',
    minHeight: 700,
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
    flex:1,
    marginTop:30,
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingTop: 75,
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default SignupScreen;
