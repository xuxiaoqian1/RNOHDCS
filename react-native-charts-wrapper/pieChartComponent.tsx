import React from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {PieChart} from 'react-native-charts-wrapper';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

const PieChartDemo = () => {
  const data = [
    {value: 13, label: '西瓜'},
    {value: 10, label: '香蕉'},
    {value: 29, label: '橙子'},
    {value: 34, label: '柚子'},
    {value: 15, label: '柠檬'},
    {value: 23, label: '苹果'},
  ];
  return (
    <Tester>
      <ScrollView style={{marginBottom: 70}}>
        <TestSuite name="饼图">
          <TestCase itShould="drawEntryLabels(true) 将此属性设置为true可将条目标签绘制到饼图扇区中">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                drawEntryLabels
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="usePercentValues(true) 如果启用此选项，则PieChart中的值将以百分比显示 false的情况其他用例均覆盖">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                usePercentValues={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="centerText 设置显示在PieChart中心的文本字符串。MPChart">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                centerText="MPChart"
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="styledCenterText(text) 设置显示在PieChart中心的文本字符串 样式.text:可以代替centerText,一样的效果">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="styledCenterText(color) 设置显示在PieChart中心的文本字符串 样式.color:文字颜色 #f4f">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo', color: processColor('#f4f')}}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="styledCenterText(size) 设置显示在PieChart中心的文本字符串 样式.size:文字大小 20">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo', size: 20}}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="styledCenterText(fontFamily) 设置显示在PieChart中心的文本字符串 样式.fontFamily:字体 monospace">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{
                  text: 'Demo',
                  fontFamily: 'monospace',
                  size: 20,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="centerTextRadiusPercent 中心文本边界框的矩形半径,以饼图的百分比表示 centerTextRadiusPercent={3.0}">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'charts wrapper', size: 150}}
                holeRadius={58}
                centerTextRadiusPercent={3.0}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="holeRadius 设置饼图中心孔的半径，以百分比为单位 *最大半径（max=整个图表的半径），holeRadius={58}">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="饼图">
          <TestCase itShould="transparentCircleRadius 设置在孔旁边绘制的透明圆的半径 transparentCircleRadius={62}">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="holeColor 设置在饼图中心绘制的孔的颜色 holeColor={processColor('#fff')}">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="transparentCircleColor 设置在孔旁边绘制的透明圆的颜色 transparentCircleColor={processColor('#4f4')}">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
                transparentCircleColor={processColor('#4f4')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="entryLabelColor 设置绘制条目标签的颜色 entryLabelColor={processColor('#f4f')}" >
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
                legend={{enabled: true}}
                entryLabelTextSize={12}
                drawEntryLabels={true}
                entryLabelColor={processColor('#f4f')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图">
          <TestCase itShould="entryLabelFontFamily  设置绘制条目标签的字体 可以看数字1和其他图表数字1的区别">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
                legend={{enabled: true}}
                entryLabelTextSize={12}
                drawEntryLabels={true}
                entryLabelColor={processColor('#f4f')}
                entryLabelFontFamily='monospace'
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="sliceSpace 设置在vp中的饼图切片之间留出的空间。 sliceSpace: 10,">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                        sliceSpace: 10,
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="selectionShift 设置此数据集的突出显示饼图扇区的距离  selectionShift: 100,">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                        sliceSpace: 10,
                        selectionShift: 100,
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
                rotationEnabled={true}
                highlightPerTapEnabled={true}
                touchEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="yValuePosition OUTSIDE_SLICE 标签显示在饼图里面还是外面 在里面 INSIDE_SLICE其他用例均已覆盖">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        yValuePosition: 'OUTSIDE_SLICE',
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="xValuePosition OUTSIDE_SLICE 标签显示在饼图里面还是外面 在里面 INSIDE_SLICE其他用例均已覆盖">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        xValuePosition: 'OUTSIDE_SLICE',
                        
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
                entryLabelTextSize={12}
                drawEntryLabels={true}
                entryLabelColor={processColor('#f4f')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="valueLinePart1Length 标签显示在饼图外 表示前半行的长度  valueLinePart1Length: 0.2,">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        yValuePosition: 'OUTSIDE_SLICE',
                        valueLinePart1Length: 0.2,
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="valueLinePart2Length 标签显示在饼图外 ,行的后半部分的长度  valueLinePart2Length: 0.3,">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        yValuePosition: 'OUTSIDE_SLICE',
                        valueLinePart2Length: 0.3,
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="valueLineColor 标签显示在饼图外,线条颜色 valueLineColor: processColor('#f4f'),">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        yValuePosition: 'OUTSIDE_SLICE',
                        valueLineColor: processColor('#f4f'),
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="valueLineWidth 标签显示在饼图外,线条宽度 valueLineWidth: 5,">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        yValuePosition: 'OUTSIDE_SLICE',
                        valueLineWidth: 5,
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="valueLinePart1OffsetPercentage:30 折线中第一段起始位置相对于区块的偏移量, 数值越大, 折线距离区块越远">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        yValuePosition: 'OUTSIDE_SLICE',
                        valueLinePart1OffsetPercentage: 30,
                        valueLinePart1Length: 0.2,
                        valueLinePart2Length: 0.4,
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="valueLineVariableLength:false 当valuePosition为OutsideSlice时，这将允许可变的行长度 其他折线长度用例已经覆盖为true的情况">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        yValuePosition: 'OUTSIDE_SLICE',
                        valueLineVariableLength: false,
                        valueLinePart1Length: 0.2,
                        valueLinePart2Length: 0.8,
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
              />
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="rotationEnabled 将此属性设置为true可通过触摸启用图表的旋转 需设置触摸：touchEnabled ,false的情况其他用例均已覆盖">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        yValuePosition: 'OUTSIDE_SLICE',
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
                rotationEnabled={true}
                highlightPerTapEnabled={true}
                touchEnabled={true}
              />
            </View>
          </TestCase>
        </TestSuite>
       

        <TestSuite name="饼图 data(数据)">
          <TestCase itShould="minOffset 设置图表周围的最小偏移量（填充），100">
            <View style={{width: '100%', height: 300}}>
              <PieChart
                style={styles.container}
                data={{
                  dataSets: [
                    {
                      label: 'demo',
                      values: data,
                      config: {
                        sliceSpace: 10,
                        yValuePosition: 'OUTSIDE_SLICE',
                        colors: [
                          processColor('#4f4'),
                          processColor('#54f'),
                          processColor('#70DB93'),
                          processColor('#c5d'),
                          processColor('#FFB6C1'),
                        ],
                      },
                    },
                  ],
                }}
                maxAngle={360}
                styledCenterText={{text: 'Demo'}}
                holeRadius={58}
                transparentCircleRadius={62}
                holeColor={processColor('#fff')}
                minOffset={100}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default PieChartDemo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 200,
  },
  chart: {
    flex: 1,
  },
});
