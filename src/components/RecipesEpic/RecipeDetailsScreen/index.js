import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { Card, Avatar, Icon } from "react-native-elements";
import BlocDetail from "../../_Shared/BlocDetail";
import PropTypes from "prop-types";
import { v1, v4 } from "react-native-uuid";

const RecipesDetailsScreen = ({ recipe }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {recipe.image && (
          <View style={styles.containerImage}>
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri: recipe.image,
              }}
            ></Avatar>
          </View>
        )}
        <Card style={styles.containerCard}>
          {recipe.title && (
            <Card.Title>
              {recipe.title}{" "}
              {recipe.veryPopular && <Icon color="gold" name="star" />}
            </Card.Title>
          )}
          <Card.Divider />
          {recipe.summary && (
            <BlocDetail
              title="Sommaire"
              description={recipe.summary}
              parser={true}
            />
          )}

          {recipe.instructions && (
            <BlocDetail
              title="Instructions"
              description={recipe.instructions}
              parser={true}
            />
          )}

          {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 && (
            <>
              <Text style={styles.Text} h2>
                Ingrèdients
              </Text>
              {recipe.extendedIngredients.map((i) => (
                <BlocDetail
                  key={i.id + "-" + v4() + "-" + v1()}
                  description={i.original}
                  parser={false}
                />
              ))}
            </>
          )}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  containerCard: {
    marginTop: 20,
  },
  Text: {
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
});
const mapStateToProps = ({ recipesList }) => {
  const { recipe } = recipesList;
  return { recipe };
};

RecipesDetailsScreen.propTypes = {
  recipe: PropTypes.object,
};

export default connect(mapStateToProps, null)(RecipesDetailsScreen);
