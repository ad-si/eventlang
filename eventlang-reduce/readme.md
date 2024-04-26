# EventLang Reduce

Reduces an [EventLang](github.com/adius/eventlang) string
to a Javascript object.


## Installation

```shell
npm install --save eventlang-reduce
```


## Usage

```js
import evlReduce from 'eventlang-reduce'

console.log(evlReduce(
`2015-10-15:
	name: Bond
2015-11-03:
	name: James Bond
	job: agent`
))
```

yields

```js
{
	name: "James Bond"
	job: "agent"
}
```
