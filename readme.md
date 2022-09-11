# EventLang

EventLang is a human readable (subset of YAML) event/logging language.
Furthermore it can be used as a delta encoding for YAML files.


## Syntax

EvenLang is basically a map of timestamps
with an assigned map of key value pairs.

```YAML
1990-03-07 13:37:
	name: John Doe
2010-07-01:
	job: Designer
2015-10-15:
	job: Developer
```


## Usage

### As Event/Logging Language

E.g. it might be used for a server log:

```YAML
2015-09-12 09:24:13:
	user: John Doe
	action: "mkdir test"
2015-09-12 09:24:13:
	user: Thomas Doe
	action: "cd /var/www"
2015-09-12 09:24:13:
	user: John Doe
	action: "touch test/a.txt"
```


## As Delta Encoding

EventLang can also be use as a delta encoding for YAML files.
E.g. it could be used as a storage format for to-dos in a to-do manager
while keeping their history.

```YAML
2015-08-03 15:46:
	title: Buy milk
2015-08-04 10:12:
	title: Buy 3 bottles of milk
2015-08-05 08:33:
	priority: high
2015-08-06 22:51:
	completed: true
```

Compiled to a YAML file this would yield:

```YAML
title: Buy 3 bottles of milk
priority: high
completed: true
```


# Related

- [JSON Patch RFC](https://www.rfc-editor.org/rfc/rfc6902) -
    Format for describing changes to a JSON document.
    ([jsonpatch.com](https://jsonpatch.com))
- [JSON Merge Patch RFC](https://www.rfc-editor.org/rfc/rfc7396) -
    Describing a set of modifications to a target resource's content.
