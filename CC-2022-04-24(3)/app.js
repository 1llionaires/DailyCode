// A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

// So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

//P: array(bucket)
//R: check for 'gold'
//E: given ["stone", "stone", "stone", "stone", "stone"], results false
//   given ["stone", "stone", "stone", "stone", "gold"], results true
//   given [], return false
//PC: create a function that checks if array contains 'gold'
function checkTheBucket(bucket){
    return bucket.includes('gold')
}
