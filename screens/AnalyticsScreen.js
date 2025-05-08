import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

export default function AnalyticsScreen() {
  const screenWidth = Dimensions.get('window').width;

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [1, 2, 2.5, 4, 3, 5, 4.5], // hours watched per day
        strokeWidth: 2,
      },
    ],
  };

  const pieData = [
    { name: 'Shonen', population: 40, color: '#4f46e5', legendFontColor: '#7F7F7F', legendFontSize: 14 },
    { name: 'Romance', population: 20, color: '#ec4899', legendFontColor: '#7F7F7F', legendFontSize: 14 },
    { name: 'Thriller', population: 25, color: '#f97316', legendFontColor: '#7F7F7F', legendFontSize: 14 },
    { name: 'Comedy', population: 15, color: '#10b981', legendFontColor: '#7F7F7F', legendFontSize: 14 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Weekly Watch Time (hrs)</Text>
      <LineChart
        data={lineData}
        width={screenWidth - 32}
        height={220}
        yAxisSuffix="h"
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />

      <Text style={styles.title}>Most Watched Genres</Text>
      <PieChart
        data={pieData}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(79, 70, 229, ${opacity})`,
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, marginBottom: 8 },
  chart: { marginVertical: 8, borderRadius: 8 },
});
