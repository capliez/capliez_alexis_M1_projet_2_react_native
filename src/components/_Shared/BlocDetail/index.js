import React from "react";
import { Text, StyleSheet } from "react-native";
import HTMLView from "react-native-htmlview";
import PropTypes from "prop-types";

const BlocDetail = ({ title, description, parser }) => {
  return (
    <>
      {title && (
        <Text style={styles.Text} h2>
          {title}
        </Text>
      )}
      {description && (
        <Text>{parser ? <HTMLView value={description} /> : description}</Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  Text: {
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
});

BlocDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  parser: PropTypes.bool,
};
export default BlocDetail;
