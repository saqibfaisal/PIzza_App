import React, {Component, useEffect} from 'react';
import {Animated, StyleSheet, Text, View, I18nManager} from 'react-native';

import {RectButton, Swipeable} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class GmailStyleSwipeableRow extends Component {
  renderLeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.leftAction} onPress={this.close}>
        {/* <AnimatedIcon
          name="archive"
          size={30}
          testID={'10102020'}
          color="#1f262f"
          style={[styles.actionIcon]}
        /> */}
        <Animated.Text
          style={{
            color: '#fff',
            fontSize: 16,
            // transform: [{scale: scale}],
          }}>
          Sell
        </Animated.Text>
      </View>
    );
  };
  renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View style={[styles.rightAction]} onPress={this.close}>
        {/* <Animated.View
          style={{
            transform: [{translateX: scale}],
          }}> */}
        <Animated.Text
          style={{
            color: '#fff',
            fontSize: 16,
            // transform: [{scale: scale}],
          }}>
          Buy
        </Animated.Text>
        {/* </Animated.View> */}
      </View>
    );
  };
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const {children} = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={80}
        rightThreshold={41}
        // disabled={this.props.swipeLoader}
        // disabled={true}
        // renderLeftActions={!this.props.swipeLoader && this.renderLeftActions}
        overshootFriction={9}
        onSwipeableOpen={ev => {
          if (ev === 'left') {
            this.close();
            // this.props.sellFn();
          } else if (ev === 'right') {
            this.close();
            // this.props.buyFn();
          }
        }}
        onSwipeableClose={ev => console.log(ev, 'onSwipeableClose')}
        // renderRightActions={!this.props.swipeLoader && this.renderRightActions}
        >
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 49,
            backgroundColor: '#161a25',
            flexDirection: 'row',
          }}>
          <View
            style={[
              styles.buySell,
               {backgroundColor: '#42515f'} 
            ]}>
            <Text style={[styles.RedColor]}>Sell</Text>
            <Text style={[styles.graytColor]}>Swipe right to sell</Text>
          </View>
          <View style={[styles.line]}></View>
          <View
            style={[
              styles.buySell,
               {backgroundColor: '#42515f'} 
            ]}>
            <Text style={[styles.greenColor]}>Buy</Text>
            <Text style={[styles.graytColor]}>Swipe left to buy</Text>
          </View>
        </View>
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  RedColor: {
    color: '#ff646d',
  },
  line: {
    width: '6%',
    backgroundColor: '#161a25',
    height: 49,
    // borderColor: '#6d7986',
    // borderWidth: 1,
    // transform: [{rotate: '-10deg'}],
  },
  graytColor: {
    color: '#6d7986',
    fontSize: 8,
    textAlign: 'center',
  },
  buySell: {
    borderColor: '#6d7986',
    borderWidth: 1,
    width: '47%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 49,
    // borderBottomStartRadius: 10,
    // borderBottomLeftRadius: 10,
  },
  greenColor: {
    color: '#22d49f',
  },
  leftAction: {
    flex: 1,
    backgroundColor: '#ff646d',
    justifyContent: 'center',
    paddingLeft: 10,
    // alignItems: 'center',
    // flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
  rightAction: {
    // alignItems: 'center',
    // flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    backgroundColor: '#22d49f',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
});