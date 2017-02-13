import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

export default class mbrna extends Component {

  constructor(props) {
    super(props);
    this.state = {response: []};
  }

  componentDidMount() {
      let url = 'https://www.wayfair.com/v/activity/recent?_format=json&first_index=0&last_index=9';

      fetch(url, {method: 'POST'})  
      .then((response) => {
        return response.json()
      })
      .then((responseData) => {
        this.setState({response: responseData})
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcome}>
          mbrna for {require('react-native').Platform.OS === 'ios' ? 'iOS' : 'Android'}
        </Text>
        {this.state.response.map(function(product) {
          return (
            <View key={product.sku} style={{alignItems:'center'}}>
              <Text style={styles.welcome}>
                {product.sku}
              </Text>
              <Image source={{uri: product.image_url}}
                 style={{width: 200, height: 200}} />
            </View>
          )
        })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  tiny: {
    fontSize: 8,
    textAlign: 'left'
  }
});