import { toLowerCaseTrim } from "../string_manipulation/string_manipulation"

function buildNestedkeyString(keys) {
    let nestedString = ''
    keys.forEach((key) => {
        if(!key) {
            throw new Error('keys cannot be undefined')
        }
        nestedString += `['${key}']`
    })
    return(nestedString)
}

export function searchByString(array, keys, string) {
    const nestedKeys = buildNestedkeyString(keys);
    const foundRecord = array.find((record) => {
        if(!eval(`record${nestedKeys}`)) {
            return null;
        }
        return (
            toLowerCaseTrim(eval(`record${nestedKeys}`)) === toLowerCaseTrim(string)
        )
    })
    console.log("foundRecord", foundRecord);
    
    return (
        {
            record: foundRecord, 
            isFound: !!foundRecord
        }
    )
    
}


