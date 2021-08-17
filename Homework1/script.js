 'use strict'

 // Հետևյալ արտահայտությունները գրել կարճ ձևով։


 // let a = 25
//  b = 5
 // a = a+70
// // a = a – 5
// // a = a * 3
// // a = a / 27
// alert(a)
// // b = b + 1
// // b = b – 1
// // alert(b)

// <patasxan>

// let a = 25
// let b = 5
// a += 70
// a -=5
// a*=3
// a/=27
// alert(a)
// b += 1
// ++ 
// --
// b -= 1
// alert(b)

 // Եթե a փոփոխականը մեծ է 7-ից, կամ փոքր հավասար է 15-ից, ապա արտածել   ՛՛ճիշտ է՛՛, հակառակ դեպքում արտածել ՛՛սխալ է՛՛։


// let a =8

// if(a>7 || a<=15){
// 	alert(true)
// }


// else{

// alert(false)
// }


// let a = '7'
// let b = 7
// if(a != b){
// alert(true)
// }
// else{
// 	alert(false)
// }


// === 
// <
// >
// <=
// ==
// >=
// !==
// !=





// day փոփոխականը կարող է ընդունել արժեք 1-ից 31 ինտերվալից(ամսվա օրերը)։ Որոշել թե որ տասնամյակի մեջ է գտնվում day-ը



// let day = +prompt('nermutsel tivy')


// if(day>0 && day<10){
// 	alert ('gtnvum e arajin tasnyakum') 
// }

// else if (day>=10 && day<20){
// 	alert ('gtnvum e erkrord tasnyakum') 
// }

// else if (day>=20 && day<31){
// 	alert ('gtnvum e errord tasnyakum') 	
// }


 // if-else –ի միջոցով հաշվել նախորոք արժեքավորված a, b, c թվերից մեծագույնը։

// let a = 9
// let b = 8
// let c = 9

// if(a>b && a>c){
// 	alert('a' + a)
// }
// else if(b>a && b>c){
// 	alert(b)
// }
// else if(c>a && c>b){
// 	alert(c)
// }
// else{
// 	alert('false')
// }



// 6. Հաշվել 14-20 միջակայքի թվերի գումարը։

// let s = 0
// for(let a =14; a<=21; a++){
// 	s = s + a
// }
// alert(s)




// 7․ Հաշվել 1-5 միջակայքի զույգ թվերի գումարը։
//  let s=0, a
//  for (a=1; a<6; a++){
// 	if(a % 2 == 0){
// 	s = s + a
// 	}	
// }

// alert(s)
// alert(a)




// 8․ Հաշվել 1-5 միջակայքի կենտ թվերի գումարը։

//  let s=0
//  for (let a=1; a<6; a++){
//  if(a % 2 !=0){
//  s = s + a
// 	}
// }
// console.log(s)


// 9․ Հաշվել 1-100 միջակայքում բոլոր այն թվերի գումարը,
// որոնք առանց մնացորդի բաժանվում են 3-ի։

// s=0
//     for(let a=3; a<101; a=a+3){
//     	s = s + a
// 	document.write(a+'<br>')
//    }
// 	console.log(s)

// s=0
// for(let a=1; a<=100; a++){
// 	if(a % 3==0){
// 		s=s+a
// 		document.write(a+'<br>')
// 	}
// }
// console.log(s)




// 10.Հաշվել 1-15 միջակայքի արտադրյալը։

//    let s = 1
//  for(let a =1; a<=16; a++){
// 	s = s * a
// }
// console.log(s)

// 11․Հաշվել 1-20 միջակայքի  զույգ թվերի արտադրյալը։
 //   let s=1
 // for(let a=1; a<21; a++){
	// if(a % 2==0){
	// 	s=s*a
	// }
 // }

 // console.log(s)


// 12․Հաշվել 1-20 միջակայքի  կենտ թվերի արտադրյալը։

// let s=1
// for(let a =1; a<21; a++){
// 	if(a % 2!=0)
// 		s=s*a
// 	console.log(s)
// }

// Եթե a փոփոխականը մեծ հավասար է 3-ից, ապա արտածել   ՛՛ճիշտ է՛՛, հակառակ դեպքում արտածել ՛՛սխալ է՛՛։

 //  let a = 5
 //  if(a>=3 ){
	// alert (true)
 // }

 // else{
	// alert(false)
 // }

 // Եթե a փոփոխականը հավասար  չէ  1-ի, ապա արտածել   ՛՛ճիշտ է՛՛, հակառակ դեպքում արտածել ՛՛սխալ է՛՛։

 // let a = 5
 // if(a!=1){
 // 	alert(true)
 // }
 // else{
 // 	alert(false)
 // }


// Եթե a փոփոխականը հավասար է ՛4՛-ի և արժեքով և տիպով ապա արտածել   ՛՛ճիշտ է՛՛, հակառակ դեպքում արտածել ՛՛սխալ է՛՛։


 // let a = '4'
 // let num = 4
 // if(a === num ){
	// alert(true)
 // }

 // else{
	// alert (false)
 // }


 // Եթե test փոփոխականը հավասար է true, ապա արտածել   ՛՛ճիշտ է՛՛, հակառակ դեպքում արտածել ՛՛սխալ է՛՛։

 // let test= true
 // if(test= true){
	// alert(true)
 // }

 // else{
	// alert(false)
 // }

 // Եթե a փոփոխականը մեծ է 1-ից, և փոքր է 10-ից, ապա արտածել   ՛՛ճիշտ է՛՛, հակառակ դեպքում արտածել ՛՛սխալ է՛՛։

 // let a = 5
 // if(a>1 && a<10){
 // 	alert(true)
 // }

 // else{
 // 	alert(false)
 // }

   // Եթե a փոփոխականը մեծ է 7-ից, կամ փոքր հավասար է 15-ից, ապա արտածել   ՛՛ճիշտ է՛՛, հակառակ դեպքում արտածել ՛՛սխալ է՛՛։
  
   // let a = 9
   // if(a>7|| a<=15){
  	//  alert(true)
   // }

   // else{
  	//  alert(false)
   // }




  // let a = -78;
  // let b = Math.abs(a)
  // console.log(b)


  // let n = 12.491
  // let newN = Math.round(n)
  // console.log(newN)


//   let n = 5.999
//   let newN = Math.ceil(n)
// console.log(newN)

//   let n = 5.999
//   let newN = Math.floor(n)
// console.log(newN)



//   let n =5.424;
//   let newN = n.toFixed(2);
// console.log(newN);


// let a = 10, b = 7, c = 3, d = 20 
// let min
// min = Math.min(a, b, c, d)
// console.log(min)

// let a = 10, b = 7, c = 3, d = 20 
// let max
// max = Math.max(a, b, c, d)
// console.log(max)


// console.log(Math.max(4, 10, 5, 1, 78, 65))

// let a = 8
// let newA = Math.pow(a, 1/2)
// console.log(newA)


// let a = 16
// let newA = Math.sqrt(a)
// console.log(newA)



// let n = 27
// n = n ** 2
// console.log(n)


// let n = Math.random() * 10
// n = Math.floor(n)
// console.log(n)//   [0-1]





// 1․ Հաշվել 34,  87, 173 աստիճանները։

// let a= 8
// let newA = Math.pow(a, 3)
// console.log(newA)


// let b = 3
// let newN = Math.pow(b,4)
// console.log(newN)




// let c = 17
// let newP = Math.pow(c,3)
// console.log(newP)



// Հաշվել 49, 16, 45 թվերի քառակուսի արմատը, այն թվերը, որոնք կլինեն կոտորակային, ապա կլորացնել մինչև մոտակա մեծ ամբողջը։

// let a = 49
// a = Math.pow(a, 1/2)
// console.log(a)

// let b = 16
// b = Math.pow(b, 1/2)
// console.log(b)

// let c = 45
// c = Math.pow(c,1/2)
// c = Math.ceil(c)
// console.log(c)

       // <tnayin zangvacner>

       // Տրված է զանգված 1, 2, 3, 4, 5 էլեմենտներով։ Ցիկլի օգնությամբ այն արտածել էկրանին։

   //     let arr =[1, 2, 3, 4, 5]
   //    for(let i = 0; i < arr.length; i++ ) {
	  // document.write(arr[i]+ '<br>')
   //   }

   // 1․ Զանգվածի ամեն անդամը ավելացնել 4-ով, և ստացված զանգվածը արտածել։

//    let arr = [1,2,3,4,5,6,7,8,9,10]
//    for(let i = 0; i<arr.length; i++ ){
//    	arr[i]= arr[i] +4
// console.log(arr[i])


//    }
   

   
// 2․ Տրված է զանգված 1, 2, 3, 4, 5 էլեմենտներով։ Ցիկլի օգնությամբ հաշվել զանգվածի էլեմենտների գումարը։

// s=0
// let arr=[1,2,3,4,5]
// for(let i=0; i<arr.length; i++){
// 	s=s+arr[i]
	
// }
// document.write(s)


// 3․ Տրված է զանգված 1, 2, 3, 4, 5 էլեմենտներով։ Ցիկլի օգնությամբ հաշվել զանգվածի էլեմենտների արտադրյալը։

// s=1
// let arr=[1,2,3,4,5]
// for(let i=0; i<arr.length; i++){
// s=s*arr[i]
	
// }
// document.write(s)


// 4․ Տրված է զանգված 10, 2, 0, 30, 4, 5 էլեմենտներով։ Էկրանին արտածել այն էլեմենտները, որոնք մեծ են 1-ից, և փոքր են 8-ից։

// let arr=[10,2,6, 0,30, 4, 5]
// for(let i = 0; i < arr.length; i =i +1 ) {
// 	if(arr[i] > 1 && arr[i] < 8){
// 		console.log(arr[i])
// 	}
// }

 // Հաշվել -5, 7, -125 թվերի մոդուլը։

 // let a = -5
 // let b = Math.abs(a)
 // console.log(b)

 // let c = 7
 // let d = Math.abs(c)
 // console.log(d)

 // let e = -125
 // let f = Math.abs(e)
 // console.log(f)

 // Գրել սկրիպտ, որը կստուգի․ եթե թիվը դրական է, ապա կհաշվի թվի քառակուսի արմատը, և կկլորացնի մինչև մոտակա փոքր ամբողջը։

 // let n = +prompt('nermutsel tivy') 
 // if(n>0){
 //  n = Math.pow(n,1/2)
 // n = Math.round(n)
 // console.log(n)

 // }

 // else{
 //  alert('r')
 // }
 

 // Գեներացնել պատահական թիվ, այն բազմապատկել 100-ով, և կլորացնել ըստ իր մեծության։



 // let a = Math.random() 
 // a=a*100
 // console.log(a)
 // a=Math.ceil(a) 
 // console.log(a)




 // Հաշվել 280 թվի քառակուսի արմատը, և կլորացնել ամբողջ, տասնորդական և հարյուրերորդական չափով։

//  let a=280
//  let b=Math.pow(a,1/2)
//  let c=b.toFixed(2)
//  let d=b.toFixed(1)
//  let e=b.toFixed(0)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
 




// 6․ Տրված է զանգված 10, -2, 0, 30, -4, 5 էլեմենտներով։ Հաշվել բոլոր  թվերի արտադրյալը։
// let arr=[1, -2, 3, 5, -4, 2]
// let s=1
// for(let i=0; i<arr.length; i++){
//   if(arr[i] < 0){
//     s=s*arr[i]
//   }
// }

// console.log(s)

// let max = -Infinity
//  let arr=[-1,-2,-3,-4,-5]
//  for(let i=0; i<arr.length; i++){
//   if(arr[i]>max ){
//     max=arr[i]
//   }
//  }

 // console.log(max)

 // let min=Infinity
 // let arr=[6,7,8,9,10]
 // for(let i=0; i<arr.length; i++){
 //  if(arr[i]<min){
 //    min=arr[i]
 //  }
 // }
 // console.log(min)



 // let arr = [4, 5, 0, 20]
 // console.log(arr[0])
 // console.log(arr[1])
 // console.log(arr[2])
 // console.log(arr[3])




// <zangvacneri qanak>

// let arr = [4, 8, 10, 0, 5, 8]
// for(let i=0; i<arr.length; i++){
//   console.log(arr[i])
// }



// 13․Գտնել տրված զանգվածի մեծագույն տարրի համարը, ինդեքսը։


// let max = -Infinity, y;
//  let arr=[-1,2,-3,4,-5]
//  for(let i=0; i<arr.length; i++){
//   if(arr[i] > max ){
//     max=arr[i]
//     y = i
//   }
//  }

// // console.log(y)
//  console.log(y)





// 14․ Գտնել տրված զանգվածի մեծագույն և փոքրագույն տարրերի ինդեքսների արտադրյալը։
    //  s=1
    //  let min = -Infinity, x;
    //  let arr =[10,0,30,40,50]
    //  for(let i=1; i<arr.length; i++){
    //  if(arr  [i] > min ){
    //  s=s*[i]
    //  }
    //  }

    // console.log(s)


// 15․Տրված զանգվածի մեջ փոխել մեծագույն և փոքրագույն էլեմենտների տեղերը։

       // <tnayin>
// 1․ Զանգվածի ամեն անդամը ավելացնել 4-ով, և ստացված զանգվածը արտածել։
// let s=0
// let arr=[1,2,3,4,5,6,7,8]
// for(let i=0; i<arr.length; i++){
//   arr[i] = arr[i] + 4


  
// }
// console.log(arr)

// 2․ Տրված է զանգված 1, 2, 3, 4, 5 էլեմենտներով։ Ցիկլի օգնությամբ հաշվել զանգվածի էլեմենտների գումարը։
// s=0
// let arr=[1,2,3,4,5]
// for(let i = 0; i<arr.length; i++){
//   s=s+ arr[i]

// }

// console.log(s)


// 3․ Տրված է զանգված 1, 2, 3, 4, 5 էլեմենտներով։ Ցիկլի օգնությամբ հաշվել զանգվածի էլեմենտների արտադրյալը։

// s=1
// let arr=[1,2,3,4,5]
// for(let i=0; i<arr.length; i++){
// s=s*arr[i]
// }

// console.log(s)


// 4․ Տրված է զանգված 10, 2, 0, 30, 4, 5 էլեմենտներով։ Էկրանին արտածել այն էլեմենտները, որոնք մեծ են 1-ից, և փոքր են 8-ից։

 // let arr=[10,2,0,30,4,5]
 // for(i=0; i<arr.length; i++){
 //  if(arr[i]>1 && arr[i]<8){
 // console.log(arr[i])
 //  }
 // }

 


 // let arr = [5, 8, -5, 10, 8, 2]
 // let max = -Infinity, y, min = Infinity, x;
 // for(i=0; i<arr.length; i++){
 //  if(arr[i] > max){
 //    max=arr[i]
 //    y=i
 //  }
 // }
// console.log(y)
// console.log(max)





 // for(let i = 0; i < arr.length; i++){
 //  if(arr[i] < min){
 //    min = arr[i]
 //    x = i
 //  }
 // }

 // let z=x*y
 // // console.log(x)
 // // console.log(min)
 // console.log(z)
  




// 15․Տրված զանգվածի մեջ փոխել մեծագույն և փոքրագույն էլեմենտների տեղերը։


// let arr = [5, -9, -4, 100, 45, -54, 90, 45];
// let max = -Infinity
// let indexMax, k;
// for(let i=0; i<arr.length; i++){
//   if(arr[i]>max){
//     max=arr[i]
//     indexMax=i
//   }
// }


//    let min = Infinity,indexMin
//    for(let i=0; i<arr.length; i++){
//    if(arr[i]<min){
//     min=arr[i]
//     indexMin=i

//   }
//  }

// //let result = indexMin * indexMax
// // console.log(indexMax)
// // console.log(indexMin)
// //console.log(result)
// k = max
// arr[indexMax] = arr[indexMin]
// arr[indexMin] = k
// console.log(arr)



// let arr = [4, 10, 5, 2, 'abcd', -8, 45, 20]
// // [9-30]
// for(i=0; i<arr.length; i++){
//   if(arr[i]>9 && arr[i]<30){
//     console.log(arr[i])
//   }
// }


// >
// <
// >=
// <=
// !=
// ==
// ===
// !==
// &&
// ||





// 1---- 5(3)
// 2---- 3(1)
// 3---- 


// let a = 10, b = 20, c;
// c = a
// a = b
// b = c
// console.log('a=' + a)//20
// console.log('b=' + b)//10

       //acman kargov dasavorl//
// let arr = [5, -9, -4, 100, 45, -54, 90, 45], k;
// for(let i = 0; i < arr.length; i++){
//   for(let j = 0; j < arr.length; j++){
//     if(arr[i] < arr[j]){
//       k = arr[i]
//       arr[i] = arr[j]
//       arr[j] = k
//     }
//   }
// }
// console.log(arr)




// 18․Տրված զանգվածի անդամները դասավորել աճման կարգով։ 
//      let arr=[32,20,18,31,55,69] 
//      for(i=0; i<arr.length; i++){
//      for(let j=0; j<arr.length; j++){
//      if(arr[i] < arr[j]){
//       k = arr[i]
//       arr[i] = arr[j]
//       arr[j] = k

//   }
// }
// }
// console.log(arr)


// 19․Տրված զանգվածի անդամները դասավորել նվազման կարգով։ 

 //     let arr=[61,20,15,39,48,80], i, j, k;
 //     for(i=0; i<arr.length; i++){
 //     for(j=0; j<arr.length; j++){
 //     if(arr[i] >arr[j]){
 //      k = arr[i]
 //      arr[i] = arr[j]
 //      arr[j] = k

 //  }
 //  }
 //  }
 // console.log(arr)

// 21. Հայտարարել զանգված և արտածել բոլոր զույգ ինդեքս ունեցող անդամները։
// 22․ Հայտարարել զանգված և արտածել բոլոր կենտ ինդեքս ունեցող անդամները։
// let arr=[1,3,6,8,11,14,17,20,23,26]

// console.log(arr[0])

// for(let i=0; i<arr.length; i++){
//   if(i%2==0){
// console.log(arr[i])

// }
//   }
 

           // <tnayin>
           // let a = 10, b = 20           
           // for(a=0; a<20; a++){
           //  for(b=20; b>10; b--){
              
           //  }
           //  }
           // console.log(a)
           // console.log(b)



// let a = 35, b = 25           
// a = a + b; 
// b = a - b; 
// a = a - b
// console.log('a=' + a)
// console.log('b=' + b)


// let a = 35, b = 25, c;
// c = a;
// a = b;
// b = c;
// console.log(a)
// console.log(b)





// 1. 5----3/ 3----0
// 2. 5-----5/ 3--1
// 3.5----0/ 3-----1
// 4. 5-----1/ 3------0
// 5.5------4/ 3-----0


// 1. 5-----5// 3----0
// 2. 5----2/ 3----3
// 3. 5-----0/ 3----2
// 4. 5-----5/ 3----2
// 5. 5-----4/ 3-----3






// let arr=[37,2,30,1,58,49,8], k
// for(let i=0; i<arr.length; i++){
//   for(let j=0; j<arr.length; j++){
//     if(arr[i]>arr[j]){
//       k = arr[i]
//       arr[i]=arr[j]
//       arr[j]=k
//       arr[i]=arr[i]+arr[j]
//       arr[j]=arr[i]-arr[j]
//       arr[i]=arr[i]-arr[j]

//     }
//   }
// }

// console.log(arr)



// <zuyg tveri qanak>
// let k=0
// let arr = [4, 5, 8, 20, 6, 5, 21, 30]
// for(let i=0; i<arr.length; i++){
//   if(arr[i]%2==0){
//     k++
//     // console.log(arr[i])
//   }
// }
//console.log(k)

// <kent tveri qanak>
// let k=0
// let arr = [4, 5, 8, 20, 6, 5, 21, 30]
// for(let i=0; i<arr.length; i++){
//   if(arr[i]%2!=0){
//     k++
//     console.log(arr[i])
//   }
// }
// console.log(k)


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)


// for(let a=1; a<=100; a++)
// console.log(a)

// let a1 = 1
// let a2 = 2
// let a3 = 3
// let a4 = 4
// let a5 = 5
// let arr = [1, 2, 3, 4, 5]
// console.log(arr[0])



// let a = 14, b = 20, s
// s = a * b;
// console.log(s)



// function declaration
//let c = 10
// let num1 = 45, num2 = 21
// console.log(square(num1))
// console.log(square(num2))

// function square(a){
//   let c = a * 4
//   return c
// }





// function exptression
// let square = function(a){
//   let c = a * 4
//   return c
// }
// let num1 = 45, num2 = 21
// console.log(square(num1))
// console.log(square(num2))



// 1․ Գրել ֆունկցիա, որը կտպի ձեր անունը։
//  //function name(){
//   //console.log('Ando')
// //}
// //name()

// //function name(a){
//  // console.log(a)
// //}
// //name('Ando')

// function name(a){
//   //console.log(a)
//   //console.log(a)
//   return a
// }
// console.log(name('Ando'))


// 2․Գրել ֆունկցիա, որը վերադարձնում է թվի քառակուսին։
// function square(a){
//   let c= a * a
//   //console.log(c)
  
// }
// square(40, 20, 30)
// square(23)

// function square(a){
//   let c= a * a
//   console.log(a,c)
  
// }
// square(40)
// square(23)
// square(30)
// square(20)
// square(79)

// 3․Գրել ֆունկցիա, որը վերադարձնում է թվի խորանարդը։

// function cube(a){
//   let c=a*a*a
//   console.log(c)
// }
// cube(30)


// 3.1․Գրել ֆունկցիա, որը վերադարձնում է տրված երեք թվերի գումարը։

// function square(a,b,c){
//    a+b+c
//   return a+b+c
//    //console.log(a+b+c)
//   //console.log(1000)
//   // return 
// }
// console.log(square(51, 20, 10))



// 4․Գրել ֆունկցիա, որը վերադարձնում է 1-100 թվերի գումարը։

       // function sumare(){
       // let s = 0
       // for(let i =1; i<=100; i++){
       // s = s + i
       //  }
       // console.log(s)
       //  }
       //  sumare()
    
// 5․ Գրել ֆունկցիա, որը ստուգում է թե իրեն փոխանցված թիվը դրական է թե բացասական։ Եթե դրական է տպում է true, եթե բացասական է false:


 //  function square(a){
 //    if(a > 0){
 //      console.log(true)
 //    }
 //    else{
 //      console.log(false)
 //    }
 
 // }
 // square(-89)
 // square(9)


 // function square(a){
 //    if(a > 0){
 //     return true
 //    }
 //    else{
 //     return false
 //    }
 
 // }
 // let n=-8
 // console.log(square(n))

 




// 6․ Գրել ֆունկցիա, որի պարամետրը ունի լռելայն արժեք, և այն հաշշվում է իրեն փոխանցված փոփոխականի քառակուսին։ Ստուգել ֆունկցիայի աշխատանքը պարամետր փոխանցելով և առանց դրա։

// function f1(a=5, b=10){
//   return Math.pow(a, 2)
// }
// let a=4
// console.log(f1(a))
//  f1(12)


// function f1(a=5, b=10){
//   return Math.pow(a, 2)
// }
// let a=4
// console.log(f1(a))
// f1(12)


// 7․Գրել ֆունկցիա, որը գտնում է իրեն փոխանցված զանգվածի մեծագույն տարրը, և վերադարձնում այն։



//  function maxArr(arr){
//   let max= -Infinity
//   for(let i=0; i<arr.length; i++){
//  if(arr[i]>max){
//   max=arr[i]
  
//  }

//  }
//  console.log(max)
//   //return max
// }

// let  arr = [1, 4, -5, 10, 4]
// // console.log(maxArr(arr))
// maxArr(arr)




// 11․Ֆունկցիան որպես պարամեր ստանում է երկու թիվ։ Եթե այդ թվերը դրական են վերադարձնում է նրանց արտադրյալը, իսկ եթե բացասական՝ նրանց տարբերությունը։

// function s(a, b){
  
//   if(a>0 && b>0){
//   return a*b
//   console.log(a*b)
//   }

//   else{
//     console.log(a-b)
//     return a-b
//   }
 
// }
// //s(2,9)
// console.log(s(2,9))




// 15․Գրել ֆունկցիա, որը զանգվածը լրացնում է 1-ից մինչև տրված պարամետրը։
//   function s(a){
//   let arr=[]
//   //let c=5
//   for(let i=1; i<=a; i++){
//     arr.push(i)
//   }

//   return arr

//  }

// console.log(s(8))//1,2,3,4

// 10․Գրել ֆունկցիա, որը որպես պարամետր ստանում է թիվ, և այն բաժանում է 2-ի այնքան ժամանակ, մինչև նրա արժեքը փոքր կլինի 20-ից։ Ֆունկցիան վերադարձնում է իտերացիաների քանակը։

// function func(a){
//   let n=0;
//   while(a>20){
//     a = a/2;
//     n++;
//   }
//   console.log(n)
//   console.log(a)
// }

// func(1500)


// Գրել ֆունկցիա, որը իրեն փոխանցված զանգվածը դասվորում է աճման կարգով։
// function arrSort(arr){
//   let k;
//   for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//       if(arr[i] < arr[j]){
//         k = arr[i];
//         arr[i] = arr[j];
//         arr[j] = k;
//       }
//     }
//   }
//   return arr
// }

// let arr=[30,26,45,38,55,11];
// console.log(arrSort(arr))
// let arr1=[44,39,17,35,2,65,8]
// console.log(arrSort(arr1))
// let arr2=[57,85,12,6,8,11]
// console.log(arrSort(arr2))

// function num(a,b){
//   let p = a*b
//   return p
// }

// console.log(num(8,9))
// console.log(num(7,14))

// function cube(a){
//   let c;
//   c=a*a*a
//   console.log(c)
//   //console.log(a)
//   //return 'bgvhjgjkl' 
// }
// let d=5;
// // console.log(cube(d))
// cube(d)
// // console.log(5*5*5)




// function num(a,b){
//   let s=a+b;
//   if(s>10){
//     console.log(true);
//   }
//   else{
//     console.log(false);
//   }
    
// }

// num(4,3);
// console.log(num(8,9))





// let arr=[70,8,45,61,23,75,1]
// for (let i=0; i<arr.length; i++){
// console.log(arr[i])
// }




// // function func(abc){
// //   for (let i=0; i<abc.length; i++){
// //     console.log(abc[i]);

// //   }
// // }


// let arr0=[60,18,40];
// let arr1=[45,64,91,46,18,23];
// func(arr0);
// func(arr1);

// func(arr1);
// let arr2 = [45, 20, 35, -98];
// func(arr2);

 