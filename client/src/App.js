import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, List, ListItem, Left } from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators}from 'redux';

import { namelist, addName } from './Actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:''
    }
  }
  async componentDidMount () {
    await this.props.namelist();
  }
  validateName = (value, type) =>{
    if(value!='' || value!=undefined || value!=null){
      this.setState({name:value});
    }else{
      Alert.alert("Enter name");
    }
  }
  addItemname = async() =>{
   await this.props.addName(this.state.name);
   await this.props.namelist();
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Add name</Label>
              <Input name="name" onChangeText={(text) => this.validateName(text, 'name')} />
            </Item>
          </Form>
          <Button onPress={() => this.addItemname()} full success>
            <Text>Add</Text>
          </Button>
          <List>
            {this.props.namedata?this.props.namedata.map((item, index)=> (
                <ListItem key={item._id} noIndent style={{ backgroundColor: "#cde1f9" }}>
                  <Left>
                    <Text>{item.name}</Text>
                  </Left>
                </ListItem>
            )):null}
        </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
 	return {
    namedata: state.Name.nameList
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    namelist, addName
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);