FUNCTION analyzeSentence(sentence: STRING): VOID
  VAR length: INTEGER = 0
  VAR wordCount: INTEGER = 0
  VAR vowelCount: INTEGER = 0
  VAR prevChar: CHARACTER = ' '

  FOR EACH char IN sentence
    length = length + 1

    IF char IN {'a', 'e', 'i', 'o', 'u'} THEN
      vowelCount = vowelCount + 1
    IF char = ' ' AND prevChar != ' ' THEN
      wordCount = wordCount + 1
    prevChar = char
    
  PRINT "Length: " + length
  PRINT "Word count: " + wordCount
  PRINT "Vowel count: " + vowelCount
ENDFUNCTION
