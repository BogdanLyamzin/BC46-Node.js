const calcWeightIndex = (weight, height) => {
    if(height === undefined) {
        throw new Error("height required")
    }
    
    if(weight <=0 || height <=0) {
        throw new Error("weight or height cannot be less 0")
    }

    const result = weight / (height ** 2);
    return Number(result.toFixed(2));
}

module.exports = calcWeightIndex;