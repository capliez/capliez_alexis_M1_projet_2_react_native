import React from "react";
import { ListItem, Avatar, Icon } from "react-native-elements";
import PropTypes from "prop-types";

const Item = ({ r, handleClick, navigation }) => {
  return (
    <ListItem
      onPress={() => {
        handleClick(r), navigation.navigate("details");
      }}
      bottomDivider
    >
      <Avatar rounded size="medium" source={{ uri: r.image }} />
      <ListItem.Content>
        <ListItem.Title>{r.title}</ListItem.Title>
        <ListItem.Subtitle>
          {r.veryPopular && <Icon color="gold" name="star" />}
          <Icon size={20} color="blue" name="thumb-up" />
          {r.aggregateLikes}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

Item.propTypes = {
  r: PropTypes.object,
  handleClick: PropTypes.func,
  navigation: PropTypes.object,
};

export default Item;
