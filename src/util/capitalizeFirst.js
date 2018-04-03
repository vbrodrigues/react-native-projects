/* Deixa a primeira letra de uma palavra em maiúsculo */



const capitalizeFirst = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirst;