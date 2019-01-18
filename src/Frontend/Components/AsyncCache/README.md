
<h1 align="center">💾 react-native-Async-Cache</h1>

## Thanks to

[react-native-modest-cache](https://github.com/tiaanduplessis/react-native-modest-cache), 
[react-native-modest-storage](https://github.com/tiaanduplessis/react-native-modest-storage) 

## Usage

```js
import cache from 'AsyncCache'

cache.set('foo', 5, -5) // (key, value, expiryDateInMinutes)
cache.set('bar', 90) // Default to 60 min
cache.set('baz', {hello: 'Friend'})
cache.isExpired('foo').then(console.log) // true
cache.isExpired('bar').then(console.log) // false
cache.get('foo').then(console.log) // undefined
cache.get('bar').then(console.log) // 90
cache.get('baz').then(console.log) // Object {hello: "Friend"}

cache.remove('bar')
cache.get('bar').then(console.log) // undefined

cache.set('bar', 50, {
	interval: 'year', // 'year', 'quarter', 'month', 'week', 'day', 'minute' or 'second'
	units: 2
})
cache.isExpired('bar').then(console.log) // false
cache.get('bar').then(console.log) // 50

cache.flushExpired()
cache.flush().then(() => {
	cache.get('bar').then(console.log) // undefined
})
```