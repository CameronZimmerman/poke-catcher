export default function getPropertyArrOfObjArr(property, array){
    let propertyArray = [];

    for (const item of array) {
        propertyArray.push(item[property]);
    }

    return propertyArray;
}