// Question 1
// 1. Email Validation: 
// Check if a user input string is a valid email format (eg: example@mail.com). 
// Output "email is valid" if valid or "invalid email" otherwise. 

let mail= prompt("insert your email").toLowerCase().trim()
if (mail.includes("@") && mail.endsWith(".com")|| mail.endsWith(".ng")
||mail.endsWith(".net")||mail.endsWith(".org")){
    console.log("Email is valid")
    }
    else{
        console.log("Email is invalid")
    }

   
//     2. Password Strength Checker: 
// Write a password checker program that ensure a password contains at least one uppercase letter 
// as the last letter, one lowercase letter as the first letter, and one number 0 anywhere. 
// Output "strong password" if yes and "weak password", otherwise. 

    let passwordChecker = prompt('insert your password')
    if(passwordChecker.charAt(passwordChecker.lastIndexOf(-1))=== 
    passwordChecker.charAt(passwordChecker.lastIndexOf(-1)).toUpperCase() 
    && passwordChecker.charAt(0).toLowerCase()
    && passwordChecker.includes('0')){
        console.log(passwordChecker)
        console.log("strong password")
        // passwordChecker.charAt(0) === 
        }else
        
        {
            console.log("weak password")
            console.log(passwordChecker)
        }

// Question3
//  3. URL Protocol Detection: 
// Check if a URL starts with "http://" or "https://"
let url=prompt('input the url').toLowerCase()
if(url.startsWith("http://")||url.startsWith("https://")){
    console.log('Valid Url')
    }
    else{
     console.log('Invalid Url')
    } 
    
    // Question4 Palindrome 
    let word=prompt("input a word").toLowerCase()
let message=""
for(i=word.length-1; i>=0; i--){
    message= message+word.charAt(i)
}
    if(word===message){
    console.log("its a Palindrome")
    }
    else{
    console.log("Not a Palindrome")
        
    }

    // // Question5
    // 5. Username Length Validation: 
    // // Write a program that ensures a username is between 5 and 15 characters. 
        let  character=prompt('type your username').length
        if (character >5  && character <= 15){
            console.log("valid username")
        }
        else{
            console.log("invalid username")
        }
        
// Question6
// 6. Case Conversion in Messages: 
// Write a program that automatically capitalizes 
//   the first letter of a user's name input.
let firstLetter =prompt("input your username").trim()
let firstLetterUsername=firstLetter.charAt(0).toUpperCase()
let result1=firstLetterUsername.substring(1)
let result2=result.concat(result1)
console.log(result2)

// 7. Detect File Type from Extension: 
// Write a program that identifies if a file is a specific type (e.g., ".jpg", ".png")
//  based on its extension, and then outputs the type of file eg: "it is a JPG file" or "it is an MP3 file".
// Write a program that identifies if a file is a specific type 
// (e.g., ".jpg", ".png") based on its extension, 
// and then outputs the type of file eg:
// "it is a JPG file" or "it is an MP3 file".
let  extention=prompt("insert your extention").toLowerCase()
if (extention.endsWith(".jpg")){
    console.log("It is a JPG file")
    }
    else if(extention.endsWith(".png")){
        console.log("It is a PNG file")
    }
else if(extention.endsWith(".mp3")){
        console.log("It is an MP3 file")
}
else if(extention.endsWith(".mp4")){
        console.log("It is an MP4 file")
}
else{
        console.log("Your file does not exist")
}

// 9. Forbidden Words Bot: 
// Write a bot that checks if a user message contains any forbidden word like “bad” or “spam.”
// and substitute them with nicer synonyms or with "" that is the same length as the bad word.
let  word = prompt("insert your message")
if(word.includes("bad")&& word.includes("spam")){
console.log(word.replaceAll('bad', 'fit').replaceAll('spam', 'good'))
}
else{
    console.log("no word to replace")
}
// 10. Scores Grader: 
// Write a program that determines the grade of students in a test.
// Grade A is for score between 75 and 100, B is for 
// score between 60 and 70, C if for scores between 50 and 60. Scores below 50 are advised to retake exam.
let score=prompt("input your score")
if (score>=75 &&score<=100){
    console.log("Your grade is A")
    
    }
   else if (score>=60 &&score<=70){
    console.log("Your grade is B")
   }
     else if (score>=50 &&score<=60){
    console.log("Your grade is C")
   }
    
    else{
        console.log("Advised to retake Exams!")
    }