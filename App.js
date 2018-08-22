import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {App} from '@walkin-frontend/react-native-modular-ui-framework' 
import rootSchema from './app/schemas/root_schema'
import appConfig from './app/config'
import appActions from './app/actions';
import schemas from './app/schemas/index';
import en from './app/i18n/en/en';
import apolloClient from './app/utils/apolloClient';
import { ApolloProvider } from 'react-apollo';


export default class ccd_app extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <App
          appConfig={appConfig}
          rootSchema={rootSchema}
          schemas={schemas}
          i18nEnTranslations={en}
          appActions={appActions}
        />
      </ApolloProvider>
    );
  }
}
