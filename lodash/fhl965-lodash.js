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

  function difference(...ary2) {
    result = []
    var a = []
    for (var i = 1;i < arguments.length;i++){
        a = a.concat(arguments[i])
    }
    var b = {}
    var c = {}
    for (var i = 0;i < arguments[0].length;i++) {
      if (!(arguments[0][i] in b)) {
        b[arguments[0][i]] = 1
      }
      b[arguments[0][i]]++
    }
    for (var i = 0;i < a.length;i++) {
      if (!(a[i] in c)) {
        c[a[i]] = 1
      }
      c[a[i]]++
    }
    for (var key in b) {
      if (!(key in c)) {
          var nkey = Number(key)
        result.push(nkey)
      }
    }
    return result
  }

return {
  chunk,
  compact,
  difference,
}


}()
