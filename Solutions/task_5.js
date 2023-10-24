﻿// Two Sum
// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const hashTable = {};
    let neededValue;

    for(let i=0; i<nums.length; i++) {
        neededValue = target - nums[i];

        if(neededValue in hashTable) {
            return [i, hashTable[neededValue]]
        } else {
            hashTable[nums[i]] = i
        }
    }

    return [];
}


