import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import MoviesContainer from '../containers/MoviesContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import TVContainer from '../containers/TVContainer.js';

const ShowTabView = ({ navigation }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Movies' },
    { key: 'second', title: 'Search' },
    { key: 'third', title: 'TV Shows' },
  ]);

const FirstRoute = () => (
  <MoviesContainer navigation={navigation} />
);

const SecondRoute = () => (
  <SearchContainer navigation={navigation} />
);

const ThirdRoute = () => (
  <TVContainer navigation={navigation} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default ShowTabView;