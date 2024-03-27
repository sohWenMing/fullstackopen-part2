export function toLowerCaseTrim(string) {
    if(!string) {
        throw new Error("cannot pass in null values")
    }
    return(string.toLowerCase().trim())
}