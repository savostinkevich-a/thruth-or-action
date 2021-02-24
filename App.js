import React from 'react';
import {ApplicationProvider, IconRegistry, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppNavigator from "./app/navigators/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import store from "./app/redux/redux-store";


export default () => (
    <NavigationContainer>
        <Provider store={store}>
            <ApplicationProvider {...eva} theme={eva.dark}>
                <IconRegistry icons={EvaIconsPack}/>
                <AppNavigator/>
            </ApplicationProvider>
        </Provider>
    </NavigationContainer>
);

