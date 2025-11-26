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
    let left = 0;
    let maxLen = 0;
    const seen = new Set<string>();

    for (let right = 0; right < s.length; right++) {

        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Test
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3
