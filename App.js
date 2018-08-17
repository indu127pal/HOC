import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {App} from '@walkin-frontend/react-native-modular-ui-framework' 
import rootSchema from './app/schemas/root_schema'
import appConfig from './app/config'
import schemas from './app/schemas/index';

export default class ccd_app extends React.Component {
  render() {
    return (
      <App
        appConfig={appConfig}
        rootSchema={rootSchema}
        schemas={schemas}
       />
    );
  }
}
