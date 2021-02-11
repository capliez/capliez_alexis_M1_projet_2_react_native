import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { connect } from "react-redux";
import useIsMountedRef from "../../helpers/useIsMountedRef";
import { getAllRecipes, getRecipe, getError } from "../../../redux/actions";
import ItemRecipe from "./item";
import PropTypes from "prop-types";
import { v1, v4 } from "react-native-uuid";
const RecipesListScreen = ({
  getAllRecipesAction,
  recipes,
  getRecipeAction,
  navigation,
  getErrorAction,
  error,
}) => {
  const isMountedRef = useIsMountedRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const fetchRecipes = async () => {
    try {
      await getAllRecipesAction();
    } catch (err) {
      getErrorAction("Un probléme avec le serveur");
    }

    if (isMountedRef.current) {
      setLoading(false);
    }
  };

  const handleClick = (recipe) => {
    getRecipeAction(recipe);
  };

  const renderItem = ({ item }) => {
    return (
      <ItemRecipe navigation={navigation} handleClick={handleClick} r={item} />
    );
  };
  return (
    <View style={styles.container}>
      {!loading && !error && recipes.length > 0 && (
        <SafeAreaView>
          <FlatList
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            data={recipes}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(r) => String(r.id + "-" + v4() + "-" + v1())}
          />
        </SafeAreaView>
      )}
      {!loading && error && (
        <Text style={{ color: "red" }} h2>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

const mapStateToProps = ({ recipesList }) => {
  const { recipes, error } = recipesList;
  return { recipes, error };
};

const mapDispatchToProps = {
  getAllRecipesAction: getAllRecipes,
  getRecipeAction: getRecipe,
  getErrorAction: getError,
};

RecipesListScreen.propTypes = {
  recipes: PropTypes.array,
  error: PropTypes.string,
  navigation: PropTypes.object,
  getAllRecipesAction: PropTypes.func,
  getRecipeAction: PropTypes.func,
  getErrorAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListScreen);
