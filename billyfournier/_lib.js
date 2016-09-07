var _ = {
   map: function(arr,callback) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++){
      arr2.push(callback(arr[i]);
    }
    return arr2;
   },

   reduce: function(arr,callback) {
      var result = 0;
      for (var i = 0; i < arr.length; i++){
        result = callback(result, arr[i]);
      }
      return result;
   },

   find: function(arr,callback) {
     for (var i = 0; i < arr.length; i++){
       if (callback(arr[i])) { return arr[i];}
     }
   },

   filter: function(arr,callback) {
     var tmp_arr = [];
     for (var i = 0; i < arr.length; i++){
       if (callback(arr[i])) { tmp_arr.push(arr[i]);}
     }
     return tmp_arr;
   },

   reject: function(arr,callback) {
     var tmp_arr = [];
     for (var i = 0; i < arr.length; i++){
       if ( !callback(arr[i]) ) { tmp_arr.push(arr[i]); }
     }
     return tmp_arr;
   }
 }
