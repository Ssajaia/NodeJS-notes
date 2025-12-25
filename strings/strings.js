const st = "hello bro სმნ"// პრიმიტივი
const obj = new String("hello")// ობიექტი
const nums= "1,2,3"
const alph= ["a","b"]

st===obj // ობიექტი სტრინგი და პრიმიტივ სტრინგი არარის ერთი და იგივე output: False returnType: string

st.slice(1,4)// slice(დაწყების ინდექსი, დასრულების ინდექსი) ამის output ია output: ell returnType: string

//searching - სტრინგში მოძებნა

st.includes("el") // includes(string) output: True returnType: bool
st.startsWith("he") // startsWith(string) output: True returnType: bool
st.endsWith("lo") // endsWith(string) output: True returnType: bool

st.indexOf("l")// indexOf(string) პირველი სად გვხვდება output: 2 returnType: Number
st.lastIndexOf("l")// lastIndexOf(string) ბოლოს სად გვხვდება output: 3 returnType: Number


//replace - სტრინგში ჩანაცვლება

st.replace("h","j") //replace(string,string) ჩაანაცვლებს პირველ არგუმენტს მეორეთი, მხოლოდ პირველად რომელიც შეხვდება output: jello returnType: string
st.replaceAll("o","") // replaceAll(string,string) ჩაანაცვლებს პირველ არგუმენტს მეორეთი, ოღონდ ყველა შეხვედრაზე output: hell returnType: string

// case conversion - რეგისტრის აწევა/დაწევა

st.toUpperCase()// ყველა ასოს გადაიყვანს მაღალ რეგისტრში returnType:string
st.toLowerCase()// ყველა ასოს გადაიყვანს დაბალ რეგისტრში returnType:string
st.toLocaleUpperCase()//  toLocalUpperCase(string ?) ნებაყოფლობით იღებს არგუმენტად ენას, რომლის მაღალ რეგისტრში გადაყვანაც გინდა და ისე უმატებს რეგისტრს
// მაგ: "i".toLocalUpperCase("tr") "İ" (Turkish dotted I) |!| თუ კონკრეტულ შემთხვევებს გამოვრიცხავთ ჯობია ეს არგამოვიყენოთ returnType:string
st.toLocaleLowerCase()// ზუსტად იგივე ოღონდ რეგისტრის დაწევისთვის returnType:string

// trimming - სფეისის მოშორება

st.trim()// ამოშლის ყველა სფეისს returnType:string
st.trimStart()// ამოშლის სფეისს ოღონდ თავში მხოლოდ returnType:string
st.trimEnd()// ამოშლის სფეისს სტრინგის შემდეგ returnType: string

// split/join - შეერთება/დაყოფა

nums.split(",")// სტრინგისგან ქმნის მასივს, მასივის ელემენტებს კი , ის მიხედვით გამოყოფს returnType: array
alph.join("-")// მასივისგან შექმნის სტრინგს, ასოები კი - იქნებიან დაკავშირებულები returnType: string
//მაგალითი ["a","b"].join("-") იქნება "a-b"


















function print(arg){console.log(arg)}