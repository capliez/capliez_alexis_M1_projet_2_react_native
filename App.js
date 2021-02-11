import React from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import RecipesListScreen from "./src/components/RecipesEpic/RecipesListScreen";
import RecipesDetailsScreen from "./src/components/RecipesEpic/RecipeDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="list">
          <Stack.Screen name="list" options={{ title: "Listes des recettes" }}>
            {(props) => <RecipesListScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="details"
            options={{ title: "Détails d'une recette" }}
          >
            {(props) => <RecipesDetailsScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
