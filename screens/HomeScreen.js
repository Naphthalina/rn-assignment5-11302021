import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';

export function HomeScreen({ theme }) {
  return (
    <SafeAreaView style={{ backgroundColor: theme.background, flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.leftImage}>
            <Image style={styles.profile} source={require('../assets/images/profile.png')} />
          </View>
          <View style={styles.leftText}>
            <Text style={[styles.welcome, { color: theme.text }]}>Welcome back,</Text>
            <Text style={[styles.name, { color: theme.text }]}>Eric Atsu</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Image style={styles.search} source={require('../assets/images/search.png')} />
        </View>
        <StatusBar style="auto" />
      </View>
      <View>
        <Image style={styles.card} source={require('../assets/images/Card.png')} />
      </View>
      <View style={styles.actions}>
        <View style={styles.actionsContainer}>
          <Image style={styles.loan} source={require('../assets/images/send.png')} />
          <Text style={[styles.imageText, { color: theme.text }]}>Sent</Text>
        </View>
        <View style={styles.actionsContainer}>
          <Image style={styles.loan} source={require('../assets/images/recieve.png')} />
          <Text style={[styles.imageText, { color: theme.text }]}>Receive</Text>
        </View>
        <View style={styles.actionsContainer}>
          <Image style={styles.loan} source={require('../assets/images/loan.png')} />
          <Text style={[styles.imageText, { color: theme.text }]}>Loan</Text>
        </View>
        <View style={styles.actionsContainer}>
          <Image style={styles.loan} source={require('../assets/images/topUp.png')} />
          <Text style={[styles.imageText, { color: theme.text }]}>Topup</Text>
        </View>
      </View>
      <View style={styles.transactionContainer}>
        <View style={styles.transaction}>
          <View style={styles.transactionList}>
            <Text style={[styles.transactionText, { color: theme.text }]}>Transaction</Text>
          </View>
          <Text style={[styles.seeAll, { color: theme.text }]}>See All</Text>
        </View>
      </View>
      <View style={styles.appleStoreContainer}>
        <View style={styles.appleStore}>
          <View style={styles.leftApple}>
            <Image style={styles.apple} source={require('../assets/images/apple.png')} />
          </View>
          <View style={styles.money}>
            <Text style={[styles.apps, { color: theme.text }]}>Apple Store</Text>
            <Text style={[styles.appFunction, { color: theme.text }]}>Entertainment</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={[styles.moneyText, { color: theme.text }]}>- $5,99</Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.appleStoreContainer}>
        <View style={styles.appleStore}>
          <View style={styles.leftApple}>
            <Image style={styles.apple} source={require('../assets/images/spotify.png')} />
          </View>
          <View style={styles.money}>
            <Text style={[styles.apps, { color: theme.text }]}>Spotify</Text>
            <Text style={[styles.appFunction, { color: theme.text }]}>Music</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={[styles.moneyText, { color: theme.text }]}>- $12,99</Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.appleStoreContainer}>
        <View style={styles.appleStore}>
          <View style={styles.leftApple}>
            <Image style={styles.apple} source={require('../assets/images/moneyTransfer.png')} />
          </View>
          <View style={styles.money}>
            <Text style={[styles.apps, { color: theme.text }]}>Money Transfer</Text>
            <Text style={[styles.appFunction, { color: theme.text }]}>Transaction</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={[styles.transferMoney, { color: theme.text }]}>$300</Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.appleStoreContainer}>
        <View style={styles.appleStore}>
          <View style={styles.leftApple}>
            <Image style={styles.apple} source={require('../assets/images/grocery.png')} />
          </View>
          <View style={styles.money}>
            <Text style={[styles.apps, { color: theme.text }]}>Grocery</Text>
            <Text style={[styles.appFunction, { color: theme.text }]}>Entertainment</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={[styles.moneyText, { color: theme.text }]}>- $88</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    height: 70,
    flexDirection: 'row',
    display: 'flex',
    columnGap: 10,
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  head: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
  },
  leftImage: {
    flex: 1,
  },
  leftText: {
    flex: 3,
    marginLeft: 15,
  },
  right: {
    flex: 1,
    marginLeft: 20,
    width: 70,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  welcome: {
    fontSize: 16,
  },
  profile: {
    width: 60,
    height: 60,
  },
  search: {
    position: "absolute",
    bottom: 25,
    right: 30,
    height: 35,
    width: 35,
  },
  card: {
    justifyContent: 'center',
    marginLeft: 25,
    marginTop: 10,
  },
  actions: {
    height: 80,
    flexDirection: 'row',
    display: 'flex',
    columnGap: 3,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  loan: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    marginRight: 30,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  actionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageText: {
    marginTop: 10,
    marginRight: 10,
    fontSize: 15,
  },
  transactionContainer: {
    height: 30,
    display: 'flex',
    columnGap: 3,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  transaction: {
    flexDirection: 'row',
    flex: 2,
  },
  transactionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 100,
    color: 'blue',
  },
  transactionList: {
    flexDirection: 'row',
    flex: 2,
  },
  appleStoreContainer: {
    marginTop: 3,
    height: 70,
    flexDirection: 'row',
    display: 'flex',
    columnGap: 10,
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  appleStore: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  leftApple: {
    flex: 1,
  },
  money: {
    flex: 3,
    marginLeft: 15,
  },
  right: {
    flex: 1,
    marginLeft: 40,
    width: 70,
  },
  appFunction: {
    fontSize: 16,
  },
  apps: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  apple: {
    width: 30,
    height: 30,
    marginTop: 10,
    borderRadius: 10,
  },
  moneyText: {
    position: "absolute",
    bottom: 20,
    right: 30,
    height: 35,
    width: 55,
    fontWeight: 'bold',
  },
  transferMoney: {
    position: "absolute",
    bottom: 20,
    right: 30,
    height: 35,
    width: 55,
    fontWeight: 'bold',
    color: 'blue',
  },
});
