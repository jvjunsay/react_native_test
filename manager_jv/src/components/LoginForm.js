import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import {emailChanged, passwordChanged, loginUser} from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {
  onEmailChange (text) {
    this.props.emailChanged(text)
  }
  onPasswordChange (text) {
    this.props.passwordChanged(text)
  }

  onButtonPress () {
    this.props.loginUser(this.props.email, this.props.password)
  }

  renderButton () {
   
    if (this.props.loading) {
      return <Spinner size='large' />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
    )
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input label='Email' placeHolder='user@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email} />
        </CardSection>
        <CardSection>
          <Input label='Password' placeHolder='password' secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth
  return {email, password, error, loading}
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm)
