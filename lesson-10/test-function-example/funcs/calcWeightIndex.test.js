/*
1. Given height in `m` and weight in `kg`. 
2. weight / ( height * height), fixed to (2)
3. If given invalid data throw error with correct message. 

90, 1.9 - 24,93
-90, 1.9 - error "weight or height cannot be less 0"
90, -1.9 - error "weight or height cannot be less 0"
90 - error "height required"
 - error "weight and height required"
1.9, 90 - error "weight first argument, height - second"
"90", "1.9" - error "weight and height must be number"
"90", 1.9 - error "weight and height must be number"
*/

const calcWeightIndex = require("./calcWeightIndex");

describe("test calcWeightIndex function", ()=> {
    test("90, 1.9 - 24,93", ()=> {
        const result = calcWeightIndex(90, 1.9);
        expect(result).toBe(24.93);
        /*
        const expect = result => {
            return {
                result,
                toBe(value) {
                    return this.result === value;
                }
            }
        }
        */
    })

    test(`-90, 1.9 - error "weight or height cannot be less 0"`, ()=> {
        expect(() => calcWeightIndex(-90, 1.9)).toThrow("weight or height cannot be less 0")
    })

    it(`90, -1.9 - error "weight or height cannot be less 0"`, ()=> {
        expect(() => calcWeightIndex(90, -1.9)).toThrow("weight or height cannot be less 0")
    })

    test(`90 - error "height required"`, ()=> {
        expect(() => calcWeightIndex(90)).toThrow("height required")
    })
})

