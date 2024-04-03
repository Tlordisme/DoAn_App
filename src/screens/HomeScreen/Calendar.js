import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import Colors from './../../Utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('screen');

export default function Calendar() {
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState();

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>{value.toDateString()}</Text>
        </View>

        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => setValue(item.date)}>
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: Colors.PRIMARY,
                            borderColor: '#111',
                            justifyContent:'center'
                          },
                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
          <Text style={styles.subtitle}>Make your TodoList</Text>
          
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.btn}>
              
              <Ionicons name="add" size={30} color={Colors.WHITE}  />
              
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    
  },
  header: {
    paddingHorizontal: 16,
    alignItems: 'center'
    
  },
  title: {
    fontSize: 18,
    paddingTop: 10,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
    marginTop: 12,
    
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.BLACK,
    marginBottom: 12,
  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: 16,
    alignItems:'center',
    justifyContent:'center'
  },
  /** Item */
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 0,
    borderRadius: 10,
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.BLACK,
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
    backgroundColor: Colors.WHITE,

  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'solid',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Button */
  btn: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingVertical: 5,

    backgroundColor: Colors.PRIMARY
  },
});