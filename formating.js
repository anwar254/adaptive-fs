function strArr(str){
    if(str.includes('-')){
        const strArr = str.split('-');
        for(let arr of strArr){
            return arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
        }
    }else{
        const strCapitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return [strCapitalized, "Element"];
    }
}

const toCamelCase = (str) => {
    let arrToStr = strArr(str).toString();
    return arrToStr.replace(/\,/g, '');
}

module.exports = toCamelCase;