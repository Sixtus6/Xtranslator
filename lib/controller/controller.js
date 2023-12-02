const handsignsMap = [
    { 'A': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/A.jpg' },
    { 'B': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/B.jpg' },
    { 'C': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/C.jpg' },
    { 'D': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/D.jpg' },
    { 'E': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/E.jpg' },
    { 'F': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/F.jpg' },
    { 'G': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/G.jpg' },
    { 'H': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/H.jpg' },
    { 'I': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/I.jpg' },
    { 'J': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/J.jpg' },
    { 'K': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/K.jpg' },
    { 'L': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/L.jpg' },
    { 'M': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/M.jpg' },
    { 'N': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/N.jpg' },
    { 'O': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/O.jpg' },
    { 'P': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/P.jpg' },
    { 'Q': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/Q.jpg' },
    { 'R': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/R.jpg' },
    { 'S': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/S.jpg' },
    { 'T': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/T.jpg' },
    { 'U': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/U.jpg' },
    { 'V': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/V.jpg' },
    { 'W': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/W.jpg' },
    { 'X': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/X.jpg' },
    { 'Y': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/Y.jpg' },
    { 'Z': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/Z.jpg' },
    { ' ': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/space.jpg' },
    { '0': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/numbers/0.jpg' },
    { '1': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/numbers/1.jpg' },
    { '2': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/numbers/2.jpg' },
    { '3': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/numbers/3.jpg' },
    { '4': 'https://res.cloudinary.com/doertxzoj/image/upload/v1700502166/zhstpqgswsnn0xvaidjw.jpg/assets/signlangwage/numbers' },
]

const natural = require('natural');

function matchSignLanguage(userInput) {
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(userInput.toUpperCase()); // Convert input to uppercase for consistency

    for (let token of tokens) {
        for (let item of handsignsMap) {
            if (item[token]) {
                return item[token];
            }
        }
    }
    return null; // Return null if no match is found
}
const imageURL = matchSignLanguage(userInput);

//If image pattern found return data;
if (imageURL) {

    return imageURL;
} else {
    return null
    console.log('No sign language representation found for the given input');
}