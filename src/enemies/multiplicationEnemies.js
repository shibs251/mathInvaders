// const multiplicationEnemies = [
// // array at 0 index is very easy
//   [
//   {
//   operator: 'X',
//   topNum: 1,
//   botNum: 1,
//   answer: 1,
//   array: [3, 2, 1],
//   color: colors[colorNum],
//   left: 200
//   // topPos:
//   },
//   {
//     operator: 'X',
//     topNum: 1,
//     botNum: 2,
//     answer: 2,
//     array: [1, 2, 3],
//     color: colors[colorNum],
//     left: 300
//     // topPos:
//     },
//     {
//     operator: 'X',
//     topNum: 1,
//     botNum: 3,
//     answer: 3,
//     array: [3, 2, 1],
//     color: colors[colorNum],
//     left: 700
//     // topPos:
//     },
//     {
//     operator: 'X',
//     topNum: 1,
//     botNum: 4,
//     answer: 4,
//     array: [3, 4, 5],
//     color: colors[colorNum],
//     left: 350
//     // topPos:
//     },
//     {
//     operator: 'X',
//     topNum: 1,
//     botNum: 5,
//     answer: 5,
//     array: [5, 4, 3],
//     color: colors[colorNum],
//     left: 670
//     // topPos:
//     },
//     {
//     operator: 'X',
//     topNum: 2,
//     botNum: 2,
//     answer: 4,
//     array: [3, 4, 5],
//     color: colors[colorNum],
//     left: 180
//     // topPos:
//     },
//     {
//     operator: 'X',
//     topNum: 2,
//     botNum: 3,
//     answer: 6,
//     array: [4, 7, 6],
//     color: colors[colorNum],
//     left: 930
//     // topPos:
//     },
//     {
//     operator: 'X',
//     topNum: 2,
//     botNum: 4,
//     answer: 8,
//     array: [8, 7, 5],
//     color: colors[colorNum],
//     left: 500
//     // topPos:
//     },
//     {
//     operator: 'X',
//     topNum: 2,
//     botNum: 5,
//     answer: 10,
//     array: [12, 10, 8],
//     color: colors[colorNum],
//     left: 200
//     // topPos:
//     },
//   {
//   operator: 'X',
//   topNum: 2,
//   botNum: 6,
//   answer: 12,
//   array: [10, 12, 14],
//   color: colors[colorNum],
//   left: 400
//   },
//   {
//   operator: 'X',
//   topNum: 3,
//   botNum: 3,
//   answer: 9,
//   array: [9, 10, 8],
//   color: colors[colorNum],
//   left: 600
//   },
//   {
//   operator: 'X',
//   topNum: 3,
//   botNum: 4,
//   answer: 12,
//   array: [10, 12, 13],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: 'X',
//   topNum: 3,
//   botNum: 5,
//   answer: 15,
//   array: [14, 16, 15],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: 'X',
//   topNum: 3,
//   botNum: 6,
//   answer: 18,
//   array: [18, 16, 19],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: 'X',
//   topNum: 4,
//   botNum: 4,
//   answer: 16,
//   array: [16, 18, 20],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: 'X',
//   topNum: 4,
//   botNum: 5,
//   answer: 20,
//   array: [18, 20, 24],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: 'X',
//   topNum: 4,
//   botNum: 6,
//   answer: 24,
//   array: [23, 24, 22],
//   color: colors[colorNum],
//   left: 800
//   },
//   {
//   operator: 'X',
//   topNum: 4,
//   botNum: 7,
//   answer: 28,
//   array: [28, 26, 30],
//   color: colors[colorNum],
//   left: 800
//   }
// ],
// // array at index of 1 is medium
// [
//   {
//   operator: 'X',
//   topNum: 5,
//   botNum: 5,
//   answer: 25,
//   array: [25, 28, 30],
//   color: colors[colorNum],
//   left: 200
//   },
//   {
//   operator: 'X',
//   topNum: 5,
//   botNum: 6,
//   answer: 30,
//   array: [25, 30, 34],
//   color: colors[colorNum],
//   left: 400
//   },
//   {
//   operator: 'X',
//   topNum: 5,
//   botNum: 7,
//   answer: 35,
//   array: [30, 40, 35],
//   color: colors[colorNum],
//   left: 600
//   },
//   {
//   operator: 'X',
//   topNum: 5,
//   botNum: 8,
//   answer: 40,
//   array: [40, 35, 45],
//   color: colors[colorNum],
//   left: 900
//   },
//   {
//   operator: 'X',
//   topNum: 6,
//   botNum: 6,
//   answer: 36,
//   array: [31, 36, 39],
//   color: colors[colorNum],
//   left: 300
//   },
//   {
//   operator: 'X',
//   topNum: 6,
//   botNum: 7,
//   answer: 42,
//   array: [36, 45, 42],
//   color: colors[colorNum],
//   left: 700
//   },
//   {
//   operator: 'X',
//   topNum: 6,
//   botNum: 8,
//   answer: 48,
//   array: [48, 42, 53],
//   color: colors[colorNum],
//   left: 180
//   },
//   {
//   operator: 'X',
//   topNum: 6,
//   botNum: 9,
//   answer: 57,
//   array: [49, 57, 53],
//   color: colors[colorNum],
//   left: 660
//   },  {
//   operator: 'X',
//     topNum: 7,
//     botNum: 7,
//     answer: 49,
//     array: [49, 51, 45],
//     color: colors[colorNum],
//     left: 450
//     },
//     {
//     operator: 'X',
//     topNum: 7,
//     botNum: 8,
//     answer: 56,
//     array: [51, 56, 64],
//     color: colors[colorNum],
//     left: 900
//   },
//   {
//   operator: 'X',
//   topNum: 7,
//   botNum: 9,
//   answer: 63,
//   array: [59, 65, 63],
//   color: colors[colorNum],
//   left: 250
// },
// {
// operator: 'X',
// topNum: 7,
// botNum: 10,
// answer: 70,
// array: [70, 74, 68],
// color: colors[colorNum],
// left: 700
// },
// {
// operator: 'X',
// topNum: 8,
// botNum: 8,
// answer: 64,
// array: [62, 64, 66],
// color: colors[colorNum],
// left: 400
// },
// {
// operator: 'X',
// topNum: 8,
// botNum: 9,
// answer: 72,
// array: [68, 74, 72],
// color: colors[colorNum],
// left: 400
// },
// {
// operator: 'X',
// topNum: 8,
// botNum: 10,
// answer: 80,
// array: [80, 83, 88],
// color: colors[colorNum],
// left: 400
// },
// {
// operator: 'X',
// topNum: 8,
// botNum: 11,
// answer: 88,
// array: [86, 88, 92],
// color: colors[colorNum],
// left: 600
// }
// ],
// // index of 2 is hard
//
// [  {
//   operator: 'X',
//   topNum: 9,
//   botNum: 9,
//   answer: 81,
//   array: [81, 72, 79],
//   color: colors[colorNum],
//   left: 200
// },
// {
// operator: 'X',
// topNum: 9,
// botNum: 10,
// answer: 90,
// array: [88, 90, 99],
// color: colors[colorNum],
// left: 800
// },
// {
// operator: 'X',
// topNum: 9,
// botNum: 11,
// answer: 99,
// array: [96, 89, 99],
// color: colors[colorNum],
// left: 300
// },
// {
// operator: 'X',
// topNum: 9,
// botNum: 12,
// answer: 108,
// array: [108, 106, 109],
// color: colors[colorNum],
// left: 900
// },
// {
// operator: 'X',
// topNum: 10,
// botNum: 10,
// answer: 100,
// array: [110, 100, 105],
// color: colors[colorNum],
// left: 200
// },
// {
// operator: 'X',
// topNum: 10,
// botNum: 11,
// answer: 110,
// array: [110, 100, 120],
// color: colors[colorNum],
// left: 520
// },
// {
// operator: 'X',
// topNum: 10,
// botNum: 12,
// answer: 120,
// array: [110, 100, 120],
// color: colors[colorNum],
// left: 300
// },
// {
// operator: 'X',
// topNum: 10,
// botNum: 13,
// answer: 130,
// array: [130, 140, 120],
// color: colors[colorNum],
// left: 800
// },
// {
// operator: 'X',
// topNum: 11,
// botNum: 11,
// answer: 121,
// array: [111, 121, 101],
// color: colors[colorNum],
// left: 900
// },
// {
// operator: 'X',
// topNum: 11,
// botNum: 12,
// answer: 132,
// array: [121, 133, 132],
// color: colors[colorNum],
// left: 400
// },
// {
// operator: 'X',
// topNum: 11,
// botNum: 13,
// answer: 143,
// array: [131, 133, 143],
// color: colors[colorNum],
// left: 600
// },
// {
// operator: 'X',
// topNum: 11,
// botNum: 14,
// answer: 154,
// array: [154, 144, 140],
// color: colors[colorNum],
// left: 600
// },
// {
// operator: 'X',
// topNum: 12,
// botNum: 12,
// answer: 144,
// array: [154, 144, 142],
// color: colors[colorNum],
// left: 500
// },
// {
// operator: 'X',
// topNum: 12,
// botNum: 13,
// answer: 156,
// array: [153, 150, 156],
// color: colors[colorNum],
// left: 200
// },
// {
// operator: 'X',
// topNum: 12,
// botNum: 14,
// answer: 168,
// array: [168, 160, 165],
// color: colors[colorNum],
// left: 900
// },
// {
// operator: 'X',
// topNum: 12,
// botNum: 15,
// answer: 180,
// array: [170, 187, 180],
// color: colors[colorNum],
// left: 300
// }
// ]];
