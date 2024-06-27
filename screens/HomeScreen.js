import React from 'react';
import { View, Text, StyleSheet , Image, SafeAreaView, StatusBar} from 'react-native';

export function HomeScreen({ theme }) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.head}>

      <View style={styles.leftImage}>
      <Image style={styles.profile} source={require('../assets/images/profile.png')}/>
        </View>
        <View style={styles.leftText}>
          <Text style={styles.welcome}>Welcome back,</Text>
          <Text style={styles.name}>Eric Atsu</Text>
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
      <Text style={styles.imageText}>Sent</Text>
      </View>

      <View style={styles.actionsContainer}>
      <Image style={styles.loan} source={require('../assets/images/recieve.png')} />
      <Text style={styles.imageText}>Receive</Text>
      </View>

      <View style={styles.actionsContainer}>
      <Image style={styles.loan} source={require('../assets/images/loan.png')} />
      <Text style={styles.imageText}>Loan</Text>
      </View>

      <View style={styles.actionsContainer}>
      <Image style={styles.loan} source={require('../assets/images/topUp.png')} />
      <Text style={styles.imageText}>Topup</Text>
      </View>
       
    </View>

    <View style={styles.transactionContainer}>
      <View style={styles.transaction}>
        <View style={styles.transactionList}>
        <Text style={styles.transactionText}>Transaction</Text>
        </View>
        <Text style={styles.seeAll}>See All</Text>

      </View>
    
    </View>

    <View style={styles.appleStoreContainer}>
      <View style={styles.appleStore}>

      <View style={styles.leftApple}>
      <Image style={styles.apple} source={require('../assets/images/apple.png')}/>
        </View>
        <View style={styles.money}>
          <Text style={styles.apps}>Apple Store</Text>
          <Text style={styles.appFunction}>Entertainment</Text>
          </View>

      </View>

      <View style={styles.right}>
       <Text style={styles.moneyText}>  - $5,99</Text>
      </View>

      <StatusBar style="auto" />
    </View>

    <View style={styles.appleStoreContainer}>
      <View style={styles.appleStore}>

      <View style={styles.leftApple}>
      <Image style={styles.apple} source={require('../assets/images/spotify.png')}/>
        </View>
        <View style={styles.money}>
          <Text style={styles.apps}>Spotify</Text>
          <Text style={styles.appFunction}>Music</Text>
          </View>

      </View>

      <View style={styles.right}>
       <Text style={styles.moneyText}>- $12,99</Text>
      </View>

      <StatusBar style="auto" />
    </View>

    <View style={styles.appleStoreContainer}>
      <View style={styles.appleStore}>

      <View style={styles.leftApple}>
      <Image style={styles.apple} source={require('../assets/images/moneyTransfer.png')}/>
        </View>
        <View style={styles.money}>
          <Text style={styles.apps}>Money Transfer</Text>
          <Text style={styles.appFunction}>Transaction</Text>
          </View>

      </View>

      <View style={styles.right}>
       <Text style={styles.transferMoney}>    $300</Text>
      </View>

      <StatusBar style="auto" />
    </View>

    <View style={styles.appleStoreContainer}>
      <View style={styles.appleStore}>

      <View style={styles.leftApple}>
      <Image style={styles.apple} source={require('../assets/images/grocery.png')}/>
        </View>
        <View style={styles.money}>
          <Text style={styles.apps}>Grocery</Text>
          <Text style={styles.appFunction}>Entertainment</Text>
          </View>

      </View>

      <View style={styles.right}>
       <Text style={styles.moneyText}>   - $88</Text>
      </View>

      <StatusBar style="auto" />
    </View>
    

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    height:70,
    flexDirection:'row',
    display: 'flex',
    columnGap:10,
    justifyContent:'space-between',
    marginLeft: 30,
  },

  head:{
    flex: 3,
    display:'flex',
    flexDirection:'row',
  },

  leftImage:{
    flex:1,
    //width:70,
    //height:50,
  },

  leftText:{
    flex: 3,
    marginLeft:15,
  },

  right:{
    flex: 1,
    marginLeft: 20,
    width: 70,
  },

  name:{
    fontWeight:'bold',
    fontSize:25,
  },

  welcome:{
    fontSize:16,
    color:'#555'
  },

  profile:{
    width:60,
    height:60,
  },

  search:{
    position:"absolute",
    bottom:25,
    right:30,
    height:35,
    width:35,
  },

  card:{
    justifyContent:'center',
    marginLeft:25,
    marginTop:10,
  },

  actions:{
    height:80,
    flexDirection:'row',
    display: 'flex',
    columnGap:3,
    justifyContent:'space-between',
    marginLeft: 10,
    marginTop:10,
    marginRight:20,
    marginLeft:20,
    //backgroundColor:'blue',
  },

  loan:{
    height:30,
    width:30,
    justifyContent:'center',
    marginRight:30,
    marginLeft:20,
    marginTop:10,
    borderRadius:10,
    color:'gray',
  },

  actionsContainer:{
    flex:1,
    //backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
  },

  imageText:{
    marginTop:10,
    marginRight:10,
    fontSize:15,
  },

  transactionContainer:{
    height:30,
    //:'row',
    display: 'flex',
    columnGap:3,
    justifyContent:'space-between',
    marginLeft: 10,
    marginTop:10,
    marginRight:20,
    marginLeft:20,
    //backgroundColor:'blue',
    
  },

  transaction:{
    flexDirection:'row',
    //backgroundColor:'red',
    flex:2,
  },

  transactionText:{
    fontSize:20,
    fontWeight:'bold',
  },

  seeAll:{
    flex:1,
    //backgroundColor:'yellow',
    flexDirection:'row',
    fontSize:16,
    fontWeight:'bold',
    marginLeft:100,
    color:'blue',
  },

  transactionList:{
    flexDirection:'row',
    flex:2,
  },

  appleStoreContainer: {
    marginTop: 3,
    height:70,
    flexDirection:'row',
    display: 'flex',
    columnGap:10,
    justifyContent:'space-between',
    marginLeft: 30,
  },

  appleStore:{
    flex: 3,
    display:'flex',
    flexDirection:'row',
    marginTop:10,
  },

  leftApple:{
    flex:1,
    //width:70,
    //height:50,
  },

  money:{
    flex: 3,
    marginLeft:15,
  },

  right:{
    flex: 1,
    marginLeft: 40,
    width: 70,
  },

  appFunction:{
    fontSize:16,
    color:'#555'
  },

  apps:{
    fontSize:20,
    fontWeight:'bold',
    
  },

  apple:{
    width:30,
    height:30,
    marginTop:10,
    borderRadius:10,
    color:'gray',
  },

  moneyText:{
    position:"absolute",
    bottom:20,
    right:30,
    height:35,
    width:55,
    fontWeight:'bold',
  },

  transferMoney:{
    position:"absolute",
    bottom:20,
    right:30,
    height:35,
    width:55,
    fontWeight:'bold',
    color:'blue',
  },
});


