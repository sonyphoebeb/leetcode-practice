/**
 * 🧠 03 — Longest Substring Without Repeating Characters
 * 📅 26-11-2025
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Sliding Window Approach:
 * - Expand window with `right`
 * - Shrink window with `left` when duplicates appear
 * - Track characters using a Set
 */


function lengthOfLongestSubstring(s: string): number {
    let start = 0;
    let maxLen = 0;
    const seen = new Set<string>();

    for (let end = 0; end < s.length; end++) {
        while (seen.has(s[end])) {
            seen.delete(s[start]);
            start++;
        }
        seen.add(s[end]);
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}


// Test
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3
