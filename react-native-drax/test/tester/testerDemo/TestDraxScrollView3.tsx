import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import DraxScrollViewBaseComponent from './components/DraxScrollViewBaseComponent';

const DraxScrollViewDemo3 = () => {
  const [result, setResult] = useState('');
  const resetBtn = () => {
    setResult('');
  };
  const onContentSizeChangeHandler = (contentWidth, contentHeight) => {
    setResult(
      'onContentSizeChange回调函数已经执行,接收内容视图的宽和高-contentWidth:' +
        contentWidth +
        ',' +
        'contentHeight:' +
        contentHeight,
    );
  };

  return (
    <>
      <View style={styles.inputArea}>
        <Text style={styles.baseText}>{result}</Text>
        <Button
          style={styles.resetBtn}
          title="重置"
          onPress={resetBtn}></Button>
      </View>
      <Tester children={undefined}>
        <TestCase
          itShould="DraxScrollView组件:onContentSizeChange(此函数会在 ScrollView 内部可滚动内容的视图发生变化时调用调用,参数为内容视图的宽和高: (contentWidth, contentHeight))"
          tags={['C_API']}>
          <View style={{height: 800}}>
            <DraxScrollViewBaseComponent
              onContentSizeChange={
                onContentSizeChangeHandler
              }></DraxScrollViewBaseComponent>
          </View>
        </TestCase>
      </Tester>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputArea: {
    width: '100%',
    height: 80,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  resetBtn: {
    width: '100%',
    height: 32,
    lineHeight: 32,
  },
  baseText: {
    width: '100%',
    height: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});
export default DraxScrollViewDemo3;