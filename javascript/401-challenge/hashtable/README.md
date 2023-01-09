# Hashtables

A hashtable is a data structure that takes key value pairs. The way that they work is by using a hashing algorithm on the key to decide where to store the {key, value} pair. After the data is stored, it is easily retrievable since we know where the location is.

## Challenge

Class-30 we were tasked with creating our own HashTable class and implementing some basic functionalities, including hash(), set(), and get().

### Approach & Efficiency

- `set()`
  The time complexity is O(1) as we simply look up the key and add to the bucket.

- `get()`
  Same as `set()`.
