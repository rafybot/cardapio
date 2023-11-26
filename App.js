import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Input, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  const ref = React.useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#DC3545',
                height: 55,
                shadowColor: 'transparent',
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: '#f0f0f0',
              headerShadowVisible: false
            }} />
          <Stack.Screen
            name="Pizzas"
            component={PizzaScreen}
            options={{
              title:"Nossas Pizzas 🍕",
              headerStyle: {
                backgroundColor: '#DC3545',
                height: 55,
                shadowColor: 'transparent',
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: '#f0f0f0',
              headerShadowVisible: false
            }} />
          <Stack.Screen 
            name="Hamburgueres" 
            component={HamburguerScreen}
            options={{
              title:"Nossos Hambúrgueres 🍔",
              headerStyle: {
                backgroundColor: '#DC3545',
                height: 55,
                shadowColor: 'transparent',
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: '#f0f0f0',
              headerShadowVisible: false
            }} />
          <Stack.Screen
            name="Bebidas"
            component={BebidaScreen}
            options={{
              title:"Bebidas para Acompanhar 🥤",
              headerStyle: {
                backgroundColor: '#DC3545',
                height: 55,
                shadowColor: 'transparent',
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: '#f0f0f0',
              headerShadowVisible: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.buttonArea}>
        <Button 
          onPress={() => ref.current && ref.current.navigate('Pizzas')}
          title="🍕 Pizzas"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
        />
        <Button
          onPress={() => ref.current && ref.current.navigate('Hamburgueres')}
          title="🍔 Hambúrgueres"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
        />
        <Button
          onPress={() => ref.current && ref.current.navigate('Bebidas')}
          title="🥤 Bebidas"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

function HomeScreen() {
  return (
    <View style={styles.pageView}>
      <Image source={require('./assets/logo.png')} style={styles.image}/>
      <Text style={styles.title}>Bem-vindo ao Méqui 2! :)</Text>
      <Text style={{color: '#fff'}}>Para navegar por nosso cardápio digital, clique em um dos botões abaixo:</Text>
    </View>
  );
}

function PizzaScreen() {
  return (
    <View style={cardapio.container}>
      <View style={cardapio.item}>
        <Image source={require('./assets/pizza_calabresa.png')} style={cardapio.imagePizza}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Calabresa</Text>
          <Text style={cardapio.itemPrice}>R$32,00</Text>
        </View>
      </View>
      <View style={cardapio.item}>
        <Image source={require('./assets/pizza_frango.png')} style={cardapio.imagePizza}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Frango c/ Catupiry</Text>
          <Text style={cardapio.itemPrice}>R$32,00</Text>
        </View>
      </View>
      <View style={cardapio.item}>
        <Image source={require('./assets/pizza_portuguesa.png')} style={cardapio.imagePizza}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Portuguesa</Text>
          <Text style={cardapio.itemPrice}>R$35,00</Text>
        </View>
      </View>
      <View style={cardapio.item}>
        <Image source={require('./assets/pizza_quatro.png')} style={cardapio.imagePizza}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Quatro Queijos</Text>
          <Text style={cardapio.itemPrice}>R$35,00</Text>
        </View>
      </View>
    </View>
  );
}

function HamburguerScreen() {
  return (
    <View style={cardapio.container}>
      <View style={cardapio.item}>
        <Image source={require('./assets/mc_fiesta.png')} style={cardapio.imagePizza}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Mc Fiesta</Text>
          <Text style={cardapio.itemPrice}>R$23,00</Text>
        </View>
      </View>
      <View style={cardapio.item}>
        <Image source={require('./assets/triplo_burger.png')} style={cardapio.imagePizza}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Triplo Burger</Text>
          <Text style={cardapio.itemPrice}>R$24,00</Text>
        </View>
      </View>
      <View style={cardapio.item}>
        <Image source={require('./assets/chicken_legend.png')} style={cardapio.imagePizza}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Chicken Legend</Text>
          <Text style={cardapio.itemPrice}>R$28,00</Text>
        </View>
      </View>
      <View style={cardapio.item}>
        <Image source={require('./assets/big_tasty.png')} style={cardapio.imagePizza}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Big Tasty</Text>
          <Text style={cardapio.itemPrice}>R$30,00</Text>
        </View>
      </View>
    </View>
  );
}

function BebidaScreen() {
  return (
    <View style={cardapio.container}>
      <View style={cardapio.item}>
        <Image source={require('./assets/coca_cola.png')} style={cardapio.imageBebida}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Coca Cola 500ml (Refil)</Text>
          <Text style={cardapio.itemPrice}>R$6,00</Text>
        </View>
      </View>
      <View style={cardapio.item}>
        <Image source={require('./assets/guarana.png')} style={cardapio.imageBebida}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Fanta Guaraná 500ml (Refil)</Text>
          <Text style={cardapio.itemPrice}>R$6,00</Text>
        </View>
      </View>
      <View style={cardapio.item}>
        <Image source={require('./assets/sprite.png')} style={cardapio.imageBebida}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Sprite 500ml (Refil)</Text>
          <Text style={cardapio.itemPrice}>R$6,00</Text>
        </View>
      </View>
      <View style={cardapio.item}>
        <Image source={require('./assets/del_valle_laranja.png')} style={cardapio.imageBebida}/>
        <View style={cardapio.itemText}>
          <Text style={cardapio.itemName}>Suco Del Valle Laranja 500ml</Text>
          <Text style={cardapio.itemPrice}>R7,50</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    padding: 6,
  },
  pageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 22,
    backgroundColor: '#121212'
  },
  image: {
    width: '92px',
    height: '82px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#FFC72C',
    marginBottom: 12
  },
  button: {
    marginHorizontal: 5,
    paddingHorizontal: 12,
    borderRadius: 30,
    borderWidth: '2px',
    borderColor: '#121212',
    backgroundColor: '#DC3545'
  },
  buttonTitle: {
    color: "#f0f0f0",
    fontSize: 12,
    fontWeight: 'bold'
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
    margin: 0
  }
});

const cardapio = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagePizza: {
    width: '60px',
    height: '60px'
  },
  imageBebida: {
    width: '92px',
    height: '70px'
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#303030',
    borderRadius: 50,
    width: '92%',
    marginTop: 8
  },
  itemText: {
    justifyContent: 'center',
    marginLeft: 10
  },
  itemName: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 13
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#FFC72C'
  }
})
