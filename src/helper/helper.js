export const excapeSpecialCharacter = (strVal) => {
    return strVal.replace('&quot;', '"').replace('&amp;', '&').replace('&lt;', '<').replace('&#x27;', '\'').replace('&#39;', '\'');
}