const express = require('express')
const fs = require('fs')
const zlib = require('zlib')
const port = 8000
const app = express()

// 1. Thuật toán kiểm tra chuỗi đối xứng.
const isPalindrome = (str) => {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase()
    let l = 0
    let r = cleanedStr.length - 1
    while (l < r) {
        if (cleanedStr[l] === cleanedStr[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true
}

// 2. Bài toán Two Sum
const twoSum = (nums, target) => {
    const result = []
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                result.push([i, j])
            }
        }
    }
    return result
}

// 3. Compress file data.json
const compressJson = async () => {
    fs.readFile('data.json', (error, data) => {
        if (error) throw error
        zlib.brotliCompress(data, (err, buffer) => {
            if (err) throw err;
            fs.writeFile('data.json.br', buffer, (err) => {
                if (err) throw err;
                console.log('File compressed with Brotli!');
            });
        })
    })
}

app.listen(port, () => {
    console.log('app listening at port:', port)
})

module.exports = { isPalindrome, twoSum, compressJson }