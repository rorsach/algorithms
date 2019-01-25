class Trie {
    constructor() {
        this.root = new TrieNode('')
    }

    insert (word) {
        if (word.length < 1) {
            return
        }

        let node = this.root

        for (let i = 0; i < word.length; i++) {
            let isWord = (i === word.length -1) // Use this as a marker to indicate it is a word.
            let char = word[i]
            let newNode = node.hasChild(char)
            // Loop over the characters and go deeper until letters from word are exhausted.
            if (!newNode) {
                newNode = node.addChild(char, isWord)
            }

            node = newNode
        }
    }

    // Test if prefix is present in Trie. This is a private method of the class, use hasWord to check presence of a specific word.
    search (prefix) {
        if (prefix.length < 1) {
            return
        }

        let node = this.root

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i]
            let newNode = node.hasChild(char)
            
            if (!newNode) {
                return false
            } else {
                node = newNode
            }
        }

        return node
    }

    hasWord (word) {
        let result = this.search(word)
        return result ? result.isWord : false
    }

    // Find all known complete words for the current prefix.
    findSuffixes (word) {
        let node = this.search(word)
        let words = []
        if (node) {
            this.logNode(node, word, words)
        }
        return words
    }
    
    toString () {
        let words = []
        this.logNode(this.root, '', words)
        return words.join('\n')
    }

    logNode (node, prefix, words) {
        if (node.isWord) {
            words.push(prefix)
        }
        
        Object.keys(node.children).forEach((char) => {
            this.logNode(node.children[char], prefix + char, words)
        })
    }
        
}

class TrieNode {
    constructor(isWord) {
        this.isWord = isWord
        this.children = {}
    }

    hasChild (char) {
        return this.children[char]
    }

    addChild (char, isWord) {
        this.children[char] = new TrieNode(isWord)
        return this.children[char]
    }
}

let wordList = [
    'peter',
    'piper',
    'picked',
    'a',
    'peck',
    'of',
    'pickled',
    'peppers',
    'she',
    'sells',
    'seashells',
    'by',
    'the',
    'sea',
    'shore'
]

let trie = new Trie()

for (let i = 0; i < wordList.length; i++) {
    trie.insert(wordList[i])
}

console.log(trie.toString())

console.log('Search for peck:', trie.hasWord('peck'))
console.log('Search for pickled:', trie.hasWord('pickled'))
console.log('Search for pickle:', trie.hasWord('pickle'))
console.log('Search for dog:', trie.hasWord('dog'))

console.log('FindSuffixes for pickle:', trie.findSuffixes('pickle'))
console.log('FindSuffixes for pi:', trie.findSuffixes('pi'))
console.log('FindSuffixes for o:', trie.findSuffixes('o'))

