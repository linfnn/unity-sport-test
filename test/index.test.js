const { isPalindrome, twoSum, compressJson } = require("..")
const fs = require('fs')

describe('Thử nghiệm thuật toán kiểm tra chuỗi đối xứng:', () => {
    it('Input: "hello"', () => {
        const result = isPalindrome('hello')
        console.log('Output:', result)
    })
    it('Input = "level"', () => {
        const result = isPalindrome('level')
        console.log('Output:', result)
    })
})

describe('Bài toán Two Sum:', () => {
    it('Input:\n nums = [2,7,11,0,15,9]\n target = 9', () => {
        const result = twoSum([2, 7, 11, 0, 15, 9], 9)
        console.log('Output:', result)
    })
    it('Input:\n nums = [3, 2, 4, 3]\n target = 6', () => {
        const result = twoSum([3, 2, 4, 3], 6)
        console.log('Output:', result)
    })
})


describe('Compress file data.json:', () => {
    it('Nén thành file data.json.br và kiểm tra kích thước sau nén:', () => {
        compressJson()
        fs.stat('data.json.br', (err, stats) => {
            if (err) throw err;
            console.log(`Kích thước file đã nén: ${stats.size} bytes`);
        });
    })
})