var fhl965 = function() {


  function chunk(ary,val) {
    var result = []
    var j = 0
    for (var i = 0;i <ary.length;i++) {
      if (i % val == 0) {
        result[j] = []
      }
      result[j].push(ary[i])
      if ((i + 1) % val == 0) {
        j++
      }
    }
    return result
  }

  function compact(ary) {
    var result = []
    for (var i = 0;i < ary.length;i++) {
      if (ary[i] != 'false' && ary[i] != null && ary[i] == ary[i] && ary[i] != undefined && ary[i] != "" && ary[i] != 0) {
        result.push(ary[i])
      }

    }
    return result
  }








}()
