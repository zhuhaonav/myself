/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  Animated,
  Easing
} from 'react-native';

//闪烁
class Blink extends Component {
  constructor() {
    super();
    this.state = {showText: true};

    setInterval(() => {
      this.setState({showText: !this.state.showText})
    },1000)
  }
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
        <Text style={[styles.red,styles.biger]}>{display}</Text>
    )
  }
}
class BlinkApp extends Component {
  render() {
    return(
        <View>
          <Blink text="I love to blink"/>
        </View>
    )
  }
}

//循环
class Greeting extends Component {
  render() {
    return (
        <Text>Hello {this.props.name}!</Text>
    );
  }
}
class AwesomeProject extends Component {
  render() {
    return (
        <View style={{alignItems: 'center'}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
    );
  }
}

//flex样式布局
class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

//处理用户输入
class PizzaTranslator extends Component {
  constructor() {
    super();
    this.state = {text: ''};
  }
  render() {
    return(
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate"
          onChangeText={(text)=>{this.setState({text})}}
        />
        <Text style={{padding: 10, fontSize:24}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}

//ScrollView滚动
//ListView和ScrollView不同的是，ListView并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。
/*ListView组件必须的两个属性是dataSource和renderRow。dataSource是列表的数据源
而renderRow则逐个解析数据源中的数据,然后返回一个设定好格式的组件来渲染。*/
class ListViewCompnent extends Component {
  constructor() {
    super();
    this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 === r2})
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
    this.getMoviesFromApiAsync();
  }
  //请求接口数据以及异步渲染
  getMoviesFromApiAsync(){
    fetch('http://10.101.56.15:92/getJson')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 === r2})
        console.log(responseJson)
        this.setState ({
          dataSource: ds.cloneWithRows(responseJson)
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.author}: {rowData.text}</Text>}
        />
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

//处理触摸事件
class Mytouch extends Component {
  _onPressButton () {
    console.log('click')
  }
  _onLongPressButton () {
    console.log('tagLong')
  }
  render() {
    return(
      <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableHighlight accessible={true} accessibilityLabel={'Tap me!'} onPress={this._onPressButton}
                            style={{
                              backgroundColor: 'green',
                            }}
        >
          <Text>Button</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class Playground extends Component {
  constructor() {
    super();
    this.state = {
      bounceValue: new Animated.Value(0),
      //rotation: new Animated.Value(0),
    };
  }
  render() {
    return (
      <Animated.Image                         // 可选的基本组件类型: Image, Text, View
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
          ]
        }}
      />
    );
  }
  /*componentDidMount(){
    this.state.bounceValue.setValue(1.2);
    Animated.spring(             // 可选的基本动画类型: spring, decay, timing
      this.state.bounceValue,   // 将`bounceValue`值动画化
      {
        toValue: 0.8,            // 将其值以动画的形式改到一个较小值
        friction: 1,
        tension: 20,
      }
    ).start();
  }*/
  /*componentDidMount() {
    this.state.bounceValue.setValue(1.2);
    Animated.timing(             // 可选的基本动画类型: spring, decay, timing
      this.state.bounceValue,   // 将`bounceValue`值动画化
      {
        duration: 300,
      }
    ).start();
  }*/
  /*组合动画*/
  componentDidMount() {
    this.state.bounceValue.setValue(0.8);
    Animated.sequence([            // 首先执行decay动画，结束后同时执行spring和twirl动画
      Animated.timing(this.state.bounceValue, {
        toValue: 1,
        easing: Easing.linear,
      }),
      //Animated.delay(200),
      Animated.timing(this.state.bounceValue, {
        toValue: 0.8,
        easing: Easing.linear,
      }),
    ]).start();                    // 执行这一整套动画序列
  }
}

//主注册组件
class AwesomeProject2 extends Component {
  render() {
    return (
      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native！
        </Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <AwesomeProject/>
        <BlinkApp/>
      </View>*/
      /*<JustifyContentBasics/>*/
      /*<PizzaTranslator/>*/
      /*<ListViewCompnent/>*/
      <Mytouch/>
      /*<Playground/>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  biger: {
    fontSize: 30,
  },
  red: {
    fontWeight: 'bold',
    color: 'green',
  },
});

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
