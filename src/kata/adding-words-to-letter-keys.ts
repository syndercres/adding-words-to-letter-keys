/*
function wordsToKeys
prarmeters: array of strings
returns object, with key value pairs, values = array of strings


create empty array keyArr

for each word in the inputArr
    if first letter of word is not included in keyArr
    push firstletter to keyArr
end

create empty object groupedWordsObject

for each letter in keyArr
    create key in groupedWordsObject is equal to collect words(key,inputArr)
end

return groupedWordsObject

Example>>
{
    a: ["apple","arc"]
    b: ["banana"]
    c:["crab"]
}

---------------------------------------------------------------------

function collectWords 
parameters: key string, word array
returns array of strings

create an empty array groupedWordsArr

for each word in inputArr
    if first letter is equal to the key and groupedWordsArr does not include word
        push word to groupedWordsArr
    end
end

return groupedWordsArr
*/