// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import { View, Text, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
class SplashScreen extends React.Component  {
    constructor(props) {
        super(props);   
    }
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            this.props.navigation.navigate('home')
        }, 2500);
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutHandle);
    }
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <View style={{ flex: 1 , padding: 16}}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'center',
                      marginBottom: 16
                    }}>
                    You are on SplashScreen Screen
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          );
    }
}
export default SplashScreen;