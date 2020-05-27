import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_YELLOW,
} from '../../../static/misc/colors';
import {StackNavigatorProp} from '../../router/StackNavigator';
import {DatasAction} from './types/datas';
import fakeDatas from '../../../static/misc/fakeDatas';

export interface HomepageProps {
  navigation: StackNavigatorProp;
  isConnected: boolean;
  isLoaded: boolean;
  datas: Array<Object>;
  getDatas: (datas: any) => DatasAction;
}

export interface HomepageState {
  column: number;
  width: number;
  refreshing: boolean;
}

export class HomepageView extends React.Component<
  HomepageProps,
  HomepageState
> {
  constructor(props: HomepageProps) {
    super(props);
    this.state = {
      column: 3,
      width: 0,
      refreshing: false,
    };
  }

  componentDidMount() {
    const {datas} = this.props;
    if (!datas) {
      // Fake delay // Waiting api response
      this.getDatas();
    }
  }

  getDatas = () => {
    const {getDatas} = this.props;
    setTimeout(() => {
      getDatas(fakeDatas);
      this.setState({refreshing: false});
    }, 2000);
  };

  refreshDatas = () => {
    this.setState({refreshing: true});
    this.getDatas();
  }

  keyExtractor = (item: any) => item.id;

  renderItem = ({item: {picture, name}}: any) => {
    const {width, column} = this.state;
    if (width === 0) {
      return null;
    }
    return (
      <View style={[styles.card, {width: (width - 40) / column}]}>
        <FastImage
          resizeMode="cover"
          source={{uri: picture}}
          style={styles.image}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  };

  header = () => {
    const {isConnected, isLoaded} = this.props;
    return (
      <>
        <Text>
          {`You are logged, and you are on the logged authenticated flow : boolean isConnected = ${isConnected}`}
        </Text>
        <Text>{`Datas Loaded: ${isLoaded}`}</Text>
      </>
    );
  };

  event = (event: any) =>
    this.setState({width: event.nativeEvent.layout.width});

  loader = () => {
    const {isLoaded} = this.props;
    if (isLoaded) {
      return null;
    }
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={COLOR_YELLOW} />
        <Text>Chargement</Text>
      </View>
    );
  }

  render() {
    const {datas} = this.props;
    const {column, refreshing} = this.state;
    return (
      <SafeAreaView style={styles.appContainer}>
        <FlatList
          onLayout={this.event}
          onRefresh={this.refreshDatas}
          refreshing={refreshing}
          style={styles.container}
          ListHeaderComponent={this.header}
          ListEmptyComponent={this.loader}
          numColumns={column}
          data={datas}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR_WHITE,
  },
  container: {
    paddingHorizontal: 10,
  },
  card: {
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: COLOR_WHITE,
    shadowColor: COLOR_BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  text: {
    alignSelf: 'center',
    color: COLOR_BLACK,
  },
  loader: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
