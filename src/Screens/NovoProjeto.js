import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, AsyncStorage } from 'react-native'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButtom';

export default class NovoProjeto extends Component {
  static navigationOptions = {
    title: 'Criar novo projeto',
  };

  constructor(props){
    super(props)

    this.state = {
      nome: '',
      descricao: ''
    }

    this._onPressButton = this._onPressButton.bind(this)
    this._storeData = this._storeData.bind(this)
  }

  _storeData = async (projeto) => {
    try {
      await AsyncStorage.setItem('Projetos', JSON.stringify(projeto));
    } catch (error) {
      console.log("deu ruim na hora de salvar")
      console.log(error)
      // Error saving data
    }
  }

  _onPressButton(){
    const {nome,descricao} = this.state
    if (nome === ""){
      Alert.alert(
        'Nome vazio',
        'O campo "nome do projeto" não pode estar vazio',
      )
      return
    }

    if (descricao === ""){
      Alert.alert(
        'Descrição vazia',
        'O campo "Descrição do projeto" não pode estar vazio',
      )
      return
    }

    novoProjeto = {
      id: "1ds",
      nome,
      descricao,
      pessoas: [],
      plantas: []
    }

    this._storeData(novoProjeto)
    
    this.props.navigation.navigate('Projetos', {novoProjeto: {nome, descricao}})
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomInput
          label={"Nome do projeto: "}
          onChangeText={(nome) => this.setState({nome})}
          value={this.state.nome}
          placeholder="Digite aqui o nome do projeto"
        />
        <CustomInput
          label={"Descrição do projeto: "}
          multiline = {true}
          numberOfLines = {6}
          onChangeText={(descricao) => this.setState({descricao})}
          value={this.state.descricao}
          placeholder="Digite aqui a descrição do projeto"
        />
        <View style={styles.viewButtonCadastrar}>
          <CustomButton nome={"Cadastrar Projeto"} label={"Cadastrar projeto"} onPress={this._onPressButton}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewButtonCadastrar: {
    position: 'absolute',
    width: "100%",
    bottom: 0,
  }
 
});
