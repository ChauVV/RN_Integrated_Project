import React from 'react'
import { GiftedChat } from './GiftedChat'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
// eslint-disable-next-line camelcase
import { Dialogflow_V2 } from 'react-native-dialogflow-text'

/**
 * Tutorial
 * http://www.coderschool.vn/blog/intelligent-chatbots-in-react-native-and-dialogflow/
 */
const restaurantBot = {
  'type': 'service_account',
  'project_id': 'restaurant-bot-58447',
  'private_key_id': '9e192562a0c05b06f013a75a5a12d7b9b15331a5',
  'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2VH2ynVVB+YeO\nrghw8dKH6+iWM8oyzh9yIuJKkH+H14VgH9EOeEax3LxQogWWdpMfbv6xVxSFYCqA\nPskUSKzbvG9TwHD/lXHE8VSHIGswUhmm6uTzUje/CyOmh2zOZPcmfBa7z7eGXJML\nwdWqXeJ4/LYmTzvjvsck4qKyIuqUlZCBq3N7woIHpisSL9Ok2hHlHz50ZveNylIQ\n3sqyLFWbbVzzov0I+j39khErJLy61R6GLUimpURFdTpo53cD8f7jCisga3rCwi7A\nut+cojhlqY8//ViOmjgmQMHI3AZHo0ueV1q7ftSCcXHf+tWJnS4RXSa7E9J0h26W\n8lij8VF9AgMBAAECggEAROCvKWn5Gra+iF5jLvOTcihi0VcYM9AdHftinANxQepf\nZrwuN/ak0i0OcLF8ReZeVroR+gFo7aex9oeBY6m+rzXEopFovoyAkYMPSQqso3Do\nYt+KhQbSq1d0bMTtDB0lJoMq/WEPNfFD1WWwpy7XTpg84UT+XV8lEOCS0JOTJXSl\nfwV0Ztd0eNLeIXRKeVUpygvCTHSjqrBvIl6wbYpWvumTQFn72LzIf22MEFog09Lj\nFCZgDKVKsXltdtE+4zAYtYt9/0flTnfRq64KfOhFFOaBe6erIT2PYswNZNwvUm8g\nfW8xAkORUmTbGjQ60sG5359wSmrTlNP+eSDPcFBHqwKBgQDdKoMTE9he4O64l/LP\nVyLYdmj0jZMsYHzlb3a5IXTMwCZ21Mk7DqMlKZWaTBk2CV+4sXEgIrEq3Jv5PwTg\nzkKVnWXmqymj0HBWeUrnkyHA19FIhheKertBXMvqXRyDo1o9LOo+AF0wSDajUopa\nbxWk6A5ddYNmaYAbafdB7fcI/wKBgQDTDBkVhgg+udcNgu9zJSjeP+FeM9+genyP\n+xhOPWRcA2OKM39tkAPFvIS2oW9+i6hLMvzAhypzFURJooyQTQik107+5WDQJ4ZA\n0x39P8kmK0JuVpPYRitcrTPB9eN2L4SfXJv8Q01SvwyOAfnvKHuwi0DGqDmUO/ab\nUETy5AlJgwKBgQCE/vWHWV254GVtl+IpkOqhZMNEnIYuH2+7wMWSGm5UWhBHUToZ\nS3oL9O/Ds5NNjWGEfR/cBUCo17Trs1vJm/8qXVZT2gXWPpfvSE0k6LNZde6iQBCT\n8637ZkQxkQB+oJK5SvMpiaqASEyi9hXAwCAx5GIPDYWQ5kxlL9nCSclOHQKBgBCj\noIqo4ZeIcWMYUqaiZGF5adxSfKwbXBzB8D2i63mxrrRjsQVDWHjLjy8S9UZl3mPn\nZjQLtBYUtCiWDz0FRcwxSYIhNYvTwer0eiXQVJyUxo0KeGeRyLNq2GzPZRqZTnx+\nAbJW4A7JD0VW9IydhXr6z6WZ98gvHhdKsdTwk6bfAoGBAMC0URP2PU470JF6M+qQ\nHn1ApA9Gwy8YnjiSj/xhJY+wCDPQXFr35yq7/LwnfqOcz8JNZuKuY3vzDKXYCLqF\nUEdCxXhHYpakxbhPjkQAzQLdAr1wvlf7y7JEXdhEibwueeCoWvaYa5y/mHCQmhsW\nv4zczBRN+POc8S26QdTUPCp0\n-----END PRIVATE KEY-----\n',
  'client_email': 'dialogflow-bencxw@restaurant-bot-58447.iam.gserviceaccount.com',
  'client_id': '108498331251329382033',
  'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
  'token_uri': 'https://oauth2.googleapis.com/token',
  'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
  'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-bencxw%40restaurant-bot-58447.iam.gserviceaccount.com'
}
const BOT_USER = {
  _id: 2,
  name: 'SmartBot',
  avatar: 'http://www.coderschool.vn/system/instructors/avatar_images/000/000/001/original/kunal.jpg?1531064314'
}

export default class ChatBot extends React.Component {
  constructor (props) {
    super(props)
    let firstMsg = {
      _id: 1,
      text: 'Hello My name is Windy, Nice to see you!',
      createdAt: new Date(),
      user: BOT_USER
    }

    this.state = {
      messages: [firstMsg],
      userName: '',
      text: ''
    }

    Dialogflow_V2.setConfiguration(
      restaurantBot.client_email,
      restaurantBot.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      restaurantBot.project_id
    )
  }
  sendBotResponse = (text) => {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    }
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }))
  }
  // Not quite production ready ;)
  handleGoogleResponse = (result) => {
    console.log('result response: ', result)
    if (result.queryResult.fulfillmentMessages) {
      let text = result.queryResult.fulfillmentMessages[0].text.text[0]
      this.sendBotResponse(text)
    }
  }
  onSend = (messages = []) => {
    console.log('messages: ', messages)
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }))
    let text = messages[0].text
    Dialogflow_V2.requestQuery(
      text,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    )
  }
  setUp = () => {
    const { text } = this.state

    this.setState({userName: text, text: ''})
  }
  render () {
    const { userName, text } = this.state

    return (
      <View style={{flex: 1, paddingTop: 25}}>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'gray', alignItems: 'center'}}>
          <Text>{userName}</Text>
          <TextInput
            style={{flex: 1, paddingHorizontal: 10}}
            value={text}
            placeholder='user Name'
            onChangeText={(value) => this.setState({text: value})}
          />
          {text.length > 0 &&
          <TouchableOpacity onPress={() => this.setUp()}>
            <Text>Save</Text>
          </TouchableOpacity>
          }
        </View>
        <View style={{flex: 8}}>
          {userName.length > 0 &&
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: userName
            }}
          />
          }
        </View>
      </View>
    )
  }
}
