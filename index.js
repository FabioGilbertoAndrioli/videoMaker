const readline = require('readline-sync')
function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readline.question('Sobre o que voce quer saber do wikipedia:')
    }

    function askAndReturnPrefix(){
        const prefixes = ['who is','what is', 'the history of']
        const selectPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao')
        const selectPrefixText = prefixes[selectPrefixIndex]
        return selectPrefixText
    }
    console.log(content)
}

start()