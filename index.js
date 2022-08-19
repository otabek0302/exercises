     //Array
     let arr = [1, 2, 0, 4, 5, 9]

     //Vars
     let min = document.querySelector('.min');
     let max = document.querySelector('.max');
     let middleSum = document.querySelector('.middleSum');


     //////////////////////////////////////////////////////////////////////
     let maxInx = arr.indexOf(Math.max(...arr));
     let minInx = arr.indexOf(Math.min(...arr))
     let middle = arr.slice(minInx + 1, maxInx);
     let midSum = middle.reduce((a, b) => a * b);
     middleSum.innerHTML = midSum;
     //////////////////////////////////////////////////////////////////////
     arr.sort((a, b) => a - b)
     min.innerHTML = arr[0];
     max.innerHTML = arr[arr.length - 1];
     //////////////////////////////////////////////////////////////////////
     //secound method
     // arr.sort((a, b) => a.price - b.price)
     // max = arr[arr.length - 1];
     // min = arr[0];



     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     let val = document.querySelector('.ipt');
     let btn = document.querySelector('#btn');
     btn.onclick = () => {
          function innerPattern(n) {
               var i, j, k = n;
               // First Part
               for (i = k; i >= 1; i--) {
                    for (j = k; j >= 1; j--) {
                         if (j > i)
                              document.write(j + " ");
                         else
                              document.write(i + " ");
                    }
                    for (j = 2; j <= k; j++) {
                         if (j > i)
                              document.write(j + " ");
                         else
                              document.write(i + " ");
                    }
                    document.write("<br>");
               }
               // Second Part
               for (i = 2; i <= k; i++) {
                    for (j = k; j >= 1; j--) {
                         if (j > i)
                              document.write(j + " ");
                         else
                              document.write(i + " ");
                    }
                    for (j = 2; j <= k; j++) {
                         if (j > i)
                              document.write(j + " ");
                         else
                              document.write(i + " ");
                    }
                    document.write("<br>");
               }
          }
          innerPattern(val.value);
     }