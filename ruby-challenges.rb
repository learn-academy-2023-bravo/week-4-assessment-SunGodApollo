# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

## PSEUDOCODE
# create a method named odd_or_even
# input: number
# use conditional to check if even or odd
# use even? to check for even number
# if number is even, interpolate number saying it is even
    # else, interpolate number saying it is odd
# output: number is even/odd

def odd_or_even(number)
    if number.even?
        "#{number} is even"
    else
        "#{number} is odd"
    end
end
p odd_or_even(reposts2)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

## PSEUDOCODE
# create method named vowels_rem
# input: string
# use .delete and specify which characters to remove; in this case, vowels
# output: string with vowels removed


def vowels_rem(string)
    string.delete! "aeiouAEIOU"
end

p vowels_rem(beatles_album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#PSEUDOCODE
# Create method named is_palindrome
# input: string
# use downcase on string, otherwise conditional will not recognize upcase as the same letter
# save downcase string to variable lowercase_string
# use conditional to check if lowercase_string is equal to lowercase_string.reversed
# puts concatenated string stating it is a palindrome, and vice versa if not.
# output: string is/is not a palindrome

def is_palindrome(string)
    lowercase_string = string.downcase
    if lowercase_string == lowercase_string.reverse
        "#{lowercase_string} is a palindrome"
    else
        "#{lowercase_string} is not a palindrome"
    end
end

p is_palindrome(palindrome_tester1)
