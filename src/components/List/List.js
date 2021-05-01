import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';

function List({name, title, color, headingTitle}) {
  return (
    <View style={styles.container}>
      <SectionHeading style={styles.heading} title={headingTitle} />
      <ListItem style={styles.list} name={name} title={title} color={color} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
  list: {
    paddingStart: 30,
  },
});

const mapStateToProps = state => {
  console.log(state);
  const {category} = state;
  return {category};
};

export default connect(mapStateToProps)(List);
