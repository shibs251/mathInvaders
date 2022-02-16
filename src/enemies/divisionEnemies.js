// const divisionEnemies = [
// // array at 0 index is very easy
//   [
//   {
//   operator: '/',
//   topNum: 1,
//   botNum: 1,
//   answer: 1,
//   array: [3, 2, 1],
//   color: colors[colorNum],
//   left: 200
//   // topPos:
//   },
//   {
//     operator: '/',
//     topNum: 2,
//     botNum: 1,
//     answer: 2,
//     array: [1, 2, 3],
//     color: colors[colorNum],
//     left: 300
//     // topPos:
//     },
//     {
//     operator: '/',
//     topNum: 3,
//     botNum: 1,
//     answer: 3,
//     array: [3, 2, 1],
//     color: colors[colorNum],
//     left: 700
//     // topPos:
//     },
//     {
//     operator: '/',
//     topNum: 4,
//     botNum: 1,
//     answer: 4,
//     array: [3, 4, 5],
//     color: colors[colorNum],
//     left: 350
//     // topPos:
//     },
//     {
//     operator: '/',
//     topNum: 5,
//     botNum: 1,
//     answer: 5,
//     array: [5, 4, 3],
//     color: colors[colorNum],
//     left: 670
//     // topPos:
//     },
//     {
//     operator: '/',
//     topNum: 4,
//     botNum: 2,
//     answer: 2,
//     array: [2, 1, 3],
//     color: colors[colorNum],
//     left: 180
//     // topPos:
//     },
//     {
//     operator: '/',
//     topNum: 6,
//     botNum: 3,
//     answer: 2,
//     array: [2, 3, 1],
//     color: colors[colorNum],
//     left: 930
//     // topPos:
//     },
//     {
//     operator: '/',
//     topNum: 8,
//     botNum: 2,
//     answer: 4,
//     array: [3, 5, 4],
//     color: colors[colorNum],
//     left: 500
//     // topPos:
//     },
//     {
//     operator: '/',
//     topNum: 10,
//     botNum: 2,
//     answer: 5,
//     array: [5, 6, 4],
//     color: colors[colorNum],
//     left: 200
//     // topPos:
//     },
//   {
//   operator: '/',
//   topNum: 12,
//   botNum: 6,
//   answer: 2,
//   array: [3, 2, 1],
//   color: colors[colorNum],
//   left: 400
//   },
//   {
//   operator: '/',
//   topNum: 9,
//   botNum: 3,
//   answer: 3,
//   array: [4, 3, 2],
//   color: colors[colorNum],
//   left: 600
//   },
//   {
//   operator: '/',
//   topNum: 12,
//   botNum: 3,
//   answer: 4,
//   array: [3, 5, 4],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: '/',
//   topNum: 15,
//   botNum: 5,
//   answer: 3,
//   array: [3, 4, 5],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: '/',
//   topNum: 18,
//   botNum: 3,
//   answer: 6,
//   array: [6, 5, 7],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: '/',
//   topNum: 16,
//   botNum: 4,
//   answer: 4,
//   array: [5, 4, 6],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: '/',
//   topNum: 20,
//   botNum: 5,
//   answer: 4,
//   array: [5, 6, 4],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: '/',
//   topNum: 24,
//   botNum: 4,
//   answer: 6,
//   array: [6, 8, 7],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: '/',
//   topNum: 28,
//   botNum: 4,
//   answer: 28,
//   array: [8, 6, 7],
//   color: colors[colorNum],
//   left: 800
//   }
// ],
// // array at index of 1 is medium
// [
//   {
//   operator: '/',
//   topNum: 25,
//   botNum: 5,
//   answer: 5,
//   array: [5, 7, 6],
//   color: colors[colorNum],
//   left: 200
//   },
//   {
//   operator: '/',
//   topNum: 30,
//   botNum: 6,
//   answer: 5,
//   array: [6, 5, 7],
//   color: colors[colorNum],
//   left: 400
//   },
//   {
//   operator: '/',
//   topNum: 35,
//   botNum: 5,
//   answer: 7,
//   array: [6, 5, 7],
//   color: colors[colorNum],
//   left: 600
//   },
//   {
//   operator: '/',
//   topNum: 40,
//   botNum: 5,
//   answer: 8,
//   array: [8, 7, 9],
//   color: colors[colorNum],
//   left: 900
//   },
//   {
//   operator: '/',
//   topNum: 36,
//   botNum: 6,
//   answer: 6,
//   array: [5, 7, 6],
//   color: colors[colorNum],
//   left: 300
//   },
//   {
//   operator: '/',
//   topNum: 42,
//   botNum: 7,
//   answer: 6,
//   array: [6, 7, 5],
//   color: colors[colorNum],
//   left: 700
//   },
//   {
//   operator: '/',
//   topNum: 46,
//   botNum: 6,
//   answer: 8,
//   array: [9, 7, 8],
//   color: colors[colorNum],
//   left: 180
//   },
//   {
//   operator: '/',
//   topNum: 57,
//   botNum: 9,
//   answer: 6,
//   array: [6, 9, 8],
//   color: colors[colorNum],
//   left: 660
//   },
//   {
//     operator: '/',
//     topNum: 49,
//     botNum: 7,
//     answer: 7,
//     array: [8, 9, 7],
//     color: colors[colorNum],
//     left: 450
//     },
//     {
//     operator: '/',
//     topNum: 56,
//     botNum: 7,
//     answer: 8,
//     array: [11, 6, 8],
//     color: colors[colorNum],
//     left: 900
//   },
//   {
//   operator: '/',
//   topNum: 63,
//   botNum: 9,
//   answer: 7,
//   array: [7, 9, 13],
//   color: colors[colorNum],
//   left: 250
// },
// {
// operator: '/',
// topNum: 70,
// botNum: 10,
// answer: 7,
// array: [6, 7, 11],
// color: colors[colorNum],
// left: 700
// },
// {
// operator: '/',
// topNum: 64,
// botNum: 8,
// answer: 8,
// array: [9, 12, 8],
// color: colors[colorNum],
// left: 400
// },
// {
// operator: '/',
// topNum: 72,
// botNum: 9,
// answer: 8,
// array: [7, 9, 8],
// color: colors[colorNum],
// left: 400
// },
// {
// operator: '/',
// topNum: 80,
// botNum: 10,
// answer: 8,
// array: [8, 9, 7],
// color: colors[colorNum],
// left: 400
// },
// {
// operator: '/',
// topNum: 88,
// botNum: 11,
// answer: 8,
// array: [9, 8, 11],
// color: colors[colorNum],
// left: 600
// }
// ],
// // index of 2 is hard
//
// [  {
//   operator: '/',
//   topNum: 81,
//   botNum: 9,
//   answer: 9,
//   array: [12, 7, 9],
//   color: colors[colorNum],
//   left: 200
// },
// {
// operator: '/',
// topNum: 90,
// botNum: 10,
// answer: 9,
// array: [8, 9, 11],
// color: colors[colorNum],
// left: 800
// },
// {
// operator: '/',
// topNum: 99,
// botNum: 9,
// answer: 11,
// array: [12, 13, 11],
// color: colors[colorNum],
// left: 300
// },
// {
// operator: '/',
// topNum: 108,
// botNum: 9,
// answer: 12,
// array: [12, 11, 14],
// color: colors[colorNum],
// left: 900
// },
// {
// operator: '/',
// topNum: 100,
// botNum: 10,
// answer: 10,
// array: [11, 10, 15],
// color: colors[colorNum],
// left: 200
// },
// {
// operator: '/',
// topNum: 110,
// botNum: 11,
// answer: 10,
// array: [11, 10, 12],
// color: colors[colorNum],
// left: 520
// },
// {
// operator: '/',
// topNum: 120,
// botNum: 10,
// answer: 12,
// array: [11, 13, 12],
// color: colors[colorNum],
// left: 300
// },
// {
// operator: '/',
// topNum: 130,
// botNum: 13,
// answer: 10,
// array: [11, 14, 10],
// color: colors[colorNum],
// left: 800
// },
// {
// operator: '/',
// topNum: 121,
// botNum: 11,
// answer: 11,
// array: [11, 12, 13],
// color: colors[colorNum],
// left: 900
// },
// {
// operator: '/',
// topNum: 132,
// botNum: 12,
// answer: 11,
// array: [12, 11, 13],
// color: colors[colorNum],
// left: 400
// },
// {
// operator: '/',
// topNum: 143,
// botNum: 11,
// answer: 13,
// array: [14, 15, 13],
// color: colors[colorNum],
// left: 600
// },
// {
// operator: '/',
// topNum: 154,
// botNum: 14,
// answer: 11,
// array: [12, 14, 11],
// color: colors[colorNum],
// left: 600
// },
// {
// operator: '/',
// topNum: 144,
// botNum: 12,
// answer: 12,
// array: [14, 16, 12],
// color: colors[colorNum],
// left: 500
// },
// {
// operator: '/',
// topNum: 152,
// botNum: 12,
// answer: 13,
// array: [15, 13, 14],
// color: colors[colorNum],
// left: 200
// },
// {
// operator: '/',
// topNum: 168,
// botNum: 14,
// answer: 12,
// array: [12, 16, 15],
// color: colors[colorNum],
// left: 900
// },
// {
// operator: '/',
// topNum: 180,
// botNum: 12,
// answer: 15,
// array: [14, 16, 15],
// color: colors[colorNum],
// left: 300
// }
// ]];
