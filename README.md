# Notes

## Microsoft Sorts 
Before 2010, these were the predominant sorting algorithms
- Insertion sort
- Bubble sort

Now:
- Quick sort (linear, small input sizes)
- Merge sort (good for bigger sizes, logarithmic)
- Array.sort (quick sort for input sizes less than 50, and merge sort)

## Recursion
A recursive function calls itself with a smaller input set repetitively doing some simple task until the task is so simple, it hits a base case
At any node in a recursive tree, the node receives 2 things from its parent: 
1. a partial solution 
2. a smaller subset of the problem that is left

```
const factorial = (n) => {

    // permutations often use factorial logic
    // eg.) The number of ways of seating 6 students in a row of 6 chairs is:
  
    if (n === 0) return 1
    
    return n * factorial(n - 1)
}
```

- Permutations are for lists (order matters) and combinations are for groups (order doesn't matter). A "combination lock" should really be called a "permutation lock".

## Binary Search Tree
- You can sort in linear time because of in-order traversal
- Delete/Replace/Add in an array is exponential because you have to reindex every element in the array. Binary Search Tree solves this issue. It can be done logarithmic. Any operation on array is going to be linear or exponential. Any operation on BST is going to be linear or logarithmic.
 

## System Design
- build me Tik Tok
- main functionality has to be mobile friendly but also still accessible on desktop, have to be able to view a feed, select a video, watch that video, scroll to next video, background feed is updated with popular videos or their followers video. algorithm builds out the background feed
- second functionality, creating videos

Functional Requirements (what the app does):
- upload video
- view feed (updated priority)
- interact with video

Non-functional Requirements:
- 99.99% availability
- Latency is minimal / internet speed
- Traffic: 100M users a day - avg 2 videos per day per user - compressed 5mbs - at least 700Gb/sec average day
- Bandwidth/scale: 2,500 servers 
    - how much money the company can spend to spin up servers. FAANG typically has 2,500 so we'll use this as the base
- Storage: cloud(BLOB), cache mechanism
- Data: 400TB
- Consistency - feed consistency is not as important as relevance (you want new videos that you haven't seen before or popular videos)

Design
- We need to create a highly available video streaming service with low latency, maximizing throughput.
    - throughput is how many users come through
- Batch workflow means it runs on a schedule

client > lb > CDN (content distribution network) > multiple servers to handle API requests (have a health check server constantly pinging these servers) > have a s3 blob storage > have a rdb write and rdb read
need a cache server and precache service based on user ID

content distribution network - serve media content as fast as possible