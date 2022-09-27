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

  function drop(ary,val = 1) {
    var result = []
    for (var i = val;i < ary.length;i++) {
      result.push(ary[i])
    }
    return result
  }

  function dropRight(ary,val = 1) {
    var result = []
    for (var i = 0;i < ary.length - val;i++) {
      result.push(ary[i])
    }
    return result
  }

  function dropRightWhile(ary,val) {

  }
  function fill(ary,val,start = 0,end = ary.length) {
    for (var i = start;i < end;i++) {
      ary[i] = val
    }
    return ary
  }
  function findIndex(ary,predicate,fromIndex = 0) {
    if (typeof predicate == 'function') {
      for (var i = fromIndex;i < ary.length;i++) {
        var item = ary[i]
        if(predicate(item)) {
          return i
        }
      }
      return -1
    }
    if (Array.isArray(predicate)) {
      for (var i = fromIndex;i < ary.length;i++) {
        if(ary[i][predicate[0]] == predicate[1]) {
          return i
        }
      }
      return -1
    }
    if (typeof predicate == 'object') {
      for (var i = fromIndex;i < ary.length;i++) {
        var item = ary[i]
        var count = 1
        for (var key in item) {
          if (!(key in predicate) || item[key] != predicate[key] ) {
            count = 0
          }
        }
        if (count == 1) {
          return i
        }
      }
      return -1
    }
    if (typeof predicate == 'string') {
      for (var i = fromIndex;i < ary.length;i++) {
        var item = ary[i]
        if(ary[i][predicate] == true) {
          return i
        }
      }
      return -1
    }
  }
  function flatten(array) {
    var result = []
    for (var i = 0;i < array.length;i++) {
      if (!Array.isArray(array[i])) {
        result.push(array[i])
      } else {
        for (var j = 0;j < array[i].length;j++) {
          result.push(array[i][j])
        }
      }
    }
    return result
  }
  function flattenDeep(array) {
    var result = []
    function inFlatten(array) {
      for (var i = 0;i < array.length;i++) {
        if (!Array.isArray(array[i])) {
          result.push(array[i])
        } else {
          inFlatten(array[i])
        }
      }
    }
    inFlatten(array)
    return result
  }



return {
  chunk,
  compact,
  difference,
  drop,
  dropRight,
  fill,
  findIndex,
  flatten,
  flattenDeep,
}


}()
