/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNCalendarEvents from 'react-native-calendar-events';

//RNCalendarEvents.findCalendars()
  //.then(calendars => {
    //// handle calendars
    //console.log('cals');
    //console.log(calendars);
  //})
  //.catch(error => {
    //// handle error
    //console.log(error);
  //});

RNCalendarEvents.fetchAllEvents('2017-04-22T19:26:00.000Z', '2017-05-08T19:26:00.000Z', [])
  .then(events => {
    // handle events
    console.log('events');
    for (let i = 0; i < events.length; i++) {
        //if (events[i].location == "GREEN") console.log(events[i]);
        if (events[i].title.includes("NJIT") && !events[i].calendar.title.includes("Filtered") && !events[i].calendar.title.includes("Extra")) console.log(events[i]);
    }
    console.log(events);
    console.log(events[0]);
  })
  .catch(error => {
   // handle error
   console.log(error);
  });

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
