function myEach(collection, callback) {
    let newCollection = collection;
    if (typeof collection === 'object')
        newCollection = Object.values(collection);

    for (const item of newCollection)
        callback(item)
    
    return collection
}

function myMap(collection, callback) {
    const newArray = [];
    let newCollection = collection;
    if (typeof collection === 'object')
        newCollection = Object.values(collection);
    
    for (const item of newCollection)
        newArray.push(callback(item));

    return newArray;
}

function myReduce(collection, callback, initAcc) {
    let newCollection = collection;
    if (typeof collection === 'object')
        newCollection = Object.values(collection);

    let result = newCollection.shift();

    if (initAcc !== undefined)
        result = callback(initAcc, result);
    
    for (const item of newCollection)
        result = callback(result, item);

    return result;
}

function myFind(collection, predicate) {
    let newCollection = collection;
    if (typeof collection === 'object')
        newCollection = Object.values(collection);
    
    for (const item of newCollection) {
        if (predicate(item))
            return item;
    }

    return undefined;
}

function myFilter(collection, predicate) {
    const newArray = [];
    let newCollection = collection;
    if (typeof collection === 'object') 
        newCollection = Object.values(collection);

    for (const item of newCollection) {
        if (predicate(item))
            newArray.push(item);
    }

    return newArray;
}

function mySize(collection) {
    let newCollection = collection;
    if (typeof collection === 'object')
        newCollection = Object.values(collection);

    return newCollection.length;
}

function myFirst(array, n) {
    let returnVal = [];
    if (n === undefined)
        return array[0];
    
    for (let i = 0; i < n; i++)
        returnVal.push(array[i]);

    return returnVal;
}

function myLast(array, n) {
    let returnVal = [];
    if (n === undefined)
        return array[array.length - 1];
    
    for (let i = array.length - (n);i < array.length; i++)
        returnVal.push(array[i]);

    return returnVal;
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}