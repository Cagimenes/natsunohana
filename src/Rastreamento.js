import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  const [pedidoStatus, setPedidoStatus] = useState('pendente');
  const [tempoRestante, setTempoRestante] = useState(60); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (tempoRestante === 0) {
        switch (pedidoStatus) {
          case 'pendente':
            setPedidoStatus('confirmado');
            setTempoRestante(120); 
            break;
          case 'confirmado':
            setPedidoStatus('em rota');
            setTempoRestante(180); 
            break;
          case 'em rota':
            setPedidoStatus('entregue');
            setTempoRestante(0);
            break;
          default:
            break;
        }
      } else {
        setTempoRestante(tempoRestante - 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [pedidoStatus, tempoRestante]);

  const getTempoEstimado = () => {
    const minutosRestantes = Math.floor(tempoRestante / 60);
    const segundosRestantes = tempoRestante % 60;

    switch (pedidoStatus) {
      case 'pendente':
        return 'Aguardando confirmação...';
      case 'confirmado':
        return `Preparando seu pedido (estimado: ${minutosRestantes}m ${segundosRestantes}s)`;
      case 'em rota':
        return `Seu pedido está a caminho (estimado: ${minutosRestantes}m ${segundosRestantes}s)`;
      case 'entregue':
        return 'Pedido entregue! ';
      default:
        return '';
    }
  };

  const handleBackPress = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.header}>
                <MaterialCommunityIcons style={styles.voltar} name="arrow-left" color="#DC650E" size={33} onPress={handleBackPress}/>
                <Text style={styles.rastreamento}>RASTREAMENTO</Text>
            </View>
      <Text style={styles.titulo}>RASTREAMENTO DO PEDIDO</Text>
      <Text style={styles.numeroPedido}>Pedido #123456</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.statusPedido}>{pedidoStatus}</Text>
      </View>
      <Text style={styles.tempoEstimado}>{getTempoEstimado()}</Text>
      <Image source={require('../assets/mapa.png')} style={styles.mapa}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#F0E8DE",
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "center",
    display: "flex",
    marginTop: 20,
    backgroundColor: "#F0E8DE"
  },
  titulo: {
    fontSize: 20,
    marginTop: 18,
    fontWeight: 'bold',
    color: "#DC650E"
  },
  numeroPedido: {
    fontSize: 18,
  },
  statusPedido: {
    fontSize: 19,
    fontWeight: 'bold',
    color: "#DC650E"
  },
  tempoEstimado: {
    fontSize: 14,
  },
  mapa: {
    width: 200,
    height: 200
  },
  iconeStatus: {
    width: "20%"
  },
  mapa: {
    width: "80%",
    height: 490,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "black"
  },
  rastreamento: {
    color: '#DC650E',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -30
  },
  voltar: {
    width: '90%'
  }
});

export default App;