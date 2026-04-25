function checkIfArrayIsSorted(nums: number[]): boolean {
    let asc = true;
    let dsc = true;

    for(let i=0; i<nums.length-1; i++){
        if(nums[i]>nums[i+1]){
            asc = false;
        }
        if(nums[i]<nums[i+1]){
            dsc = false;
        }
    }   
    return asc || dsc;
}
    
console.log(checkIfArrayIsSorted([1,2,3,4,5]));
console.log(checkIfArrayIsSorted([5,4,3,2,1]));
console.log(checkIfArrayIsSorted([1,3,2,4,5]));