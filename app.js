// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var ProGrad1 = "Ravi";
console.log("The driver's name is ",ProGrad1);
var ProGrad2 = "Ramu";
console.log("The navigator's name is ",ProGrad2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var n=ProGrad1.length;
var m=ProGrad2.length;
if(n>m){
    console.log("The driver has the longest name, it has",n,"characters.");
}
else if(m>n){
    console.log("It seems that the navigator has the longest name, it has",m,"characters.");
}
else{
    console.log("Wow, you both have equally long names,",n,"characters!.");
}



// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 


//For Progard1
var vowels=[];
var index=[];
var ans="";
for(var i=0;i<ProGrad1.length;i++){
    var ch=ProGrad1.charAt(i).toLowerCase();
    if( ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        vowels.push(ProGrad1.charAt(i));
        index.push(i);
    } 
}
ans=ans+ProGrad1+" ";
for (var i=0;i<vowels.length;i++){
    ans=ans+vowels[i]+" ";
}
for (var i=0;i<index.length;i++){
    ans=ans+index[i]+" ";
}
console.log("For Prograd1")
console.log(ans);


//for prograd2
vowels=[];
index=[];
ans="";
for(var i=0;i<ProGrad2.length;i++){
    var ch=ProGrad2.charAt(i).toLowerCase();
    if( ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        vowels.push(ProGrad1.charAt(i));
        index.push(i);
    } 
}
ans=ans+ProGrad2+" ";
for (var i=0;i<vowels.length;i++){
    ans=ans+vowels[i]+" ";
}
for (var i=0;i<index.length;i++){
    ans=ans+index[i]+" ";
}
console.log("For Prograd2")
console.log(ans);


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

//for Prograd1
var count1=0,count2=0;
for(var i=0;i<ProGrad1.length;i++){
    if(ProGrad1.charAt(i) >= 'a' && ProGrad1.charAt(i) <= 'z'){
        count1=count1+1;
    }
    else if(ProGrad1.charAt(i) >= 'A' && ProGrad1.charAt(i) <= 'Z'){
        count2=count2+1;
    }

}
console.log("For Prograd1")
console.log("Upper case Characters",count2);
console.log("Lower Case Charcters",count1);


//For Prograd2
count1=0;
count2=0;
for(var i=0;i<ProGrad2.length;i++){
    if(ProGrad2.charAt(i) >= 'a' && ProGrad2.charAt(i) <= 'z'){
        count1=count1+1;
    }
    else if(ProGrad2.charAt(i) >= 'A' && ProGrad2.charAt(i) <= 'Z'){
        count2=count2+1;
    }

}
console.log("For Prograd2")
console.log("Upper case Characters",count2);
console.log("Lower Case Charcters",count1);


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

ans="";
for(var i=0;i<ProGrad1.length;i++){
    ans=ans+ProGrad1.charAt(i).toUpperCase() +" "; 
}
console.log("Charcaters separated by space and in capitals for prograd1");
console.log(ans);

ans="";
for(var i=0;i<ProGrad2.length;i++){
    ans=ans+ProGrad2.charAt(i).toUpperCase() +" "; 
}
console.log("Charcaters separated by space and in capitals for prograd2");
console.log(ans);



// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

ans="";
for(var i=ProGrad1.length-1;i>=0;i--){
    ans=ans+ProGrad1.charAt(i); 
}
console.log("Charcaters in reverse order for prograd1");
console.log(ans);

ans="";
for(var i=ProGrad2.length;i>=0;i--){
    ans=ans+ProGrad2.charAt(i); 
}
console.log("Charcaters in reverse order for prograd2");
console.log(ans);




// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"

console.log("Merging both the characters such that driver is followed by Navigator ");
console.log(ProGrad1 + " "+ ProGrad2);

// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

console.log("Merging both the characters such that Navigator is followed by Driver ");
console.log(ProGrad2 + " "+ ProGrad1);



// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

console.log("lexicographic order");
if(ProGrad1 < ProGrad2){
    console.log("The driver's name goes first.",ProGrad1);
}
else if (ProGrad2 < ProGrad1){
    console.log("Yo, the navigator goes first definitely.",ProGrad2);
}
else{
    console.log("What?! You both have the same name?",ProGrad1);
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var str="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dolor porta, rhoncus eros ac, iaculis ante. Sed et nunc convallis, tincidunt nisl sit amet, molestie felis. Curabitur id mollis leo. Nunc commodo, massa eu finibus interdum, augue felis pellentesque eros, vitae dapibus lacus ex ac elit. Donec maximus, ligula id fringilla pharetra, purus elit laoreet nibh, ac vestibulum tortor massa at ligula. In urna orci, faucibus in tempor sit amet, pellentesque at augue. Praesent mi eros, faucibus sit amet ipsum quis, luctus pharetra ante. Nullam in semper eros, ut pulvinar quam. Aenean fringilla neque enim. Nullam vel eros leo. In condimentum tempor magna. Quisque vel justo a urna volutpat egestas sit amet in neque. Vivamus a risus porttitor justo congue viverra. Fusce pellentesque nisi vel molestie tincidunt. Cras sit amet turpis ut metus luctus volutpat. Suspendisse metus enim, placerat et sodales id, tempor in nisl. Proin quis tristique arcu. Mauris dignissim volutpat erat, nec rutrum lorem. Donec in est malesuada, placerat odio eget, tincidunt erat. Integer non nulla suscipit, commodo diam at, fermentum est. Proin at interdum erat, in ultricies leo. Proin aliquam, sem a vestibulum tempus, tellus felis euismod nisl, non fermentum urna erat nec ipsum. Sed tempor quam risus, sed venenatis urna vestibulum blandit. Sed hendrerit dapibus purus, a scelerisque massa suscipit non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent vitae urna pellentesque, egestas est eget, sollicitudin felis. Nulla eleifend nisi dui, ac finibus odio mollis a. Nulla nec purus iaculis, ornare libero non, molestie sapien. Aenean nec dolor vel orci sagittis posuere et id tortor. Praesent bibendum vehicula augue viverra rhoncus. Maecenas sed massa cursus, imperdiet arcu lobortis, fermentum orci. Proin nec aliquet metus, suscipit laoreet massa."

var words=str.split(" ").length;
var etcount=str.match(/et/g).length;

console.log("Count of words in lorem ipsum:",words);
console.log("Count of et word in lorem ipsum",etcount);


// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check 
//if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions 
//that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the 
//knowledge you currently have since you can build pretty nice solution with just using for loop, if-else 
//statements with some break and continue... Just sayin' 

var str="A man, a plan, a canal, Panama!";
var ans1="";
var ans2="";
for(var i=0;i<str.length;i++){
    if ((str.charAt(i) >= 'a' && str.charAt(i) <='z') || (str.charAt(i) >='A' && str.charAt(i) <= 'Z')){
        ans1=ans1+str.charAt(i).toLowerCase();
    }
}
for(var i=ans1.length-1;i>=0;i--){
    ans2=ans2+ans1.charAt(i);
}
if(ans1 == ans2){
    console.log("Palindrome!",str);
}
else{
    console.log("Not Palindrome",str);
}
