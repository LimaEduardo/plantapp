import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class ButtonColeta extends Component {
  constructor(props){
    super(props)

    this.state = {
      contentIsVisible: false
    }
  }

  render() {
    const {contentIsVisible} = this.state
    const {titulo, dados, dataColeta} = this.props.coleta
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.setState({contentIsVisible: !contentIsVisible})
          }}
          title="expansivel"
          accessibilityLabel={"Botão expansível"}
        >
          <View style={styles.label}>
            <Text style={styles.text}> {titulo} </Text>
            <View style={styles.iconContainer}>
              {contentIsVisible ? (
                <Image style={styles.icons} source={require('../Assets/arrow_up.png')} />
              ): (
                <Image style={styles.icons} source={require('../Assets/arrow_down.png')} />
              )}
            </View>
          </View>
        </TouchableOpacity>
        {contentIsVisible ? (
          <View style={styles.contentContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>Data da coleta:</Text>
              <Text style={styles.contentDate}>{dataColeta}</Text>
            </View>
            <View>
              <Text style={styles.title}>Dados:</Text>
              <Text style={styles.contentGathering}>{dados}</Text>
            </View>
          </View>
        ): (
          null
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5
  },
  label: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  text: {
    margin: 20
  },
  iconContainer: {
    justifyContent: "center"
  },
  contentContainer: {
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  contentGathering: {
    marginLeft: 20,
    marginBottom: 20
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 20
  }, 
  contentDate: {
    marginTop: 5,
    marginLeft: 5
  }
});

