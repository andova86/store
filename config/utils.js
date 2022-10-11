export function getAllErrorsInObjectAsString(obj, keysVerboseName = {}, defaultMessage = "Ha ocurrido un error sin documentar" ){
    let arr = getAllErrorsInObject(obj, keysVerboseName, defaultMessage)
    return arr.reduce((prev,curr)=>{
        return prev + curr.message + "\n";
    },"")
}

function getAllErrorsInObject(obj, keysVerboseName = {}, defaultMessage = "Ha ocurrido un error sin documentar" ){
    let res = [];
    if (obj && Object.keys(obj).length !== 0){ 
        Object.keys(obj).forEach((key)=>{
            let field = obj[key];
            // Checking if field is an object, excluding null arrays or functions 
            if(Array.isArray(field)) {
                field.map(item => {
                    let temp = {};
                    temp[key] = item;
                    let tempArr = getAllErrorsInObject( temp, keysVerboseName, false);
                    res.push(...tempArr);
                });
            }
            else if (
                typeof field === 'object' &&
                field !== null
            ) {
                let tempArr = getAllErrorsInObject( field, keysVerboseName, false);
                res.push(...tempArr);
            }
            else{
                res.push( 
                  { 
                    key: keysVerboseName[key] || keysVerboseName['defaultMessage'] || key,
                    message: field
                  }
                );
            }
        })
    }
    else if (defaultMessage) {
        res.push(
            {
                key: null,
                message: defaultMessage
            }
        );
    }
  
    return res;
}