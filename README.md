# React Native - Demo Lists

## flatlist performance tuning

- https://reactnative.dev/docs/optimizing-flatlist-configuration

- add console.log to watch how many are rendered initially
- looks like about half got rendered inintially.
- unlike ScrollView, scrolling re-renders each item.
- can control how many initially render
- `initialNumToRender={20}`
- works with `windowSize`
- lots of other ways to optimize a FlatList