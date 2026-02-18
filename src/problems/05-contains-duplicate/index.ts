function containsDuplicate(nums: Number[]): boolean {
    const set = new Set<Number>();

    for(const num of nums){
        if (set.has(num)){
            return true;
        }
        set.add(num);
    }
    return false;
   
}

console.log("1,2,3,1:" + containsDuplicate([1,2,3,1]));
console.log("1,2,3,4:" + containsDuplicate([1,2,3,4]));
console.log("1,1,1,3,3,4,3,2,4,2:" + containsDuplicate([1,1,1,3,3,4,3,2,4,2]));