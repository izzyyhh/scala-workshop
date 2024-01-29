(function(){
'use strict';
var $linkingInfo = Object.freeze({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.15.0",
  "fileLevelThis": this
});
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)))
  };
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = {};
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, {
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      });
      i = ((i + 1) | 0)
    };
    return descriptors
  })
})());
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))))
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)))
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1)
  };
  $throwClassCastException(arg0, arg1)
}
function $throwArrayIndexOutOFBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))))
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))))
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException())
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException())
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException()
  };
  return arg0
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf()
      } else {
        return $d_jl_Double.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float"
      } else {
        return "java.lang.Double"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return $throwNullPointerException()
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0)
  } else {
    return instance.codePointAt__I__I(x0)
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0)
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0)
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0)
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0)
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0)
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0)
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance))
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0)
  } else {
    return instance.repeat__I__T(x0)
  }
}
function $dp_replaceAll__T__T__T(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__replaceAll__T__T__T(instance, x0, x1)
  } else {
    return instance.replaceAll__T__T__T(x0, x1)
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_StringIndexOutOfBoundsException(arg1))
  } else {
    return r
  }
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOFBoundsException(null)
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4)
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4)
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)])
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4)
    } else {
      $throwArrayStoreException(null)
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4)
  } else {
    $throwArrayStoreException(null)
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"))
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"))
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"))
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"))
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"))
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"))
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"))
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"))
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"))
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"))
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException()
      };
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOFBoundsException(i)
    };
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v)
    };
    this.u[i] = v
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
function $s_LFP101Lecture__main__AT__V(args) {
  $m_LFP101Lecture$().main__AT__V(args)
}
/** @constructor */
function $c_LFP101Lecture$() {
  this.LFP101Lecture$__f_overview = null;
  this.LFP101Lecture$__f_introduction = null;
  this.LFP101Lecture$__f_immutability = null;
  this.LFP101Lecture$__f_adts = null;
  this.LFP101Lecture$__f_pureFunctions = null;
  this.LFP101Lecture$__f_referentialTransparency = null;
  this.LFP101Lecture$__f_recursion = null;
  this.LFP101Lecture$__f_composition = null;
  this.LFP101Lecture$__f_summary = null;
  this.LFP101Lecture$__f_Show = null;
  $n_LFP101Lecture$ = this;
  var $x_12 = $m_LPresentationUtil$();
  var $x_11 = $m_LPresentationUtil$();
  var $x_10 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Functional Programming 101"))];
  var array$1 = [$n($x_10).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h1", new $c_sjsr_WrappedVarArgs(array))];
  var $x_9 = $n($x_11).chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$1));
  var $x_8 = $m_LPresentationUtil$();
  var $x_7 = $m_LPresentationUtil$Enumeration$();
  var $x_6 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("Introduction");
  var array$2 = [$m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("Immutability"), $m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("Algebraic Data Types"), $m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("Pure Functions"), $m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("Referential Transparency"), $m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("Recursion"), $m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("Composability")];
  var array$3 = [$n($x_7).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_6, new $c_sjsr_WrappedVarArgs(array$2))];
  var $x_5 = $n($x_8).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("What we will learn in this lecture", new $c_sjsr_WrappedVarArgs(array$3));
  var $x_4 = $m_LPresentationUtil$();
  var $x_3 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$4 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("You have a question?"))];
  var $x_2 = $n($x_3).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$4));
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$5 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Ask it right away!"))];
  var array$6 = [$x_2, $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$5))];
  var array$7 = [$x_9, $x_5, $n($x_4).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$6))];
  this.LFP101Lecture$__f_overview = $n($x_12).chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$7));
  var $x_28 = $m_LPresentationUtil$();
  var $x_27 = $m_LPresentationUtil$();
  var $x_26 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$8 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Introduction"))];
  var array$9 = [$n($x_26).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$8))];
  var $x_25 = $n($x_27).chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$9));
  var $x_24 = $m_LPresentationUtil$();
  var $x_23 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$10 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("FP is a declarative programming paradigm which tries to structure code as expressions and declarations. Thus, we end up with pure functions, no side-effects or shared mutable state."))];
  var array$11 = [$n($x_23).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$10))];
  var $x_22 = $n($x_24).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Definition", new $c_sjsr_WrappedVarArgs(array$11));
  var $x_21 = $m_LPresentationUtil$();
  var $x_20 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$12 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("The basic ideas stem from Lambda Calculus which was discovered by Alonzo Church in the 1930s."))];
  var array$13 = [$n($x_20).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$12))];
  var $x_19 = $n($x_21).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Who is it coming from", new $c_sjsr_WrappedVarArgs(array$13));
  var $x_18 = $m_LPresentationUtil$();
  var $x_17 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$14 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("We will concentrate on statically typed Functional programming fulfilling all properties."))];
  var array$15 = [$n($x_17).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$14))];
  var $x_16 = $n($x_18).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("What we will discuss", new $c_sjsr_WrappedVarArgs(array$15));
  var $x_15 = $m_LPresentationUtil$();
  var $x_14 = $m_LPresentationUtil$Enumeration$();
  var $x_13 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("Other languages/people might just choose a subset.");
  var array$16 = [$m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("Erlang: Dynamically typed + functional."), $m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("Java: Statically typed + object oriented.")];
  var array$17 = [$n($x_14).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_13, new $c_sjsr_WrappedVarArgs(array$16))];
  var array$18 = [$x_25, $x_22, $x_19, $x_16, $n($x_15).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("What other people/languages do", new $c_sjsr_WrappedVarArgs(array$17))];
  this.LFP101Lecture$__f_introduction = $n($x_28).chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$18));
  var $x_48 = $m_LPresentationUtil$();
  var $x_47 = $m_LPresentationUtil$();
  var $x_46 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$19 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Immutability"))];
  var array$20 = [$n($x_46).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$19))];
  var $x_45 = $n($x_47).chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$20));
  var $x_44 = $m_LPresentationUtil$();
  var $x_43 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$21 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Data never changes."))];
  var array$22 = [$n($x_43).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$21))];
  var $x_42 = $n($x_44).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Immutability: definition", new $c_sjsr_WrappedVarArgs(array$22));
  var $x_41 = $m_LPresentationUtil$();
  var $x_40 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$23 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("We already know it!"))];
  var $x_39 = $n($x_40).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$23));
  var this$113 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$113);
  var array$24 = [$x_39, new $c_Ljapgolly_scalajs_react_vdom_TagOf(t, $m_s_package$().s_package$__f_Nil), $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // you cannot reassign to `a`\n        val a = 5\n\n\n\n        // you cannot mutate fields in a clase class instance\n        case class Person(name: String, age: Int)\n\n        val gandalf = Person(\"Gandalf\", 2019)\n\n        gandalf.name = \"Gandolf\" // not allowed\n      ")];
  var $x_38 = $n($x_41).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Data never changes", new $c_sjsr_WrappedVarArgs(array$24));
  var $x_37 = $m_LPresentationUtil$();
  var $x_36 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$25 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Once created your data stays the same until destruction"))];
  var array$26 = [$n($x_36).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$25))];
  var $x_35 = $n($x_37).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Data never changes", new $c_sjsr_WrappedVarArgs(array$26));
  var $x_34 = $m_LPresentationUtil$();
  var $x_33 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$27 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("What's the benefit?"))];
  var $x_32 = $n($x_33).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$27));
  var this$135 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$1 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$135);
  var $x_31 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$1, $m_s_package$().s_package$__f_Nil);
  var $x_30 = $m_LPresentationUtil$Enumeration$();
  var $x_29 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("state of your values known at all times");
  var array$28 = [$m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("no race-conditions in a concurrent scenario "), $m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("simplifies reasoning about values in your code")];
  var array$29 = [$x_32, $x_31, $n($x_30).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_29, new $c_sjsr_WrappedVarArgs(array$28))];
  var array$30 = [$x_45, $x_42, $x_38, $x_35, $n($x_34).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$29))];
  this.LFP101Lecture$__f_immutability = $n($x_48).chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$30));
  var $x_67 = $m_LPresentationUtil$();
  var $x_66 = $m_LPresentationUtil$();
  var $x_65 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$31 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Algebraic Data Types"))];
  var array$32 = [$n($x_65).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$31))];
  var $x_64 = $n($x_66).chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$32));
  var $x_63 = $m_LPresentationUtil$();
  var $x_62 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$33 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("They are compositions of types and resemble algebraic operations."))];
  var array$34 = [$n($x_62).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$33))];
  var $x_61 = $n($x_63).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("ADT: definition", new $c_sjsr_WrappedVarArgs(array$34));
  var $x_60 = $m_LPresentationUtil$();
  var $x_59 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$35 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Sum Type: value types are grouped into specific classes."))];
  var $x_58 = $n($x_59).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$35));
  var this$173 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$2 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$173);
  var array$36 = [$x_58, new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$2, $m_s_package$().s_package$__f_Nil), $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // exists a value or not\n        sealed trait Animal\n\n        case object Mammal extends Animal\n        case object Bird   extends Animal\n        case object Fish   extends Animal\n      ")];
  var $x_57 = $n($x_60).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("ADT: Sum types", new $c_sjsr_WrappedVarArgs(array$36));
  var $x_56 = $m_LPresentationUtil$();
  var $x_55 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$37 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Product Type: a single class combining multiple value types"))];
  var $x_54 = $n($x_55).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$37));
  var this$185 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$3 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$185);
  var array$38 = [$x_54, new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$3, $m_s_package$().s_package$__f_Nil), $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        case class Pair(a: Int, b: String)\n      ")];
  var $x_53 = $n($x_56).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("ADT: sum types", new $c_sjsr_WrappedVarArgs(array$38));
  var $x_52 = $m_LPresentationUtil$();
  var array$39 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // already know this construct\n        // Person is a sum type\n        sealed trait Person\n\n        // each class is a product type\n        case class Wizard(name: String, power: String) extends Person\n        case class Elf(name: String, age: Int)         extends Person\n        case class Dwarf(name: String, height: Int)    extends Person\n      ")];
  var $x_51 = $n($x_52).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("ADT: mix and match", new $c_sjsr_WrappedVarArgs(array$39));
  var $x_50 = $m_LPresentationUtil$();
  var $x_49 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$40 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("We already know these constructs. Now we have a name for them."))];
  var array$41 = [$n($x_49).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$40))];
  var array$42 = [$x_64, $x_61, $x_57, $x_53, $x_51, $n($x_50).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("ADT", new $c_sjsr_WrappedVarArgs(array$41))];
  this.LFP101Lecture$__f_adts = $n($x_67).chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$42));
  var $x_126 = $m_LPresentationUtil$();
  var $x_125 = $m_LPresentationUtil$();
  var $x_124 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$43 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Pure Functions"))];
  var array$44 = [$n($x_124).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$43))];
  var $x_123 = $n($x_125).chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$44));
  var $x_122 = $m_LPresentationUtil$();
  var $x_121 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$45 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("A function is:"))];
  var $x_120 = $n($x_121).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$45));
  var $x_119 = $m_LPresentationUtil$Enumeration$();
  var $x_118 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("total: returns an output for every input");
  var array$46 = [$m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("deterministic: returns the same output for the same input"), $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("pure: only computes the output, doesn't affect the \"real world\"")];
  var array$47 = [$x_120, $n($x_119).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_118, new $c_sjsr_WrappedVarArgs(array$46))];
  var $x_117 = $n($x_122).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Pure Functions: definition", new $c_sjsr_WrappedVarArgs(array$47));
  var $x_116 = $m_LPresentationUtil$();
  var $x_115 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$48 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("math", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("$f : a \\rightarrow b$"))];
  var array$49 = [$n($x_115).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$48))];
  var $x_114 = $n($x_116).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Pure Functions: in a mathematical sense", new $c_sjsr_WrappedVarArgs(array$49));
  var $x_113 = $m_LPresentationUtil$();
  var array$50 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def plus(a: Int, b: Int): Int = a + b\n\n        // works for every input and always returns the same output\n        plus(1, 2) == 3\n      ")];
  var $x_112 = $n($x_113).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Pure Functions", new $c_sjsr_WrappedVarArgs(array$50));
  var $x_111 = $m_LPresentationUtil$();
  var $x_110 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$51 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Impure Functions"))];
  var array$52 = [$n($x_110).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$51))];
  var $x_109 = $n($x_111).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$52));
  var $x_108 = $m_LPresentationUtil$();
  var array$53 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def divide(a: Int, b: Int): Int = a / b\n\n        val result = if (divide(1, 0) > 1) \"more than 1\" else \"at most 1\"\n\n        // What is the result?\n        println(result)\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("// No result, we get an exception")];
  var $x_107 = $n($x_108).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Impure Functions: exceptions", new $c_sjsr_WrappedVarArgs(array$53));
  var $x_106 = $m_LPresentationUtil$();
  var $x_105 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$54 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Exceptions"))];
  var array$55 = [$n($x_105).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$54))];
  var $x_104 = $n($x_106).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$55));
  var $x_103 = $m_LPresentationUtil$();
  var $x_102 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$56 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("A Java construct which bypasses your function applications and crashes a program if not handled."))];
  var $x_101 = $n($x_102).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$56));
  var this$273 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$4 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$273);
  var $x_100 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$4, $m_s_package$().s_package$__f_Nil);
  var $x_99 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$57 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("fragment fade-in", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("We try to avoid them at all costs."))];
  var array$58 = [$x_101, $x_100, $n($x_99).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$57))];
  var $x_98 = $n($x_103).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Exceptions", new $c_sjsr_WrappedVarArgs(array$58));
  var $x_97 = $m_LPresentationUtil$();
  var array$59 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def question(q: String): Int = q match {\n          case \"answer to everything\" => 42\n        }\n\n        // What is the result?\n        question(\"is the sun shining\")\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("// No result, we get an exception")];
  var $x_96 = $n($x_97).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Impure Functions: partial matching", new $c_sjsr_WrappedVarArgs(array$59));
  var $x_95 = $m_LPresentationUtil$();
  var array$60 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // non-determinism\n        def question(q: String): Int = Random.nextInt()\n\n        question(\"what is the answer to everything\") == 42\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        question(\"what is the answer to everything\") == 136\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        question(\"what is the answer to everything\") == 5310\n      ")];
  var $x_94 = $n($x_95).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Impure Functions: non-determinism", new $c_sjsr_WrappedVarArgs(array$60));
  var $x_93 = $m_LPresentationUtil$();
  var array$61 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // reads file from disk\n        def readFile(path: String): Either[Exception, File] = ???\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // it might return a file handle\n        readFile(\"/usr/people.cvs\") == Right(File(...))\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // or fail, e.g. file is missing, not enough rights, ...\n        readFile(\"/usr/people.cvs\") == Left(FileNotFoundException)\n      ")];
  var $x_92 = $n($x_93).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Impure Functions: interacts with \"the real world\"", new $c_sjsr_WrappedVarArgs(array$61));
  var $x_91 = $m_LPresentationUtil$();
  var array$62 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // writes file to disk\n        def writeFile(file: File): Either[Exception, Unit] = ???\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // changes the state of your machine aka real world\n        val file = new File(...)\n        writeFile(file)\n      ")];
  var $x_90 = $n($x_91).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Impure Functions: interacts with \"the real world\"", new $c_sjsr_WrappedVarArgs(array$62));
  var $x_89 = $m_LPresentationUtil$();
  var array$63 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // even logging is changing the world\n        def log(msg: String): Unit = println(msg)\n\n        log(\"hello world\")\n      ")];
  var $x_88 = $n($x_89).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Impure Functions: interacts with \"the real world\"", new $c_sjsr_WrappedVarArgs(array$63));
  var $x_87 = $m_LPresentationUtil$();
  var $x_86 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$64 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Application Input/Output (IO) is not allowed. How to write useful programs then?"))];
  var $x_85 = $n($x_86).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$64));
  var this$308 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$5 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$308);
  var $x_84 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$5, $m_s_package$().s_package$__f_Nil);
  var $x_83 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$65 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("fragment fade-in", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("We will discuss that later!"))];
  var array$66 = [$x_85, $x_84, $n($x_83).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$65))];
  var $x_82 = $n($x_87).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Impure Functions: effect \"the real world\"", new $c_sjsr_WrappedVarArgs(array$66));
  var $x_81 = $m_LPresentationUtil$();
  var $x_80 = $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def multiply(a: Int, b: Int): Int = a * b\n      ");
  var $x_79 = $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // yes\n      ");
  var this$321 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$6 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$321);
  var array$67 = [$x_80, $x_79, new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$6, $m_s_package$().s_package$__f_Nil), $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def concat(a: String, b: String): String = {\n          println(a)\n          a + b\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // no -> we mutate the OS by writing to System Out\n      ")];
  var $x_78 = $n($x_81).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Is this function pure?", new $c_sjsr_WrappedVarArgs(array$67));
  var $x_77 = $m_LPresentationUtil$();
  var $x_76 = $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def whatNumber(a: Int): String = a > 100 match {\n          case true => \"large one\"\n        }\n      ");
  var $x_75 = $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // no -> partial function, only handles the `true` case\n      ");
  var this$326 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$7 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$326);
  var array$68 = [$x_76, $x_75, new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$7, $m_s_package$().s_package$__f_Nil), $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def increase(a: Int): Int = {\n          // current time in milliseconds\n          val current = System.currentTimeMillis\n\n          a + current\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // no -> result depends on the time we call the function\n      ")];
  var $x_74 = $n($x_77).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Is this function pure?", new $c_sjsr_WrappedVarArgs(array$68));
  var $x_73 = $m_LPresentationUtil$();
  var $x_72 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$69 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("What's the benefit of pure functions?"))];
  var $x_71 = $n($x_72).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$69));
  var this$338 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$8 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$338);
  var $x_70 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$8, $m_s_package$().s_package$__f_Nil);
  var $x_69 = $m_LPresentationUtil$Enumeration$();
  var $x_68 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("makes it easy to reason about code");
  var array$70 = [$m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("separates business logic from real world interaction")];
  var array$71 = [$x_71, $x_70, $n($x_69).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_68, new $c_sjsr_WrappedVarArgs(array$70))];
  var array$72 = [$x_123, $x_117, $x_114, $x_112, $x_109, $x_107, $x_104, $x_98, $x_96, $x_94, $x_92, $x_90, $x_88, $x_82, $x_78, $x_74, $n($x_73).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$71))];
  this.LFP101Lecture$__f_pureFunctions = $n($x_126).chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$72));
  var $x_156 = $m_LPresentationUtil$();
  var $x_155 = $m_LPresentationUtil$();
  var $x_154 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$73 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Referential Transparency"))];
  var array$74 = [$n($x_154).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$73))];
  var $x_153 = $n($x_155).chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$74));
  var $x_152 = $m_LPresentationUtil$();
  var $x_151 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$75 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("An expression is referential transparent if you can replace it by its evaluation result without changing the programs behavior. Otherwise, it is referential opaque."))];
  var array$76 = [$n($x_151).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$75))];
  var $x_150 = $n($x_152).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Referential Transparency: definition", new $c_sjsr_WrappedVarArgs(array$76));
  var $x_149 = $m_LPresentationUtil$();
  var $x_148 = $m_LPresentationUtil$Enumeration$();
  var $x_147 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("no side-effects");
  var array$77 = [$m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("same output for the same input"), $m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("execution order doesn't matter")];
  var array$78 = [$n($x_148).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_147, new $c_sjsr_WrappedVarArgs(array$77))];
  var $x_146 = $n($x_149).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Referential Transparency", new $c_sjsr_WrappedVarArgs(array$78));
  var $x_145 = $m_LPresentationUtil$();
  var $x_144 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$79 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("All pure functions are referential transparent"))];
  var array$80 = [$n($x_144).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$79))];
  var $x_143 = $n($x_145).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Referential Transparency: pure functions", new $c_sjsr_WrappedVarArgs(array$80));
  var $x_142 = $m_LPresentationUtil$();
  var $x_141 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$81 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Pure functions can be replaced by their return values"))];
  var array$82 = [$n($x_141).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$81)), $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def plus(a: Int, b: Int): Int = a + b\n        def multiply(a: Int, b: Int): Int = a * b\n\n        plus(10, multiply(plus(1, 2), 5))\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Same as\n        plus(10, multiply(3         , 5))\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Same as\n        plus(10, 15                    )\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Same as\n        25\n      ")];
  var $x_140 = $n($x_142).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Referential Transparency: pure functions", new $c_sjsr_WrappedVarArgs(array$82));
  var $x_139 = $m_LPresentationUtil$();
  var $x_138 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$83 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Execution order does not matter"))];
  var array$84 = [$n($x_138).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$83)), $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def double(x: Int): Int = x * 2\n        def addFive(x: Int): Int = x + 5\n\n        // It doesn't matter if `double` or `afterFive` is executed first\n        double(3) + addFive(3)  // 6 + 8 = 14\n         ")];
  var $x_137 = $n($x_139).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Referential Transparency: execution order", new $c_sjsr_WrappedVarArgs(array$84));
  var $x_136 = $m_LPresentationUtil$();
  var $x_135 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$85 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("We already know what effectful and non-deterministic functions look like"))];
  var $x_134 = $n($x_135).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$85));
  var this$412 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$9 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$412);
  var $x_133 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$9, $m_s_package$().s_package$__f_Nil);
  var $x_132 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$86 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("But what is with the execution order?"))];
  var array$87 = [$x_134, $x_133, $n($x_132).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$86))];
  var $x_131 = $n($x_136).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Referential Opaque", new $c_sjsr_WrappedVarArgs(array$87));
  var $x_130 = $m_LPresentationUtil$();
  var array$88 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        var globalCounter = 0\n        def incrementCounter(): Unit = globalCounter += 1\n        def multiplyCounterByTwo(): Unit = globalCounter *= 2\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        globalCounter = 0\n        incrementCounter()\n        multiplyCounterByTwo()\n        // What is the value of `globalCounter`?\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        globalCounter == 2\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        globalCounter = 0\n        multiplyCounterByTwo()\n        incrementCounter()\n        // What is the value of `globalCounter`?\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        globalCounter == 1\n      ")];
  var $x_129 = $n($x_130).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Referencial Opaque: variables and execution order", new $c_sjsr_WrappedVarArgs(array$88));
  var $x_128 = $m_LPresentationUtil$();
  var $x_127 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$89 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Code smells for impure functions"))];
  var array$90 = [$n($x_127).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$89)), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Functions without arguments\n        def now(): Long = System.currentTimeMillis\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Functions without return type\n        def log(msg: String): Unit = println(msg)\n      ")];
  var array$91 = [$x_153, $x_150, $x_146, $x_143, $x_140, $x_137, $x_131, $x_129, $n($x_128).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Referential Opaque: code smells", new $c_sjsr_WrappedVarArgs(array$90))];
  this.LFP101Lecture$__f_referentialTransparency = $n($x_156).chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$91));
  var $x_333 = $m_LPresentationUtil$();
  var $x_332 = $m_LPresentationUtil$();
  var $x_331 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$92 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Recursion"))];
  var array$93 = [$n($x_331).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$92))];
  var $x_330 = $n($x_332).chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$93));
  var $x_329 = $m_LPresentationUtil$();
  var $x_328 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$94 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Solving a problem where the solution depends on solutions to smaller instances of the same problem."))];
  var array$95 = [$n($x_328).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$94))];
  var $x_327 = $n($x_329).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: definition", new $c_sjsr_WrappedVarArgs(array$95));
  var $x_326 = $m_LPresentationUtil$();
  var $x_325 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$96 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Data Types"))];
  var array$97 = [$n($x_325).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$96))];
  var $x_324 = $n($x_326).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$97));
  var $x_323 = $m_LPresentationUtil$();
  var $x_322 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$98 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Definition of the data structures depends on itself."))];
  var array$99 = [$n($x_322).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$98))];
  var $x_321 = $n($x_323).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: data types", new $c_sjsr_WrappedVarArgs(array$99));
  var $x_320 = $m_LPresentationUtil$();
  var array$100 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // linked list of Ints\n        sealed trait IntList\n\n        // a single list element with its Int value and the remaining list\n        // this class of IntList is defined by using IntList (tail)\n        case class Cons(head: Int, tail: IntList) extends IntList\n\n        // end of the list\n        case object Nil extends IntList\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n\n        val list = Cons(0, Cons(1, Cons(2, Nil)))\n      ")];
  var $x_319 = $n($x_320).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: List", new $c_sjsr_WrappedVarArgs(array$100));
  var $x_318 = $m_LPresentationUtil$();
  var $x_317 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  var this$483 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var $x_316 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__img__T(this$483);
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up);
  $n($m_Ljapgolly_scalajs_react_vdom_PackageBase$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  var this$486 = new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("alt");
  var t$10 = $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString;
  var array$101 = [$m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().apply$extension__F2__T__O__Ljapgolly_scalajs_react_vdom_TagMod(t$10, this$486.Ljapgolly_scalajs_react_vdom_Attr__f_attrName, "Linked List"), $n($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up).Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_src).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("./img/list.svg", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString)];
  var array$102 = [$n($x_317).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_316, new $c_sjsr_WrappedVarArgs(array$101))];
  var $x_315 = $n($x_318).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: List", new $c_sjsr_WrappedVarArgs(array$102));
  var $x_314 = $m_LPresentationUtil$();
  var $x_313 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$103 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Single Direct Recursion"))];
  var array$104 = [$n($x_313).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$103))];
  var $x_312 = $n($x_314).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: direct single", new $c_sjsr_WrappedVarArgs(array$104));
  var $x_311 = $m_LPresentationUtil$();
  var $x_310 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$105 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Do we have to write list types for every data type?"))];
  var $x_309 = $n($x_310).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$105));
  var this$510 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$11 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$510);
  var $x_308 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$11, $m_s_package$().s_package$__f_Nil);
  var $x_307 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$106 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("fragment fade-in", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Fortunately no, we can use type parameters!"))];
  var array$107 = [$x_309, $x_308, $n($x_307).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$106))];
  var $x_306 = $n($x_311).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$107));
  var $x_305 = $m_LPresentationUtil$();
  var array$108 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        sealed trait List[A]\n        //                ^\n        //                '\n        //           type parameter\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        case class Cons[A](head: A, tail: List[A]) extends List[A]\n        //              ^        ^             ^                ^\n        //              '        '----         '----------------|\n        //         type parameter    '                          |\n        //                          fixes type of our value     |\n        //                                                      '\n        //                                    fixes type of remaing/whole list\n\n        case class Nil[A]() extends List[A]\n      ")];
  var $x_304 = $n($x_305).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Type Parameter: ADT", new $c_sjsr_WrappedVarArgs(array$108));
  var $x_303 = $m_LPresentationUtil$();
  var array$109 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        val intList  = Cons[Int](0, Cons[Int](1, Cons[Int](2, Nil[Int]())))\n        val charList = Cons[Char]('a', Cons[Char]('b', Nil[Char]()))\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Scala can infer `A` by looking at the values\n\n        val intList  = Cons(0, Cons(1, Cons(2, Nil())))\n        // Scala knows that `0: Int`\n        //   '- List[A] ~ List[Int]\n\n        val charList = Cons('a', Cons('b', Nil()))\n        // Scala knows that `'a': Char`\n        //   '- List[A] ~ List[Char]\n      ")];
  var $x_302 = $n($x_303).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Type Parameter: ADT", new $c_sjsr_WrappedVarArgs(array$109));
  var $x_301 = $m_LPresentationUtil$();
  var $x_300 = $m_LPresentationUtil$Enumeration$();
  var $x_299 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("also called generics");
  var $x_298 = $m_LPresentationUtil$Enumeration$Item$();
  var $x_297 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$();
  $m_Ljapgolly_scalajs_react_vdom_VdomNode$();
  var $x_296 = new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("can be fixed by hand: ");
  var $x_295 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$110 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Cons[Int](0, Nil[Int]): List[Int]"))];
  var array$111 = [$x_296, $n($x_295).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("code", new $c_sjsr_WrappedVarArgs(array$110))];
  var $x_294 = $n($x_298).fadeIn__Ljapgolly_scalajs_react_vdom_TagOf__Ljapgolly_scalajs_react_vdom_TagOf($n($x_297).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$111)));
  var $x_293 = $m_LPresentationUtil$Enumeration$Item$();
  var $x_292 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$();
  $m_Ljapgolly_scalajs_react_vdom_VdomNode$();
  var $x_291 = new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("or inferred by Scala: ");
  var $x_290 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$112 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Cons(0, Nil): List[Int]"))];
  var array$113 = [$x_291, $n($x_290).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("code", new $c_sjsr_WrappedVarArgs(array$112))];
  var array$114 = [$x_294, $n($x_293).fadeIn__Ljapgolly_scalajs_react_vdom_TagOf__Ljapgolly_scalajs_react_vdom_TagOf($n($x_292).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$113)))];
  var array$115 = [$n($x_300).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_299, new $c_sjsr_WrappedVarArgs(array$114))];
  var $x_289 = $n($x_301).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Type Parameter: ADT", new $c_sjsr_WrappedVarArgs(array$115));
  var $x_288 = $m_LPresentationUtil$();
  var array$116 = [$m_LPresentationUtil$().bash__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        sbt> project fp101-exercises\n        sbt> Test / testOnly exercise2.RecursiveDataSpec\n      ")];
  var $x_287 = $n($x_288).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Let's Code: RecursiveData", new $c_sjsr_WrappedVarArgs(array$116));
  var $x_286 = $m_LPresentationUtil$();
  var $x_285 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$117 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Now we have recursive data structures"))];
  var $x_284 = $n($x_285).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$117));
  var this$573 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$12 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$573);
  var $x_283 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$12, $m_s_package$().s_package$__f_Nil);
  var $x_282 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$118 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("But how do we process them?"))];
  var array$119 = [$x_284, $x_283, $n($x_282).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$118))];
  var $x_281 = $n($x_286).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$119));
  var $x_280 = $m_LPresentationUtil$();
  var $x_279 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$120 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Functions"))];
  var array$121 = [$n($x_279).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$120))];
  var $x_278 = $n($x_280).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$121));
  var $x_277 = $m_LPresentationUtil$();
  var $x_276 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$122 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Functions which call themselves."))];
  var array$123 = [$n($x_276).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$122))];
  var $x_275 = $n($x_277).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: functions", new $c_sjsr_WrappedVarArgs(array$123));
  var $x_274 = $m_LPresentationUtil$();
  var array$124 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        //factorial\n        def fact(n: Int): Int = n match {\n          case 1 => 1\n          case _ => n * fact(n - 1)\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n          fact(3)\n        //  '- 3 * fact(2)\n        //           '- 2 * fact(1)\n        //                    '- 1\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        fact(3) == 3 * fact(2)\n                == 3 * 2 * fact(1)\n                == 3 * 2 * 1\n                == 6\n      ")];
  var $x_273 = $n($x_274).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: example", new $c_sjsr_WrappedVarArgs(array$124));
  var $x_272 = $m_LPresentationUtil$();
  var array$125 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def length(list: List[Int]): Int = list match {\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // final state\n          case Nil()         => 0\n\n        // How to recursively calculate length for non-empty lists?\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // single direct recursive step (length calls itself)\n          case Cons(_, tail) => 1 + length(tail)\n        }\n      ")];
  var $x_271 = $n($x_272).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: direct single", new $c_sjsr_WrappedVarArgs(array$125));
  var $x_270 = $m_LPresentationUtil$();
  var array$126 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        val list = Cons(1, Cons(2, Nil()))\n\n        length(list) == 1 + length(Cons(2, Nil()))\n                     == 1 + 1 + length(Nil())\n                     == 1 + 1 + 0\n                     == 2\n      ")];
  var $x_269 = $n($x_270).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: direct single", new $c_sjsr_WrappedVarArgs(array$126));
  var $x_268 = $m_LPresentationUtil$();
  var array$127 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        /* Tree: either a leaf with a value or a node consisting of a\n         *        left and right tree\n         */\n\n        def size(tree: Tree[Int]): Int = tree match {\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // final state\n          case Leaf(_)           => 1\n\n        // How to recursively calculate length for non-empty lists?\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // multiple direct recusive steps (branches into two recursice calls)\n          case Node(left, right) => size(left) + size(right)\n        }\n      ")];
  var $x_267 = $n($x_268).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: Tree", new $c_sjsr_WrappedVarArgs(array$127));
  var $x_266 = $m_LPresentationUtil$();
  var array$128 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        val tree = Node(Node(Leaf(1), Leaf(2)), Leaf(3))\n\n        size(tree) == size(Node(Leaf(1), Leaf(2))) + size(Leaf(3))\n                   == size(Leaf(1)) + size(Leaf(2)) + 1\n                   == 1 + 1 + 1\n                   == 3\n      ")];
  var $x_265 = $n($x_266).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: Tree", new $c_sjsr_WrappedVarArgs(array$128));
  var $x_264 = $m_LPresentationUtil$();
  var $x_263 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$129 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Multi Direct Recursion"))];
  var array$130 = [$n($x_263).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$129))];
  var $x_262 = $n($x_264).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: direct multi", new $c_sjsr_WrappedVarArgs(array$130));
  var $x_261 = $m_LPresentationUtil$();
  var array$131 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def even(n: Int): Boolean =\n          if (n == 0) true\n          else        odd(n - 1)\n\n        def odd(n: Int): Boolean =\n          if (n == 0) false\n          else        even(n - 1)\n      ")];
  var $x_260 = $n($x_261).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: even-odd", new $c_sjsr_WrappedVarArgs(array$131));
  var $x_259 = $m_LPresentationUtil$();
  var array$132 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        even(5) == odd(4)\n                == even(3)\n                == odd(2)\n                == even(1)\n                == odd(0)\n                == false\n      ")];
  var $x_258 = $n($x_259).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: even-odd", new $c_sjsr_WrappedVarArgs(array$132));
  var $x_257 = $m_LPresentationUtil$();
  var $x_256 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$133 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Indirect Recursion"))];
  var array$134 = [$n($x_256).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$133))];
  var $x_255 = $n($x_257).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: indirect", new $c_sjsr_WrappedVarArgs(array$134));
  var $x_254 = $m_LPresentationUtil$();
  var $x_253 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$135 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Structural/Generative Recursion"))];
  var array$136 = [$n($x_253).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$135))];
  var $x_252 = $n($x_254).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$136));
  var $x_251 = $m_LPresentationUtil$();
  var $x_250 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$137 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("When you consume a (recursive) data structure which gets smaller with every step, e.g. length of a list. This kind of recursion is guaranteed$^*$ terminate."))];
  var array$138 = [$n($x_250).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$137))];
  var $x_249 = $n($x_251).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Structural Recursion", new $c_sjsr_WrappedVarArgs(array$138));
  var $x_248 = $m_LPresentationUtil$();
  var $x_247 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$139 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Generates a new data structure from its input and continues to work on it. This kind of recursion isn't guaranteed to terminate."))];
  var array$140 = [$n($x_247).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$139))];
  var $x_246 = $n($x_248).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Generative Recursion", new $c_sjsr_WrappedVarArgs(array$140));
  var $x_245 = $m_LPresentationUtil$();
  var array$141 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // this function will never stop\n        def stream(a: Int): List[Int] = Cons(a, stream(a))\n      ")];
  var $x_244 = $n($x_245).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Generative Recursion", new $c_sjsr_WrappedVarArgs(array$141));
  var $x_243 = $m_LPresentationUtil$();
  var array$142 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def plus(n: Int, m: Int): Int = n match {\n          case 0 => m\n          case _ => 1 + plus(n - 1, m)\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // structural direct single\n      ")];
  var $x_242 = $n($x_243).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("What kind of recursion is it?", new $c_sjsr_WrappedVarArgs(array$142));
  var $x_241 = $m_LPresentationUtil$();
  var array$143 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def produce(n: Int): List[Int] = n match {\n          case 0 => Nil()\n          case _ => Cons(n, produce(n))\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // generative direct single\n      ")];
  var $x_240 = $n($x_241).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("What kind of recursion is it?", new $c_sjsr_WrappedVarArgs(array$143));
  var $x_239 = $m_LPresentationUtil$();
  var array$144 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def parseH(str: List[Char]): Boolean = str match {\n          case Cons('h', tail) => parseE(tail)\n          case _               => false\n        }\n        def parseE(str: List[Char]): Boolean = str match {\n          case Cons('e', tail) => parseY(tail)\n          case _               => false\n        }\n        def parseY(str: List[Char]): Boolean = str match {\n          case Cons('y', Nil()) => true\n          case Cons('y', tail)  => parseH(tail)\n          case _                => false\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // structural indirect multi\n      ")];
  var $x_238 = $n($x_239).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("What kind of recursion is it?", new $c_sjsr_WrappedVarArgs(array$144));
  var $x_237 = $m_LPresentationUtil$();
  var $x_236 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$145 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Let's summarize the different recursion types we have seen so far."))];
  var array$146 = [$n($x_236).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$145))];
  var $x_235 = $n($x_237).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: types", new $c_sjsr_WrappedVarArgs(array$146));
  var $x_234 = $m_LPresentationUtil$();
  var $x_233 = $m_LPresentationUtil$Enumeration$();
  var $x_232 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("single/multi recursion");
  var array$147 = [$m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("direct/indirect recursion"), $m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("structural/generative recursion")];
  var array$148 = [$n($x_233).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_232, new $c_sjsr_WrappedVarArgs(array$147))];
  var $x_231 = $n($x_234).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: types", new $c_sjsr_WrappedVarArgs(array$148));
  var $x_230 = $m_LPresentationUtil$();
  var $x_229 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  var this$704 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var $x_228 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__img__T(this$704);
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up);
  $n($m_Ljapgolly_scalajs_react_vdom_PackageBase$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  var this$707 = new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("alt");
  var t$13 = $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString;
  var array$149 = [$m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().apply$extension__F2__T__O__Ljapgolly_scalajs_react_vdom_TagMod(t$13, this$707.Ljapgolly_scalajs_react_vdom_Attr__f_attrName, "Multi Single Recursion"), $n($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up).Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_src).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("./img/single_multi_rec.svg", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), new $c_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle("width")).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("50%", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString)];
  var array$150 = [$n($x_229).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_228, new $c_sjsr_WrappedVarArgs(array$149))];
  var $x_227 = $n($x_230).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: single/multi direct", new $c_sjsr_WrappedVarArgs(array$150));
  var $x_226 = $m_LPresentationUtil$();
  var $x_225 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  var this$715 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var $x_224 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__img__T(this$715);
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up);
  $n($m_Ljapgolly_scalajs_react_vdom_PackageBase$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  var this$718 = new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("alt");
  var t$14 = $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString;
  var array$151 = [$m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().apply$extension__F2__T__O__Ljapgolly_scalajs_react_vdom_TagMod(t$14, this$718.Ljapgolly_scalajs_react_vdom_Attr__f_attrName, "Indirect Recursion"), $n($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up).Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_src).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("./img/indirect_rec.svg", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), new $c_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle("width")).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("20%", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString)];
  var $x_223 = $n($x_225).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_224, new $c_sjsr_WrappedVarArgs(array$151));
  var $x_222 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$152 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("indirect"))];
  var array$153 = [$x_223, $n($x_222).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$152))];
  var $x_221 = $n($x_226).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: indirect", new $c_sjsr_WrappedVarArgs(array$153));
  var $x_220 = $m_LPresentationUtil$();
  var $x_219 = $m_LPresentationUtil$Enumeration$();
  var $x_218 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("How to fix types of Generics?");
  var array$154 = [$m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("What is the impact of recursion on the runtime behaviour?")];
  var array$155 = [$n($x_219).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_218, new $c_sjsr_WrappedVarArgs(array$154))];
  var $x_217 = $n($x_220).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("What are possible problems", new $c_sjsr_WrappedVarArgs(array$155));
  var $x_216 = $m_LPresentationUtil$();
  var $x_215 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$156 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Again, do we need to write a function for every `A` in a Generic?"))];
  var $x_214 = $n($x_215).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$156));
  var this$746 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$15 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$746);
  var $x_213 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$15, $m_s_package$().s_package$__f_Nil);
  var $x_212 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$157 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("fragment fade-in", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("No! type parameters to the rescue."))];
  var array$158 = [$x_214, $x_213, $n($x_212).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$157))];
  var $x_211 = $n($x_216).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Type Parameter: functions", new $c_sjsr_WrappedVarArgs(array$158));
  var $x_210 = $m_LPresentationUtil$();
  var array$159 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def length[A](list: List[A]): Int = list match {\n        //         ^             ^\n        //         '             '---------\n        //    type parameter              '\n        //                         fixes list type `A`\n\n          case Nil()         => 0\n          case Cons(_, tail) => 1 + length[A](list)\n        }\n      ")];
  var $x_209 = $n($x_210).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Type Parameters: functions", new $c_sjsr_WrappedVarArgs(array$159));
  var $x_208 = $m_LPresentationUtil$();
  var array$160 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        length[Int](Cons(1, Cons(2, Nil()))) == 2\n\n        // or we rely on inference again\n\n        length(Cons(1, Cons(2, Nil()))) == 2\n        // Scala knows that `1: Int`\n        //   '- List[A] ~ List[Int]\n        //        '- length[A] ~ length[Int]\n      ")];
  var $x_207 = $n($x_208).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Type Parameters: functions", new $c_sjsr_WrappedVarArgs(array$160));
  var $x_206 = $m_LPresentationUtil$();
  var $x_205 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$161 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("How do multiple recursive steps affect the runtime behaviour?"))];
  var array$162 = [$n($x_205).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$161))];
  var $x_204 = $n($x_206).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: runtime impact", new $c_sjsr_WrappedVarArgs(array$162));
  var $x_203 = $m_LPresentationUtil$();
  var array$163 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        length(Cons(0, Cons(1, Nil())))\n        // '- 1 + length(Cons(1, Nil()))\n        //           '- 1 + length(Nil())\n        //                     '- 0\n      ")];
  var $x_202 = $n($x_203).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: call stack", new $c_sjsr_WrappedVarArgs(array$163));
  var $x_201 = $m_LPresentationUtil$();
  var $x_200 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  var this$778 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var $x_199 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__img__T(this$778);
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up);
  $n($m_Ljapgolly_scalajs_react_vdom_PackageBase$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  var this$781 = new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("alt");
  var t$16 = $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString;
  var array$164 = [$m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().apply$extension__F2__T__O__Ljapgolly_scalajs_react_vdom_TagMod(t$16, this$781.Ljapgolly_scalajs_react_vdom_Attr__f_attrName, "Programm Stack"), ($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), new $c_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle("width")).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("45%", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), $n($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up).Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_src).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("./img/stack.svg", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString)];
  var array$165 = [$n($x_200).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_199, new $c_sjsr_WrappedVarArgs(array$164))];
  var $x_198 = $n($x_201).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: call stack", new $c_sjsr_WrappedVarArgs(array$165));
  var $x_197 = $m_LPresentationUtil$();
  var $x_196 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$166 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("But what happens if the list is reaaaaally long?"))];
  var $x_195 = $n($x_196).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$166));
  var this$796 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$17 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$796);
  var $x_194 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$17, $m_s_package$().s_package$__f_Nil);
  var $x_193 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$167 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("fragment fade-in", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Your program will run out of memory (stack overflow)"))];
  var array$168 = [$x_195, $x_194, $n($x_193).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$167))];
  var $x_192 = $n($x_197).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: call stack", new $c_sjsr_WrappedVarArgs(array$168));
  var $x_191 = $m_LPresentationUtil$();
  var $x_190 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$169 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Tail Recursion"))];
  var array$170 = [$n($x_190).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$169))];
  var $x_189 = $n($x_191).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$170));
  var $x_188 = $m_LPresentationUtil$();
  var $x_187 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$171 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("If a function has a single, direct recursion and the last expression is the recursive call, it is stacksafe."))];
  var array$172 = [$n($x_187).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$171))];
  var $x_186 = $n($x_188).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: tail recursion", new $c_sjsr_WrappedVarArgs(array$172));
  var $x_185 = $m_LPresentationUtil$();
  var array$173 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def lengthSafe[A](list: List[A]): Int = list {\n          def loop(remaining: List[A], accu: Int): Int = remaining match {\n            case Nil()         => accu\n            case Cons(_, tail) => loop(tail, accu + 1)\n            //                      ^\n            //                      '\n            //                 last expression\n          }\n\n          loop(list, 0)\n        }\n\n        lengthSafe(Cons(0, Cons(1, Nil()))) == 2\n      ")];
  var $x_184 = $n($x_185).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: tail recursion", new $c_sjsr_WrappedVarArgs(array$173));
  var $x_183 = $m_LPresentationUtil$();
  var $x_182 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$174 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Scala optimizes this function to an imperative loop. Therefore, the stack does not grow."))];
  var array$175 = [$n($x_182).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$174))];
  var $x_181 = $n($x_183).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: tail recursion", new $c_sjsr_WrappedVarArgs(array$175));
  var $x_180 = $m_LPresentationUtil$();
  var array$176 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def lengthSafe[A](list: List[A]): Int = list {\n\n          // Scala now checks if this function is tail recursive\n          @tailrec\n          def loop(remaining: List[A], agg: Int): Int = ???\n\n          loop(list, 0)\n        }\n      ")];
  var $x_179 = $n($x_180).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion: tail recursion", new $c_sjsr_WrappedVarArgs(array$176));
  var $x_178 = $m_LPresentationUtil$();
  var array$177 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def fib(n: Int): Int = n match {\n          case 1 | 2 => 1\n          case _     => fib(n - 1) + fib(n - 2)\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        /* no, last expression is the `+` operator and we\n         * create two recursion branches\n         */\n      ")];
  var $x_177 = $n($x_178).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Is this function stack-safe?", new $c_sjsr_WrappedVarArgs(array$177));
  var $x_176 = $m_LPresentationUtil$();
  var array$178 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def last[A](list: List[A]): List[A] = list match {\n          case el@ Cons(_, Nil()) => el\n          case Cons(_, tail)      => last(tail)\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // yes, last expression is `last`\n      ")];
  var $x_175 = $n($x_176).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Is this function stack-safe?", new $c_sjsr_WrappedVarArgs(array$178));
  var $x_174 = $m_LPresentationUtil$();
  var array$179 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def size[A](tree: Tree[A]): Int = tree match {\n          case Leaf(_)           => 1\n          case Node(left, right) => size(left) + size(right)\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        /* no, again the last expression is the `+` operator\n         * and we create two recursion branches\n         */\n      ")];
  var $x_173 = $n($x_174).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Is this function stack-safe?", new $c_sjsr_WrappedVarArgs(array$179));
  var $x_172 = $m_LPresentationUtil$();
  var array$180 = [$m_LPresentationUtil$().bash__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        sbt> project fp101-exercises\n        sbt> Test / testOnly exercise2.RecursiveFunctionsSpec\n      ")];
  var $x_171 = $n($x_172).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Let's Code: RecursiveFunctions", new $c_sjsr_WrappedVarArgs(array$180));
  var $x_170 = $m_LPresentationUtil$();
  var $x_169 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$181 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("But what if it is not tail recursive?"))];
  var array$182 = [$n($x_169).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$181))];
  var $x_168 = $n($x_170).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$182));
  var $x_167 = $m_LPresentationUtil$();
  var $x_166 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$();
  $m_Ljapgolly_scalajs_react_vdom_VdomNode$();
  var $x_165 = new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("There is no tool Scala or the JVM can provide us here. We have to rely on a technique called ");
  var $x_164 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$183 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Trampolining"))];
  var array$184 = [$x_165, $n($x_164).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("strong", new $c_sjsr_WrappedVarArgs(array$183)), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(". We won't discuss that in this course."))];
  var array$185 = [$n($x_166).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$184))];
  var $x_163 = $n($x_167).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("But what with all the other recursion types?", new $c_sjsr_WrappedVarArgs(array$185));
  var $x_162 = $m_LPresentationUtil$();
  var $x_161 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$186 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("What's the benefit?"))];
  var $x_160 = $n($x_161).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$186));
  var this$893 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$18 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$893);
  var $x_159 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$18, $m_s_package$().s_package$__f_Nil);
  var $x_158 = $m_LPresentationUtil$Enumeration$();
  var $x_157 = $m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("represent collections");
  var array$187 = [$m_LPresentationUtil$Enumeration$Item$().fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf("solve complex problems with divide & conquer")];
  var array$188 = [$x_160, $x_159, $n($x_158).apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_157, new $c_sjsr_WrappedVarArgs(array$187))];
  var array$189 = [$x_330, $x_327, $x_324, $x_321, $x_319, $x_315, $x_312, $x_306, $x_304, $x_302, $x_289, $x_287, $x_281, $x_278, $x_275, $x_273, $x_271, $x_269, $x_267, $x_265, $x_262, $x_260, $x_258, $x_255, $x_252, $x_249, $x_246, $x_244, $x_242, $x_240, $x_238, $x_235, $x_231, $x_227, $x_221, $x_217, $x_211, $x_209, $x_207, $x_204, $x_202, $x_198, $x_192, $x_189, $x_186, $x_184, $x_181, $x_179, $x_177, $x_175, $x_173, $x_171, $x_168, $x_163, $n($x_162).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$188))];
  this.LFP101Lecture$__f_recursion = $n($x_333).chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$189));
  var $x_378 = $m_LPresentationUtil$();
  var $x_377 = $m_LPresentationUtil$();
  var $x_376 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$190 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Composition"))];
  var array$191 = [$n($x_376).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$190))];
  var $x_375 = $n($x_377).chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$191));
  var $x_374 = $m_LPresentationUtil$();
  var $x_373 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$192 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Build complex programs out of simple ones."))];
  var array$193 = [$n($x_373).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$192))];
  var $x_372 = $n($x_374).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: definition", new $c_sjsr_WrappedVarArgs(array$193));
  var $x_371 = $m_LPresentationUtil$();
  var $x_370 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$194 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("math", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("\n         \\[\\begin{aligned}\n\t   f : b \\rightarrow c \\\\\n           g : a \\rightarrow b \\\\\n           \\newline\n           f . g : a \\rightarrow c\n         \\end{aligned} \\]\n       "))];
  var array$195 = [$n($x_370).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$194))];
  var $x_369 = $n($x_371).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: math", new $c_sjsr_WrappedVarArgs(array$195));
  var $x_368 = $m_LPresentationUtil$();
  var array$196 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def compose[A, B, C](f: B => C)(g: A => B): A => C =\n          a => f(g(a))\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        def double(a: Int): Int = a * 2\n        def show(a: Int): String = a.toString\n\n        val complex = compose(show)(double)\n\n        // What is the result?\n        complex(2) == ???\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        complex(2) == show(double(2))\n                    == show(4)\n                    == \"4\"\n      ")];
  var $x_367 = $n($x_368).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: code", new $c_sjsr_WrappedVarArgs(array$196));
  var $x_366 = $m_LPresentationUtil$();
  var array$197 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Scala already provides a `compose` method\n        (show _).compose(double)\n        //    ^\n        //    '- transforming method to a function value\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // or work directly with function values\n        val show: Int => String = _.toString\n        val double: Int => Int  = _ * 2\n\n        show.compose(double)\n      ")];
  var $x_365 = $n($x_366).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: Scala", new $c_sjsr_WrappedVarArgs(array$197));
  var $x_364 = $m_LPresentationUtil$();
  var array$198 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        double.andThen(show) == show.compose(double)\n      ")];
  var $x_363 = $n($x_364).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: Scala", new $c_sjsr_WrappedVarArgs(array$198));
  var $x_362 = $m_LPresentationUtil$();
  var $x_361 = $m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Let's switch to Scala's native List as it's easier to handle\n        val strs = List(\"Hello\", \"world\")\n\n        def strToChars(str: String): List[Char] = str.toList\n\n        def upperCase(a: Char): Char = a.toUpper\n\n        // We want: List(\"H\", \"E\", \"L\", \"L\", \"O\", \"W\", \"O\", \"R\", \"L\", \"D\")\n      ");
  var this$944 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$19 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$944);
  var $x_360 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$19, $m_s_package$().s_package$__f_Nil);
  var $x_359 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$199 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("fragment fade-in", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("How to compose `strToChars` and `upperCase`?"))];
  var array$200 = [$x_361, $x_360, $n($x_359).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$199))];
  var $x_358 = $n($x_362).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: data structures", new $c_sjsr_WrappedVarArgs(array$200));
  var $x_357 = $m_LPresentationUtil$();
  var array$201 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Step one: Turn\n        //    List(\"Hello\", \"world\")\n        // into\n        //    List('H', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd')\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // we already know map (exercises)\n        def map[A, B](as: List[A])(f: A => B): List[B]\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        val chars = strs.map(a => strToChars(a))\n        // Or just strs.map(strToChars)\n\n        // What is the actual result (and type)?\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        chars == List(List('H', 'e', 'l', 'l', 'o'), List('w', 'o', 'r', 'l', 'd'))\n\n        // we need to flatten this structure\n      ")];
  var $x_356 = $n($x_357).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: data structures", new $c_sjsr_WrappedVarArgs(array$201));
  var $x_355 = $m_LPresentationUtil$();
  var array$202 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // list[list[a]] -> list[a]\n        def flatten[A](as: List[List[A]]): List[A] = as match {\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // empty case\n          case Nil         => Nil\n\n        // How to handle non-empty case?\n          case Cons(a, tail) =>\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n            append(a, flatten(tail))\n        }\n      ")];
  var $x_354 = $n($x_355).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: data structures", new $c_sjsr_WrappedVarArgs(array$202));
  var $x_353 = $m_LPresentationUtil$();
  var array$203 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        val chars = flatten(map(strs)(a => strToChars(a)))\n\n        chars: List[Char]\n      ")];
  var $x_352 = $n($x_353).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: data structures", new $c_sjsr_WrappedVarArgs(array$203));
  var $x_351 = $m_LPresentationUtil$();
  var array$204 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // or we combine them\n        def flatMap[A, B](as: List[A])(f: A => List[B]): List[B] = \n          flatten(map(as)(f))\n\n        val chars = flatMap(strs)(a => strToChars(a))\n\n        chars: List[Char]\n      ")];
  var $x_350 = $n($x_351).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: data structures", new $c_sjsr_WrappedVarArgs(array$204));
  var $x_349 = $m_LPresentationUtil$();
  var array$205 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        val complex: List[String] => List[Char] =\n          strs => map(flatMap(strs)(strToChars))(show)\n\n\n        val list = Cons(\"hello\", Cons(\"world\", Nil()))\n\n        complex(list) == Cons('H', Cons('E', ...))\n      ")];
  var $x_348 = $n($x_349).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: data structures", new $c_sjsr_WrappedVarArgs(array$205));
  var $x_347 = $m_LPresentationUtil$();
  var array$206 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // make map and flatMap methods of List\n        sealed trait List[A] {\n\n          def map[B](f: A => B): List[B]\n          def flatMap[B](f: A => List[B]): List[B]\n        }\n      ")];
  var $x_346 = $n($x_347).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: for-comprehension", new $c_sjsr_WrappedVarArgs(array$206));
  var $x_345 = $m_LPresentationUtil$();
  var array$207 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // instead of\n        val complexFlat =  List[String] => List[Char] = strs => {\n          strs.flatMap { str =>\n            strToChars(str).map { char =>\n              upperCase(char)\n            }\n          }\n        }\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // Scala lets you use for-comprehension\n        val complexFor: List[String] => List[Char] = strs =>\n          for {\n            str   <- strs\n            char <- strToChars(str)\n          } yield upperCase(char)\n\n\n        complexFor(list) == complexFlat(list)\n      ")];
  var $x_344 = $n($x_345).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: for-comprehension", new $c_sjsr_WrappedVarArgs(array$207));
  var $x_343 = $m_LPresentationUtil$();
  var $x_342 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$208 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("For-Comprehension"))];
  var array$209 = [$n($x_342).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$208))];
  var $x_341 = $n($x_343).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$209));
  var $x_340 = $m_LPresentationUtil$();
  var array$210 = [$m_LPresentationUtil$().scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        // comes in handy later on\n        for {\n          a <- f(in)\n          b <- g(a)\n          ...\n          z <- h(???)\n        } yield doSomething(z)\n      "), $m_LPresentationUtil$().scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        f(in).flatMap{ a =>\n          g(a).flatMap { b =>\n            ... {\n              soSomething(z)\n            }\n          }\n        }\n      ")];
  var $x_339 = $n($x_340).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition: for-comprehension", new $c_sjsr_WrappedVarArgs(array$210));
  var $x_338 = $m_LPresentationUtil$();
  var array$211 = [$m_LPresentationUtil$().bash__T__Ljapgolly_scalajs_react_vdom_TagOf("\n        sbt> project fp101-exercises\n        sbt> Test / testOnly exercise2.CompositionsSpec\n      ")];
  var $x_337 = $n($x_338).exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Let's Code: Compositions", new $c_sjsr_WrappedVarArgs(array$211));
  var $x_336 = $m_LPresentationUtil$();
  var $x_335 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$212 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("What's the benefit?"))];
  var $x_334 = $n($x_335).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$212));
  var this$1001 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$20 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$1001);
  var array$213 = [$x_334, new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$20, $m_s_package$().s_package$__f_Nil), $m_LPresentationUtil$Enumeration$().apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($m_LPresentationUtil$Enumeration$Item$().stable__T__Ljapgolly_scalajs_react_vdom_TagOf("solve complex problems with divide & conquer"), $m_sci_Nil$())];
  var array$214 = [$x_375, $x_372, $x_369, $x_367, $x_365, $x_363, $x_358, $x_356, $x_354, $x_352, $x_350, $x_348, $x_346, $x_344, $x_341, $x_339, $x_337, $n($x_336).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$213))];
  this.LFP101Lecture$__f_composition = $n($x_378).chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$214));
  var $x_405 = $m_LPresentationUtil$();
  var $x_404 = $m_LPresentationUtil$();
  var $x_403 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$215 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Summary"))];
  var array$216 = [$n($x_403).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$215))];
  var $x_402 = $n($x_404).chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$216));
  var $x_401 = $m_LPresentationUtil$();
  var $x_400 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$217 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Data never changes"))];
  var array$218 = [$n($x_400).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$217))];
  var $x_399 = $n($x_401).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Immutability", new $c_sjsr_WrappedVarArgs(array$218));
  var $x_398 = $m_LPresentationUtil$();
  var $x_397 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$219 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Composition of types"))];
  var array$220 = [$n($x_397).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$219))];
  var $x_396 = $n($x_398).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Algebraic Data Structures", new $c_sjsr_WrappedVarArgs(array$220));
  var $x_395 = $m_LPresentationUtil$();
  var $x_394 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$221 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("math", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("$f : a \\rightarrow b$"))];
  var array$222 = [$n($x_394).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$221))];
  var $x_393 = $n($x_395).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Pure Functions", new $c_sjsr_WrappedVarArgs(array$222));
  var $x_392 = $m_LPresentationUtil$();
  var $x_391 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$223 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Expression can be replaced by their evaluation result"))];
  var array$224 = [$n($x_391).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$223))];
  var $x_390 = $n($x_392).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Referential Transparency", new $c_sjsr_WrappedVarArgs(array$224));
  var $x_389 = $m_LPresentationUtil$();
  var $x_388 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$225 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Solving a problem where the solution depends on solutions to smaller instances of the same problem"))];
  var array$226 = [$n($x_388).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$225))];
  var $x_387 = $n($x_389).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Recursion", new $c_sjsr_WrappedVarArgs(array$226));
  var $x_386 = $m_LPresentationUtil$();
  var $x_385 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$227 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Creating complex problems out of simpler ones"))];
  var array$228 = [$n($x_385).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h4", new $c_sjsr_WrappedVarArgs(array$227))];
  var $x_384 = $n($x_386).slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("Composition", new $c_sjsr_WrappedVarArgs(array$228));
  var $x_383 = $m_LPresentationUtil$();
  var $x_382 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$229 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Next Topic"))];
  var $x_381 = $n($x_382).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h2", new $c_sjsr_WrappedVarArgs(array$229));
  var this$1087 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var t$21 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T(this$1087);
  var $x_380 = new $c_Ljapgolly_scalajs_react_vdom_TagOf(t$21, $m_s_package$().s_package$__f_Nil);
  var $x_379 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$230 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1("Scala Standard Library"))];
  var array$231 = [$x_381, $x_380, $n($x_379).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("h3", new $c_sjsr_WrappedVarArgs(array$230))];
  var array$232 = [$x_402, $x_399, $x_396, $x_393, $x_390, $x_387, $x_384, $n($x_383).noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$231))];
  this.LFP101Lecture$__f_summary = $n($x_405).chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(new $c_sjsr_WrappedVarArgs(array$232));
  var b$1 = new $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1("Slideshow");
  var ev = new $c_sjsr_AnonFunction1(((b$2) => {
    var b = $n($as_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1(b$2)).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1__f_japgolly$scalajs$react$component$builder$ComponentBuilder$Step1$$name;
    return new $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2(b, $m_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$())
  }));
  var $x_409 = $n($as_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2(ev.apply__O__O(b$1))).noBackend__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3();
  var $x_408 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var $x_407 = ($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("reveal", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString);
  var $x_406 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$233 = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("slides", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), this.LFP101Lecture$__f_overview, this.LFP101Lecture$__f_introduction, this.LFP101Lecture$__f_immutability, this.LFP101Lecture$__f_adts, this.LFP101Lecture$__f_pureFunctions, this.LFP101Lecture$__f_referentialTransparency, this.LFP101Lecture$__f_recursion, this.LFP101Lecture$__f_composition, this.LFP101Lecture$__f_summary];
  var array$234 = [$x_407, $n($x_406).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("div", new $c_sjsr_WrappedVarArgs(array$233))];
  this.LFP101Lecture$__f_Show = $n($n($x_409).renderStatic__Ljapgolly_scalajs_react_vdom_VdomNode__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep($n($x_408).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("div", new $c_sjsr_WrappedVarArgs(array$234)))).build__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot($m_Ljapgolly_scalajs_react_CtorType$Summoner$().summonN__Ljapgolly_scalajs_react_internal_Singleton__Ljapgolly_scalajs_react_CtorType$Summoner($m_Ljapgolly_scalajs_react_internal_Singleton$().Ljapgolly_scalajs_react_internal_Singleton$__f_BoxUnit))
}
$c_LFP101Lecture$.prototype = new $h_O();
$c_LFP101Lecture$.prototype.constructor = $c_LFP101Lecture$;
/** @constructor */
function $h_LFP101Lecture$() {
  /*<skip>*/
}
$h_LFP101Lecture$.prototype = $c_LFP101Lecture$.prototype;
$c_LFP101Lecture$.prototype.main__AT__V = (function(args) {
  var c = this.LFP101Lecture$__f_Show;
  var this$5 = $n($as_Ljapgolly_scalajs_react_component_Generic$UnmountedSimple($n($as_Ljapgolly_scalajs_react_CtorType$Nullary($n(c).ctor__Ljapgolly_scalajs_react_CtorType())).apply__O()));
  var a = document.body;
  $f_Ljapgolly_scalajs_react_component_Generic$UnmountedSimple__renderIntoDOM__sjs_js_$bar__O(this$5, a)
});
$c_LFP101Lecture$.prototype.main = (function(arg) {
  var prep0 = $asArrayOf_T(arg, 1);
  $m_LFP101Lecture$().main__AT__V(prep0)
});
var $d_LFP101Lecture$ = new $TypeData().initClass({
  LFP101Lecture$: 0
}, false, "FP101Lecture$", {
  LFP101Lecture$: 1,
  O: 1
});
$c_LFP101Lecture$.prototype.$classData = $d_LFP101Lecture$;
var $n_LFP101Lecture$;
function $m_LFP101Lecture$() {
  if ((!$n_LFP101Lecture$)) {
    $n_LFP101Lecture$ = new $c_LFP101Lecture$()
  };
  return $n_LFP101Lecture$
}
function $p_LPresentationUtil$__removeHeader__V($thiz) {
  var headerElements = document.getElementsByClassName("slide-header");
  var end = $uI(headerElements.length);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var element = headerElements[arg1];
      element.parentNode.removeChild(element);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  }
}
function $p_LPresentationUtil$__cleanSlide__Ljapgolly_scalajs_react_vdom_TagOf__Ljapgolly_scalajs_react_vdom_TagOf($thiz, content) {
  $p_LPresentationUtil$__removeHeader__V($thiz);
  return content
}
function $p_LPresentationUtil$__rawCode__T__T__Ljapgolly_scalajs_react_vdom_TagOf($thiz, language, codeStr) {
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod(language, $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), $thiz.LPresentationUtil$__f_dataTrim, $thiz.LPresentationUtil$__f_dataNoEscape, ($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(codeStr))];
  return $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("code", new $c_sjsr_WrappedVarArgs(array))
}
/** @constructor */
function $c_LPresentationUtil$() {
  this.LPresentationUtil$__f_dataBackground = null;
  this.LPresentationUtil$__f_dataBackgroundColor = null;
  this.LPresentationUtil$__f_dataBackgroundSize = null;
  this.LPresentationUtil$__f_dataTrim = null;
  this.LPresentationUtil$__f_dataNoEscape = null;
  this.LPresentationUtil$__f_ChapterSlideProps = null;
  $n_LPresentationUtil$ = this;
  var this$1 = $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$();
  $n(this$1.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  this.LPresentationUtil$__f_dataBackground = ($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr), new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("data-background"));
  this.LPresentationUtil$__f_dataBackgroundColor = ($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr), new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("data-background-color"));
  this.LPresentationUtil$__f_dataBackgroundSize = ($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr), new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("data-background-size"));
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  var this$7 = new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("data-trim");
  var t = $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString;
  this.LPresentationUtil$__f_dataTrim = $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().apply$extension__F2__T__O__Ljapgolly_scalajs_react_vdom_TagMod(t, this$7.Ljapgolly_scalajs_react_vdom_Attr__f_attrName, "");
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  var this$9 = new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("data-noescape");
  var t$1 = $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString;
  this.LPresentationUtil$__f_dataNoEscape = $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().apply$extension__F2__T__O__Ljapgolly_scalajs_react_vdom_TagMod(t$1, this$9.Ljapgolly_scalajs_react_vdom_Attr__f_attrName, "");
  var $x_1 = $m_s_package$().s_package$__f_Seq;
  var array = [$n(this.LPresentationUtil$__f_dataBackground).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("./../reveal/img/dark-logo.svg", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), $n(this.LPresentationUtil$__f_dataBackgroundColor).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("#363633", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), $n(this.LPresentationUtil$__f_dataBackgroundSize).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("30%", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString)];
  this.LPresentationUtil$__f_ChapterSlideProps = $as_sci_Seq($n($x_1).apply__sci_Seq__sc_SeqOps(new $c_sjsr_WrappedVarArgs(array)))
}
$c_LPresentationUtil$.prototype = new $h_O();
$c_LPresentationUtil$.prototype.constructor = $c_LPresentationUtil$;
/** @constructor */
function $h_LPresentationUtil$() {
  /*<skip>*/
}
$h_LPresentationUtil$.prototype = $c_LPresentationUtil$.prototype;
$c_LPresentationUtil$.prototype.chapter__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf = (function(slides) {
  return $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$().apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less), $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf), "section"), slides)
});
$c_LPresentationUtil$.prototype.header__T__T__Ljapgolly_scalajs_react_vdom_TagOf = (function(text, cls) {
  var $x_7 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var $x_6 = ($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod(cls, $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString);
  var $x_5 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  var this$4 = $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  var $x_4 = $f_Ljapgolly_scalajs_react_vdom_HtmlTags__img__T(this$4);
  var $x_3 = $n($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up).Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_src).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("./../reveal/img/logo.svg", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString);
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up);
  $n($m_Ljapgolly_scalajs_react_vdom_PackageBase$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  var this$7 = new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("alt");
  var t = $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString;
  var array = [$x_3, $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().apply$extension__F2__T__O__Ljapgolly_scalajs_react_vdom_TagMod(t, this$7.Ljapgolly_scalajs_react_vdom_Attr__f_attrName, "Scala Summer School logo")];
  var $x_2 = $n($x_5).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf($x_4, new $c_sjsr_WrappedVarArgs(array));
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array$1 = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(text))];
  var array$2 = [$x_6, $x_2, $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array$1))];
  return $n($x_7).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("div", new $c_sjsr_WrappedVarArgs(array$2))
});
$c_LPresentationUtil$.prototype.chapterSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf = (function(content) {
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var rassoc$1 = this.LPresentationUtil$__f_ChapterSlideProps;
  var this$3 = $n(content);
  return $p_LPresentationUtil$__cleanSlide__Ljapgolly_scalajs_react_vdom_TagOf__Ljapgolly_scalajs_react_vdom_TagOf(this, $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("section", $as_sci_Seq(this$3.prependedAll__sc_IterableOnce__O(rassoc$1))))
});
$c_LPresentationUtil$.prototype.noHeaderSlide__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf = (function(content) {
  return $p_LPresentationUtil$__cleanSlide__Ljapgolly_scalajs_react_vdom_TagOf__Ljapgolly_scalajs_react_vdom_TagOf(this, $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$().apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf(($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less), $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf), "section"), content))
});
$c_LPresentationUtil$.prototype.exerciseSlide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf = (function(headerStr, content) {
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var rassoc$2 = this.header__T__T__Ljapgolly_scalajs_react_vdom_TagOf(headerStr, "exercise-header");
  var this$3 = $n(content);
  return $p_LPresentationUtil$__cleanSlide__Ljapgolly_scalajs_react_vdom_TagOf__Ljapgolly_scalajs_react_vdom_TagOf(this, $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("section", $as_sci_Seq(this$3.prepended__O__O(rassoc$2))))
});
$c_LPresentationUtil$.prototype.slide__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf = (function(headerStr, content) {
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var rassoc$3 = this.header__T__T__Ljapgolly_scalajs_react_vdom_TagOf(headerStr, "slide-header");
  var this$3 = $n(content);
  return $p_LPresentationUtil$__cleanSlide__Ljapgolly_scalajs_react_vdom_TagOf__Ljapgolly_scalajs_react_vdom_TagOf(this, $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("section", $as_sci_Seq(this$3.prepended__O__O(rassoc$3))))
});
$c_LPresentationUtil$.prototype.scalaC__T__Ljapgolly_scalajs_react_vdom_TagOf = (function(codeStr) {
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array = [$p_LPresentationUtil$__rawCode__T__T__Ljapgolly_scalajs_react_vdom_TagOf(this, "Scala", codeStr)];
  return $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("pre", new $c_sjsr_WrappedVarArgs(array))
});
$c_LPresentationUtil$.prototype.scalaCFragment__T__Ljapgolly_scalajs_react_vdom_TagOf = (function(codeStr) {
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("fragment fade-in", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), $p_LPresentationUtil$__rawCode__T__T__Ljapgolly_scalajs_react_vdom_TagOf(this, "Scala", codeStr)];
  return $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("pre", new $c_sjsr_WrappedVarArgs(array))
});
$c_LPresentationUtil$.prototype.bash__T__Ljapgolly_scalajs_react_vdom_TagOf = (function(codeStr) {
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array = [$p_LPresentationUtil$__rawCode__T__T__Ljapgolly_scalajs_react_vdom_TagOf(this, "Bash", codeStr)];
  return $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("pre", new $c_sjsr_WrappedVarArgs(array))
});
var $d_LPresentationUtil$ = new $TypeData().initClass({
  LPresentationUtil$: 0
}, false, "PresentationUtil$", {
  LPresentationUtil$: 1,
  O: 1
});
$c_LPresentationUtil$.prototype.$classData = $d_LPresentationUtil$;
var $n_LPresentationUtil$;
function $m_LPresentationUtil$() {
  if ((!$n_LPresentationUtil$)) {
    $n_LPresentationUtil$ = new $c_LPresentationUtil$()
  };
  return $n_LPresentationUtil$
}
/** @constructor */
function $c_LPresentationUtil$Enumeration$() {
  /*<skip>*/
}
$c_LPresentationUtil$Enumeration$.prototype = new $h_O();
$c_LPresentationUtil$Enumeration$.prototype.constructor = $c_LPresentationUtil$Enumeration$;
/** @constructor */
function $h_LPresentationUtil$Enumeration$() {
  /*<skip>*/
}
$h_LPresentationUtil$Enumeration$.prototype = $c_LPresentationUtil$Enumeration$.prototype;
$c_LPresentationUtil$Enumeration$.prototype.apply__Ljapgolly_scalajs_react_vdom_TagOf__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf = (function(head, tail) {
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var this$3 = $n(tail);
  return $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("ul", $as_sci_Seq(this$3.prepended__O__O(head)))
});
var $d_LPresentationUtil$Enumeration$ = new $TypeData().initClass({
  LPresentationUtil$Enumeration$: 0
}, false, "PresentationUtil$Enumeration$", {
  LPresentationUtil$Enumeration$: 1,
  O: 1
});
$c_LPresentationUtil$Enumeration$.prototype.$classData = $d_LPresentationUtil$Enumeration$;
var $n_LPresentationUtil$Enumeration$;
function $m_LPresentationUtil$Enumeration$() {
  if ((!$n_LPresentationUtil$Enumeration$)) {
    $n_LPresentationUtil$Enumeration$ = new $c_LPresentationUtil$Enumeration$()
  };
  return $n_LPresentationUtil$Enumeration$
}
/** @constructor */
function $c_LPresentationUtil$Enumeration$Item$() {
  /*<skip>*/
}
$c_LPresentationUtil$Enumeration$Item$.prototype = new $h_O();
$c_LPresentationUtil$Enumeration$Item$.prototype.constructor = $c_LPresentationUtil$Enumeration$Item$;
/** @constructor */
function $h_LPresentationUtil$Enumeration$Item$() {
  /*<skip>*/
}
$h_LPresentationUtil$Enumeration$Item$.prototype = $c_LPresentationUtil$Enumeration$Item$.prototype;
$c_LPresentationUtil$Enumeration$Item$.prototype.fadeIn__Ljapgolly_scalajs_react_vdom_TagOf__Ljapgolly_scalajs_react_vdom_TagOf = (function(content) {
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array = [($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("fragment fade-in", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString), content];
  return $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("li", new $c_sjsr_WrappedVarArgs(array))
});
$c_LPresentationUtil$Enumeration$Item$.prototype.stable__T__Ljapgolly_scalajs_react_vdom_TagOf = (function(content) {
  var $x_2 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(content))];
  var array$1 = [$n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array))];
  return $n($x_2).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("li", new $c_sjsr_WrappedVarArgs(array$1))
});
$c_LPresentationUtil$Enumeration$Item$.prototype.fadeIn__T__Ljapgolly_scalajs_react_vdom_TagOf = (function(content) {
  var $x_3 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var $x_2 = ($n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up), $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()).$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod("fragment fade-in", $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString);
  var $x_1 = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $n($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$().Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less);
  $n($m_Ljapgolly_scalajs_react_vdom_Exports$().Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf);
  var array = [($m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$(), $m_Ljapgolly_scalajs_react_vdom_VdomNode$(), new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(content))];
  var array$1 = [$x_2, $n($x_1).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("p", new $c_sjsr_WrappedVarArgs(array))];
  return $n($x_3).apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf("li", new $c_sjsr_WrappedVarArgs(array$1))
});
var $d_LPresentationUtil$Enumeration$Item$ = new $TypeData().initClass({
  LPresentationUtil$Enumeration$Item$: 0
}, false, "PresentationUtil$Enumeration$Item$", {
  LPresentationUtil$Enumeration$Item$: 1,
  O: 1
});
$c_LPresentationUtil$Enumeration$Item$.prototype.$classData = $d_LPresentationUtil$Enumeration$Item$;
var $n_LPresentationUtil$Enumeration$Item$;
function $m_LPresentationUtil$Enumeration$Item$() {
  if ((!$n_LPresentationUtil$Enumeration$Item$)) {
    $n_LPresentationUtil$Enumeration$Item$ = new $c_LPresentationUtil$Enumeration$Item$()
  };
  return $n_LPresentationUtil$Enumeration$Item$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_CtorType.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_CtorType.prototype = $c_Ljapgolly_scalajs_react_CtorType.prototype;
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$Summoner$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$Summoner$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$Summoner$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype = $c_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype;
$c_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype.summonN__Ljapgolly_scalajs_react_internal_Singleton__Ljapgolly_scalajs_react_CtorType$Summoner = (function(s) {
  var f = new $c_sjsr_AnonFunction1(((rc$2) => new $c_Ljapgolly_scalajs_react_CtorType$Nullary(React.createElement(rc$2, $n(s).Ljapgolly_scalajs_react_internal_Singleton__f_value), new $c_sjsr_AnonFunction1(((m$2) => {
    var m = $n($as_Ljapgolly_scalajs_react_CtorType$Mod(m$2)).Ljapgolly_scalajs_react_CtorType$Mod__f_mod;
    return React.createElement(rc$2, $m_Ljapgolly_scalajs_react_CtorType$Mod$().applyAndCast$extension__F1__sjs_js_Object__sjs_js_Object(m, $n($n(s).Ljapgolly_scalajs_react_internal_Singleton__f_mutableObj).apply__O()))
  })), (void 0))));
  var p = $m_Ljapgolly_scalajs_react_CtorType$ProfunctorN$();
  return new $c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1(f, p)
});
var $d_Ljapgolly_scalajs_react_CtorType$Summoner$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_CtorType$Summoner$: 0
}, false, "japgolly.scalajs.react.CtorType$Summoner$", {
  Ljapgolly_scalajs_react_CtorType$Summoner$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_CtorType$Summoner$.prototype.$classData = $d_Ljapgolly_scalajs_react_CtorType$Summoner$;
var $n_Ljapgolly_scalajs_react_CtorType$Summoner$;
function $m_Ljapgolly_scalajs_react_CtorType$Summoner$() {
  if ((!$n_Ljapgolly_scalajs_react_CtorType$Summoner$)) {
    $n_Ljapgolly_scalajs_react_CtorType$Summoner$ = new $c_Ljapgolly_scalajs_react_CtorType$Summoner$()
  };
  return $n_Ljapgolly_scalajs_react_CtorType$Summoner$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_Callback$() {
  this.Ljapgolly_scalajs_react_callback_Callback$__f_empty = null;
  $n_Ljapgolly_scalajs_react_callback_Callback$ = this;
  this.Ljapgolly_scalajs_react_callback_Callback$__f_empty = $m_Ljapgolly_scalajs_react_callback_Trampoline$().Ljapgolly_scalajs_react_callback_Trampoline$__f_unit
}
$c_Ljapgolly_scalajs_react_callback_Callback$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_Callback$.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_Callback$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_Callback$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_callback_Callback$.prototype = $c_Ljapgolly_scalajs_react_callback_Callback$.prototype;
var $d_Ljapgolly_scalajs_react_callback_Callback$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_callback_Callback$: 0
}, false, "japgolly.scalajs.react.callback.Callback$", {
  Ljapgolly_scalajs_react_callback_Callback$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_callback_Callback$.prototype.$classData = $d_Ljapgolly_scalajs_react_callback_Callback$;
var $n_Ljapgolly_scalajs_react_callback_Callback$;
function $m_Ljapgolly_scalajs_react_callback_Callback$() {
  if ((!$n_Ljapgolly_scalajs_react_callback_Callback$)) {
    $n_Ljapgolly_scalajs_react_callback_Callback$ = new $c_Ljapgolly_scalajs_react_callback_Callback$()
  };
  return $n_Ljapgolly_scalajs_react_callback_Callback$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_CallbackTo(trampoline) {
  this.Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline = null;
  this.Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline = trampoline
}
$c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_CallbackTo;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_CallbackTo() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_callback_CallbackTo.prototype = $c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype;
$c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype.hashCode__I = (function() {
  var this$ = this.Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
  var this$2 = $n(this$);
  return $systemIdentityHashCode(this$2)
});
$c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype.equals__O__Z = (function(x$1) {
  return $m_Ljapgolly_scalajs_react_callback_CallbackTo$().equals$extension__Ljapgolly_scalajs_react_callback_Trampoline__O__Z(this.Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline, x$1)
});
function $as_Ljapgolly_scalajs_react_callback_CallbackTo(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_callback_CallbackTo) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.callback.CallbackTo"))
}
function $isArrayOf_Ljapgolly_scalajs_react_callback_CallbackTo(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_callback_CallbackTo)))
}
function $asArrayOf_Ljapgolly_scalajs_react_callback_CallbackTo(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_callback_CallbackTo(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.callback.CallbackTo;", depth))
}
var $d_Ljapgolly_scalajs_react_callback_CallbackTo = new $TypeData().initClass({
  Ljapgolly_scalajs_react_callback_CallbackTo: 0
}, false, "japgolly.scalajs.react.callback.CallbackTo", {
  Ljapgolly_scalajs_react_callback_CallbackTo: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_callback_CallbackTo.prototype.$classData = $d_Ljapgolly_scalajs_react_callback_CallbackTo;
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_CallbackTo$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_CallbackTo$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_CallbackTo$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype = $c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype;
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.flatMap$extension__Ljapgolly_scalajs_react_callback_Trampoline__F1__Ljapgolly_scalajs_react_callback_Trampoline = (function(this$, f) {
  var this$2 = $n(this$);
  var f$1 = new $c_sjsr_AnonFunction1(((x$10$2) => $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f).apply__O__O(x$10$2))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline));
  return new $c_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap(this$2, f$1)
});
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.$greater$greater$extension__Ljapgolly_scalajs_react_callback_Trampoline__Ljapgolly_scalajs_react_callback_Trampoline__Ljapgolly_scalajs_react_callback_Trampoline = (function(this$, runNext) {
  return ($m_Ljapgolly_scalajs_react_callback_CallbackTo$().isEmpty_$qmark$extension__Ljapgolly_scalajs_react_callback_Trampoline__Z(this$) ? runNext : $m_Ljapgolly_scalajs_react_callback_CallbackTo$().flatMap$extension__Ljapgolly_scalajs_react_callback_Trampoline__F1__Ljapgolly_scalajs_react_callback_Trampoline(this$, new $c_sjsr_AnonFunction1(((x$12$2) => new $c_Ljapgolly_scalajs_react_callback_CallbackTo(runNext)))))
});
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.isEmpty_$qmark$extension__Ljapgolly_scalajs_react_callback_Trampoline__Z = (function(this$) {
  return (this$ === $m_Ljapgolly_scalajs_react_callback_Callback$().Ljapgolly_scalajs_react_callback_Callback$__f_empty)
});
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.bool2$extension__Ljapgolly_scalajs_react_callback_Trampoline__Ljapgolly_scalajs_react_callback_Trampoline__F2__s_$less$colon$less__Ljapgolly_scalajs_react_callback_Trampoline = (function(this$, b, op, ev) {
  $n(ev);
  var x = new $c_Ljapgolly_scalajs_react_callback_CallbackTo(this$);
  var this$$1 = x.Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
  var x$1 = new $c_sjsr_AnonFunction0((() => {
    var this$4 = $n(this$$1);
    return $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$4)
  }));
  var y = new $c_sjsr_AnonFunction0((() => {
    var this$7 = $n(b);
    return $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$7)
  }));
  var f = new $c_sjsr_AnonFunction0((() => $uZ($n(op).apply__O__O__O(x$1, y))));
  $m_Ljapgolly_scalajs_react_callback_Trampoline$();
  return new $c_Ljapgolly_scalajs_react_callback_Trampoline$Delay(f)
});
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.$bar$bar$extension__Ljapgolly_scalajs_react_callback_Trampoline__Ljapgolly_scalajs_react_callback_Trampoline__s_$less$colon$less__Ljapgolly_scalajs_react_callback_Trampoline = (function(this$, b, ev) {
  return $m_Ljapgolly_scalajs_react_callback_CallbackTo$().bool2$extension__Ljapgolly_scalajs_react_callback_Trampoline__Ljapgolly_scalajs_react_callback_Trampoline__F2__s_$less$colon$less__Ljapgolly_scalajs_react_callback_Trampoline(this$, b, new $c_sjsr_AnonFunction2(((x$25$2, x$26$2) => {
    var x$25 = $as_F0(x$25$2);
    var x$26 = $as_F0(x$26$2);
    var this$2 = $n(x$25);
    if ($uZ(this$2.apply__O())) {
      return true
    } else {
      var this$3 = $n(x$26);
      return $uZ(this$3.apply__O())
    }
  })), ev)
});
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.equals$extension__Ljapgolly_scalajs_react_callback_Trampoline__O__Z = (function(this$, x$1) {
  if ((x$1 instanceof $c_Ljapgolly_scalajs_react_callback_CallbackTo)) {
    var CallbackTo$1 = ((x$1 === null) ? null : $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(x$1)).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline);
    if ((this$ === null)) {
      return (CallbackTo$1 === null)
    } else {
      var this$1 = $n(this$);
      return (this$1 === CallbackTo$1)
    }
  } else {
    return false
  }
});
var $d_Ljapgolly_scalajs_react_callback_CallbackTo$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_callback_CallbackTo$: 0
}, false, "japgolly.scalajs.react.callback.CallbackTo$", {
  Ljapgolly_scalajs_react_callback_CallbackTo$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_callback_CallbackTo$.prototype.$classData = $d_Ljapgolly_scalajs_react_callback_CallbackTo$;
var $n_Ljapgolly_scalajs_react_callback_CallbackTo$;
function $m_Ljapgolly_scalajs_react_callback_CallbackTo$() {
  if ((!$n_Ljapgolly_scalajs_react_callback_CallbackTo$)) {
    $n_Ljapgolly_scalajs_react_callback_CallbackTo$ = new $c_Ljapgolly_scalajs_react_callback_CallbackTo$()
  };
  return $n_Ljapgolly_scalajs_react_callback_CallbackTo$
}
function $is_Ljapgolly_scalajs_react_callback_Trampoline(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_callback_Trampoline)))
}
function $as_Ljapgolly_scalajs_react_callback_Trampoline(obj) {
  return (($is_Ljapgolly_scalajs_react_callback_Trampoline(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.callback.Trampoline"))
}
function $isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_callback_Trampoline)))
}
function $asArrayOf_Ljapgolly_scalajs_react_callback_Trampoline(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.callback.Trampoline;", depth))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_Trampoline$() {
  this.Ljapgolly_scalajs_react_callback_Trampoline$__f_unit = null;
  $n_Ljapgolly_scalajs_react_callback_Trampoline$ = this;
  this.Ljapgolly_scalajs_react_callback_Trampoline$__f_unit = new $c_Ljapgolly_scalajs_react_callback_Trampoline$Pure((void 0))
}
$c_Ljapgolly_scalajs_react_callback_Trampoline$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_Trampoline$.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_Trampoline$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_Trampoline$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_callback_Trampoline$.prototype = $c_Ljapgolly_scalajs_react_callback_Trampoline$.prototype;
$c_Ljapgolly_scalajs_react_callback_Trampoline$.prototype.run__Ljapgolly_scalajs_react_callback_Trampoline__O = (function(initial) {
  var next = initial;
  var stack = [];
  while (true) {
    var x1 = next;
    if ((x1 instanceof $c_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap)) {
      var x2 = $as_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap(x1);
      stack.push($n(x2).Ljapgolly_scalajs_react_callback_Trampoline$FlatMap__f_f);
      next = $n(x2).Ljapgolly_scalajs_react_callback_Trampoline$FlatMap__f_from
    } else if (false) {
      var x3 = $as_Ljapgolly_scalajs_react_callback_Trampoline$Suspend(x1);
      next = $as_Ljapgolly_scalajs_react_callback_Trampoline($n($n(x3).suspension__F0()).apply__O())
    } else if ((x1 instanceof $c_Ljapgolly_scalajs_react_callback_Trampoline$Pure)) {
      var x4 = $as_Ljapgolly_scalajs_react_callback_Trampoline$Pure(x1);
      if (($uI(stack.length) === 0)) {
        return $n(x4).Ljapgolly_scalajs_react_callback_Trampoline$Pure__f_value
      } else {
        next = $as_Ljapgolly_scalajs_react_callback_Trampoline($n($as_F1(stack.pop())).apply__O__O($n(x4).Ljapgolly_scalajs_react_callback_Trampoline$Pure__f_value))
      }
    } else if ((x1 instanceof $c_Ljapgolly_scalajs_react_callback_Trampoline$Delay)) {
      var x5 = $as_Ljapgolly_scalajs_react_callback_Trampoline$Delay(x1);
      if (($uI(stack.length) === 0)) {
        return $n($n(x5).Ljapgolly_scalajs_react_callback_Trampoline$Delay__f_value).apply__O()
      } else {
        next = $as_Ljapgolly_scalajs_react_callback_Trampoline($n($as_F1(stack.pop())).apply__O__O($n($n(x5).Ljapgolly_scalajs_react_callback_Trampoline$Delay__f_value).apply__O()))
      }
    } else {
      throw new $c_s_MatchError(x1)
    }
  }
});
var $d_Ljapgolly_scalajs_react_callback_Trampoline$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_callback_Trampoline$: 0
}, false, "japgolly.scalajs.react.callback.Trampoline$", {
  Ljapgolly_scalajs_react_callback_Trampoline$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_callback_Trampoline$.prototype.$classData = $d_Ljapgolly_scalajs_react_callback_Trampoline$;
var $n_Ljapgolly_scalajs_react_callback_Trampoline$;
function $m_Ljapgolly_scalajs_react_callback_Trampoline$() {
  if ((!$n_Ljapgolly_scalajs_react_callback_Trampoline$)) {
    $n_Ljapgolly_scalajs_react_callback_Trampoline$ = new $c_Ljapgolly_scalajs_react_callback_Trampoline$()
  };
  return $n_Ljapgolly_scalajs_react_callback_Trampoline$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$.prototype = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$.prototype;
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$.prototype.fromReactComponentClass__sjs_js_Function1__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(rc, ctorType) {
  var x = $m_Ljapgolly_scalajs_react_component_Js$().component__sjs_js_Function1__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot(rc, ctorType);
  return $n($n(x).cmapCtorProps__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot(new $c_sjsr_AnonFunction1(((x$16$2) => {
    $m_Ljapgolly_scalajs_react_internal_Box$();
    var array = [new $c_T2("a", x$16$2)];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  })))).mapUnmounted__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot(new $c_sjsr_AnonFunction1(((x$17$2) => {
    var x$17 = $as_Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(x$17$2);
    return $n($n(x$17).mapUnmountedProps__F1__Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(new $c_sjsr_AnonFunction1(((x$18$2) => x$18$2.a)))).mapMounted__F1__Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(new $c_sjsr_AnonFunction1(((x$2) => {
      var x$1 = $as_Ljapgolly_scalajs_react_component_Js$MountedWithRoot(x$2);
      return new $c_Ljapgolly_scalajs_react_component_Scala$$anon$1(x$1)
    })))
  })))
});
var $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$: 0
}, false, "japgolly.scalajs.react.component.builder.ComponentBuilder$", {
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$;
var $n_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$;
function $m_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$() {
  if ((!$n_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$)) {
    $n_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$ = new $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$()
  };
  return $n_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep(name, initState, backendFn, renderFn, lifecycle) {
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_name = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_initState = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_backendFn = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_renderFn = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_name = name;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_initState = initState;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_backendFn = backendFn;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_renderFn = renderFn;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle = lifecycle
}
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep.prototype = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep.prototype;
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep.prototype.build__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(ctorType) {
  var c = $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$().apply__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__sjs_js_Function1(this);
  return $m_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$().fromReactComponentClass__sjs_js_Function1__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot(c, ctorType)
});
var $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep: 0
}, false, "japgolly.scalajs.react.component.builder.ComponentBuilder$LastStep", {
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1(name) {
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1__f_japgolly$scalajs$react$component$builder$ComponentBuilder$Step1$$name = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1__f_japgolly$scalajs$react$component$builder$ComponentBuilder$Step1$$name = name
}
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1.prototype = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1.prototype;
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1.prototype.hashCode__I = (function() {
  var this$ = this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1__f_japgolly$scalajs$react$component$builder$ComponentBuilder$Step1$$name;
  return $f_T__hashCode__I($n(this$))
});
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1.prototype.equals__O__Z = (function(x$1) {
  return $m_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$().equals$extension__T__O__Z(this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1__f_japgolly$scalajs$react$component$builder$ComponentBuilder$Step1$$name, x$1)
});
function $as_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.builder.ComponentBuilder$Step1"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.builder.ComponentBuilder$Step1;", depth))
}
var $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1: 0
}, false, "japgolly.scalajs.react.component.builder.ComponentBuilder$Step1", {
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$.prototype = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$.prototype;
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$.prototype.equals$extension__T__O__Z = (function(this$, x$1) {
  if ((x$1 instanceof $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1)) {
    var Step1$1 = ((x$1 === null) ? null : $n($as_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1(x$1)).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1__f_japgolly$scalajs$react$component$builder$ComponentBuilder$Step1$$name);
    return (this$ === Step1$1)
  } else {
    return false
  }
});
var $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$: 0
}, false, "japgolly.scalajs.react.component.builder.ComponentBuilder$Step1$", {
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$;
var $n_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$;
function $m_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$() {
  if ((!$n_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$)) {
    $n_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$ = new $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$()
  };
  return $n_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step1$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2(name, initState) {
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2__f_name = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2__f_initState = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2__f_name = name;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2__f_initState = initState
}
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2.prototype = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2.prototype;
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2.prototype.backend__F1__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3 = (function(f) {
  return new $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3(this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2__f_name, this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2__f_initState, f)
});
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2.prototype.noBackend__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3 = (function() {
  return this.backend__F1__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3(new $c_sjsr_AnonFunction1(((x$2$2) => {
    $as_Ljapgolly_scalajs_react_component_Generic$MountedWithRoot(x$2$2)
  })))
});
function $as_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.builder.ComponentBuilder$Step2"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.builder.ComponentBuilder$Step2;", depth))
}
var $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2: 0
}, false, "japgolly.scalajs.react.component.builder.ComponentBuilder$Step2", {
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step2;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3(name, initState, backendFn) {
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_name = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_initState = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_backendFn = null;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_name = name;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_initState = initState;
  this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_backendFn = backendFn
}
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3.prototype = $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3.prototype;
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3.prototype.renderWith__F1__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep = (function(r) {
  var lc = new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF($m_s_None$(), $m_s_None$(), $m_s_None$(), $m_s_None$(), $m_s_None$(), $m_s_None$(), $m_s_None$(), $m_s_None$(), $m_s_None$(), $m_s_None$());
  var x1 = this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_initState;
  if (false) {
    var x2 = $as_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromProps(x1);
    var f = $n(x2).fn__F1();
    var qual$1 = lc;
    var x$1 = new $c_s_Some(new $c_sjsr_AnonFunction2(((p$2, x$3$2) => new $c_s_Some($n(f).apply__O__O(p$2)))));
    var this$4 = $n(qual$1);
    var x$2 = this$4.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidCatch;
    var this$5 = $n(qual$1);
    var x$3$3 = this$5.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidMount;
    var this$6 = $n(qual$1);
    var x$4 = this$6.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidUpdate;
    var this$7 = $n(qual$1);
    var x$5 = this$7.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillMount;
    var this$8 = $n(qual$1);
    var x$6 = this$8.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillReceiveProps;
    var this$9 = $n(qual$1);
    var x$7 = this$9.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUnmount;
    var this$10 = $n(qual$1);
    var x$8 = this$10.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUpdate;
    var this$11 = $n(qual$1);
    var x$9 = this$11.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getSnapshotBeforeUpdate;
    var this$12 = $n(qual$1);
    var x$10 = this$12.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_shouldComponentUpdate;
    $n(qual$1);
    lc = new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF(x$2, x$3$3, x$4, x$5, x$6, x$7, x$8, x$1, x$9, x$10)
  } else if (false) {
    var x3 = $as_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromPropsAndState(x1);
    var f$2 = $n(x3).fn__F2();
    var qual$2 = lc;
    var x$11 = new $c_s_Some(new $c_sjsr_AnonFunction2(((p$3$2, s$2) => new $c_s_Some($n(f$2).apply__O__O__O(p$3$2, new $c_s_Some(s$2))))));
    var this$14 = $n(qual$2);
    var x$12 = this$14.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidCatch;
    var this$15 = $n(qual$2);
    var x$13 = this$15.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidMount;
    var this$16 = $n(qual$2);
    var x$14 = this$16.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidUpdate;
    var this$17 = $n(qual$2);
    var x$15 = this$17.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillMount;
    var this$18 = $n(qual$2);
    var x$16 = this$18.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillReceiveProps;
    var this$19 = $n(qual$2);
    var x$17 = this$19.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUnmount;
    var this$20 = $n(qual$2);
    var x$18 = this$20.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUpdate;
    var this$21 = $n(qual$2);
    var x$19 = this$21.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getSnapshotBeforeUpdate;
    var this$22 = $n(qual$2);
    var x$20 = this$22.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_shouldComponentUpdate;
    $n(qual$2);
    lc = new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF(x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$11, x$19, x$20)
  };
  return new $c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep(this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_name, this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_initState, this.Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3__f_backendFn, r, lc)
});
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3.prototype.renderStatic__Ljapgolly_scalajs_react_vdom_VdomNode__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep = (function(r) {
  return this.renderWith__F1__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep(new $c_sjsr_AnonFunction1(((x$4$2) => {
    $as_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope(x$4$2);
    return r
  })))
});
var $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3: 0
}, false, "japgolly.scalajs.react.component.builder.ComponentBuilder$Step3", {
  Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_ComponentBuilder$Step3;
function $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__($thiz, raw, f, a) {
  $thiz.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = raw;
  return $thiz
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base() {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base.prototype.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot = (function() {
  return $as_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw.mountedImpure)
});
function $as_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.builder.LifecycleF$Base"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.builder.LifecycleF$Base;", depth))
}
function $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$___defineProperties__sjs_js_Object__sjs_js_Array__V($thiz, target, props) {
  var len = $uI(props.length);
  var i = 0;
  while ((i < len)) {
    var arg1 = props[i];
    arg1.configurable = true;
    var $x_1 = $m_sjs_js_Any$ObjectCompanionOps$();
    var self = Object;
    if ($n($x_1).hasProperty$extension__sjs_js_Object$__sjs_js_Object__T__Z(self, arg1, "value")) {
      arg1.writable = true
    };
    Object.defineProperty(target, $as_T(arg1.key), arg1);
    i = ((1 + i) | 0)
  }
}
function $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$___createClass__sjs_js_Object__sjs_js_Array__sjs_js_Array__V($thiz, c, protoProps, staticProps) {
  $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$___defineProperties__sjs_js_Object__sjs_js_Array__V($thiz, c.prototype, protoProps);
  $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$___defineProperties__sjs_js_Object__sjs_js_Array__V($thiz, c, staticProps)
}
function $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$___possibleConstructorReturn__sjs_js_Any__sjs_js_Any__sjs_js_Any($thiz, self, call) {
  return (($uZ((call instanceof Object)) || $uZ((call instanceof Function))) ? call : self)
}
function $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$___inherits__sjs_js_Object__sjs_js_Object__V($thiz, subClass, superClass) {
  var $x_3 = Object;
  var $x_2 = superClass.prototype;
  var array = [new $c_T2("value", subClass), new $c_T2("enumerable", false), new $c_T2("writable", true), new $c_T2("configurable", true)];
  var fields = new $c_sjsr_WrappedVarArgs(array);
  var array$1 = [new $c_T2("constructor", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields))];
  var fields$1 = new $c_sjsr_WrappedVarArgs(array$1);
  var $x_1 = $x_3.create($x_2, $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1));
  subClass.prototype = $x_1;
  (0, $thiz.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f__setPrototypeOf)(subClass, superClass)
}
function $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__boxStateOrNull__s_Option__Ljapgolly_scalajs_react_internal_Box($thiz, o) {
  var x = $m_s_None$();
  if ((x === o)) {
    return null
  } else if ((o instanceof $c_s_Some)) {
    var x3 = $as_s_Some(o);
    var s2 = $n(x3).s_Some__f_value;
    $m_Ljapgolly_scalajs_react_internal_Box$();
    var array = [new $c_T2("a", s2)];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  } else {
    throw new $c_s_MatchError(o)
  }
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$() {
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_x$4 = null;
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f__getPrototypeOf = null;
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f__setPrototypeOf = null;
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_ReactComponent = null;
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_anyToBoxUnit = null;
  $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ = this;
  var f = Object.setPrototypeOf;
  var x1 = ((f === (void 0)) ? $m_s_None$() : new $c_s_Some(f));
  if ((x1 instanceof $c_s_Some)) {
    var x2 = $as_s_Some(x1);
    var set = $n(x2).s_Some__f_value;
    var _1 = new $c_sjsr_AnonFunction1(((o$2) => Object.getPrototypeOf(o$2)));
    var x1$2___1 = _1;
    var x1$2___2 = set
  } else {
    var x = $m_s_None$();
    if ((!(x === x1))) {
      throw new $c_s_MatchError(x1)
    };
    var get = new $c_sjsr_AnonFunction1(((x$1$2) => x$1$2.__proto__));
    var set$2 = ((arg1$2, arg2$2) => {
      $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$().japgolly$scalajs$react$component$builder$ViaReactComponent$$$anonfun$x$4$3__sjs_js_Object__sjs_js_Object__V(arg1$2, arg2$2)
    });
    var x1$2___1 = get;
    var x1$2___2 = set$2
  };
  var _getPrototypeOf = $as_F1(x1$2___1);
  var _setPrototypeOf = x1$2___2;
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_x$4 = new $c_T2(_getPrototypeOf, _setPrototypeOf);
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f__getPrototypeOf = $as_F1($n(this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_x$4)._1__O());
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f__setPrototypeOf = $n(this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_x$4)._2__O();
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_ReactComponent = React.Component;
  this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_anyToBoxUnit = new $c_sjsr_AnonFunction1(((x$5$2) => $m_Ljapgolly_scalajs_react_internal_Box$().Ljapgolly_scalajs_react_internal_Box$__f_Unit))
}
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$.prototype = $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$.prototype;
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$.prototype.japgolly$scalajs$react$component$builder$ViaReactComponent$$Method__T__sjs_js_Any__Ljapgolly_scalajs_react_component_builder_ViaReactComponent$Method = (function(_key, _value) {
  var array = [new $c_T2("key", _key), new $c_T2("value", _value)];
  var fields = new $c_sjsr_WrappedVarArgs(array);
  return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$.prototype.apply__Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__sjs_js_Function1 = (function(builder) {
  var backendFn = $n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_backendFn;
  var renderFn = $n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_renderFn;
  var x1 = $n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_initState;
  if (false) {
    var x2 = $as_Ljapgolly_scalajs_react_component_builder_InitState$InitialState(x1);
    var f = $n(x2).fn__F1();
    var initStateFn = f
  } else if (false) {
    var x3 = $as_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromPropsAndState(x1);
    var f$2 = $n(x3).fn__F2();
    var initStateFn = new $c_sjsr_AnonFunction1(((bp$2) => {
      $m_Ljapgolly_scalajs_react_internal_Box$();
      var value = $n(f$2).apply__O__O__O(bp$2.a, $m_s_None$());
      var array = [new $c_T2("a", value)];
      var fields = new $c_sjsr_WrappedVarArgs(array);
      return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
    }))
  } else {
    var initStateFn = this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_anyToBoxUnit
  };
  var MyComponent = new $c_sr_ObjectRef(null);
  MyComponent.sr_ObjectRef__f_elem = (function(arg1$2) {
    return $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$().japgolly$scalajs$react$component$builder$ViaReactComponent$$$anonfun$apply$2__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_internal_Box__sr_ObjectRef__F1__F1__Ljapgolly_scalajs_react_facade_React$Component(this, arg1$2, MyComponent, backendFn, initStateFn)
  });
  $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$___inherits__sjs_js_Object__sjs_js_Object__V(this, MyComponent.sr_ObjectRef__f_elem, this.Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f_ReactComponent);
  var protoProps = $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().$lessinit$greater$default$1__sjs_js_Array();
  var staticProps = $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$().$lessinit$greater$default$1__sjs_js_Array();
  $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add0$extension__sjs_js_Array__T__F1__V(protoProps, "render", new $c_sjsr_AnonFunction1(((_this$2) => {
    var this$8 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
    var $x_1 = this$8.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
    var this$9 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
    return $n($as_Ljapgolly_scalajs_react_vdom_VdomNode($n(renderFn).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope(_this$2, $x_1, this$9.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).rawNode__sjs_js_$bar()
  })));
  var this$10 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidCatch);
  if ((!this$10.isEmpty__Z())) {
    var arg1 = this$10.get__O();
    var f$3 = $as_F1(arg1);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add2$extension__sjs_js_Array__T__F3__V(protoProps, "componentDidCatch", new $c_sjsr_AnonFunction3(((_this$2$1, e$2, i$2) => {
      var this$12 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      $n(this$12.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var this$14 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var $x_2 = this$14.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
      var this$15 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var this$ = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f$3).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch(_this$2$1, e$2, i$2, $x_2, this$15.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
      var this$17 = $n(this$);
      $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$17)
    })))
  };
  var this$18 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidMount);
  if ((!this$18.isEmpty__Z())) {
    var arg1$1 = this$18.get__O();
    var f$4 = $as_F1(arg1$1);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add0$extension__sjs_js_Array__T__F1__V(protoProps, "componentDidMount", new $c_sjsr_AnonFunction1(((_this$2$2) => {
      var this$20 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      $n(this$20.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var this$22 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var $x_3 = this$22.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
      var this$23 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var this$$1 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f$4).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount(_this$2$2, $x_3, this$23.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
      var this$25 = $n(this$$1);
      $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$25)
    })))
  };
  var this$26 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidUpdate);
  if ((!this$26.isEmpty__Z())) {
    var arg1$3 = this$26.get__O();
    var f$5 = $as_F1(arg1$3);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add3$extension__sjs_js_Array__T__F4__V(protoProps, "componentDidUpdate", new $c_sjsr_AnonFunction4(((_this$2$3, p$2, s$2, ss$2) => {
      var this$28 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      $n(this$28.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var $x_6 = p$2.a;
      var $x_5 = s$2.a;
      var this$30 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var $x_4 = this$30.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
      var this$31 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var this$$2 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f$5).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate(_this$2$3, $x_6, $x_5, ss$2, $x_4, this$31.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
      var this$33 = $n(this$$2);
      $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$33)
    })))
  };
  var this$34 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillMount);
  if ((!this$34.isEmpty__Z())) {
    var arg1$4 = this$34.get__O();
    var f$6 = $as_F1(arg1$4);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add0$extension__sjs_js_Array__T__F1__V(protoProps, "componentWillMount", new $c_sjsr_AnonFunction1(((_this$2$4) => {
      var this$36 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      $n(this$36.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var this$38 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var $x_7 = this$38.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
      var this$39 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var this$$3 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f$6).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount(_this$2$4, $x_7, this$39.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
      var this$41 = $n(this$$3);
      $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$41)
    })))
  };
  var this$42 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillReceiveProps);
  if ((!this$42.isEmpty__Z())) {
    var arg1$5 = this$42.get__O();
    var f$7 = $as_F1(arg1$5);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add1$extension__sjs_js_Array__T__F2__V(protoProps, "componentWillReceiveProps", new $c_sjsr_AnonFunction2(((_this$2$5, p$2$1) => {
      var this$44 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      $n(this$44.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var $x_9 = p$2$1.a;
      var this$46 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var $x_8 = this$46.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
      var this$47 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var this$$4 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f$7).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps(_this$2$5, $x_9, $x_8, this$47.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
      var this$49 = $n(this$$4);
      $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$49)
    })))
  };
  var this$50 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUnmount);
  if ((!this$50.isEmpty__Z())) {
    var arg1$6 = this$50.get__O();
    var f$8 = $as_F1(arg1$6);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add0$extension__sjs_js_Array__T__F1__V(protoProps, "componentWillUnmount", new $c_sjsr_AnonFunction1(((_this$2$6) => {
      var this$52 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      $n(this$52.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var this$54 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var $x_10 = this$54.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
      var this$55 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var this$$5 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f$8).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount(_this$2$6, $x_10, this$55.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
      var this$57 = $n(this$$5);
      $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$57)
    })))
  };
  var this$58 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUpdate);
  if ((!this$58.isEmpty__Z())) {
    var arg1$7 = this$58.get__O();
    var f$9 = $as_F1(arg1$7);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add2$extension__sjs_js_Array__T__F3__V(protoProps, "componentWillUpdate", new $c_sjsr_AnonFunction3(((_this$2$7, p$2$2, s$2$1) => {
      var this$60 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      $n(this$60.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var $x_13 = p$2$2.a;
      var $x_12 = s$2$1.a;
      var this$62 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var $x_11 = this$62.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
      var this$63 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var this$$6 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f$9).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate(_this$2$7, $x_13, $x_12, $x_11, this$63.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
      var this$65 = $n(this$$6);
      $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$65)
    })))
  };
  var this$66 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getDerivedStateFromProps);
  if ((!this$66.isEmpty__Z())) {
    var arg1$8 = this$66.get__O();
    var f$10 = $as_F2(arg1$8);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$().add2$extension__sjs_js_Array__T__F2__V(staticProps, "getDerivedStateFromProps", new $c_sjsr_AnonFunction2(((p$2$3, s$2$2) => $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__boxStateOrNull__s_Option__Ljapgolly_scalajs_react_internal_Box($m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$(), $as_s_Option($n(f$10).apply__O__O__O(p$2$3.a, s$2$2.a))))))
  };
  var this$68 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getSnapshotBeforeUpdate);
  if ((!this$68.isEmpty__Z())) {
    var arg1$9 = this$68.get__O();
    var f$11 = $as_F1(arg1$9);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add2$extension__sjs_js_Array__T__F3__V(protoProps, "getSnapshotBeforeUpdate", new $c_sjsr_AnonFunction3(((_this$2$8, p$2$4, s$2$3) => {
      var this$70 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      $n(this$70.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var $x_16 = p$2$4.a;
      var $x_15 = s$2$3.a;
      var this$72 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var $x_14 = this$72.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
      var this$73 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var this$$7 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f$11).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate(_this$2$8, $x_16, $x_15, $x_14, this$73.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
      var this$75 = $n(this$$7);
      return $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$75)
    })))
  };
  var this$76 = $n($n($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_lifecycle).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_shouldComponentUpdate);
  if ((!this$76.isEmpty__Z())) {
    var arg1$10 = this$76.get__O();
    var f$12 = $as_F1(arg1$10);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add2$extension__sjs_js_Array__T__F3__V(protoProps, "shouldComponentUpdate", new $c_sjsr_AnonFunction3(((_this$2$9, p$2$5, s$2$4) => {
      var this$78 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      $n(this$78.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync);
      var $x_19 = p$2$5.a;
      var $x_18 = s$2$4.a;
      var this$80 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var $x_17 = this$80.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
      var this$81 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
      var this$$8 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f$12).apply__O__O(new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate(_this$2$9, $x_19, $x_18, $x_17, this$81.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async)))).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
      var this$83 = $n(this$$8);
      return $uZ($m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$83))
    })))
  };
  var this$84 = $n($m_s_Option$().apply__O__s_Option($n(builder).Ljapgolly_scalajs_react_component_builder_ComponentBuilder$LastStep__f_name));
  if ((!this$84.isEmpty__Z())) {
    var arg1$11 = this$84.get__O();
    var n = $as_T(arg1$11);
    $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$().add$extension__sjs_js_Array__T__sjs_js_Any__V(staticProps, "displayName", n)
  };
  $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$___createClass__sjs_js_Object__sjs_js_Array__sjs_js_Array__V(this, MyComponent.sr_ObjectRef__f_elem, protoProps, staticProps);
  return MyComponent.sr_ObjectRef__f_elem
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$.prototype.japgolly$scalajs$react$component$builder$ViaReactComponent$$$anonfun$x$4$3__sjs_js_Object__sjs_js_Object__V = (function(x$2, x$3) {
  x$2.__proto__ = x$3
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$.prototype.japgolly$scalajs$react$component$builder$ViaReactComponent$$$anonfun$apply$2__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_internal_Box__sr_ObjectRef__F1__F1__Ljapgolly_scalajs_react_facade_React$Component = (function(this$1, props, MyComponent$1, backendFn$1, initStateFn$1) {
  var _this = $p_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$___possibleConstructorReturn__sjs_js_Any__sjs_js_Any__sjs_js_Any($m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$(), this$1, $n($m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$().Ljapgolly_scalajs_react_component_builder_ViaReactComponent$__f__getPrototypeOf).apply__O__O($n(MyComponent$1).sr_ObjectRef__f_elem).call(this$1, props));
  var this$3 = new $c_Ljapgolly_scalajs_react_component_Js$$anon$3(_this);
  _this.mountedImpure = new $c_Ljapgolly_scalajs_react_component_Scala$$anon$1(this$3);
  var this$6 = $n($as_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(_this.mountedImpure));
  var this$5 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
  var G = this$5.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync;
  _this.mountedPure = $as_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(this$6.withEffect__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot(G));
  _this.backend = $n(backendFn$1).apply__O__O($as_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(_this.mountedPure));
  _this.state = $n(initStateFn$1).apply__O__O(props);
  return _this
});
var $d_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_ViaReactComponent$: 0
}, false, "japgolly.scalajs.react.component.builder.ViaReactComponent$", {
  Ljapgolly_scalajs_react_component_builder_ViaReactComponent$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$;
var $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$;
function $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$() {
  if ((!$n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$)) {
    $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ = new $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$()
  };
  return $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype = $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype;
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype.$lessinit$greater$default$1__sjs_js_Array = (function() {
  return []
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype.add$extension__sjs_js_Array__T__sjs_js_Any__V = (function(this$, k, v) {
  this$.push($m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$().japgolly$scalajs$react$component$builder$ViaReactComponent$$Method__T__sjs_js_Any__Ljapgolly_scalajs_react_component_builder_ViaReactComponent$Method(k, v))
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype.add0$extension__sjs_js_Array__T__F1__V = (function(this$, k, f) {
  $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add$extension__sjs_js_Array__T__sjs_js_Any__V(this$, k, $m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(f))
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype.add1$extension__sjs_js_Array__T__F2__V = (function(this$, k, f) {
  $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add$extension__sjs_js_Array__T__sjs_js_Any__V(this$, k, $m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(f))
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype.add2$extension__sjs_js_Array__T__F3__V = (function(this$, k, f) {
  $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add$extension__sjs_js_Array__T__sjs_js_Any__V(this$, k, $m_sjs_js_ThisFunction$().fromFunction3__F3__sjs_js_ThisFunction2(f))
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype.add3$extension__sjs_js_Array__T__F4__V = (function(this$, k, f) {
  $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$().add$extension__sjs_js_Array__T__sjs_js_Any__V(this$, k, $m_sjs_js_ThisFunction$().fromFunction4__F4__sjs_js_ThisFunction3(f))
});
var $d_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$: 0
}, false, "japgolly.scalajs.react.component.builder.ViaReactComponent$ProtoProps$", {
  Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$;
var $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$;
function $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$() {
  if ((!$n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$)) {
    $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$ = new $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$()
  };
  return $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$ProtoProps$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$.prototype = $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$.prototype;
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$.prototype.$lessinit$greater$default$1__sjs_js_Array = (function() {
  return []
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$.prototype.add$extension__sjs_js_Array__T__sjs_js_Any__V = (function(this$, k, v) {
  this$.push($m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$().japgolly$scalajs$react$component$builder$ViaReactComponent$$Method__T__sjs_js_Any__Ljapgolly_scalajs_react_component_builder_ViaReactComponent$Method(k, v))
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$.prototype.add2$extension__sjs_js_Array__T__F2__V = (function(this$, k, f) {
  $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$().add$extension__sjs_js_Array__T__sjs_js_Any__V(this$, k, $m_sjs_js_Any$().fromFunction2__F2__sjs_js_Function2(f))
});
var $d_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$: 0
}, false, "japgolly.scalajs.react.component.builder.ViaReactComponent$StaticProps$", {
  Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$;
var $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$;
function $m_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$() {
  if ((!$n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$)) {
    $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$ = new $c_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$()
  };
  return $n_Ljapgolly_scalajs_react_component_builder_ViaReactComponent$StaticProps$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_internal_Box$() {
  this.Ljapgolly_scalajs_react_internal_Box$__f_Unit = null;
  $n_Ljapgolly_scalajs_react_internal_Box$ = this;
  $m_Ljapgolly_scalajs_react_internal_Box$();
  var array = [new $c_T2("a", (void 0))];
  var fields = new $c_sjsr_WrappedVarArgs(array);
  this.Ljapgolly_scalajs_react_internal_Box$__f_Unit = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
}
$c_Ljapgolly_scalajs_react_internal_Box$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_internal_Box$.prototype.constructor = $c_Ljapgolly_scalajs_react_internal_Box$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_internal_Box$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_internal_Box$.prototype = $c_Ljapgolly_scalajs_react_internal_Box$.prototype;
var $d_Ljapgolly_scalajs_react_internal_Box$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_internal_Box$: 0
}, false, "japgolly.scalajs.react.internal.Box$", {
  Ljapgolly_scalajs_react_internal_Box$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_internal_Box$.prototype.$classData = $d_Ljapgolly_scalajs_react_internal_Box$;
var $n_Ljapgolly_scalajs_react_internal_Box$;
function $m_Ljapgolly_scalajs_react_internal_Box$() {
  if ((!$n_Ljapgolly_scalajs_react_internal_Box$)) {
    $n_Ljapgolly_scalajs_react_internal_Box$ = new $c_Ljapgolly_scalajs_react_internal_Box$()
  };
  return $n_Ljapgolly_scalajs_react_internal_Box$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_internal_Lens(get, set) {
  this.Ljapgolly_scalajs_react_internal_Lens__f_get = null;
  this.Ljapgolly_scalajs_react_internal_Lens__f_set = null;
  this.Ljapgolly_scalajs_react_internal_Lens__f_get = get;
  this.Ljapgolly_scalajs_react_internal_Lens__f_set = set;
  new $c_sjsr_AnonFunction1(((f$2) => {
    var f = $as_F1(f$2);
    return new $c_sjsr_AnonFunction1(((a$2) => $n($as_F1($n(this.Ljapgolly_scalajs_react_internal_Lens__f_set).apply__O__O($n(f).apply__O__O($n(this.Ljapgolly_scalajs_react_internal_Lens__f_get).apply__O__O(a$2))))).apply__O__O(a$2)))
  }))
}
$c_Ljapgolly_scalajs_react_internal_Lens.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_internal_Lens.prototype.constructor = $c_Ljapgolly_scalajs_react_internal_Lens;
/** @constructor */
function $h_Ljapgolly_scalajs_react_internal_Lens() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_internal_Lens.prototype = $c_Ljapgolly_scalajs_react_internal_Lens.prototype;
var $d_Ljapgolly_scalajs_react_internal_Lens = new $TypeData().initClass({
  Ljapgolly_scalajs_react_internal_Lens: 0
}, false, "japgolly.scalajs.react.internal.Lens", {
  Ljapgolly_scalajs_react_internal_Lens: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_internal_Lens.prototype.$classData = $d_Ljapgolly_scalajs_react_internal_Lens;
function $p_Ljapgolly_scalajs_react_internal_Lens$___id__Ljapgolly_scalajs_react_internal_Lens($thiz) {
  var get = new $c_sjsr_AnonFunction1(((a$2) => a$2));
  var set = new $c_sjsr_AnonFunction1(((a$3$2) => new $c_sjsr_AnonFunction1(((x$5$2) => a$3$2))));
  return new $c_Ljapgolly_scalajs_react_internal_Lens(get, set)
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_internal_Lens$() {
  this.Ljapgolly_scalajs_react_internal_Lens$__f_idInstance = null;
  $n_Ljapgolly_scalajs_react_internal_Lens$ = this;
  this.Ljapgolly_scalajs_react_internal_Lens$__f_idInstance = $p_Ljapgolly_scalajs_react_internal_Lens$___id__Ljapgolly_scalajs_react_internal_Lens(this)
}
$c_Ljapgolly_scalajs_react_internal_Lens$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_internal_Lens$.prototype.constructor = $c_Ljapgolly_scalajs_react_internal_Lens$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_internal_Lens$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_internal_Lens$.prototype = $c_Ljapgolly_scalajs_react_internal_Lens$.prototype;
var $d_Ljapgolly_scalajs_react_internal_Lens$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_internal_Lens$: 0
}, false, "japgolly.scalajs.react.internal.Lens$", {
  Ljapgolly_scalajs_react_internal_Lens$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_internal_Lens$.prototype.$classData = $d_Ljapgolly_scalajs_react_internal_Lens$;
var $n_Ljapgolly_scalajs_react_internal_Lens$;
function $m_Ljapgolly_scalajs_react_internal_Lens$() {
  if ((!$n_Ljapgolly_scalajs_react_internal_Lens$)) {
    $n_Ljapgolly_scalajs_react_internal_Lens$ = new $c_Ljapgolly_scalajs_react_internal_Lens$()
  };
  return $n_Ljapgolly_scalajs_react_internal_Lens$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_internal_Singleton(value, mutableObj) {
  this.Ljapgolly_scalajs_react_internal_Singleton__f_value = null;
  this.Ljapgolly_scalajs_react_internal_Singleton__f_mutableObj = null;
  this.Ljapgolly_scalajs_react_internal_Singleton__f_value = value;
  this.Ljapgolly_scalajs_react_internal_Singleton__f_mutableObj = mutableObj
}
$c_Ljapgolly_scalajs_react_internal_Singleton.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_internal_Singleton.prototype.constructor = $c_Ljapgolly_scalajs_react_internal_Singleton;
/** @constructor */
function $h_Ljapgolly_scalajs_react_internal_Singleton() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_internal_Singleton.prototype = $c_Ljapgolly_scalajs_react_internal_Singleton.prototype;
var $d_Ljapgolly_scalajs_react_internal_Singleton = new $TypeData().initClass({
  Ljapgolly_scalajs_react_internal_Singleton: 0
}, false, "japgolly.scalajs.react.internal.Singleton", {
  Ljapgolly_scalajs_react_internal_Singleton: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_internal_Singleton.prototype.$classData = $d_Ljapgolly_scalajs_react_internal_Singleton;
/** @constructor */
function $c_Ljapgolly_scalajs_react_internal_Singleton$() {
  this.Ljapgolly_scalajs_react_internal_Singleton$__f_BoxUnit = null;
  $n_Ljapgolly_scalajs_react_internal_Singleton$ = this;
  new $c_Ljapgolly_scalajs_react_internal_Singleton(null, new $c_sjsr_AnonFunction0((() => ({}))));
  new $c_Ljapgolly_scalajs_react_internal_Singleton((void 0), new $c_sjsr_AnonFunction0((() => ({}))));
  this.Ljapgolly_scalajs_react_internal_Singleton$__f_BoxUnit = new $c_Ljapgolly_scalajs_react_internal_Singleton($m_Ljapgolly_scalajs_react_internal_Box$().Ljapgolly_scalajs_react_internal_Box$__f_Unit, new $c_sjsr_AnonFunction0((() => {
    $m_Ljapgolly_scalajs_react_internal_Box$();
    var array = [new $c_T2("a", (void 0))];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  })))
}
$c_Ljapgolly_scalajs_react_internal_Singleton$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_internal_Singleton$.prototype.constructor = $c_Ljapgolly_scalajs_react_internal_Singleton$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_internal_Singleton$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_internal_Singleton$.prototype = $c_Ljapgolly_scalajs_react_internal_Singleton$.prototype;
var $d_Ljapgolly_scalajs_react_internal_Singleton$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_internal_Singleton$: 0
}, false, "japgolly.scalajs.react.internal.Singleton$", {
  Ljapgolly_scalajs_react_internal_Singleton$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_internal_Singleton$.prototype.$classData = $d_Ljapgolly_scalajs_react_internal_Singleton$;
var $n_Ljapgolly_scalajs_react_internal_Singleton$;
function $m_Ljapgolly_scalajs_react_internal_Singleton$() {
  if ((!$n_Ljapgolly_scalajs_react_internal_Singleton$)) {
    $n_Ljapgolly_scalajs_react_internal_Singleton$ = new $c_Ljapgolly_scalajs_react_internal_Singleton$()
  };
  return $n_Ljapgolly_scalajs_react_internal_Singleton$
}
function $p_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__id$lzycompute__Ljapgolly_scalajs_react_util_Effect$UnsafeSync($thiz) {
  if ((!$thiz.Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__f_bitmap$0)) {
    $thiz.Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__f_id = new $c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1();
    $thiz.Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__f_bitmap$0 = true
  };
  return $thiz.Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__f_id
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$() {
  this.Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__f_id = null;
  this.Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__f_bitmap$0 = false
}
$c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$.prototype = $c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$.prototype;
$c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$.prototype.id__Ljapgolly_scalajs_react_util_Effect$UnsafeSync = (function() {
  return ((!this.Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__f_bitmap$0) ? $p_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__id$lzycompute__Ljapgolly_scalajs_react_util_Effect$UnsafeSync(this) : this.Ljapgolly_scalajs_react_util_Effect$UnsafeSync$__f_id)
});
var $d_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_util_Effect$UnsafeSync$: 0
}, false, "japgolly.scalajs.react.util.Effect$UnsafeSync$", {
  Ljapgolly_scalajs_react_util_Effect$UnsafeSync$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$.prototype.$classData = $d_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$;
var $n_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$;
function $m_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$() {
  if ((!$n_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$)) {
    $n_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$ = new $c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$()
  };
  return $n_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_Util$() {
  this.Ljapgolly_scalajs_react_util_Util$__f_identity = null;
  $n_Ljapgolly_scalajs_react_util_Util$ = this;
  this.Ljapgolly_scalajs_react_util_Util$__f_identity = new $c_sjsr_AnonFunction1(((a$2) => a$2))
}
$c_Ljapgolly_scalajs_react_util_Util$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_Util$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_Util$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_Util$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_util_Util$.prototype = $c_Ljapgolly_scalajs_react_util_Util$.prototype;
var $d_Ljapgolly_scalajs_react_util_Util$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_util_Util$: 0
}, false, "japgolly.scalajs.react.util.Util$", {
  Ljapgolly_scalajs_react_util_Util$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_util_Util$.prototype.$classData = $d_Ljapgolly_scalajs_react_util_Util$;
var $n_Ljapgolly_scalajs_react_util_Util$;
function $m_Ljapgolly_scalajs_react_util_Util$() {
  if ((!$n_Ljapgolly_scalajs_react_util_Util$)) {
    $n_Ljapgolly_scalajs_react_util_Util$ = new $c_Ljapgolly_scalajs_react_util_Util$()
  };
  return $n_Ljapgolly_scalajs_react_util_Util$
}
function $ct_Ljapgolly_scalajs_react_vdom_Attr__T__($thiz, attrName) {
  $thiz.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = attrName;
  return $thiz
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr() {
  this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = null
}
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_Attr.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr.prototype;
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype.toString__T = (function() {
  return (("VdomAttr{name=" + this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName) + "}")
});
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype.hashCode__I = (function() {
  return $f_T__hashCode__I($n(this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName))
});
$c_Ljapgolly_scalajs_react_vdom_Attr.prototype.equals__O__Z = (function(any) {
  if ((any instanceof $c_Ljapgolly_scalajs_react_vdom_Attr)) {
    var x2 = $as_Ljapgolly_scalajs_react_vdom_Attr(any);
    return (this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName === $n(x2).Ljapgolly_scalajs_react_vdom_Attr__f_attrName)
  } else {
    return false
  }
});
function $as_Ljapgolly_scalajs_react_vdom_Attr(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_vdom_Attr) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.vdom.Attr"))
}
function $isArrayOf_Ljapgolly_scalajs_react_vdom_Attr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_vdom_Attr)))
}
function $asArrayOf_Ljapgolly_scalajs_react_vdom_Attr(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_vdom_Attr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.vdom.Attr;", depth))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_vdom_Attr$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_Attr$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_Attr$.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_Attr$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_Attr$: 0
}, false, "japgolly.scalajs.react.vdom.Attr$", {
  Ljapgolly_scalajs_react_vdom_Attr$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_Attr$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_Attr$;
var $n_Ljapgolly_scalajs_react_vdom_Attr$;
function $m_Ljapgolly_scalajs_react_vdom_Attr$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_Attr$)) {
    $n_Ljapgolly_scalajs_react_vdom_Attr$ = new $c_Ljapgolly_scalajs_react_vdom_Attr$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_Attr$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$() {
  this.Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_direct = null;
  this.Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_string = null;
  $n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$ = this;
  var fn = new $c_sjsr_AnonFunction2(((x$4$2, x$5$2) => {
    var x$4 = $as_F1(x$4$2);
    $n(x$4).apply__O__O(x$5$2)
  }));
  this.Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_direct = fn;
  var fn$1 = new $c_sjsr_AnonFunction2(((x$6$2, x$7$2) => {
    var x$6 = $as_F1(x$6$2);
    var x$7 = $as_T(x$7$2);
    $n(x$6).apply__O__O(x$7)
  }));
  this.Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_string = fn$1
}
$c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr$ValueType$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype;
$c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype.apply$extension__F2__T__O__Ljapgolly_scalajs_react_vdom_TagMod = (function(this$, name, value) {
  $m_Ljapgolly_scalajs_react_vdom_TagMod$();
  var f = new $c_sjsr_AnonFunction1(((b$2) => {
    var b = $as_Ljapgolly_scalajs_react_vdom_VdomBuilder(b$2);
    $n(this$).apply__O__O__O(new $c_sjsr_AnonFunction1(((x$3$2) => {
      $n($n(b).Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addAttr).apply__O__O__O(name, x$3$2)
    })), value)
  }));
  return new $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3(f)
});
var $d_Ljapgolly_scalajs_react_vdom_Attr$ValueType$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_Attr$ValueType$: 0
}, false, "japgolly.scalajs.react.vdom.Attr$ValueType$", {
  Ljapgolly_scalajs_react_vdom_Attr$ValueType$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_Attr$ValueType$;
var $n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$;
function $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$)) {
    $n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$ = new $c_Ljapgolly_scalajs_react_vdom_Attr$ValueType$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_Attr$ValueType$
}
function $ct_Ljapgolly_scalajs_react_vdom_Exports__($thiz) {
  $m_Ljapgolly_scalajs_react_vdom_VdomNode$();
  $thiz.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$();
  $m_Ljapgolly_scalajs_react_vdom_TagMod$();
  $thiz.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = $m_Ljapgolly_scalajs_react_vdom_Attr$();
  $m_Ljapgolly_scalajs_react_vdom_VdomNode$();
  return $thiz
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Exports() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null
}
$c_Ljapgolly_scalajs_react_vdom_Exports.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_Exports.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Exports;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Exports() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_Exports.prototype = $c_Ljapgolly_scalajs_react_vdom_Exports.prototype;
function $f_Ljapgolly_scalajs_react_vdom_HtmlAttrs__$init$__V($thiz) {
  new $c_Ljapgolly_scalajs_react_vdom_Attr$Event("onChange");
  new $c_Ljapgolly_scalajs_react_vdom_Attr$Event("onClick");
  new $c_Ljapgolly_scalajs_react_vdom_Attr$Event("onClickCapture");
  $thiz.Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_src = ($n($m_Ljapgolly_scalajs_react_vdom_PackageBase$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr), new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("src"));
  $n($m_Ljapgolly_scalajs_react_vdom_PackageBase$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("title");
  $n($m_Ljapgolly_scalajs_react_vdom_PackageBase$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("type");
  $n($m_Ljapgolly_scalajs_react_vdom_PackageBase$().Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr);
  new $c_Ljapgolly_scalajs_react_vdom_Attr$Generic("value")
}
function $f_Ljapgolly_scalajs_react_vdom_HtmlTags__br__T($thiz) {
  return "br"
}
function $f_Ljapgolly_scalajs_react_vdom_HtmlTags__img__T($thiz) {
  return "img"
}
function $is_Ljapgolly_scalajs_react_vdom_TagMod(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_vdom_TagMod)))
}
function $as_Ljapgolly_scalajs_react_vdom_TagMod(obj) {
  return (($is_Ljapgolly_scalajs_react_vdom_TagMod(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.vdom.TagMod"))
}
function $isArrayOf_Ljapgolly_scalajs_react_vdom_TagMod(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_vdom_TagMod)))
}
function $asArrayOf_Ljapgolly_scalajs_react_vdom_TagMod(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_vdom_TagMod(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.vdom.TagMod;", depth))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_TagMod$() {
  $n_Ljapgolly_scalajs_react_vdom_TagMod$ = this;
  new $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2()
}
$c_Ljapgolly_scalajs_react_vdom_TagMod$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_TagMod$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_TagMod$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_TagMod$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_TagMod$.prototype = $c_Ljapgolly_scalajs_react_vdom_TagMod$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_TagMod$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_TagMod$: 0
}, false, "japgolly.scalajs.react.vdom.TagMod$", {
  Ljapgolly_scalajs_react_vdom_TagMod$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_TagMod$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_TagMod$;
var $n_Ljapgolly_scalajs_react_vdom_TagMod$;
function $m_Ljapgolly_scalajs_react_vdom_TagMod$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_TagMod$)) {
    $n_Ljapgolly_scalajs_react_vdom_TagMod$ = new $c_Ljapgolly_scalajs_react_vdom_TagMod$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_TagMod$
}
function $is_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_vdom_VdomBuilder)))
}
function $as_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj) {
  return (($is_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.vdom.VdomBuilder"))
}
function $isArrayOf_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_vdom_VdomBuilder)))
}
function $asArrayOf_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_vdom_VdomBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.vdom.VdomBuilder;", depth))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$() {
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$__f_build = null;
  $n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$ = this;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$__f_build = new $c_sjsr_AnonFunction4(((tag$2, props$2, key$2, children$2) => {
    var tag = $as_T(tag$2);
    if ((key$2 !== (void 0))) {
      props$2.key = key$2
    };
    var $x_1 = React;
    var seq = $m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), children$2));
    return $x_1.createElement(tag, props$2, ...$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(seq))
  }))
}
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$.prototype = $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$: 0
}, false, "japgolly.scalajs.react.vdom.VdomBuilder$ToRawReactElement$", {
  Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$;
var $n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$;
function $m_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$)) {
    $n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$ = new $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_VdomNode$() {
  this.Ljapgolly_scalajs_react_vdom_VdomNode$__f_empty = null;
  $n_Ljapgolly_scalajs_react_vdom_VdomNode$ = this;
  this.Ljapgolly_scalajs_react_vdom_VdomNode$__f_empty = new $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(null)
}
$c_Ljapgolly_scalajs_react_vdom_VdomNode$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_VdomNode$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_VdomNode$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_VdomNode$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_VdomNode$.prototype = $c_Ljapgolly_scalajs_react_vdom_VdomNode$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_VdomNode$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_VdomNode$: 0
}, false, "japgolly.scalajs.react.vdom.VdomNode$", {
  Ljapgolly_scalajs_react_vdom_VdomNode$: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_VdomNode$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_VdomNode$;
var $n_Ljapgolly_scalajs_react_vdom_VdomNode$;
function $m_Ljapgolly_scalajs_react_vdom_VdomNode$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_VdomNode$)) {
    $n_Ljapgolly_scalajs_react_vdom_VdomNode$ = new $c_Ljapgolly_scalajs_react_vdom_VdomNode$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_VdomNode$
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]))
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  var value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl_System$SystemProperties$__f_dict = null;
  this.jl_System$SystemProperties$__f_properties = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jl_System$SystemProperties$__f_properties = null
}
$c_jl_System$SystemProperties$.prototype = new $h_O();
$c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
  /*<skip>*/
}
$h_jl_System$SystemProperties$.prototype = $c_jl_System$SystemProperties$.prototype;
$c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
  if ((this.jl_System$SystemProperties$__f_dict !== null)) {
    var dict = this.jl_System$SystemProperties$__f_dict;
    return $as_T(($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1))
  } else {
    return $n(this.jl_System$SystemProperties$__f_properties).getProperty__T__T__T(key, default$1)
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
  /*<skip>*/
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  var this$1 = $n(array);
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
}
/** @constructor */
function $c_jl_reflect_Array$() {
  /*<skip>*/
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
  /*<skip>*/
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.newInstance__jl_Class__I__O = (function(componentType, length) {
  return $n(componentType).newArrayOfThisClass__O__O([length])
});
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array)
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
/** @constructor */
function $c_ju_Arrays$() {
  /*<skip>*/
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
  /*<skip>*/
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = $n(a).u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0)
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = $n(a).get(mid);
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid
      } else if ((cmp === 0)) {
        return mid
      } else {
        startIndex = ((1 + mid) | 0)
      }
    }
  }
});
$c_ju_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), newLength), 1);
  $systemArraycopyRefs($n(original), 0, $n(ret), 0, copyLength);
  return ret
});
$c_ju_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to))
  };
  var len = $n(original).u.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), retLength), 1);
  $systemArraycopyRefs($n(original), from, $n(ret), 0, copyLength);
  return ret
});
var $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.ju_regex_PatternCompiler__f_pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex)
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp.exec($thiz.ju_regex_PatternCompiler__f_pattern);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var chars = $as_T(x);
      var this$3 = $n(chars);
      var end = this$3.length;
      var i = 0;
      while ((i < end)) {
        var i$2 = i;
        var $x_2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_1 = $m_ju_regex_PatternCompiler$();
        var this$5 = $n(chars);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_2 | $n($x_1).java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$5, i$2)));
        i = ((1 + i) | 0)
      }
    };
    if (((256 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags)
    };
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var chars$3 = $as_T(x$1);
      var this$8 = $n(chars$3);
      var end$1 = this$8.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var i$2$1 = i$1;
        var $x_4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_3 = $m_ju_regex_PatternCompiler$();
        var this$10 = $n(chars$3);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_4 & (~$n($x_3).java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$10, i$2$1))));
        i$1 = ((1 + i$1) | 0)
      }
    };
    var $x_5 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var x$2 = m[0];
    var this$12 = $n($as_T(x$2));
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($x_5 + this$12.length) | 0)
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var this$1 = $n(s);
  var len = this$1.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I($n(s), i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0)
  };
  return result
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break
      }
      default: {
        return (((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 2) ? s : (((cp >= 65) && (cp <= 90)) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + cp) | 0))) + "]") : (((cp >= 97) && (cp <= 122)) ? ((("[" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + cp) | 0))) + s) + "]") : s)))
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s)
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1 = $charAt(this$2, index);
      switch (x1) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          continue;
          break
        }
        case 35: {
          $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
          continue;
          break
        }
      }
    };
    break
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((startOfRepeater === len)) {
    var repeaterDispatchChar = 46
  } else {
    var this$2 = $n(pattern);
    var repeaterDispatchChar = $charAt(this$2, startOfRepeater)
  };
  if (((((repeaterDispatchChar === 63) || (repeaterDispatchChar === 42)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    var this$3 = $n(compiledToken);
    var x1 = $charAt(this$3, 0);
    switch (x1) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break
      }
      case 40: {
        var this$4 = $n(compiledToken);
        if (($charAt(this$4, 1) === 63)) {
          var this$5 = $n(compiledToken);
          var isTokenAnAssertion = ($charAt(this$5, 2) !== 58)
        } else {
          var isTokenAnAssertion = false
        };
        break
      }
      case 92: {
        var this$6 = $n(compiledToken);
        var c = $charAt(this$6, 1);
        var isTokenAnAssertion = ((c === 98) || (c === 66));
        break
      }
      default: {
        var isTokenAnAssertion = false
      }
    };
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$7 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1$2 = $charAt(this$7, index);
      switch (x1$2) {
        case 43: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break
        }
        case 63: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break
        }
        default: {
          return (("" + wrappedToken) + baseRepeater)
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater)
    }
  } else {
    return compiledToken
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((repeaterDispatchChar === 123)) {
    var this$1 = $n(pattern);
    var len = this$1.length;
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_1 = true
    } else {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!((c >= 48) && (c <= 57)))
    };
    if ($x_1) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition")
    };
    while (true) {
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
        var this$4 = $n(pattern);
        var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var c$1 = $charAt(this$4, index$1);
        var $x_2 = ((c$1 >= 48) && (c$1 <= 57))
      } else {
        var $x_2 = false
      };
      if ($x_2) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0)
      } else {
        break
      }
    };
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition")
    };
    var this$6 = $n(pattern);
    var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    if (($charAt(this$6, index$2) === 44)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      while (true) {
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$7 = $n(pattern);
          var index$3 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c$2 = $charAt(this$7, index$3);
          var $x_3 = ((c$2 >= 48) && (c$2 <= 57))
        } else {
          var $x_3 = false
        };
        if ($x_3) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0)
        } else {
          break
        }
      }
    };
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_4 = true
    } else {
      var this$9 = $n(pattern);
      var index$4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var $x_4 = ($charAt(this$9, index$4) !== 125)
    };
    if ($x_4) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition")
    };
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0)
  };
  return $as_T(pattern.substring(startOfRepeater, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex))
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length);
  var i = 0;
  while ((i < end)) {
    var i$2 = i;
    var mapped = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[i$2]);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[i$2] = ((1 + mapped) | 0)
    };
    i = ((1 + i) | 0)
  };
  var amendedToken = $as_T(compiledToken.replace($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp, ((arg1$2, arg2$2, arg3$2) => {
    var arg1 = $as_T(arg1$2);
    var arg2 = $as_T(arg2$2);
    var arg3 = $as_T(arg3$2);
    return $thiz.java$util$regex$PatternCompiler$$$anonfun$buildPossessiveQuantifier$2__T__T__T__I__T(arg1, arg2, arg3, compiledGroupCountBeforeThisToken)
  })));
  $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")")
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if ((((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern")
  };
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var this$2 = $n(pattern);
  var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  var dispatchChar = $charAt(this$2, index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break
        }
        case 1: {
          return (("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break
        }
        case 2: {
          return (("[" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "]");
          break
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
          break
        }
        default: {
          throw new $c_jl_AssertionError(x1$2)
        }
      };
      break
    }
    case 98: {
      if (($as_T(pattern.substring($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported")
      } else if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\b with UNICODE_CASE", "2018")
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\b"
      };
      break
    }
    case 66: {
      if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\B with UNICODE_CASE", "2018")
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\B"
      };
      break
    }
    case 65: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "^";
      break
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break
    }
    case 90: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var lineTerminator = (((1 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])");
      return (("(?=" + lineTerminator) + "?$)");
      break
    }
    case 122: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "$";
      break
    }
    case 82: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var end = ((1 + start) | 0);
      while (true) {
        if ((end !== len)) {
          var this$7 = $n(pattern);
          var index$1 = end;
          var c = $charAt(this$7, index$1);
          var $x_2 = ((c >= 48) && (c <= 57))
        } else {
          var $x_2 = false
        };
        if ($x_2) {
          var s = $as_T(pattern.substring(start, ((1 + end) | 0)));
          var $x_1 = ($uI(parseInt(s, 10)) <= (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0))
        } else {
          var $x_1 = false
        };
        if ($x_1) {
          end = ((1 + end) | 0)
        } else {
          break
        }
      };
      var groupString = $as_T(pattern.substring(start, end));
      var groupNumber = $uI(parseInt(groupString, 10));
      if ((groupNumber > (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"))
      };
      var compiledGroupNumber = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break
    }
    case 107: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
        var $x_3 = true
      } else {
        var this$11 = $n(pattern);
        var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var $x_3 = ($charAt(this$11, index$2) !== 60)
      };
      if ($x_3) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group")
      };
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
      if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, groupName)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"))
      };
      var groupNumber$2 = $uI(dict[groupName]);
      var compiledGroupNumber$2 = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber$2]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break
    }
    case 81: {
      var start$2 = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var this$13 = $n(pattern);
      var end$2 = $uI(this$13.indexOf("\\E", start$2));
      if ((end$2 < 0)) {
        var this$14 = $n(pattern);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = this$14.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2)))
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2, end$2)))
      };
      break
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz))
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break
    }
    case 97: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 7;
      break
    }
    case 116: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 9;
      break
    }
    case 110: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 10;
      break
    }
    case 102: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 12;
      break
    }
    case 114: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 13;
      break
    }
    case 101: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 27;
      break
    }
    case 99: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var $x_1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var this$1 = $n(pattern);
      if (($x_1 === this$1.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence")
      };
      var cp = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break
    }
    default: {
      if ((((x1 >= 65) && (x1 <= 90)) || ((x1 >= 97) && (x1 <= 122)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence")
      };
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) < len)) {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var d1 = (((-48) + $charAt(this$2, index)) | 0)
  } else {
    var d1 = (-1)
  };
  if (((d1 < 0) || (d1 > 7))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence")
  };
  if ((((2 + start) | 0) < len)) {
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var d2 = (((-48) + $charAt(this$3, index$1)) | 0)
  } else {
    var d2 = (-1)
  };
  if (((d2 < 0) || (d2 > 7))) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return d1
  } else if ((d1 > 3)) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return (((d1 << 3) + d2) | 0)
  } else {
    if ((((3 + start) | 0) < len)) {
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var d3 = (((-48) + $charAt(this$4, index$2)) | 0)
    } else {
      var d3 = (-1)
    };
    if (((d3 < 0) || (d3 > 7))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((d1 << 3) + d2) | 0)
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0)
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((start !== len)) {
    var this$2 = $n(pattern);
    var $x_1 = ($charAt(this$2, start) === 123)
  } else {
    var $x_1 = false
  };
  if ($x_1) {
    var innerStart = ((1 + start) | 0);
    var this$3 = $n(pattern);
    var innerEnd = $uI(this$3.indexOf("}", innerStart));
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence")
    };
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + innerEnd) | 0);
    return cp
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + start) | 0);
    return cp$2
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && ($as_T(pattern.substring(end, lowStart)) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low))
    } else {
      return codeUnit
    }
  } else {
    return codeUnit
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if (((start === end) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"))
  };
  var i = start;
  while ((i < end)) {
    var i$2 = i;
    var this$4 = $n(pattern);
    var c = $charAt(this$4, i$2);
    if ((!((((c >= 48) && (c <= 57)) || ((c >= 65) && (c <= 70))) || ((c >= 97) && (c <= 102))))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"))
    };
    i = ((1 + i) | 0)
  };
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112
  } else {
    var s = $as_T(pattern.substring(start, end));
    var cp = $uI(parseInt(s, 16))
  };
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big")
  };
  return cp
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit;
      break
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace;
      break
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace;
      break
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace;
      break
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar;
      break
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar))
    }
  };
  return ((dispatchChar >= 97) ? positive : $n(positive).negated__ju_regex_PatternCompiler$CompiledCharClass())
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((start === len)) {
    var property = "?"
  } else {
    var this$2 = $n(pattern);
    if (($charAt(this$2, start) === 123)) {
      var innerStart = ((1 + start) | 0);
      var this$3 = $n(pattern);
      var innerEnd = $uI(this$3.indexOf("}", innerStart));
      if ((innerEnd < 0)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family")
      };
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = innerEnd;
      var property = $as_T(pattern.substring(innerStart, innerEnd))
    } else {
      var property = $as_T(pattern.substring(start, ((1 + start) | 0)))
    }
  };
  var dict = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, property)))) {
    $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Unicode character family", "2018")
  };
  var property2 = ((((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  var result = $as_ju_regex_PatternCompiler$CompiledCharClass(dict$1[property2]);
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  return result
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var this$2 = $n(pattern);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var isNegated = ($charAt(this$2, index) === 94)
  } else {
    var isNegated = false
  };
  if (isNegated) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0)
  };
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2), isNegated);
  while (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return builder.finish__T();
          break
        }
        case 38: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
            var this$3 = $n(pattern);
            var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
            var $x_1 = ($charAt(this$3, index$1) === 38)
          } else {
            var $x_1 = false
          };
          if ($x_1) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            builder.startNewConjunct__V()
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder)
          };
          break matchResult;
          break
        }
        case 91: {
          var cls = $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz);
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, cls);
          break matchResult;
          break
        }
        case 92: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence")
          };
          var this$4 = $n(pattern);
          var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c2 = $charAt(this$4, index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break
            }
            case 81: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              var this$5 = $n(pattern);
              var fromIndex = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
              var end = $uI(this$5.indexOf("\\E", fromIndex));
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class")
              };
              builder.addCodePointsInString__T__I__I__V(pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, end);
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end) | 0);
              break
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder)
            }
          };
          break matchResult;
          break
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0)
          } else {
            break
          };
          break matchResult;
          break
        }
        case 35: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V()
          } else {
            break
          };
          break matchResult;
          break
        }
      };
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder)
    }
  };
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class")
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) === len)) {
    var $x_1 = true
  } else {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var $x_1 = ($charAt(this$2, index) !== 63)
  };
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + start) | 0);
    $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
    return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")")
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group")
    };
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var c1 = $charAt(this$3, index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      return ((("" + $as_T(pattern.substring(start, ((3 + start) | 0)))) + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")")
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group")
      };
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var c2 = $charAt(this$4, index$2);
      if ((((c2 >= 65) && (c2 <= 90)) || ((c2 >= 97) && (c2 <= 122)))) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, name))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"))
        };
        $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
        var dict$1 = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        var value = (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0);
        dict$1[name] = value;
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")")
      } else {
        if (((c2 !== 61) && (c2 !== 33))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group")
        };
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Look-behind group", "2018")
      }
    } else if ((c1 === 62)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
      var groupNumber = $thiz.ju_regex_PatternCompiler__f_compiledGroupCount;
      return (((("(?:(?=(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + "))\\") + groupNumber) + ")")
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported")
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = ((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57)))
    } else {
      var $x_1 = false
    };
    if ($x_1) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0)
    } else {
      break
    }
  };
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
    var $x_2 = true
  } else {
    var this$4 = $n(pattern);
    var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_2 = ($charAt(this$4, index$1) !== 62)
  };
  if ($x_2) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'")
  };
  return $as_T(pattern.substring(start, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex))
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz)
  };
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len$2)) {
    var this$1 = $n(pattern$3);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_1 = ($charAt(this$1, index) === 45)
  } else {
    var $x_1 = false
  };
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz)
    };
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class")
    };
    var cpEnd = $f_T__codePointAt__I__I($n(pattern$3), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
      $n(builder$1).addSingleCodePoint__I__V(45)
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range")
      };
      $n(builder$1).addCodePointRange__I__I__V(startCodePoint, endCodePoint)
    }
  } else {
    $n(builder$1).addSingleCodePoint__I__V(startCodePoint)
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.ju_regex_PatternCompiler__f_pattern = null;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = 0;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = null;
  this.ju_regex_PatternCompiler__f_namedGroups = null;
  this.ju_regex_PatternCompiler__f_pattern = pattern;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = flags;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = [0];
  this.ju_regex_PatternCompiler__f_namedGroups = {}
}
$c_ju_regex_PatternCompiler.prototype = new $h_O();
$c_ju_regex_PatternCompiler.prototype.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
  /*<skip>*/
}
$h_ju_regex_PatternCompiler.prototype = $c_ju_regex_PatternCompiler.prototype;
$c_ju_regex_PatternCompiler.prototype.compile__ju_regex_Pattern = (function() {
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags)
  };
  var isLiteral = ((16 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this)
  };
  if (((128 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported")
  };
  if (((8 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("MULTILINE", "2018")
  };
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("UNICODE_CHARACTER_CLASS", "2018")
  };
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.ju_regex_PatternCompiler__f_pattern)
  } else {
    if (($as_T(this.ju_regex_PatternCompiler__f_pattern.substring(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "\\G")) {
      this.ju_regex_PatternCompiler__f_sticky = true;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0)
    };
    var jsPattern = this.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(false)
  };
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "us" : "u");
  var jsFlags = (((66 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.ju_regex_PatternCompiler__f_pattern, this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags, jsPattern, jsFlags, this.ju_regex_PatternCompiler__f_sticky, (((-1) + $uI(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap, this.ju_regex_PatternCompiler__f_namedGroups)
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."))
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T = (function(insideGroup) {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var result = "";
  while ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I($n(pattern), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'")
          };
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return result;
          break
        }
        case 124: {
          if ((this.ju_regex_PatternCompiler__f_sticky && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level")
          };
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          result = (result + "|");
          break matchResult;
          break
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0)
          } else {
            break
          };
          break matchResult;
          break
        }
        case 35: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.java$util$regex$PatternCompiler$$skipSharpComment__V()
          } else {
            break
          };
          break matchResult;
          break
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(dispatchCP)) + "'"));
          break
        }
      };
      var compiledGroupCountBeforeThisToken = this.ju_regex_PatternCompiler__f_compiledGroupCount;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break
        }
        case 94: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "^";
          break
        }
        case 36: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "$";
          break
        }
        case 46: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var rejected = (((32 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "" : (((1 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T(rejected);
          break
        }
        default: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP)
        }
      };
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken))
    }
  };
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group")
  };
  return result
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$skipSharpComment__V = (function() {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)))
    } else {
      var $x_1 = false
    };
    if ($x_1) {
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0)
    } else {
      break
    }
  }
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$$anonfun$buildPossessiveQuantifier$2__T__T__T__I__T = (function(str, backslashes, groupString, compiledGroupCountBeforeThisToken$1) {
  var this$1 = $n(backslashes);
  if ((((this$1.length % 2) | 0) === 0)) {
    return str
  } else {
    var groupNumber = $uI(parseInt(groupString, 10));
    return ((groupNumber > compiledGroupCountBeforeThisToken$1) ? (("" + backslashes) + ((1 + groupNumber) | 0)) : str)
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().initClass({
  ju_regex_PatternCompiler: 0
}, false, "java.util.regex.PatternCompiler", {
  ju_regex_PatternCompiler: 1,
  O: 1
});
$c_ju_regex_PatternCompiler.prototype.$classData = $d_ju_regex_PatternCompiler;
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true
  } catch (e) {
    return false
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = new RegExp("(\\\\+)(\\d+)", "g");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = {};
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = r;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = new RegExp("(?:^|_)[a-z]", "g")
}
$c_ju_regex_PatternCompiler$.prototype = new $h_O();
$c_ju_regex_PatternCompiler$.prototype.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
  /*<skip>*/
}
$h_ju_regex_PatternCompiler$.prototype = $c_ju_regex_PatternCompiler$.prototype;
$c_ju_regex_PatternCompiler$.prototype.compile__T__I__ju_regex_Pattern = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).compile__ju_regex_Pattern()
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$charToFlag__C__I = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break
    }
    case 100: {
      return 1;
      break
    }
    case 109: {
      return 8;
      break
    }
    case 115: {
      return 32;
      break
    }
    case 117: {
      return 64;
      break
    }
    case 120: {
      return 4;
      break
    }
    case 85: {
      return 256;
      break
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag")
    }
  }
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointNotAmong__T__T = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "." : "[\\d\\D]"))
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointToString__I__T = (function(codePoint) {
  return $as_T(String.fromCodePoint(codePoint))
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().initClass({
  ju_regex_PatternCompiler$: 0
}, false, "java.util.regex.PatternCompiler$", {
  ju_regex_PatternCompiler$: 1,
  O: 1
});
$c_ju_regex_PatternCompiler$.prototype.$classData = $d_ju_regex_PatternCompiler$;
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$()
  };
  return $n_ju_regex_PatternCompiler$
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "")) {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = alt
  } else {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct + "|") + alt)
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? negThisSegment : (((("(?:(?!" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")") + negThisSegment) + ")"))
  } else {
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment === "") ? (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")")) : (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? (("[" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "]") : (((("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + "|[") + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "])")))
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(codePoint);
  return (((((codePoint === 93) || (codePoint === 92)) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s)
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = asciiCaseInsensitive;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = isNegated;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ""
}
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
  /*<skip>*/
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype;
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.finish__T = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction === "") ? conjunct : ((("(?:" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction) + conjunct) + ")"))
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.startNewConjunct__V = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction + (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ""
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V = (function(cls) {
  var x1 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
  switch (x1) {
    case 0: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break
    }
    case 1: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break
    }
    case 2: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
      break
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data));
      break
    }
    default: {
      throw new $c_jl_AssertionError(x1)
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointsInString__T__I__I__V = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I($n(str), i);
    this.addSingleCodePoint__I__V(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0)
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addSingleCodePoint__I__V = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + s) + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment)
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + s)
  };
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    if (((codePoint >= 65) && (codePoint <= 90))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + codePoint) | 0)))
    } else if (((codePoint >= 97) && (codePoint <= 122))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + codePoint) | 0)))
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointRange__I__I__V = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (s + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment)
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + s)
  };
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)))
    };
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$3 = (((-32) + start$2) | 0);
      var end$3 = (((-32) + end$2) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)))
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().initClass({
  ju_regex_PatternCompiler$CharacterClassBuilder: 0
}, false, "java.util.regex.PatternCompiler$CharacterClassBuilder", {
  ju_regex_PatternCompiler$CharacterClassBuilder: 1,
  O: 1
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.$classData = $d_ju_regex_PatternCompiler$CharacterClassBuilder;
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0)) {
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_kind), $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_data);
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = true
  };
  return $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.ju_regex_PatternCompiler$CompiledCharClass__f_negated = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = 0;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = false;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = kind;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = data
}
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
  /*<skip>*/
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype;
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.negated__ju_regex_PatternCompiler$CompiledCharClass = (function() {
  return ((!this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.ju_regex_PatternCompiler$CompiledCharClass__f_negated)
});
function $as_ju_regex_PatternCompiler$CompiledCharClass(obj) {
  return (((obj instanceof $c_ju_regex_PatternCompiler$CompiledCharClass) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.regex.PatternCompiler$CompiledCharClass"))
}
function $isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_regex_PatternCompiler$CompiledCharClass)))
}
function $asArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (($isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.util.regex.PatternCompiler$CompiledCharClass;", depth))
}
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().initClass({
  ju_regex_PatternCompiler$CompiledCharClass: 0
}, false, "java.util.regex.PatternCompiler$CompiledCharClass", {
  ju_regex_PatternCompiler$CompiledCharClass: 1,
  O: 1
});
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.$classData = $d_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi))
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi)
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24)
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16)
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi)
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo + $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo - $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  O: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $x_1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $x_1) + $uD((x$1 >>> 0.0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)))
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1
  } else {
    var abs__lo = lo;
    var abs__hi = hi
  };
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo))
  };
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)))
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"))
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)))
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth))
}
function $f_F1__compose__F1__F1($thiz, g) {
  return new $c_sjsr_AnonFunction1(((x$2) => $thiz.apply__O__O($n(g).apply__O__O(x$2))))
}
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)))
}
function $as_F1(obj) {
  return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"))
}
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)))
}
function $asArrayOf_F1(obj, depth) {
  return (($isArrayOf_F1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function1;", depth))
}
function $is_F2(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F2)))
}
function $as_F2(obj) {
  return (($is_F2(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function2"))
}
function $isArrayOf_F2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F2)))
}
function $asArrayOf_F2(obj, depth) {
  return (($isArrayOf_F2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function2;", depth))
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.sc_ArrayOps$__f_fallback = null;
  $n_sc_ArrayOps$ = this;
  this.sc_ArrayOps$__f_fallback = new $c_sjsr_AnonFunction1(((x$1$2) => $m_sc_ArrayOps$().sc_ArrayOps$__f_fallback))
}
$c_sc_ArrayOps$.prototype = new $h_O();
$c_sc_ArrayOps$.prototype.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
  /*<skip>*/
}
$h_sc_ArrayOps$.prototype = $c_sc_ArrayOps$.prototype;
var $d_sc_ArrayOps$ = new $TypeData().initClass({
  sc_ArrayOps$: 0
}, false, "scala.collection.ArrayOps$", {
  sc_ArrayOps$: 1,
  O: 1
});
$c_sc_ArrayOps$.prototype.$classData = $d_sc_ArrayOps$;
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$()
  };
  return $n_sc_ArrayOps$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    $n(f).apply__O__O($n(it).next__O())
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  var i = start;
  var y = (($m_jl_reflect_Array$().getLength__O__I(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && $n(it).hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, $n(it).next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end)
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
}
function $is_sc_IterableOnceOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnceOps)))
}
function $as_sc_IterableOnceOps(obj) {
  return (($is_sc_IterableOnceOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnceOps"))
}
function $isArrayOf_sc_IterableOnceOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnceOps)))
}
function $asArrayOf_sc_IterableOnceOps(obj, depth) {
  return (($isArrayOf_sc_IterableOnceOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnceOps;", depth))
}
/** @constructor */
function $c_sc_StringOps$() {
  this.sc_StringOps$__f_fallback = null;
  $n_sc_StringOps$ = this;
  this.sc_StringOps$__f_fallback = new $c_sjsr_AnonFunction1(((x$1$2) => $m_sc_StringOps$().sc_StringOps$__f_fallback))
}
$c_sc_StringOps$.prototype = new $h_O();
$c_sc_StringOps$.prototype.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
  /*<skip>*/
}
$h_sc_StringOps$.prototype = $c_sc_StringOps$.prototype;
var $d_sc_StringOps$ = new $TypeData().initClass({
  sc_StringOps$: 0
}, false, "scala.collection.StringOps$", {
  sc_StringOps$: 1,
  O: 1
});
$c_sc_StringOps$.prototype.$classData = $d_sc_StringOps$;
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$()
  };
  return $n_sc_StringOps$
}
function $p_sci_IndexedSeqDefaults$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 64
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
}
$c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$c_sci_IndexedSeqDefaults$.prototype.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
  /*<skip>*/
}
$h_sci_IndexedSeqDefaults$.prototype = $c_sci_IndexedSeqDefaults$.prototype;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.sci_LazyList$LazyBuilder$DeferredState__f__state = null
}
$c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
  /*<skip>*/
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $c_sci_LazyList$LazyBuilder$DeferredState.prototype;
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.eval__sci_LazyList$State = (function() {
  var state = this.sci_LazyList$LazyBuilder$DeferredState__f__state;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized")
  };
  return $as_sci_LazyList$State($n(state).apply__O())
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.init__F0__V = (function(state) {
  if ((this.sci_LazyList$LazyBuilder$DeferredState__f__state !== null)) {
    throw new $c_jl_IllegalStateException("already initialized")
  };
  this.sci_LazyList$LazyBuilder$DeferredState__f__state = state
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().initClass({
  sci_LazyList$LazyBuilder$DeferredState: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", {
  sci_LazyList$LazyBuilder$DeferredState: 1,
  O: 1
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.$classData = $d_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $c_sci_VectorStatics$() {
  this.sci_VectorStatics$__f_empty1 = null;
  this.sci_VectorStatics$__f_empty2 = null;
  this.sci_VectorStatics$__f_empty3 = null;
  this.sci_VectorStatics$__f_empty4 = null;
  this.sci_VectorStatics$__f_empty5 = null;
  this.sci_VectorStatics$__f_empty6 = null;
  $n_sci_VectorStatics$ = this;
  this.sci_VectorStatics$__f_empty1 = new $ac_O(0);
  this.sci_VectorStatics$__f_empty2 = new ($d_O.getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0)
}
$c_sci_VectorStatics$.prototype = new $h_O();
$c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
  /*<skip>*/
}
$h_sci_VectorStatics$.prototype = $c_sci_VectorStatics$.prototype;
$c_sci_VectorStatics$.prototype.copyAppend1__AO__O__AO = (function(a, elem) {
  var alen = $n(a).u.length;
  var ac = new $ac_O(((1 + alen) | 0));
  $systemArraycopyRefs($n(a), 0, ac, 0, alen);
  $n(ac).set(alen, elem);
  return ac
});
$c_sci_VectorStatics$.prototype.copyAppend__AO__O__AO = (function(a, elem) {
  var newLength = ((1 + $n(a).u.length) | 0);
  var ac = $m_ju_Arrays$().copyOf__AO__I__AO(a, newLength);
  $n(ac).set((((-1) + $n(ac).u.length) | 0), elem);
  return ac
});
$c_sci_VectorStatics$.prototype.copyPrepend1__O__AO__AO = (function(elem, a) {
  var ac = new $ac_O(((1 + $n(a).u.length) | 0));
  var length = $n(a).u.length;
  $systemArraycopyRefs($n(a), 0, ac, 1, length);
  $n(ac).set(0, elem);
  return ac
});
$c_sci_VectorStatics$.prototype.copyPrepend__O__AO__AO = (function(elem, a) {
  var this$1 = $n(a);
  var componentType = $objectGetClass(this$1).getComponentType__jl_Class();
  var length = ((1 + $n(a).u.length) | 0);
  var ac = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length), 1);
  var length$1 = $n(a).u.length;
  $systemArraycopyRefs($n(a), 0, $n(ac), 1, length$1);
  $n(ac).set(0, elem);
  return ac
});
$c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
  var i = 0;
  var len = $n(a).u.length;
  if ((level === 0)) {
    while ((i < len)) {
      $n(f).apply__O__O($n(a).get(i));
      i = ((1 + i) | 0)
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.foreachRec__I__AO__F1__V(l, $asArrayOf_O($n(a).get(i), 1), f);
      i = ((1 + i) | 0)
    }
  }
});
$c_sci_VectorStatics$.prototype.prepend1IfSpace__AO__sc_IterableOnce__AO = (function(prefix1, xs) {
  if ($is_sci_Iterable(xs)) {
    var x2 = $as_sci_Iterable(xs);
    if (($n(x2).sizeCompare__I__I(((32 - $n(prefix1).u.length) | 0)) <= 0)) {
      var x1$2 = $n(x2).size__I();
      switch (x1$2) {
        case 0: {
          return null;
          break
        }
        case 1: {
          return this.copyPrepend__O__AO__AO($n(x2).head__O(), prefix1);
          break
        }
        default: {
          var prefix1b = new $ac_O((($n(prefix1).u.length + x1$2) | 0));
          var length = $n(prefix1).u.length;
          $systemArraycopyRefs($n(prefix1), 0, prefix1b, x1$2, length);
          var this$1 = $n(x2);
          this$1.copyToArray__O__I__I__I(prefix1b, 0, 2147483647);
          return prefix1b
        }
      }
    } else {
      return null
    }
  } else {
    var s = $n(xs).knownSize__I();
    if (((s > 0) && (s <= ((32 - $n(prefix1).u.length) | 0)))) {
      var prefix1b$2 = new $ac_O((($n(prefix1).u.length + s) | 0));
      var length$1 = $n(prefix1).u.length;
      $systemArraycopyRefs($n(prefix1), 0, prefix1b$2, s, length$1);
      var this$2 = $n($n(xs).iterator__sc_Iterator());
      this$2.copyToArray__O__I__I__I(prefix1b$2, 0, 2147483647);
      return prefix1b$2
    } else {
      return null
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().initClass({
  sci_VectorStatics$: 0
}, false, "scala.collection.immutable.VectorStatics$", {
  sci_VectorStatics$: 1,
  O: 1
});
$c_sci_VectorStatics$.prototype.$classData = $d_sci_VectorStatics$;
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$()
  };
  return $n_sci_VectorStatics$
}
/** @constructor */
function $c_scm_MutationTracker$() {
  /*<skip>*/
}
$c_scm_MutationTracker$.prototype = new $h_O();
$c_scm_MutationTracker$.prototype.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
  /*<skip>*/
}
$h_scm_MutationTracker$.prototype = $c_scm_MutationTracker$.prototype;
$c_scm_MutationTracker$.prototype.checkMutations__I__I__T__V = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message)
  }
});
var $d_scm_MutationTracker$ = new $TypeData().initClass({
  scm_MutationTracker$: 0
}, false, "scala.collection.mutable.MutationTracker$", {
  scm_MutationTracker$: 1,
  O: 1
});
$c_scm_MutationTracker$.prototype.$classData = $d_scm_MutationTracker$;
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$()
  };
  return $n_scm_MutationTracker$
}
/** @constructor */
function $c_s_package$() {
  this.s_package$__f_Seq = null;
  this.s_package$__f_Nil = null;
  this.s_package$__f_Left = null;
  this.s_package$__f_Right = null;
  $n_s_package$ = this;
  new $c_s_package$$anon$1();
  $m_sc_Iterable$();
  $m_sc_Iterable$();
  this.s_package$__f_Seq = $m_sci_Seq$();
  $m_sci_IndexedSeq$();
  $m_sc_Iterator$();
  $m_sci_List$();
  this.s_package$__f_Nil = $m_sci_Nil$();
  $m_sci_LazyList$();
  $m_sci_Vector$();
  this.s_package$__f_Left = $m_s_util_Left$();
  this.s_package$__f_Right = $m_s_util_Right$()
}
$c_s_package$.prototype = new $h_O();
$c_s_package$.prototype.constructor = $c_s_package$;
/** @constructor */
function $h_s_package$() {
  /*<skip>*/
}
$h_s_package$.prototype = $c_s_package$.prototype;
var $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
var $n_s_package$;
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
  /*<skip>*/
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
  /*<skip>*/
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y)
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y)
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $uC($n(x3));
      return (x2$1 === this$1)
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $uC($n(x3));
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3))
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2)
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2)
    } else {
      return false
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2))
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1))
    } else {
      return false
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $uC($n(xc));
    var this$2 = $uC($n(x2));
    return (this$1 === this$2)
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $uC($n(xc));
      return (x2$1 === this$3)
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $uC($n(xc));
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc))
    }
  } else {
    return ((xc === null) && (y === null))
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return $n(x2).get(idx)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return $n(x3).get(idx)
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return $n(x4).get(idx)
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return $n(x5).get(idx)
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx)
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC($n(x7).get(idx))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return $n(x8).get(idx)
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return $n(x9).get(idx)
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return $n(x10).get(idx)
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    $n(x2).set(idx, value)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    $n(x3).set(idx, $uI(value))
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    $n(x4).set(idx, $uD(value))
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    $n(x5).set(idx, $uJ(value))
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    $n(x6).set(idx, $uF(value))
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    $n(x7).set(idx, $uC(value))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    $n(x8).set(idx, $uB(value))
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    $n(x9).set(idx, $uS(value))
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    $n(x10).set(idx, $uZ(value))
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3)
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi))
  } else {
    return $dp_hashCode__I($n(x))
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$c_sr_Statics$PFMarker$.prototype = new $h_O();
$c_sr_Statics$PFMarker$.prototype.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$h_sr_Statics$PFMarker$.prototype = $c_sr_Statics$PFMarker$.prototype;
var $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
/** @constructor */
function $c_sjs_js_Any$ObjectCompanionOps$() {
  /*<skip>*/
}
$c_sjs_js_Any$ObjectCompanionOps$.prototype = new $h_O();
$c_sjs_js_Any$ObjectCompanionOps$.prototype.constructor = $c_sjs_js_Any$ObjectCompanionOps$;
/** @constructor */
function $h_sjs_js_Any$ObjectCompanionOps$() {
  /*<skip>*/
}
$h_sjs_js_Any$ObjectCompanionOps$.prototype = $c_sjs_js_Any$ObjectCompanionOps$.prototype;
$c_sjs_js_Any$ObjectCompanionOps$.prototype.hasProperty$extension__sjs_js_Object$__sjs_js_Object__T__Z = (function(this$, o, p) {
  return $uZ((p in o))
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().initClass({
  sjs_js_Any$ObjectCompanionOps$: 0
}, false, "scala.scalajs.js.Any$ObjectCompanionOps$", {
  sjs_js_Any$ObjectCompanionOps$: 1,
  O: 1
});
$c_sjs_js_Any$ObjectCompanionOps$.prototype.$classData = $d_sjs_js_Any$ObjectCompanionOps$;
var $n_sjs_js_Any$ObjectCompanionOps$;
function $m_sjs_js_Any$ObjectCompanionOps$() {
  if ((!$n_sjs_js_Any$ObjectCompanionOps$)) {
    $n_sjs_js_Any$ObjectCompanionOps$ = new $c_sjs_js_Any$ObjectCompanionOps$()
  };
  return $n_sjs_js_Any$ObjectCompanionOps$
}
/** @constructor */
function $c_sjs_js_ThisFunction$() {
  /*<skip>*/
}
$c_sjs_js_ThisFunction$.prototype = new $h_O();
$c_sjs_js_ThisFunction$.prototype.constructor = $c_sjs_js_ThisFunction$;
/** @constructor */
function $h_sjs_js_ThisFunction$() {
  /*<skip>*/
}
$h_sjs_js_ThisFunction$.prototype = $c_sjs_js_ThisFunction$.prototype;
$c_sjs_js_ThisFunction$.prototype.fromFunction1__F1__sjs_js_ThisFunction0 = (function(f) {
  return (function() {
    return $n(f).apply__O__O(this)
  })
});
$c_sjs_js_ThisFunction$.prototype.fromFunction2__F2__sjs_js_ThisFunction1 = (function(f) {
  return (function(arg1$2) {
    return $n(f).apply__O__O__O(this, arg1$2)
  })
});
$c_sjs_js_ThisFunction$.prototype.fromFunction3__F3__sjs_js_ThisFunction2 = (function(f) {
  return (function(arg1$2, arg2$2) {
    return $n(f).apply__O__O__O__O(this, arg1$2, arg2$2)
  })
});
$c_sjs_js_ThisFunction$.prototype.fromFunction4__F4__sjs_js_ThisFunction3 = (function(f) {
  return (function(arg1$2, arg2$2, arg3$2) {
    return $n(f).apply__O__O__O__O__O(this, arg1$2, arg2$2, arg3$2)
  })
});
var $d_sjs_js_ThisFunction$ = new $TypeData().initClass({
  sjs_js_ThisFunction$: 0
}, false, "scala.scalajs.js.ThisFunction$", {
  sjs_js_ThisFunction$: 1,
  O: 1
});
$c_sjs_js_ThisFunction$.prototype.$classData = $d_sjs_js_ThisFunction$;
var $n_sjs_js_ThisFunction$;
function $m_sjs_js_ThisFunction$() {
  if ((!$n_sjs_js_ThisFunction$)) {
    $n_sjs_js_ThisFunction$ = new $c_sjs_js_ThisFunction$()
  };
  return $n_sjs_js_ThisFunction$
}
/** @constructor */
function $c_sjs_js_special_package$() {
  /*<skip>*/
}
$c_sjs_js_special_package$.prototype = new $h_O();
$c_sjs_js_special_package$.prototype.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
  /*<skip>*/
}
$h_sjs_js_special_package$.prototype = $c_sjs_js_special_package$.prototype;
$c_sjs_js_special_package$.prototype.objectLiteral__sci_Seq__sjs_js_Object = (function(properties) {
  var result = {};
  $n(properties).foreach__F1__V(new $c_sjsr_AnonFunction1(((pair$2) => {
    var pair = $as_T2(pair$2);
    result[$n(pair)._1__O()] = $n(pair)._2__O()
  })));
  return result
});
var $d_sjs_js_special_package$ = new $TypeData().initClass({
  sjs_js_special_package$: 0
}, false, "scala.scalajs.js.special.package$", {
  sjs_js_special_package$: 1,
  O: 1
});
$c_sjs_js_special_package$.prototype.$classData = $d_sjs_js_special_package$;
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$()
  };
  return $n_sjs_js_special_package$
}
/** @constructor */
function $c_sjsr_Compat$() {
  /*<skip>*/
}
$c_sjsr_Compat$.prototype = new $h_O();
$c_sjsr_Compat$.prototype.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
  /*<skip>*/
}
$h_sjsr_Compat$.prototype = $c_sjsr_Compat$.prototype;
$c_sjsr_Compat$.prototype.toJSVarArgsImpl__sci_Seq__sjs_js_Array = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    var x2 = $as_sjsr_WrappedVarArgs(seq);
    return $n(x2).sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array
  } else {
    var result = [];
    $n(seq).foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => $uI(result.push(x$2)))));
    return result
  }
});
var $d_sjsr_Compat$ = new $TypeData().initClass({
  sjsr_Compat$: 0
}, false, "scala.scalajs.runtime.Compat$", {
  sjsr_Compat$: 1,
  O: 1
});
$c_sjsr_Compat$.prototype.$classData = $d_sjsr_Compat$;
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$()
  };
  return $n_sjsr_Compat$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()))
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())))
    };
    var i = 0;
    while ((i < arr)) {
      var $x_1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0)
  };
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n)
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0)
  };
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
  };
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if ((rangeDiff !== ((hash - prev) | 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $x_1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, i)
    };
    prev = hash;
    i = ((1 + i) | 0)
  };
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $x_1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var head = $n(elems).head__O();
    var tail = $as_sci_List($n(elems).tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break
      }
      case 2: {
        if ((rangeDiff !== ((hash - prev) | 0))) {
          rangeState = 3
        };
        break
      }
    };
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail
  };
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
});
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$Nullary(unmodified, construct, mods) {
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified = null;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_construct = null;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_mods = null;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified = unmodified;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_construct = construct;
  this.Ljapgolly_scalajs_react_CtorType$Nullary__f_mods = mods
}
$c_Ljapgolly_scalajs_react_CtorType$Nullary.prototype = new $h_Ljapgolly_scalajs_react_CtorType();
$c_Ljapgolly_scalajs_react_CtorType$Nullary.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$Nullary;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$Nullary() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_CtorType$Nullary.prototype = $c_Ljapgolly_scalajs_react_CtorType$Nullary.prototype;
$c_Ljapgolly_scalajs_react_CtorType$Nullary.prototype.apply__O = (function() {
  var value = this.Ljapgolly_scalajs_react_CtorType$Nullary__f_mods;
  var f = this.Ljapgolly_scalajs_react_CtorType$Nullary__f_construct;
  return ((value === (void 0)) ? this.Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified : $n(f).apply__O__O(value))
});
function $as_Ljapgolly_scalajs_react_CtorType$Nullary(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_CtorType$Nullary) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.CtorType$Nullary"))
}
function $isArrayOf_Ljapgolly_scalajs_react_CtorType$Nullary(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_CtorType$Nullary)))
}
function $asArrayOf_Ljapgolly_scalajs_react_CtorType$Nullary(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_CtorType$Nullary(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.CtorType$Nullary;", depth))
}
var $d_Ljapgolly_scalajs_react_CtorType$Nullary = new $TypeData().initClass({
  Ljapgolly_scalajs_react_CtorType$Nullary: 0
}, false, "japgolly.scalajs.react.CtorType$Nullary", {
  Ljapgolly_scalajs_react_CtorType$Nullary: 1,
  Ljapgolly_scalajs_react_CtorType: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_CtorType$Nullary.prototype.$classData = $d_Ljapgolly_scalajs_react_CtorType$Nullary;
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$ProfunctorN$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype = $c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype;
$c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype.rmap__Ljapgolly_scalajs_react_CtorType$Nullary__F1__Ljapgolly_scalajs_react_CtorType$Nullary = (function(x, g) {
  return new $c_Ljapgolly_scalajs_react_CtorType$Nullary($n(g).apply__O__O($n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified), $n(g).compose__F1__F1($n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_construct), $n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_mods)
});
$c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype.dimap__Ljapgolly_scalajs_react_CtorType$Nullary__F1__F1__Ljapgolly_scalajs_react_CtorType$Nullary = (function(x, f, g) {
  return new $c_Ljapgolly_scalajs_react_CtorType$Nullary($n(g).apply__O__O($n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_unmodified), $n(g).compose__F1__F1($n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_construct), $n(x).Ljapgolly_scalajs_react_CtorType$Nullary__f_mods)
});
var $d_Ljapgolly_scalajs_react_CtorType$ProfunctorN$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_CtorType$ProfunctorN$: 0
}, false, "japgolly.scalajs.react.CtorType$ProfunctorN$", {
  Ljapgolly_scalajs_react_CtorType$ProfunctorN$: 1,
  O: 1,
  Ljapgolly_scalajs_react_internal_Profunctor: 1
});
$c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$.prototype.$classData = $d_Ljapgolly_scalajs_react_CtorType$ProfunctorN$;
var $n_Ljapgolly_scalajs_react_CtorType$ProfunctorN$;
function $m_Ljapgolly_scalajs_react_CtorType$ProfunctorN$() {
  if ((!$n_Ljapgolly_scalajs_react_CtorType$ProfunctorN$)) {
    $n_Ljapgolly_scalajs_react_CtorType$ProfunctorN$ = new $c_Ljapgolly_scalajs_react_CtorType$ProfunctorN$()
  };
  return $n_Ljapgolly_scalajs_react_CtorType$ProfunctorN$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1(f$7, p$3) {
  this.Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_summon = null;
  this.Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_pf = null;
  this.Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_summon = f$7;
  this.Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_pf = p$3
}
$c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1.prototype = $c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1.prototype;
var $d_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1: 0
}, false, "japgolly.scalajs.react.CtorType$Summoner$$anon$1", {
  Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1: 1,
  O: 1,
  Ljapgolly_scalajs_react_CtorType$Summoner: 1
});
$c_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1.prototype.$classData = $d_Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1;
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_Trampoline$Delay(value) {
  this.Ljapgolly_scalajs_react_callback_Trampoline$Delay__f_value = null;
  this.Ljapgolly_scalajs_react_callback_Trampoline$Delay__f_value = value
}
$c_Ljapgolly_scalajs_react_callback_Trampoline$Delay.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_Trampoline$Delay.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_Trampoline$Delay;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_Trampoline$Delay() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_callback_Trampoline$Delay.prototype = $c_Ljapgolly_scalajs_react_callback_Trampoline$Delay.prototype;
function $as_Ljapgolly_scalajs_react_callback_Trampoline$Delay(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_callback_Trampoline$Delay) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.callback.Trampoline$Delay"))
}
function $isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$Delay(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_callback_Trampoline$Delay)))
}
function $asArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$Delay(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$Delay(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.callback.Trampoline$Delay;", depth))
}
var $d_Ljapgolly_scalajs_react_callback_Trampoline$Delay = new $TypeData().initClass({
  Ljapgolly_scalajs_react_callback_Trampoline$Delay: 0
}, false, "japgolly.scalajs.react.callback.Trampoline$Delay", {
  Ljapgolly_scalajs_react_callback_Trampoline$Delay: 1,
  O: 1,
  Ljapgolly_scalajs_react_callback_Trampoline: 1
});
$c_Ljapgolly_scalajs_react_callback_Trampoline$Delay.prototype.$classData = $d_Ljapgolly_scalajs_react_callback_Trampoline$Delay;
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap(from, f) {
  this.Ljapgolly_scalajs_react_callback_Trampoline$FlatMap__f_from = null;
  this.Ljapgolly_scalajs_react_callback_Trampoline$FlatMap__f_f = null;
  this.Ljapgolly_scalajs_react_callback_Trampoline$FlatMap__f_from = from;
  this.Ljapgolly_scalajs_react_callback_Trampoline$FlatMap__f_f = f
}
$c_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap.prototype = $c_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap.prototype;
function $as_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.callback.Trampoline$FlatMap"))
}
function $isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_callback_Trampoline$FlatMap)))
}
function $asArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.callback.Trampoline$FlatMap;", depth))
}
var $d_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap = new $TypeData().initClass({
  Ljapgolly_scalajs_react_callback_Trampoline$FlatMap: 0
}, false, "japgolly.scalajs.react.callback.Trampoline$FlatMap", {
  Ljapgolly_scalajs_react_callback_Trampoline$FlatMap: 1,
  O: 1,
  Ljapgolly_scalajs_react_callback_Trampoline: 1
});
$c_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap.prototype.$classData = $d_Ljapgolly_scalajs_react_callback_Trampoline$FlatMap;
/** @constructor */
function $c_Ljapgolly_scalajs_react_callback_Trampoline$Pure(value) {
  this.Ljapgolly_scalajs_react_callback_Trampoline$Pure__f_value = null;
  this.Ljapgolly_scalajs_react_callback_Trampoline$Pure__f_value = value
}
$c_Ljapgolly_scalajs_react_callback_Trampoline$Pure.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_callback_Trampoline$Pure.prototype.constructor = $c_Ljapgolly_scalajs_react_callback_Trampoline$Pure;
/** @constructor */
function $h_Ljapgolly_scalajs_react_callback_Trampoline$Pure() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_callback_Trampoline$Pure.prototype = $c_Ljapgolly_scalajs_react_callback_Trampoline$Pure.prototype;
function $as_Ljapgolly_scalajs_react_callback_Trampoline$Pure(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_callback_Trampoline$Pure) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.callback.Trampoline$Pure"))
}
function $isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$Pure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_callback_Trampoline$Pure)))
}
function $asArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$Pure(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$Pure(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.callback.Trampoline$Pure;", depth))
}
var $d_Ljapgolly_scalajs_react_callback_Trampoline$Pure = new $TypeData().initClass({
  Ljapgolly_scalajs_react_callback_Trampoline$Pure: 0
}, false, "japgolly.scalajs.react.callback.Trampoline$Pure", {
  Ljapgolly_scalajs_react_callback_Trampoline$Pure: 1,
  O: 1,
  Ljapgolly_scalajs_react_callback_Trampoline: 1
});
$c_Ljapgolly_scalajs_react_callback_Trampoline$Pure.prototype.$classData = $d_Ljapgolly_scalajs_react_callback_Trampoline$Pure;
function $as_Ljapgolly_scalajs_react_callback_Trampoline$Suspend(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.callback.Trampoline$Suspend"))
}
function $isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$Suspend(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_callback_Trampoline$Suspend)))
}
function $asArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$Suspend(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_callback_Trampoline$Suspend(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.callback.Trampoline$Suspend;", depth))
}
function $f_Ljapgolly_scalajs_react_component_Generic$UnmountedSimple__renderIntoDOM__sjs_js_$bar__O($thiz, container) {
  var $x_3 = $n($thiz.mountRaw__F1());
  var $x_2 = ReactDOM;
  var a = $thiz.raw__Ljapgolly_scalajs_react_facade_React$ComponentElement();
  var $x_1 = $x_2.render(a, container);
  return $n($x_3).apply__O__O($x_1)
}
function $is_Ljapgolly_scalajs_react_component_Generic$UnmountedSimple(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_component_Generic$UnmountedSimple)))
}
function $as_Ljapgolly_scalajs_react_component_Generic$UnmountedSimple(obj) {
  return (($is_Ljapgolly_scalajs_react_component_Generic$UnmountedSimple(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.Generic$UnmountedSimple"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_Generic$UnmountedSimple(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_Generic$UnmountedSimple)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_Generic$UnmountedSimple(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_Generic$UnmountedSimple(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.Generic$UnmountedSimple;", depth))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Js$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_component_Js$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_Js$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Js$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Js$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_Js$.prototype = $c_Ljapgolly_scalajs_react_component_Js$.prototype;
$c_Ljapgolly_scalajs_react_component_Js$.prototype.component__sjs_js_Function1__Ljapgolly_scalajs_react_CtorType$Summoner__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(rc, s) {
  var this$6 = $n($n(s).Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_pf);
  var f = $n($n(s).Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_summon).apply__O__O(rc);
  var m = new $c_sjsr_AnonFunction1(((r$2) => $m_Ljapgolly_scalajs_react_component_Js$().unmounted__Ljapgolly_scalajs_react_facade_React$ComponentElement__Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(r$2)));
  var c = this$6.rmap__Ljapgolly_scalajs_react_CtorType$Nullary__F1__Ljapgolly_scalajs_react_CtorType$Nullary($as_Ljapgolly_scalajs_react_CtorType$Nullary(f), m);
  var pf = $n(s).Ljapgolly_scalajs_react_CtorType$Summoner$$anon$1__f_pf;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1(this, rc, c, pf)
});
$c_Ljapgolly_scalajs_react_component_Js$.prototype.unmounted__Ljapgolly_scalajs_react_facade_React$ComponentElement__Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot = (function(r) {
  var m = new $c_sjsr_AnonFunction1(((r$2$2) => new $c_Ljapgolly_scalajs_react_component_Js$$anon$3(r$2$2)));
  return new $c_Ljapgolly_scalajs_react_component_Js$$anon$1(r, m)
});
var $d_Ljapgolly_scalajs_react_component_Js$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_Js$: 0
}, false, "japgolly.scalajs.react.component.Js$", {
  Ljapgolly_scalajs_react_component_Js$: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate: 1
});
$c_Ljapgolly_scalajs_react_component_Js$.prototype.$classData = $d_Ljapgolly_scalajs_react_component_Js$;
var $n_Ljapgolly_scalajs_react_component_Js$;
function $m_Ljapgolly_scalajs_react_component_Js$() {
  if ((!$n_Ljapgolly_scalajs_react_component_Js$)) {
    $n_Ljapgolly_scalajs_react_component_Js$ = new $c_Ljapgolly_scalajs_react_component_Js$()
  };
  return $n_Ljapgolly_scalajs_react_component_Js$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$.prototype.japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T = (function(toString) {
  var this$2 = $n($f_T__replaceAll__T__T__T($n(toString), "undefined \u2192 undefined", "undefined"));
  var this$3 = $n($as_T(this$2.split("props: undefined, ").join("")));
  var this$4 = $n($as_T(this$3.split("state: undefined)").join(")")));
  return $as_T(this$4.split(", )").join(")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$;
var $n_Ljapgolly_scalajs_react_component_builder_LifecycleF$;
function $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$() {
  if ((!$n_Ljapgolly_scalajs_react_component_builder_LifecycleF$)) {
    $n_Ljapgolly_scalajs_react_component_builder_LifecycleF$ = new $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$()
  };
  return $n_Ljapgolly_scalajs_react_component_builder_LifecycleF$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount(raw, evidence$9, evidence$10) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$9, evidence$10)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((((("ComponentWillUnmount(props: " + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).props__O()) + ", state: ") + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).state__O()) + ")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$ComponentWillUnmount", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUnmount;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate(raw, nextProps, nextState, evidence$13, evidence$14) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate__f_nextProps = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate__f_nextState = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate__f_nextProps = nextProps;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate__f_nextState = nextState;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$13, evidence$14)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((((((((("ComponentWillUpdate(props: " + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).props__O()) + " \u2192 ") + this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate__f_nextProps) + ", state: ") + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).state__O()) + " \u2192 ") + this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate__f_nextState) + ")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$ComponentWillUpdate", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillUpdate;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate(raw, prevProps, prevState, evidence$15, evidence$16) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate__f_prevProps = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate__f_prevState = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate__f_prevProps = prevProps;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate__f_prevState = prevState;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$15, evidence$16)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((((((((("GetSnapshotBeforeUpdate(props: " + this.Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate__f_prevProps) + " \u2192 ") + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).props__O()) + ", state: ") + this.Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate__f_prevState) + " \u2192 ") + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).state__O()) + ")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$GetSnapshotBeforeUpdate", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$GetSnapshotBeforeUpdate;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate(raw, nextProps, nextState, evidence$17, evidence$18) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate__f_nextProps = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate__f_nextState = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate__f_nextProps = nextProps;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate__f_nextState = nextState;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$17, evidence$18)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((((((((("ShouldComponentUpdate(props: " + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).props__O()) + " \u2192 ") + this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate__f_nextProps) + ", state: ") + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).state__O()) + " \u2192 ") + this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate__f_nextState) + ")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$ShouldComponentUpdate", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ShouldComponentUpdate;
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr$ClassName$() {
  this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = null;
  $ct_Ljapgolly_scalajs_react_vdom_Attr__T__(this, "class")
}
$c_Ljapgolly_scalajs_react_vdom_Attr$ClassName$.prototype = new $h_Ljapgolly_scalajs_react_vdom_Attr();
$c_Ljapgolly_scalajs_react_vdom_Attr$ClassName$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr$ClassName$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr$ClassName$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_Attr$ClassName$.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr$ClassName$.prototype;
$c_Ljapgolly_scalajs_react_vdom_Attr$ClassName$.prototype.$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod = (function(a, t) {
  $m_Ljapgolly_scalajs_react_vdom_TagMod$();
  var f = new $c_sjsr_AnonFunction1(((b$2) => {
    var b = $as_Ljapgolly_scalajs_react_vdom_VdomBuilder(b$2);
    $n(t).apply__O__O__O($n(b).Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addClassName, a)
  }));
  return new $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3(f)
});
var $d_Ljapgolly_scalajs_react_vdom_Attr$ClassName$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_Attr$ClassName$: 0
}, false, "japgolly.scalajs.react.vdom.Attr$ClassName$", {
  Ljapgolly_scalajs_react_vdom_Attr$ClassName$: 1,
  Ljapgolly_scalajs_react_vdom_Attr: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_Attr$ClassName$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_Attr$ClassName$;
var $n_Ljapgolly_scalajs_react_vdom_Attr$ClassName$;
function $m_Ljapgolly_scalajs_react_vdom_Attr$ClassName$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_Attr$ClassName$)) {
    $n_Ljapgolly_scalajs_react_vdom_Attr$ClassName$ = new $c_Ljapgolly_scalajs_react_vdom_Attr$ClassName$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_Attr$ClassName$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr$Event(name) {
  this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = null;
  $ct_Ljapgolly_scalajs_react_vdom_Attr__T__(this, name)
}
$c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype = new $h_Ljapgolly_scalajs_react_vdom_Attr();
$c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr$Event;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr$Event() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype;
$c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype.$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod = (function(a, t) {
  $m_Ljapgolly_scalajs_react_vdom_TagMod$();
  var f = new $c_sjsr_AnonFunction1(((b$2) => {
    var b = $as_Ljapgolly_scalajs_react_vdom_VdomBuilder(b$2);
    $n(t).apply__O__O__O(new $c_sjsr_AnonFunction1(((f$2) => {
      $n($n(b).Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addEventHandler).apply__O__O__O(this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName, f$2)
    })), a)
  }));
  return new $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3(f)
});
var $d_Ljapgolly_scalajs_react_vdom_Attr$Event = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_Attr$Event: 0
}, false, "japgolly.scalajs.react.vdom.Attr$Event", {
  Ljapgolly_scalajs_react_vdom_Attr$Event: 1,
  Ljapgolly_scalajs_react_vdom_Attr: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_Attr$Event.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_Attr$Event;
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Attr$Generic(attrName) {
  this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = null;
  $ct_Ljapgolly_scalajs_react_vdom_Attr__T__(this, attrName)
}
$c_Ljapgolly_scalajs_react_vdom_Attr$Generic.prototype = new $h_Ljapgolly_scalajs_react_vdom_Attr();
$c_Ljapgolly_scalajs_react_vdom_Attr$Generic.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Attr$Generic;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Attr$Generic() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_Attr$Generic.prototype = $c_Ljapgolly_scalajs_react_vdom_Attr$Generic.prototype;
$c_Ljapgolly_scalajs_react_vdom_Attr$Generic.prototype.$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod = (function(a, t) {
  return $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().apply$extension__F2__T__O__Ljapgolly_scalajs_react_vdom_TagMod(t, this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName, a)
});
var $d_Ljapgolly_scalajs_react_vdom_Attr$Generic = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_Attr$Generic: 0
}, false, "japgolly.scalajs.react.vdom.Attr$Generic", {
  Ljapgolly_scalajs_react_vdom_Attr$Generic: 1,
  Ljapgolly_scalajs_react_vdom_Attr: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_Attr$Generic.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_Attr$Generic;
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Exports$() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null;
  $ct_Ljapgolly_scalajs_react_vdom_Exports__(this)
}
$c_Ljapgolly_scalajs_react_vdom_Exports$.prototype = new $h_Ljapgolly_scalajs_react_vdom_Exports();
$c_Ljapgolly_scalajs_react_vdom_Exports$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Exports$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Exports$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_Exports$.prototype = $c_Ljapgolly_scalajs_react_vdom_Exports$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_Exports$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_Exports$: 0
}, false, "japgolly.scalajs.react.vdom.Exports$", {
  Ljapgolly_scalajs_react_vdom_Exports$: 1,
  Ljapgolly_scalajs_react_vdom_Exports: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_Exports$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_Exports$;
var $n_Ljapgolly_scalajs_react_vdom_Exports$;
function $m_Ljapgolly_scalajs_react_vdom_Exports$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_Exports$)) {
    $n_Ljapgolly_scalajs_react_vdom_Exports$ = new $c_Ljapgolly_scalajs_react_vdom_Exports$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_Exports$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_HtmlTagOf$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype = $c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype;
$c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype.apply$extension__T__sci_Seq__Ljapgolly_scalajs_react_vdom_TagOf = (function(this$, xs) {
  var this$1 = $n($m_s_package$().s_package$__f_Nil);
  return new $c_Ljapgolly_scalajs_react_vdom_TagOf(this$, new $c_sci_$colon$colon(xs, this$1))
});
var $d_Ljapgolly_scalajs_react_vdom_HtmlTagOf$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_HtmlTagOf$: 0
}, false, "japgolly.scalajs.react.vdom.HtmlTagOf$", {
  Ljapgolly_scalajs_react_vdom_HtmlTagOf$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_HtmlTagOf$;
var $n_Ljapgolly_scalajs_react_vdom_HtmlTagOf$;
function $m_Ljapgolly_scalajs_react_vdom_HtmlTagOf$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_HtmlTagOf$)) {
    $n_Ljapgolly_scalajs_react_vdom_HtmlTagOf$ = new $c_Ljapgolly_scalajs_react_vdom_HtmlTagOf$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_HtmlTagOf$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_HtmlTags$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_vdom_HtmlTags$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_HtmlTags$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_HtmlTags$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_HtmlTags$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_HtmlTags$.prototype = $c_Ljapgolly_scalajs_react_vdom_HtmlTags$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_HtmlTags$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_HtmlTags$: 0
}, false, "japgolly.scalajs.react.vdom.HtmlTags$", {
  Ljapgolly_scalajs_react_vdom_HtmlTags$: 1,
  O: 1,
  Ljapgolly_scalajs_react_vdom_HtmlTags: 1
});
$c_Ljapgolly_scalajs_react_vdom_HtmlTags$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_HtmlTags$;
var $n_Ljapgolly_scalajs_react_vdom_HtmlTags$;
function $m_Ljapgolly_scalajs_react_vdom_HtmlTags$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_HtmlTags$)) {
    $n_Ljapgolly_scalajs_react_vdom_HtmlTags$ = new $c_Ljapgolly_scalajs_react_vdom_HtmlTags$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_HtmlTags$
}
function $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1__$init$__V($thiz) {
  $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$();
  $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$()
}
function $ct_Ljapgolly_scalajs_react_vdom_Style__T__($thiz, name) {
  $thiz.Ljapgolly_scalajs_react_vdom_Style__f_name = name;
  $ct_Ljapgolly_scalajs_react_vdom_Attr__T__($thiz, ("style." + name));
  return $thiz
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_Style() {
  this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = null;
  this.Ljapgolly_scalajs_react_vdom_Style__f_name = null
}
$c_Ljapgolly_scalajs_react_vdom_Style.prototype = new $h_Ljapgolly_scalajs_react_vdom_Attr();
$c_Ljapgolly_scalajs_react_vdom_Style.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_Style;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_Style() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_Style.prototype = $c_Ljapgolly_scalajs_react_vdom_Style.prototype;
$c_Ljapgolly_scalajs_react_vdom_Style.prototype.$colon$eq__O__F2__Ljapgolly_scalajs_react_vdom_TagMod = (function(a, t) {
  $m_Ljapgolly_scalajs_react_vdom_TagMod$();
  var f = new $c_sjsr_AnonFunction1(((b$2) => {
    var b = $as_Ljapgolly_scalajs_react_vdom_VdomBuilder(b$2);
    $n(t).apply__O__O__O(new $c_sjsr_AnonFunction1(((x$1$2) => {
      $n($n(b).Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addStyle).apply__O__O__O(this.Ljapgolly_scalajs_react_vdom_Style__f_name, x$1$2)
    })), a)
  }));
  return new $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3(f)
});
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2.prototype = $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2.prototype;
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2.prototype.applyTo__Ljapgolly_scalajs_react_vdom_VdomBuilder__V = (function(b) {
  /*<skip>*/
});
var $d_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_TagMod$$anon$2: 0
}, false, "japgolly.scalajs.react.vdom.TagMod$$anon$2", {
  Ljapgolly_scalajs_react_vdom_TagMod$$anon$2: 1,
  O: 1,
  Ljapgolly_scalajs_react_vdom_TagMod: 1
});
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_TagMod$$anon$2;
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3(f$1) {
  this.Ljapgolly_scalajs_react_vdom_TagMod$$anon$3__f_f$1 = null;
  this.Ljapgolly_scalajs_react_vdom_TagMod$$anon$3__f_f$1 = f$1
}
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype = $c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype;
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype.applyTo__Ljapgolly_scalajs_react_vdom_VdomBuilder__V = (function(b) {
  $n(this.Ljapgolly_scalajs_react_vdom_TagMod$$anon$3__f_f$1).apply__O__O(b)
});
var $d_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_TagMod$$anon$3: 0
}, false, "japgolly.scalajs.react.vdom.TagMod$$anon$3", {
  Ljapgolly_scalajs_react_vdom_TagMod$$anon$3: 1,
  O: 1,
  Ljapgolly_scalajs_react_vdom_TagMod: 1
});
$c_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_TagMod$$anon$3;
function $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__addClassNameToProps__V($thiz) {
  var value = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_nonEmptyClassName;
  if ((value !== (void 0))) {
    var o = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props;
    o.className = value
  }
}
function $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__addStyleToProps__V($thiz) {
  var o = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_styles;
  var value = (($uI(Object.keys(o).length) === 0) ? (void 0) : o);
  if ((value !== (void 0))) {
    var o$1 = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props;
    o$1.style = value
  }
}
function $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__japgolly$scalajs$react$vdom$VdomBuilder$ToJs$$$anonfun$addEventHandler$3__sjs_js_Any__sjs_js_Function1__sjs_js_Function1__O($thiz, e, f$1, g$1) {
  f$1(e);
  return g$1(e)
}
function $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__$init$__V($thiz) {
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props = {};
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_styles = {};
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_children = [];
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_key = (void 0);
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_nonEmptyClassName = (void 0);
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addAttr = new $c_sjsr_AnonFunction2(((x$4$2, x$5$2) => {
    var x$4 = $as_T(x$4$2);
    var o = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props;
    o[x$4] = x$5$2
  }));
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addClassName = new $c_sjsr_AnonFunction1(((n$2) => {
    var value = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_nonEmptyClassName;
    if ((value === (void 0))) {
      var a = n$2
    } else {
      var s = (($dp_toString__T($n(value)) + " ") + n$2);
      var a = s
    };
    $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_nonEmptyClassName = a
  }));
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addEventHandler = new $c_sjsr_AnonFunction2(((k$2, g$2) => {
    var k = $as_T(k$2);
    var o$1 = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props;
    var cur = o$1[k];
    if ((cur === (void 0))) {
      var $x_1 = g$2
    } else {
      if ((cur === (void 0))) {
        throw new $c_ju_NoSuchElementException("undefined.get")
      };
      var $x_1 = ((arg1$2) => $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__japgolly$scalajs$react$vdom$VdomBuilder$ToJs$$$anonfun$addEventHandler$3__sjs_js_Any__sjs_js_Function1__sjs_js_Function1__O($thiz, arg1$2, cur, g$2))
    };
    o$1[k] = $x_1
  }));
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addStyle = new $c_sjsr_AnonFunction2(((x$7$2, x$8$2) => {
    var x$7 = $as_T(x$7$2);
    var o$2 = $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_styles;
    o$2[x$7] = x$8$2
  }));
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_appendChild = new $c_sjsr_AnonFunction1(((x$10$2) => {
    $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_children.push(x$10$2)
  }));
  $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_setKey = new $c_sjsr_AnonFunction1(((k$3$2) => {
    $thiz.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_key = k$3$2
  }))
}
function $is_Ljapgolly_scalajs_react_vdom_VdomNode(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_vdom_VdomNode)))
}
function $as_Ljapgolly_scalajs_react_vdom_VdomNode(obj) {
  return (($is_Ljapgolly_scalajs_react_vdom_VdomNode(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.vdom.VdomNode"))
}
function $isArrayOf_Ljapgolly_scalajs_react_vdom_VdomNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_vdom_VdomNode)))
}
function $asArrayOf_Ljapgolly_scalajs_react_vdom_VdomNode(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_vdom_VdomNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.vdom.VdomNode;", depth))
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0)
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0)
  } else {
    var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1)
    } else {
      var v = ((codePoint - $n($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this)).get(zeroCodePointIndex)) | 0);
      var value = ((v > 9) ? (-1) : v)
    }
  };
  return ((value < radix) ? value : (-1))
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
function $p_jl_Integer$__fail$1__T__E($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
}
/** @constructor */
function $c_jl_Integer$() {
  /*<skip>*/
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
  if ((s === null)) {
    var len = 0
  } else {
    var this$1 = $n(s);
    var len = this$1.length
  };
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var this$2 = $n(s);
  var firstChar = $charAt(this$2, 0);
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  var $x_1 = i;
  var this$3 = $n(s);
  if (($x_1 >= this$3.length)) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var result = 0.0;
  while ((i !== len)) {
    var $x_2 = $m_jl_Character$();
    var this$4 = $n(s);
    var index = i;
    var digit = $n($x_2).digitWithValidRadix__I__I__I($charAt(this$4, index), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    i = ((1 + i) | 0)
  };
  if (negative) {
    var n = (-result);
    return $uI((n | 0.0))
  } else {
    var n$1 = result;
    return $uI((n$1 | 0.0))
  }
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    var $x_1 = this;
    var reference = (false ? $x_1.sjs_js_JavaScriptException__f_exception : $n($x_1));
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if ((Error.captureStackTrace === (void 0))) {
        new Error()
      } else {
        Error.captureStackTrace(this)
      }
    };
    return this
  };
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  get "name"() {
    return $objectClassName(this)
  };
  "toString"() {
    return this.toString__T()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
function $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher($thiz) {
  $thiz.ju_regex_Matcher__f_position = 0;
  $thiz.ju_regex_Matcher__f_lastMatch = null;
  $thiz.ju_regex_Matcher__f_appendPos = 0;
  return $thiz
}
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw new $c_jl_IllegalStateException("No match available")
  };
  return $thiz.ju_regex_Matcher__f_lastMatch
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.ju_regex_Matcher__f_pattern0 = null;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = null;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  this.ju_regex_Matcher__f_inputstr = null;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
  this.ju_regex_Matcher__f_appendPos = 0;
  this.ju_regex_Matcher__f_pattern0 = pattern0;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = input0;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  $n(this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0);
  this.ju_regex_Matcher__f_inputstr = this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
  this.ju_regex_Matcher__f_appendPos = 0
}
$c_ju_regex_Matcher.prototype = new $h_O();
$c_ju_regex_Matcher.prototype.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
  /*<skip>*/
}
$h_ju_regex_Matcher.prototype = $c_ju_regex_Matcher.prototype;
$c_ju_regex_Matcher.prototype.find__Z = (function() {
  var this$1 = $n(this.ju_regex_Matcher__f_pattern0);
  var input = this.ju_regex_Matcher__f_inputstr;
  var start = this.ju_regex_Matcher__f_position;
  var mtch = this$1.java$util$regex$Pattern$$execFindInternal__T__I__O(input, start);
  var end = $uI(this$1.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind.lastIndex);
  if ((mtch !== null)) {
    var $x_1 = ((end === $uI(mtch.index)) ? ((1 + end) | 0) : end)
  } else {
    var this$2 = $n(this.ju_regex_Matcher__f_inputstr);
    var $x_1 = ((1 + this$2.length) | 0)
  };
  this.ju_regex_Matcher__f_position = $x_1;
  this.ju_regex_Matcher__f_lastMatch = mtch;
  return (mtch !== null)
});
$c_ju_regex_Matcher.prototype.appendReplacement__jl_StringBuffer__T__ju_regex_Matcher = (function(sb, replacement) {
  var $x_1 = $n(sb);
  var this$1 = $n(this.ju_regex_Matcher__f_inputstr);
  var beginIndex = this.ju_regex_Matcher__f_appendPos;
  var endIndex = this.start__I();
  if ((beginIndex < 0)) {
    $charAt(this$1, beginIndex)
  };
  if ((endIndex > this$1.length)) {
    $charAt(this$1, endIndex)
  };
  if ((endIndex < beginIndex)) {
    $charAt(this$1, (-1))
  };
  $n($x_1).append__T__jl_StringBuffer($as_T(this$1.substring(beginIndex, endIndex)));
  var this$2 = $n(replacement);
  var len = this$2.length;
  var i = 0;
  while ((i < len)) {
    var this$3 = $n(replacement);
    var index = i;
    var x1 = $charAt(this$3, index);
    switch (x1) {
      case 36: {
        i = ((1 + i) | 0);
        var j = i;
        while (true) {
          if ((i < len)) {
            var this$4 = $n(replacement);
            var index$1 = i;
            var c = $charAt(this$4, index$1);
            var $x_2 = ((c >= 48) && (c <= 57))
          } else {
            var $x_2 = false
          };
          if ($x_2) {
            i = ((1 + i) | 0)
          } else {
            break
          }
        };
        var this$6 = $m_jl_Integer$();
        var this$5 = $n(replacement);
        var endIndex$1 = i;
        if ((j < 0)) {
          $charAt(this$5, j)
        };
        if ((endIndex$1 > this$5.length)) {
          $charAt(this$5, endIndex$1)
        };
        if ((endIndex$1 < j)) {
          $charAt(this$5, (-1))
        };
        var s = $as_T(this$5.substring(j, endIndex$1));
        var group = this$6.parseInt__T__I__I(s, 10);
        var replaced = this.group__I__T(group);
        if ((replaced !== null)) {
          $n(sb).append__T__jl_StringBuffer(replaced)
        };
        break
      }
      case 92: {
        i = ((1 + i) | 0);
        if ((i < len)) {
          var $x_3 = $n(sb);
          var this$7 = $n(replacement);
          var index$2 = i;
          $n($x_3).append__C__jl_StringBuffer($charAt(this$7, index$2))
        };
        i = ((1 + i) | 0);
        break
      }
      default: {
        $n(sb).append__C__jl_StringBuffer(x1);
        i = ((1 + i) | 0)
      }
    }
  };
  this.ju_regex_Matcher__f_appendPos = this.end__I();
  return this
});
$c_ju_regex_Matcher.prototype.appendTail__jl_StringBuffer__jl_StringBuffer = (function(sb) {
  var $x_1 = $n(sb);
  var this$1 = $n(this.ju_regex_Matcher__f_inputstr);
  var beginIndex = this.ju_regex_Matcher__f_appendPos;
  if (((beginIndex < 0) || (beginIndex > this$1.length))) {
    $charAt(this$1, beginIndex)
  };
  $n($x_1).append__T__jl_StringBuffer($as_T(this$1.substring(beginIndex)));
  var this$2 = $n(this.ju_regex_Matcher__f_inputstr);
  this.ju_regex_Matcher__f_appendPos = this$2.length;
  return sb
});
$c_ju_regex_Matcher.prototype.replaceAll__T__T = (function(replacement) {
  this.reset__ju_regex_Matcher();
  var sb = $ct_jl_StringBuffer__(new $c_jl_StringBuffer());
  while (this.find__Z()) {
    this.appendReplacement__jl_StringBuffer__T__ju_regex_Matcher(sb, replacement)
  };
  this.appendTail__jl_StringBuffer__jl_StringBuffer(sb);
  return sb.toString__T()
});
$c_ju_regex_Matcher.prototype.reset__ju_regex_Matcher = (function() {
  this.ju_regex_Matcher__f_regionStart0 = 0;
  $n(this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0);
  this.ju_regex_Matcher__f_inputstr = this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0;
  return $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher(this)
});
$c_ju_regex_Matcher.prototype.start__I = (function() {
  return (($uI($p_ju_regex_Matcher__ensureLastMatch__O(this).index) + this.ju_regex_Matcher__f_regionStart0) | 0)
});
$c_ju_regex_Matcher.prototype.end__I = (function() {
  var $x_1 = this.start__I();
  var this$1 = $n(this.group__T());
  return (($x_1 + this$1.length) | 0)
});
$c_ju_regex_Matcher.prototype.group__T = (function() {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
  return $as_T(x)
});
$c_ju_regex_Matcher.prototype.group__I__T = (function(group) {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[$n(this.ju_regex_Matcher__f_pattern0).numberedGroup__I__I(group)];
  return $as_T(((x !== (void 0)) ? x : null))
});
var $d_ju_regex_Matcher = new $TypeData().initClass({
  ju_regex_Matcher: 0
}, false, "java.util.regex.Matcher", {
  ju_regex_Matcher: 1,
  O: 1,
  ju_regex_MatchResult: 1
});
$c_ju_regex_Matcher.prototype.$classData = $d_ju_regex_Matcher;
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.ju_regex_Pattern__f__pattern = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = false;
  this.ju_regex_Pattern__f_groupCount = 0;
  this.ju_regex_Pattern__f_groupNumberMap = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = null;
  this.ju_regex_Pattern__f__pattern = _pattern;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = jsFlags;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = sticky;
  this.ju_regex_Pattern__f_groupCount = groupCount;
  this.ju_regex_Pattern__f_groupNumberMap = groupNumberMap;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = new RegExp(jsPattern, (this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags + (this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags)
}
$c_ju_regex_Pattern.prototype = new $h_O();
$c_ju_regex_Pattern.prototype.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
  /*<skip>*/
}
$h_ju_regex_Pattern.prototype = $c_ju_regex_Pattern.prototype;
$c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$execFindInternal__T__I__O = (function(input, start) {
  var regexp = this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind;
  regexp.lastIndex = start;
  return regexp.exec(input)
});
$c_ju_regex_Pattern.prototype.numberedGroup__I__I = (function(group) {
  if (((group < 0) || (group > this.ju_regex_Pattern__f_groupCount))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + group))
  };
  return $uI(this.ju_regex_Pattern__f_groupNumberMap[group])
});
$c_ju_regex_Pattern.prototype.toString__T = (function() {
  return this.ju_regex_Pattern__f__pattern
});
var $d_ju_regex_Pattern = new $TypeData().initClass({
  ju_regex_Pattern: 0
}, false, "java.util.regex.Pattern", {
  ju_regex_Pattern: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern.prototype.$classData = $d_ju_regex_Pattern;
/** @constructor */
function $c_s_$less$colon$less$() {
  this.s_$less$colon$less$__f_singleton = null;
  $n_s_$less$colon$less$ = this;
  this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
}
$c_s_$less$colon$less$.prototype = new $h_O();
$c_s_$less$colon$less$.prototype.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
  /*<skip>*/
}
$h_s_$less$colon$less$.prototype = $c_s_$less$colon$less$.prototype;
var $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
/** @constructor */
function $c_s_Array$() {
  /*<skip>*/
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
  /*<skip>*/
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var this$1 = $n(src);
  var srcClass = $objectGetClass(this$1);
  if ($n(srcClass).isArray__Z()) {
    var this$2 = $n(dest);
    var $x_1 = $n($objectGetClass(this$2)).isAssignableFrom__jl_Class__Z(srcClass)
  } else {
    var $x_1 = false
  };
  if ($x_1) {
    $systemArraycopyFull($n(src), srcPos, $n(dest), destPos, length)
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
  }
});
var $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
/** @constructor */
function $c_s_Option$() {
  /*<skip>*/
}
$c_s_Option$.prototype = new $h_O();
$c_s_Option$.prototype.constructor = $c_s_Option$;
/** @constructor */
function $h_s_Option$() {
  /*<skip>*/
}
$h_s_Option$.prototype = $c_s_Option$.prototype;
$c_s_Option$.prototype.apply__O__s_Option = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x))
});
var $d_s_Option$ = new $TypeData().initClass({
  s_Option$: 0
}, false, "scala.Option$", {
  s_Option$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Option$.prototype.$classData = $d_s_Option$;
var $n_s_Option$;
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$()
  };
  return $n_s_Option$
}
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
}
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.compose__F1__F1 = (function(g) {
  return $f_F1__compose__F1__F1(this, g)
});
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, xs) {
  if ((xs === $thiz)) {
    $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(xs))
  } else {
    var it = $n(xs).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      $thiz.addOne__O__scm_Growable($n(it).next__O())
    }
  };
  return $thiz
}
/** @constructor */
function $c_s_package$$anon$1() {
  /*<skip>*/
}
$c_s_package$$anon$1.prototype = new $h_O();
$c_s_package$$anon$1.prototype.constructor = $c_s_package$$anon$1;
/** @constructor */
function $h_s_package$$anon$1() {
  /*<skip>*/
}
$h_s_package$$anon$1.prototype = $c_s_package$$anon$1.prototype;
$c_s_package$$anon$1.prototype.toString__T = (function() {
  return "object AnyRef"
});
var $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
/** @constructor */
function $c_sr_AbstractFunction0() {
  /*<skip>*/
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
  /*<skip>*/
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>"
});
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.compose__F1__F1 = (function(g) {
  return $f_F1__compose__F1__F1(this, g)
});
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_AbstractFunction2() {
  /*<skip>*/
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
  /*<skip>*/
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>"
});
/** @constructor */
function $c_sr_AbstractFunction3() {
  /*<skip>*/
}
$c_sr_AbstractFunction3.prototype = new $h_O();
$c_sr_AbstractFunction3.prototype.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
  /*<skip>*/
}
$h_sr_AbstractFunction3.prototype = $c_sr_AbstractFunction3.prototype;
$c_sr_AbstractFunction3.prototype.toString__T = (function() {
  return "<function3>"
});
/** @constructor */
function $c_sr_AbstractFunction4() {
  /*<skip>*/
}
$c_sr_AbstractFunction4.prototype = new $h_O();
$c_sr_AbstractFunction4.prototype.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
  /*<skip>*/
}
$h_sr_AbstractFunction4.prototype = $c_sr_AbstractFunction4.prototype;
$c_sr_AbstractFunction4.prototype.toString__T = (function() {
  return "<function4>"
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.sr_IntRef__f_elem = 0;
  this.sr_IntRef__f_elem = elem
}
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
  /*<skip>*/
}
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.sr_IntRef__f_elem;
  return ("" + i)
});
var $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
  /*<skip>*/
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj)
});
var $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
/** @constructor */
function $c_s_util_Left$() {
  /*<skip>*/
}
$c_s_util_Left$.prototype = new $h_O();
$c_s_util_Left$.prototype.constructor = $c_s_util_Left$;
/** @constructor */
function $h_s_util_Left$() {
  /*<skip>*/
}
$h_s_util_Left$.prototype = $c_s_util_Left$.prototype;
$c_s_util_Left$.prototype.toString__T = (function() {
  return "Left"
});
var $d_s_util_Left$ = new $TypeData().initClass({
  s_util_Left$: 0
}, false, "scala.util.Left$", {
  s_util_Left$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left$.prototype.$classData = $d_s_util_Left$;
var $n_s_util_Left$;
function $m_s_util_Left$() {
  if ((!$n_s_util_Left$)) {
    $n_s_util_Left$ = new $c_s_util_Left$()
  };
  return $n_s_util_Left$
}
/** @constructor */
function $c_s_util_Right$() {
  /*<skip>*/
}
$c_s_util_Right$.prototype = new $h_O();
$c_s_util_Right$.prototype.constructor = $c_s_util_Right$;
/** @constructor */
function $h_s_util_Right$() {
  /*<skip>*/
}
$h_s_util_Right$.prototype = $c_s_util_Right$.prototype;
$c_s_util_Right$.prototype.toString__T = (function() {
  return "Right"
});
var $d_s_util_Right$ = new $TypeData().initClass({
  s_util_Right$: 0
}, false, "scala.util.Right$", {
  s_util_Right$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right$.prototype.$classData = $d_s_util_Right$;
var $n_s_util_Right$;
function $m_s_util_Right$() {
  if ((!$n_s_util_Right$)) {
    $n_s_util_Right$ = new $c_s_util_Right$()
  };
  return $n_s_util_Right$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.unorderedHash__sc_IterableOnce__I__I($m_s_package$().s_package$__f_Nil, this.s_util_hashing_MurmurHash3$__f_mapSeed)
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle(name) {
  this.Ljapgolly_scalajs_react_vdom_Attr__f_attrName = null;
  this.Ljapgolly_scalajs_react_vdom_Style__f_name = null;
  $ct_Ljapgolly_scalajs_react_vdom_Style__T__(this, name)
}
$c_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle.prototype = new $h_Ljapgolly_scalajs_react_vdom_Style();
$c_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle.prototype = $c_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle.prototype;
var $d_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle: 0
}, false, "japgolly.scalajs.react.vdom.HtmlStylesStatic$AutoStyle", {
  Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle: 1,
  Ljapgolly_scalajs_react_vdom_Style: 1,
  Ljapgolly_scalajs_react_vdom_Attr: 1,
  O: 1
});
$c_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_HtmlStylesStatic$AutoStyle;
function $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr__$init$__V($thiz) {
  $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$();
  $thiz.Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString = $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$().Ljapgolly_scalajs_react_vdom_Attr$ValueType$__f_string;
  $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$();
  $m_Ljapgolly_scalajs_react_vdom_Attr$ValueType$()
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement() {
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_styles = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_children = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_key = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_nonEmptyClassName = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addAttr = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addClassName = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addEventHandler = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_addStyle = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_appendChild = null;
  this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_setKey = null;
  $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__$init$__V(this)
}
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype = $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype;
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype.render__T__Ljapgolly_scalajs_react_facade_React$Element = (function(tag) {
  $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__addClassNameToProps__V(this);
  $f_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs__addStyleToProps__V(this);
  return $n($m_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$().Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement$__f_build).apply__O__O__O__O__O(tag, this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_props, this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_key, this.Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_children)
});
var $d_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement: 0
}, false, "japgolly.scalajs.react.vdom.VdomBuilder$ToRawReactElement", {
  Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement: 1,
  O: 1,
  Ljapgolly_scalajs_react_vdom_VdomBuilder$ToJs: 1,
  Ljapgolly_scalajs_react_vdom_VdomBuilder: 1
});
$c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement;
function $f_Ljapgolly_scalajs_react_vdom_VdomElement__rawNode__sjs_js_$bar($thiz) {
  var a = $thiz.rawElement__Ljapgolly_scalajs_react_facade_React$Element();
  return a
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1(n$1) {
  this.Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1__f_n$1 = null;
  this.Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1__f_n$1 = n$1
}
$c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype = $c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype;
$c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype.rawNode__sjs_js_$bar = (function() {
  return this.Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1__f_n$1
});
$c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype.applyTo__Ljapgolly_scalajs_react_vdom_VdomBuilder__V = (function(b) {
  $n($n(b).Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_appendChild).apply__O__O(this.Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1__f_n$1)
});
var $d_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1: 0
}, false, "japgolly.scalajs.react.vdom.VdomNode$$anon$1", {
  Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1: 1,
  O: 1,
  Ljapgolly_scalajs_react_vdom_VdomNode: 1,
  Ljapgolly_scalajs_react_vdom_TagMod: 1
});
$c_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_VdomNode$$anon$1;
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return $uZ(this.jl_Class__f_data.isAssignableFrom($n(that).jl_Class__f_data))
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface)
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name)
});
$c_jl_Class.prototype.getComponentType__jl_Class = (function() {
  return $as_jl_Class(this.jl_Class__f_data.getComponentType())
});
$c_jl_Class.prototype.newArrayOfThisClass__O__O = (function(dimensions) {
  return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
});
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_$less$colon$less() {
  /*<skip>*/
}
$c_s_$less$colon$less.prototype = new $h_O();
$c_s_$less$colon$less.prototype.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
  /*<skip>*/
}
$h_s_$less$colon$less.prototype = $c_s_$less$colon$less.prototype;
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz._1__O();
      break
    }
    case 1: {
      return $thiz._2__O();
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
}
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.sc_IterableFactory$Delegate__f_delegate = null
}
$c_sc_IterableFactory$Delegate.prototype = new $h_O();
$c_sc_IterableFactory$Delegate.prototype.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
  /*<skip>*/
}
$h_sc_IterableFactory$Delegate.prototype = $c_sc_IterableFactory$Delegate.prototype;
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1
  } else {
    var known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1))
    } else {
      var i = 0;
      var it = $thiz.iterator__sc_Iterator();
      while ($n(it).hasNext__Z()) {
        if ((i === otherSize)) {
          return 1
        };
        $n(it).next__O();
        i = ((1 + i) | 0)
      };
      return ((i - otherSize) | 0)
    }
  }
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest))
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z())
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
/** @constructor */
function $c_sci_LazyList$State$Cons(head, tail) {
  this.sci_LazyList$State$Cons__f_head = null;
  this.sci_LazyList$State$Cons__f_tail = null;
  this.sci_LazyList$State$Cons__f_head = head;
  this.sci_LazyList$State$Cons__f_tail = tail
}
$c_sci_LazyList$State$Cons.prototype = new $h_O();
$c_sci_LazyList$State$Cons.prototype.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
  /*<skip>*/
}
$h_sci_LazyList$State$Cons.prototype = $c_sci_LazyList$State$Cons.prototype;
$c_sci_LazyList$State$Cons.prototype.head__O = (function() {
  return this.sci_LazyList$State$Cons__f_head
});
$c_sci_LazyList$State$Cons.prototype.tail__sci_LazyList = (function() {
  return this.sci_LazyList$State$Cons__f_tail
});
var $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$c_sci_LazyList$State$Empty$.prototype = new $h_O();
$c_sci_LazyList$State$Empty$.prototype.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$h_sci_LazyList$State$Empty$.prototype = $c_sci_LazyList$State$Empty$.prototype;
$c_sci_LazyList$State$Empty$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.tail__sci_LazyList = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
/** @constructor */
function $c_sjs_js_Any$() {
  /*<skip>*/
}
$c_sjs_js_Any$.prototype = new $h_O();
$c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
  /*<skip>*/
}
$h_sjs_js_Any$.prototype = $c_sjs_js_Any$.prototype;
$c_sjs_js_Any$.prototype.fromFunction2__F2__sjs_js_Function2 = (function(f) {
  return ((arg1$2, arg2$2) => $n(f).apply__O__O__O(arg1$2, arg2$2))
});
var $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
  /*<skip>*/
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)()
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
  /*<skip>*/
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
/** @constructor */
function $c_sjsr_AnonFunction3(f) {
  this.sjsr_AnonFunction3__f_f = null;
  this.sjsr_AnonFunction3__f_f = f
}
$c_sjsr_AnonFunction3.prototype = new $h_sr_AbstractFunction3();
$c_sjsr_AnonFunction3.prototype.constructor = $c_sjsr_AnonFunction3;
/** @constructor */
function $h_sjsr_AnonFunction3() {
  /*<skip>*/
}
$h_sjsr_AnonFunction3.prototype = $c_sjsr_AnonFunction3.prototype;
$c_sjsr_AnonFunction3.prototype.apply__O__O__O__O = (function(arg1, arg2, arg3) {
  return (0, this.sjsr_AnonFunction3__f_f)(arg1, arg2, arg3)
});
var $d_sjsr_AnonFunction3 = new $TypeData().initClass({
  sjsr_AnonFunction3: 0
}, false, "scala.scalajs.runtime.AnonFunction3", {
  sjsr_AnonFunction3: 1,
  sr_AbstractFunction3: 1,
  O: 1,
  F3: 1
});
$c_sjsr_AnonFunction3.prototype.$classData = $d_sjsr_AnonFunction3;
/** @constructor */
function $c_sjsr_AnonFunction4(f) {
  this.sjsr_AnonFunction4__f_f = null;
  this.sjsr_AnonFunction4__f_f = f
}
$c_sjsr_AnonFunction4.prototype = new $h_sr_AbstractFunction4();
$c_sjsr_AnonFunction4.prototype.constructor = $c_sjsr_AnonFunction4;
/** @constructor */
function $h_sjsr_AnonFunction4() {
  /*<skip>*/
}
$h_sjsr_AnonFunction4.prototype = $c_sjsr_AnonFunction4.prototype;
$c_sjsr_AnonFunction4.prototype.apply__O__O__O__O__O = (function(arg1, arg2, arg3, arg4) {
  return (0, this.sjsr_AnonFunction4__f_f)(arg1, arg2, arg3, arg4)
});
var $d_sjsr_AnonFunction4 = new $TypeData().initClass({
  sjsr_AnonFunction4: 0
}, false, "scala.scalajs.runtime.AnonFunction4", {
  sjsr_AnonFunction4: 1,
  sr_AbstractFunction4: 1,
  O: 1,
  F4: 1
});
$c_sjsr_AnonFunction4.prototype.$classData = $d_sjsr_AnonFunction4;
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$Mod(mod) {
  this.Ljapgolly_scalajs_react_CtorType$Mod__f_mod = null;
  this.Ljapgolly_scalajs_react_CtorType$Mod__f_mod = mod
}
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$Mod;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$Mod() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_CtorType$Mod.prototype = $c_Ljapgolly_scalajs_react_CtorType$Mod.prototype;
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype.productPrefix__T = (function() {
  return "Mod"
});
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype.productArity__I = (function() {
  return 1
});
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype.productElement__I__O = (function(x$1) {
  return $m_Ljapgolly_scalajs_react_CtorType$Mod$().productElement$extension__F1__I__O(this.Ljapgolly_scalajs_react_CtorType$Mod__f_mod, x$1)
});
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype.productIterator__sc_Iterator = (function() {
  return $m_Ljapgolly_scalajs_react_CtorType$Mod$().productIterator$extension__F1__sc_Iterator(this.Ljapgolly_scalajs_react_CtorType$Mod__f_mod)
});
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype.hashCode__I = (function() {
  var this$ = this.Ljapgolly_scalajs_react_CtorType$Mod__f_mod;
  return $n(this$).hashCode__I()
});
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype.equals__O__Z = (function(x$1) {
  return $m_Ljapgolly_scalajs_react_CtorType$Mod$().equals$extension__F1__O__Z(this.Ljapgolly_scalajs_react_CtorType$Mod__f_mod, x$1)
});
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_CtorType$Mod$().toString$extension__F1__T(this.Ljapgolly_scalajs_react_CtorType$Mod__f_mod)
});
function $as_Ljapgolly_scalajs_react_CtorType$Mod(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_CtorType$Mod) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.CtorType$Mod"))
}
function $isArrayOf_Ljapgolly_scalajs_react_CtorType$Mod(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_CtorType$Mod)))
}
function $asArrayOf_Ljapgolly_scalajs_react_CtorType$Mod(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_CtorType$Mod(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.CtorType$Mod;", depth))
}
var $d_Ljapgolly_scalajs_react_CtorType$Mod = new $TypeData().initClass({
  Ljapgolly_scalajs_react_CtorType$Mod: 0
}, false, "japgolly.scalajs.react.CtorType$Mod", {
  Ljapgolly_scalajs_react_CtorType$Mod: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ljapgolly_scalajs_react_CtorType$Mod.prototype.$classData = $d_Ljapgolly_scalajs_react_CtorType$Mod;
/** @constructor */
function $c_Ljapgolly_scalajs_react_CtorType$Mod$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype = new $h_sr_AbstractFunction1();
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.constructor = $c_Ljapgolly_scalajs_react_CtorType$Mod$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_CtorType$Mod$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_CtorType$Mod$.prototype = $c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype;
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.toString__T = (function() {
  return "Mod"
});
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.applyAndCast$extension__F1__sjs_js_Object__sjs_js_Object = (function(this$, o) {
  $n(this$).apply__O__O(o);
  return o
});
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.productElement$extension__F1__I__O = (function(this$, x$1) {
  return ((x$1 === 0) ? this$ : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.productIterator$extension__F1__sc_Iterator = (function(this$) {
  var x = new $c_Ljapgolly_scalajs_react_CtorType$Mod(this$);
  return new $c_sr_ScalaRunTime$$anon$1(x)
});
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.equals$extension__F1__O__Z = (function(this$, x$1) {
  if ((x$1 instanceof $c_Ljapgolly_scalajs_react_CtorType$Mod)) {
    var Mod$1 = ((x$1 === null) ? null : $n($as_Ljapgolly_scalajs_react_CtorType$Mod(x$1)).Ljapgolly_scalajs_react_CtorType$Mod__f_mod);
    return ((this$ === null) ? (Mod$1 === null) : $n(this$).equals__O__Z(Mod$1))
  } else {
    return false
  }
});
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.toString$extension__F1__T = (function(this$) {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(new $c_Ljapgolly_scalajs_react_CtorType$Mod(this$))
});
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.apply__O__O = (function(v1) {
  var mod = $as_F1(v1);
  return new $c_Ljapgolly_scalajs_react_CtorType$Mod(mod)
});
var $d_Ljapgolly_scalajs_react_CtorType$Mod$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_CtorType$Mod$: 0
}, false, "japgolly.scalajs.react.CtorType$Mod$", {
  Ljapgolly_scalajs_react_CtorType$Mod$: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_Ljapgolly_scalajs_react_CtorType$Mod$.prototype.$classData = $d_Ljapgolly_scalajs_react_CtorType$Mod$;
var $n_Ljapgolly_scalajs_react_CtorType$Mod$;
function $m_Ljapgolly_scalajs_react_CtorType$Mod$() {
  if ((!$n_Ljapgolly_scalajs_react_CtorType$Mod$)) {
    $n_Ljapgolly_scalajs_react_CtorType$Mod$ = new $c_Ljapgolly_scalajs_react_CtorType$Mod$()
  };
  return $n_Ljapgolly_scalajs_react_CtorType$Mod$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_ReactCaughtError(rawError, rawInfo) {
  this.Ljapgolly_scalajs_react_ReactCaughtError__f_rawError = null;
  this.Ljapgolly_scalajs_react_ReactCaughtError__f_rawInfo = null;
  this.Ljapgolly_scalajs_react_ReactCaughtError__f_rawError = rawError;
  this.Ljapgolly_scalajs_react_ReactCaughtError__f_rawInfo = rawInfo;
  $as_T((typeof rawError));
  if ($uZ((rawError instanceof Error))) {
    $n($m_s_package$().s_package$__f_Right);
    new $c_s_util_Right(rawError)
  } else {
    $n($m_s_package$().s_package$__f_Left);
    new $c_s_util_Left(rawError)
  }
}
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.constructor = $c_Ljapgolly_scalajs_react_ReactCaughtError;
/** @constructor */
function $h_Ljapgolly_scalajs_react_ReactCaughtError() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_ReactCaughtError.prototype = $c_Ljapgolly_scalajs_react_ReactCaughtError.prototype;
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.toString__T = (function() {
  return (("ReactCaughtError(" + this.rawErrorString__T()) + ")")
});
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.rawErrorString__T = (function() {
  try {
    return ("" + this.Ljapgolly_scalajs_react_ReactCaughtError__f_rawError)
  } catch (e) {
    return ""
  }
});
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.productPrefix__T = (function() {
  return "ReactCaughtError"
});
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.productArity__I = (function() {
  return 2
});
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Ljapgolly_scalajs_react_ReactCaughtError__f_rawError;
      break
    }
    case 1: {
      return this.Ljapgolly_scalajs_react_ReactCaughtError__f_rawInfo;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Ljapgolly_scalajs_react_ReactCaughtError)) {
    var ReactCaughtError$1 = $as_Ljapgolly_scalajs_react_ReactCaughtError(x$1);
    var x = this.Ljapgolly_scalajs_react_ReactCaughtError__f_rawError;
    var y = $n(ReactCaughtError$1).Ljapgolly_scalajs_react_ReactCaughtError__f_rawError;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x, y)) {
      var x$2 = this.Ljapgolly_scalajs_react_ReactCaughtError__f_rawInfo;
      var y$1 = $n(ReactCaughtError$1).Ljapgolly_scalajs_react_ReactCaughtError__f_rawInfo;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x$2, y$1)
    } else {
      return false
    }
  } else {
    return false
  }
});
function $as_Ljapgolly_scalajs_react_ReactCaughtError(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_ReactCaughtError) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.ReactCaughtError"))
}
function $isArrayOf_Ljapgolly_scalajs_react_ReactCaughtError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_ReactCaughtError)))
}
function $asArrayOf_Ljapgolly_scalajs_react_ReactCaughtError(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_ReactCaughtError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.ReactCaughtError;", depth))
}
var $d_Ljapgolly_scalajs_react_ReactCaughtError = new $TypeData().initClass({
  Ljapgolly_scalajs_react_ReactCaughtError: 0
}, false, "japgolly.scalajs.react.ReactCaughtError", {
  Ljapgolly_scalajs_react_ReactCaughtError: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ljapgolly_scalajs_react_ReactCaughtError.prototype.$classData = $d_Ljapgolly_scalajs_react_ReactCaughtError;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF(componentDidCatch, componentDidMount, componentDidUpdate, componentWillMount, componentWillReceiveProps, componentWillUnmount, componentWillUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate, shouldComponentUpdate) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidCatch = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidMount = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidUpdate = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillMount = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillReceiveProps = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUnmount = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUpdate = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getDerivedStateFromProps = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getSnapshotBeforeUpdate = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_shouldComponentUpdate = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidCatch = componentDidCatch;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidMount = componentDidMount;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidUpdate = componentDidUpdate;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillMount = componentWillMount;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillReceiveProps = componentWillReceiveProps;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUnmount = componentWillUnmount;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUpdate = componentWillUpdate;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getDerivedStateFromProps = getDerivedStateFromProps;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getSnapshotBeforeUpdate = getSnapshotBeforeUpdate;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_shouldComponentUpdate = shouldComponentUpdate
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype.productPrefix__T = (function() {
  return "LifecycleF"
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype.productArity__I = (function() {
  return 10
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidCatch;
      break
    }
    case 1: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidMount;
      break
    }
    case 2: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidUpdate;
      break
    }
    case 3: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillMount;
      break
    }
    case 4: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillReceiveProps;
      break
    }
    case 5: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUnmount;
      break
    }
    case 6: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUpdate;
      break
    }
    case 7: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getDerivedStateFromProps;
      break
    }
    case 8: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getSnapshotBeforeUpdate;
      break
    }
    case 9: {
      return this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_shouldComponentUpdate;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Ljapgolly_scalajs_react_component_builder_LifecycleF)) {
    var LifecycleF$1 = $as_Ljapgolly_scalajs_react_component_builder_LifecycleF(x$1);
    var x = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidCatch;
    var x$2 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidCatch;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      var x$3 = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidMount;
      var x$4 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidMount;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4))
    } else {
      var $x_2 = false
    };
    if ($x_2) {
      var x$5 = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidUpdate;
      var x$6 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentDidUpdate;
      if (((x$5 === null) ? (x$6 === null) : $n(x$5).equals__O__Z(x$6))) {
        var x$7 = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillMount;
        var x$8 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillMount;
        if (((x$7 === null) ? (x$8 === null) : $n(x$7).equals__O__Z(x$8))) {
          var x$9 = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillReceiveProps;
          var x$10 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillReceiveProps;
          var $x_1 = ((x$9 === null) ? (x$10 === null) : $n(x$9).equals__O__Z(x$10))
        } else {
          var $x_1 = false
        }
      } else {
        var $x_1 = false
      }
    } else {
      var $x_1 = false
    };
    if ($x_1) {
      var x$11 = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUnmount;
      var x$12 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUnmount;
      if (((x$11 === null) ? (x$12 === null) : $n(x$11).equals__O__Z(x$12))) {
        var x$13 = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUpdate;
        var x$14 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_componentWillUpdate;
        var $x_3 = ((x$13 === null) ? (x$14 === null) : $n(x$13).equals__O__Z(x$14))
      } else {
        var $x_3 = false
      };
      if ($x_3) {
        var x$15 = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getDerivedStateFromProps;
        var x$16 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getDerivedStateFromProps;
        if (((x$15 === null) ? (x$16 === null) : $n(x$15).equals__O__Z(x$16))) {
          var x$17 = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getSnapshotBeforeUpdate;
          var x$18 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_getSnapshotBeforeUpdate;
          if (((x$17 === null) ? (x$18 === null) : $n(x$17).equals__O__Z(x$18))) {
            var x$19 = this.Ljapgolly_scalajs_react_component_builder_LifecycleF__f_shouldComponentUpdate;
            var x$20 = $n(LifecycleF$1).Ljapgolly_scalajs_react_component_builder_LifecycleF__f_shouldComponentUpdate;
            return ((x$19 === null) ? (x$20 === null) : $n(x$19).equals__O__Z(x$20))
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
function $as_Ljapgolly_scalajs_react_component_builder_LifecycleF(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_component_builder_LifecycleF) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.builder.LifecycleF"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_builder_LifecycleF(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_builder_LifecycleF)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_builder_LifecycleF(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_builder_LifecycleF(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.builder.LifecycleF;", depth))
}
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF;
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_DefaultEffects$() {
  this.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync = null;
  this.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async = null;
  $n_Ljapgolly_scalajs_react_util_DefaultEffects$ = this;
  this.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async = $m_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$();
  this.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Sync = $m_Ljapgolly_scalajs_react_util_EffectCallback$callback$()
}
$c_Ljapgolly_scalajs_react_util_DefaultEffects$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_DefaultEffects$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_DefaultEffects$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_DefaultEffects$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_util_DefaultEffects$.prototype = $c_Ljapgolly_scalajs_react_util_DefaultEffects$.prototype;
var $d_Ljapgolly_scalajs_react_util_DefaultEffects$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_util_DefaultEffects$: 0
}, false, "japgolly.scalajs.react.util.DefaultEffects$", {
  Ljapgolly_scalajs_react_util_DefaultEffects$: 1,
  O: 1,
  Ljapgolly_scalajs_react_util_DefaultEffectsLowPri: 1,
  Ljapgolly_scalajs_react_util_DefaultEffectsApiLowPri: 1,
  Ljapgolly_scalajs_react_util_DefaultEffectsApi: 1
});
$c_Ljapgolly_scalajs_react_util_DefaultEffects$.prototype.$classData = $d_Ljapgolly_scalajs_react_util_DefaultEffects$;
var $n_Ljapgolly_scalajs_react_util_DefaultEffects$;
function $m_Ljapgolly_scalajs_react_util_DefaultEffects$() {
  if ((!$n_Ljapgolly_scalajs_react_util_DefaultEffects$)) {
    $n_Ljapgolly_scalajs_react_util_DefaultEffects$ = new $c_Ljapgolly_scalajs_react_util_DefaultEffects$()
  };
  return $n_Ljapgolly_scalajs_react_util_DefaultEffects$
}
function $f_Ljapgolly_scalajs_react_util_Effect$UnsafeSync__transSync__F0__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__O($thiz, ga, g) {
  return (($thiz === g) ? $n(ga).apply__O() : $thiz.delay__F0__O(new $c_sjsr_AnonFunction0((() => $n(g).runSync__F0__O(ga)))))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$() {
  this.Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$__f_src = null;
  $n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$ = this;
  $f_Ljapgolly_scalajs_react_vdom_HtmlAttrs__$init$__V(this)
}
$c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$.prototype = $c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$: 0
}, false, "japgolly.scalajs.react.vdom.HtmlAttrAndStyles$", {
  Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$: 1,
  O: 1,
  Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles: 1,
  Ljapgolly_scalajs_react_vdom_HtmlAttrs: 1,
  Ljapgolly_scalajs_react_vdom_HtmlStyles: 1
});
$c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$;
var $n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$;
function $m_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$)) {
    $n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$ = new $c_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$
}
function $p_Ljapgolly_scalajs_react_vdom_TagOf__rawElement$lzycompute__Ljapgolly_scalajs_react_facade_React$Element($thiz) {
  if ((!$thiz.Ljapgolly_scalajs_react_vdom_TagOf__f_bitmap$0)) {
    var b = new $c_Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement();
    var arr = [];
    var current = $thiz.Ljapgolly_scalajs_react_vdom_TagOf__f_modifiers;
    while (true) {
      var x = current;
      var x$2 = $m_s_package$().s_package$__f_Nil;
      if ((!((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2)))) {
        arr.push($as_sci_Seq($n(current).head__O()));
        current = $as_sci_List($n(current).tail__O())
      } else {
        break
      }
    };
    var j = $uI(arr.length);
    while ((j > 0)) {
      j = (((-1) + j) | 0);
      $n($as_sc_IterableOnceOps(arr[j])).foreach__F1__V(new $c_sjsr_AnonFunction1(((b) => ((x$1$2) => {
        var x$1 = $as_Ljapgolly_scalajs_react_vdom_TagMod(x$1$2);
        $n(x$1).applyTo__Ljapgolly_scalajs_react_vdom_VdomBuilder__V(b)
      }))(b)))
    };
    $thiz.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElement = b.render__T__Ljapgolly_scalajs_react_facade_React$Element($thiz.Ljapgolly_scalajs_react_vdom_TagOf__f_tag);
    $thiz.Ljapgolly_scalajs_react_vdom_TagOf__f_bitmap$0 = true
  };
  return $thiz.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElement
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_TagOf(tag, modifiers) {
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElement = null;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag = null;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_modifiers = null;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_bitmap$0 = false;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag = tag;
  this.Ljapgolly_scalajs_react_vdom_TagOf__f_modifiers = modifiers
}
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_TagOf;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_TagOf() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_TagOf.prototype = $c_Ljapgolly_scalajs_react_vdom_TagOf.prototype;
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.rawElement__Ljapgolly_scalajs_react_facade_React$Element = (function() {
  return ((!this.Ljapgolly_scalajs_react_vdom_TagOf__f_bitmap$0) ? $p_Ljapgolly_scalajs_react_vdom_TagOf__rawElement$lzycompute__Ljapgolly_scalajs_react_facade_React$Element(this) : this.Ljapgolly_scalajs_react_vdom_TagOf__f_rawElement)
});
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.applyTo__Ljapgolly_scalajs_react_vdom_VdomBuilder__V = (function(b) {
  var $x_1 = $n($n(b).Ljapgolly_scalajs_react_vdom_VdomBuilder$ToRawReactElement__f_appendChild);
  var a = this.rawElement__Ljapgolly_scalajs_react_facade_React$Element();
  $n($x_1).apply__O__O(a)
});
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.toString__T = (function() {
  return ($n(this.Ljapgolly_scalajs_react_vdom_TagOf__f_modifiers).isEmpty__Z() ? (("<" + this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag) + " />") : (((("<" + this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag) + ">\u2026</") + this.Ljapgolly_scalajs_react_vdom_TagOf__f_tag) + ">"))
});
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.rawNode__sjs_js_$bar = (function() {
  return $f_Ljapgolly_scalajs_react_vdom_VdomElement__rawNode__sjs_js_$bar(this)
});
var $d_Ljapgolly_scalajs_react_vdom_TagOf = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_TagOf: 0
}, false, "japgolly.scalajs.react.vdom.TagOf", {
  Ljapgolly_scalajs_react_vdom_TagOf: 1,
  O: 1,
  Ljapgolly_scalajs_react_vdom_VdomElement: 1,
  Ljapgolly_scalajs_react_vdom_VdomNode: 1,
  Ljapgolly_scalajs_react_vdom_TagMod: 1
});
$c_Ljapgolly_scalajs_react_vdom_TagOf.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_TagOf;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $c_jl_Throwable)) {
      var x2 = $as_jl_Throwable(detailMessage);
      var cause = x2
    } else {
      var cause = null
    };
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_jl_AssertionError = new $TypeData().initClass({
  jl_AssertionError: 0
}, false, "java.lang.AssertionError", {
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_AssertionError.prototype.$classData = $d_jl_AssertionError;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $uC($n($as_jl_Character(that)));
    return ($thiz === this$1)
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  return $as_T(String.fromCharCode($thiz))
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
function $ct_jl_StringBuffer__jl_StringBuilder__($thiz, builder) {
  $thiz.jl_StringBuffer__f_builder = builder;
  return $thiz
}
function $ct_jl_StringBuffer__($thiz) {
  $ct_jl_StringBuffer__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
}
/** @constructor */
function $c_jl_StringBuffer() {
  this.jl_StringBuffer__f_builder = null
}
$c_jl_StringBuffer.prototype = new $h_O();
$c_jl_StringBuffer.prototype.constructor = $c_jl_StringBuffer;
/** @constructor */
function $h_jl_StringBuffer() {
  /*<skip>*/
}
$h_jl_StringBuffer.prototype = $c_jl_StringBuffer.prototype;
$c_jl_StringBuffer.prototype.append__T__jl_StringBuffer = (function(str) {
  var this$1 = $n(this.jl_StringBuffer__f_builder);
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_jl_StringBuffer.prototype.append__C__jl_StringBuffer = (function(c) {
  var this$1 = $n(this.jl_StringBuffer__f_builder);
  var str = $as_T(String.fromCharCode(c));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_jl_StringBuffer.prototype.toString__T = (function() {
  return $n(this.jl_StringBuffer__f_builder).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
var $d_jl_StringBuffer = new $TypeData().initClass({
  jl_StringBuffer: 0
}, false, "java.lang.StringBuffer", {
  jl_StringBuffer: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuffer.prototype.$classData = $d_jl_StringBuffer;
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index)
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
/** @constructor */
function $c_s_$eq$colon$eq() {
  /*<skip>*/
}
$c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$c_s_$eq$colon$eq.prototype.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
  /*<skip>*/
}
$h_s_$eq$colon$eq.prototype = $c_s_$eq$colon$eq.prototype;
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1))
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sc_AbstractIterator.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f)
});
$c_sc_AbstractIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1)
});
/** @constructor */
function $c_sc_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
}
$c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sc_Iterable$.prototype.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
  /*<skip>*/
}
$h_sc_Iterable$.prototype = $c_sc_Iterable$.prototype;
var $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.sc_SeqFactory$Delegate__f_delegate = null
}
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
  /*<skip>*/
}
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__sc_SeqOps = (function(elems) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).apply__sci_Seq__O(elems))
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it))
});
$c_sc_SeqFactory$Delegate.prototype.newBuilder__scm_Builder = (function() {
  return $n(this.sc_SeqFactory$Delegate__f_delegate).newBuilder__scm_Builder()
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_SeqOps(source)
});
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__O = (function(elems) {
  return this.apply__sci_Seq__sc_SeqOps(elems)
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    var knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
}
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth))
}
/** @constructor */
function $c_sci_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
}
$c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
  /*<skip>*/
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
var $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
/** @constructor */
function $c_sci_LazyList$() {
  this.sci_LazyList$__f__empty = null;
  $n_sci_LazyList$ = this;
  var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$()));
  this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
  new $c_sjsr_AnonFunction1(((x$10$2) => $m_sr_Statics$PFMarker$()))
}
$c_sci_LazyList$.prototype = new $h_O();
$c_sci_LazyList$.prototype.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
  /*<skip>*/
}
$h_sci_LazyList$.prototype = $c_sci_LazyList$.prototype;
$c_sci_LazyList$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sci_LazyList(elems)
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList = (function(ll, n) {
  var restRef = new $c_sr_ObjectRef(ll);
  var iRef = new $c_sr_IntRef(n);
  var state = new $c_sjsr_AnonFunction0((() => {
    var rest = $as_sci_LazyList(restRef.sr_ObjectRef__f_elem);
    var i = iRef.sr_IntRef__f_elem;
    while (((i > 0) && (!$n(rest).isEmpty__Z()))) {
      var this$4 = $n(rest);
      rest = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
      restRef.sr_ObjectRef__f_elem = rest;
      i = (((-1) + i) | 0);
      iRef.sr_IntRef__f_elem = i
    };
    return $n(rest).scala$collection$immutable$LazyList$$state__sci_LazyList$State()
  }));
  return new $c_sci_LazyList(state)
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__sci_LazyList = (function(coll) {
  if ((coll instanceof $c_sci_LazyList)) {
    var x2 = $as_sci_LazyList(coll);
    return x2
  } else if (($n(coll).knownSize__I() === 0)) {
    return this.sci_LazyList$__f__empty
  } else {
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State($n(coll).iterator__sc_Iterator())));
    return new $c_sci_LazyList(state)
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State = (function(it, suffix) {
  if ($n(it).hasNext__Z()) {
    var hd = $n(it).next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it, suffix)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl)
  } else {
    return $as_sci_LazyList$State($n(suffix).apply__O())
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State = (function(it) {
  if ($n(it).hasNext__Z()) {
    var hd = $n(it).next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl)
  } else {
    return $m_sci_LazyList$State$Empty$()
  }
});
$c_sci_LazyList$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_LazyList$LazyBuilder()
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_LazyList(source)
});
var $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.scm_Builder$$anon$1__f_$outer = null;
  this.scm_Builder$$anon$1__f_f$1 = null;
  if ((outer === null)) {
    $n(null)
  } else {
    this.scm_Builder$$anon$1__f_$outer = outer
  };
  this.scm_Builder$$anon$1__f_f$1 = f$1
}
$c_scm_Builder$$anon$1.prototype = new $h_O();
$c_scm_Builder$$anon$1.prototype.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
  /*<skip>*/
}
$h_scm_Builder$$anon$1.prototype = $c_scm_Builder$$anon$1.prototype;
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Builder$$anon$1 = (function(x) {
  var this$1 = $n(this.scm_Builder$$anon$1__f_$outer);
  this$1.addOne__O__scm_Growable(x);
  return this
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Builder$$anon$1 = (function(xs) {
  var this$1 = $n(this.scm_Builder$$anon$1__f_$outer);
  this$1.addAll__sc_IterableOnce__scm_Growable(xs);
  return this
});
$c_scm_Builder$$anon$1.prototype.sizeHint__I__V = (function(size) {
  $n(this.scm_Builder$$anon$1__f_$outer).sizeHint__I__V(size)
});
$c_scm_Builder$$anon$1.prototype.result__O = (function() {
  return $n(this.scm_Builder$$anon$1__f_f$1).apply__O__O($n(this.scm_Builder$$anon$1__f_$outer).result__O())
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
});
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_Builder$$anon$1(elem)
});
var $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
/** @constructor */
function $c_scm_GrowableBuilder(elems) {
  this.scm_GrowableBuilder__f_elems = null;
  this.scm_GrowableBuilder__f_elems = elems
}
$c_scm_GrowableBuilder.prototype = new $h_O();
$c_scm_GrowableBuilder.prototype.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
  /*<skip>*/
}
$h_scm_GrowableBuilder.prototype = $c_scm_GrowableBuilder.prototype;
$c_scm_GrowableBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_GrowableBuilder.prototype.addOne__O__scm_GrowableBuilder = (function(elem) {
  var this$1 = $n(this.scm_GrowableBuilder__f_elems);
  this$1.addOne__O__scm_Growable(elem);
  return this
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_GrowableBuilder = (function(xs) {
  $n(this.scm_GrowableBuilder__f_elems).addAll__sc_IterableOnce__scm_Growable(xs);
  return this
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_GrowableBuilder(xs)
});
$c_scm_GrowableBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_GrowableBuilder(elem)
});
$c_scm_GrowableBuilder.prototype.result__O = (function() {
  return this.scm_GrowableBuilder__f_elems
});
var $d_scm_GrowableBuilder = new $TypeData().initClass({
  scm_GrowableBuilder: 0
}, false, "scala.collection.mutable.GrowableBuilder", {
  scm_GrowableBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_GrowableBuilder.prototype.$classData = $d_scm_GrowableBuilder;
/** @constructor */
function $c_s_util_Either() {
  /*<skip>*/
}
$c_s_util_Either.prototype = new $h_O();
$c_s_util_Either.prototype.constructor = $c_s_util_Either;
/** @constructor */
function $h_s_util_Either() {
  /*<skip>*/
}
$h_s_util_Either.prototype = $c_s_util_Either.prototype;
function $is_Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot)))
}
function $as_Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(obj) {
  return (($is_Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.Js$UnmountedWithRoot"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.Js$UnmountedWithRoot;", depth))
}
function $as_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromProps(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.builder.InitState$DerivedFromProps"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromProps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromProps)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromProps(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromProps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.builder.InitState$DerivedFromProps;", depth))
}
function $as_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromPropsAndState(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.builder.InitState$DerivedFromPropsAndState"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromPropsAndState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromPropsAndState)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromPropsAndState(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_builder_InitState$DerivedFromPropsAndState(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.builder.InitState$DerivedFromPropsAndState;", depth))
}
function $as_Ljapgolly_scalajs_react_component_builder_InitState$InitialState(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.builder.InitState$InitialState"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_builder_InitState$InitialState(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_builder_InitState$InitialState)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_builder_InitState$InitialState(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_builder_InitState$InitialState(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.builder.InitState$InitialState;", depth))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype = $c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype;
$c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype.productPrefix__T = (function() {
  return "Stateless"
});
$c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype.productArity__I = (function() {
  return 0
});
$c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype.hashCode__I = (function() {
  return (-81209974)
});
$c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype.toString__T = (function() {
  return "Stateless"
});
var $d_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_InitState$Stateless$: 0
}, false, "japgolly.scalajs.react.component.builder.InitState$Stateless$", {
  Ljapgolly_scalajs_react_component_builder_InitState$Stateless$: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_builder_InitState: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$;
var $n_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$;
function $m_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$() {
  if ((!$n_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$)) {
    $n_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$ = new $c_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$()
  };
  return $n_Ljapgolly_scalajs_react_component_builder_InitState$Stateless$
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayStoreException = new $TypeData().initClass({
  jl_ArrayStoreException: 0
}, false, "java.lang.ArrayStoreException", {
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayStoreException.prototype.$classData = $d_jl_ArrayStoreException;
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
function $as_jl_SecurityException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_ju_ConcurrentModificationException = new $TypeData().initClass({
  ju_ConcurrentModificationException: 0
}, false, "java.util.ConcurrentModificationException", {
  ju_ConcurrentModificationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_ConcurrentModificationException.prototype.$classData = $d_ju_ConcurrentModificationException;
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$c_s_$less$colon$less$$anon$1.prototype.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$h_s_$less$colon$less$$anon$1.prototype = $c_s_$less$colon$less$$anon$1.prototype;
$c_s_$less$colon$less$$anon$1.prototype.apply__O__O = (function(x) {
  return x
});
$c_s_$less$colon$less$$anon$1.prototype.compose__F1__F1 = (function(r) {
  return r
});
$c_s_$less$colon$less$$anon$1.prototype.toString__T = (function() {
  return "generalized constraint"
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $n($objectGetClass(this$1)).getName__T())
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
/** @constructor */
function $c_s_Option() {
  /*<skip>*/
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
  /*<skip>*/
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$())
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1)
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    $m_sc_Iterator$();
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a)
  }
});
function $as_s_Option(obj) {
  return (((obj instanceof $c_s_Option) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Option"))
}
function $isArrayOf_s_Option(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Option)))
}
function $asArrayOf_s_Option(obj, depth) {
  return (($isArrayOf_s_Option(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Option;", depth))
}
/** @constructor */
function $c_T2(_1, _2) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2__f__1 = _1;
  this.T2__f__2 = _2
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n)
});
$c_T2.prototype._1__O = (function() {
  return this.T2__f__1
});
$c_T2.prototype._2__O = (function() {
  return this.T2__f__2
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this._1__O()) + ",") + this._2__O()) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this._1__O(), $n(Tuple2$1)._1__O()) && $m_sr_BoxesRunTime$().equals__O__O__Z(this._2__O(), $n(Tuple2$1)._2__O()))
  } else {
    return false
  }
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.isEmpty__Z())) {
    return $thiz.apply__I__O(0)
  } else {
    if ($is_sc_IndexedSeq($thiz)) {
      var x2 = $as_sc_IndexedSeq($thiz);
      var this$1 = $n(x2);
      var $x_1 = this$1.className__T()
    } else {
      var $x_1 = $thiz.toString__T()
    };
    throw new $c_ju_NoSuchElementException(("head of empty " + $x_1))
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator")
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed)
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this)
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0)
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1)
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that)
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
  /*<skip>*/
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1)
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize)
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z())
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O()
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo)
  } else if ((until <= lo)) {
    var rest = 0
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0)
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that)
  };
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    this.sc_Iterator$SliceIterator__f_dropping = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass({
  sc_Iterator$SliceIterator: 0
}, false, "scala.collection.Iterator$SliceIterator", {
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$SliceIterator.prototype.$classData = $d_sc_Iterator$SliceIterator;
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $as_sc_LinearSeq($thiz);
  var len = 0;
  while (true) {
    var this$1 = $n(these);
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq($n(these).tail__O())
    } else {
      break
    }
  };
  return len
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return $n(skipped).head__O()
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1)
    } else if ($n(xs).isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sc_LinearSeq($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $x_1 = (!this$2.isEmpty__Z())
      } else {
        var $x_1 = false
      };
      if (($x_1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z())
      }
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
}
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
  /*<skip>*/
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z())
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
  return r
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
}
$c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
  /*<skip>*/
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sci_IndexedSeq = (function(it) {
  if ($is_sci_IndexedSeq(it)) {
    var x2 = $as_sci_IndexedSeq(it);
    return x2
  } else {
    return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
  }
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(source)
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(it)
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.sci_LazyList$LazyBuilder__f_next = null;
  this.sci_LazyList$LazyBuilder__f_list = null;
  this.clear__V()
}
$c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$c_sci_LazyList$LazyBuilder.prototype.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
  /*<skip>*/
}
$h_sci_LazyList$LazyBuilder.prototype = $c_sci_LazyList$LazyBuilder.prototype;
$c_sci_LazyList$LazyBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_LazyList$LazyBuilder.prototype.clear__V = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  $m_sci_LazyList$();
  var state = new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()));
  this.sci_LazyList$LazyBuilder__f_list = new $c_sci_LazyList(state);
  this.sci_LazyList$LazyBuilder__f_next = deferred
});
$c_sci_LazyList$LazyBuilder.prototype.result__sci_LazyList = (function() {
  $n(this.sci_LazyList$LazyBuilder__f_next).init__F0__V(new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$())));
  return this.sci_LazyList$LazyBuilder__f_list
});
$c_sci_LazyList$LazyBuilder.prototype.addOne__O__sci_LazyList$LazyBuilder = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  $n(this.sci_LazyList$LazyBuilder__f_next).init__F0__V(new $c_sjsr_AnonFunction0((() => {
    $m_sci_LazyList$();
    $m_sci_LazyList$();
    var state = new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(elem, tl)
  })));
  this.sci_LazyList$LazyBuilder__f_next = deferred;
  return this
});
$c_sci_LazyList$LazyBuilder.prototype.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder = (function(xs) {
  if (($n(xs).knownSize__I() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    $n(this.sci_LazyList$LazyBuilder__f_next).init__F0__V(new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State($n(xs).iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()))))));
    this.sci_LazyList$LazyBuilder__f_next = deferred
  };
  return this
});
$c_sci_LazyList$LazyBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(xs)
});
$c_sci_LazyList$LazyBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_LazyList$LazyBuilder(elem)
});
$c_sci_LazyList$LazyBuilder.prototype.result__O = (function() {
  return this.result__sci_LazyList()
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().initClass({
  sci_LazyList$LazyBuilder: 0
}, false, "scala.collection.immutable.LazyList$LazyBuilder", {
  sci_LazyList$LazyBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_LazyList$LazyBuilder.prototype.$classData = $d_sci_LazyList$LazyBuilder;
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.sci_LazyList$LazyIterator__f_lazyList = null;
  this.sci_LazyList$LazyIterator__f_lazyList = lazyList
}
$c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_LazyList$LazyIterator.prototype.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
  /*<skip>*/
}
$h_sci_LazyList$LazyIterator.prototype = $c_sci_LazyList$LazyIterator.prototype;
$c_sci_LazyList$LazyIterator.prototype.hasNext__Z = (function() {
  return (!$n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z())
});
$c_sci_LazyList$LazyIterator.prototype.next__O = (function() {
  if ($n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z()) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  } else {
    var this$1 = $n(this.sci_LazyList$LazyIterator__f_lazyList);
    var res = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
    var this$2 = $n(this.sci_LazyList$LazyIterator__f_lazyList);
    this.sci_LazyList$LazyIterator__f_lazyList = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    return res
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  new $c_T2($m_sci_Nil$(), $m_sci_Nil$());
  new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_O();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.apply__sci_Seq__O = (function(elems) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems)
});
$c_sci_List$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
$c_sci_List$.prototype.from__sc_IterableOnce__O = (function(source) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(source)
});
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
/** @constructor */
function $c_sci_Seq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
}
$c_sci_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_Seq$.prototype.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
  /*<skip>*/
}
$h_sci_Seq$.prototype = $c_sci_Seq$.prototype;
$c_sci_Seq$.prototype.from__sc_IterableOnce__sci_Seq = (function(it) {
  if ($is_sci_Seq(it)) {
    var x2 = $as_sci_Seq(it);
    return x2
  } else {
    return $as_sci_Seq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
  }
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Seq(source)
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_Seq(it)
});
var $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
function $p_sci_Vector$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 250
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this);
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0)
}
$c_sci_Vector$.prototype = new $h_O();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
  /*<skip>*/
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sci_Vector(elems)
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__sci_Vector = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(it);
    return x2
  } else {
    var knownSize = $n(it).knownSize__I();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$()
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var a1$3;
        if (false) {
          var x2$2 = $as_sci_ArraySeq$ofRef(it);
          var x = $n($n(x2$2).elemTag__s_reflect_ClassTag()).runtimeClass__jl_Class();
          if ((x !== null)) {
            var this$1 = $n(x);
            var $x_1 = (this$1 === $d_O.getClassOf())
          } else {
            var $x_1 = false
          };
          if ($x_1) {
            var a1$3 = $n(x2$2).unsafeArray__AO();
            break matchEnd5
          }
        };
        if ($is_sci_Iterable(it)) {
          var x3 = $as_sci_Iterable(it);
          var a1 = new $ac_O(knownSize);
          var this$2 = $n(x3);
          this$2.copyToArray__O__I__I__I(a1, 0, 2147483647);
          var a1$3 = a1;
          break matchEnd5
        };
        var a1$2 = new $ac_O(knownSize);
        var this$3 = $n($n(it).iterator__sc_Iterator());
        this$3.copyToArray__O__I__I__I(a1$2, 0, 2147483647);
        var a1$3 = a1$2
      };
      return new $c_sci_Vector1(a1$3)
    } else {
      var this$4 = new $c_sci_VectorBuilder();
      var this$5 = $n(this$4.addAll__sc_IterableOnce__sci_VectorBuilder(it));
      return this$5.result__sci_Vector()
    }
  }
});
$c_sci_Vector$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_VectorBuilder()
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Vector(source)
});
var $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.sci_VectorBuilder__f_depth >= 6)) {
    a = $thiz.sci_VectorBuilder__f_a6;
    var i = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      $systemArraycopyRefs($n(src), i, $n(dest), 0, length)
    };
    var newOffset = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 33554432) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset) | 0)) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset;
    if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0) === 0)) {
      $thiz.sci_VectorBuilder__f_depth = 5
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 5)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a5
    };
    var i$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 20) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        $systemArraycopyRefs($n(src$1), i$2, $n(dest$1), 0, length$1)
      };
      $thiz.sci_VectorBuilder__f_a5 = $asArrayOf_O(a, 5);
      var newOffset$1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1048576) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$1) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$1;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 4
      }
    } else {
      if ((i$2 > 0)) {
        var original = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, i$2, 32)
      };
      $n(aParent).set(0, a)
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 4)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a4
    };
    var i$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 15) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        $systemArraycopyRefs($n(src$2), i$3, $n(dest$2), 0, length$2)
      };
      $thiz.sci_VectorBuilder__f_a4 = $asArrayOf_O(a, 4);
      var newOffset$2 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32768) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$2) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$2;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 3
      }
    } else {
      if ((i$3 > 0)) {
        var original$1 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, i$3, 32)
      };
      $n(aParent).set(0, a)
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 3)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a3
    };
    var i$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 10) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        $systemArraycopyRefs($n(src$3), i$4, $n(dest$3), 0, length$3)
      };
      $thiz.sci_VectorBuilder__f_a3 = $asArrayOf_O(a, 3);
      var newOffset$3 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1024) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$3) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$3;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 2
      }
    } else {
      if ((i$4 > 0)) {
        var original$2 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, i$4, 32)
      };
      $n(aParent).set(0, a)
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 2)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a2
    };
    var i$5 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 5) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        $systemArraycopyRefs($n(src$4), i$5, $n(dest$4), 0, length$4)
      };
      $thiz.sci_VectorBuilder__f_a2 = $asArrayOf_O(a, 2);
      var newOffset$4 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$4) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$4;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 1
      }
    } else {
      if ((i$5 > 0)) {
        var original$3 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, i$5, 32)
      };
      $n(aParent).set(0, a)
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 1)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a1
    };
    var i$6 = (31 & $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset);
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        $systemArraycopyRefs($n(src$5), i$6, $n(dest$5), 0, length$5)
      };
      $thiz.sci_VectorBuilder__f_a1 = a;
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0
    } else {
      if ((i$6 > 0)) {
        var original$4 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, i$6, 32)
      };
      $n(aParent).set(0, a)
    }
  };
  $thiz.sci_VectorBuilder__f_prefixIsRightAligned = false
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = $n(data).u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz)
    };
    var a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.sci_VectorBuilder__f_a1;
    var destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    $systemArraycopyRefs($n(data), 0, $n(dest), destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.sci_VectorBuilder__f_a1;
      $systemArraycopyRefs($n(data), copy1, $n(dest$1), 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0)
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if (($m_sc_ArrayOps$(), ($n(slice).u.length === 0))) {
    return (void 0)
  };
  if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz)
  };
  var sl = $n(slice).u.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0));
      var dest = $thiz.sci_VectorBuilder__f_a2;
      $systemArraycopyRefs($n(slice), 0, $n(dest), destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.sci_VectorBuilder__f_a2;
        $systemArraycopyRefs($n(slice), copy1, $n(dest$1), 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5))
      };
      break
    }
    case 3: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1024) | 0) !== 0)) {
        $m_sc_ArrayOps$();
        var f = ((e$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2, 1), 2)
        });
        var len = $n(slice).u.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var arg1 = $n(slice).get(i);
            f(arg1);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_I)) {
          var x3 = $asArrayOf_I(slice, 1);
          while ((i < len)) {
            var arg1$1 = $n(x3).get(i);
            f(arg1$1);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_D)) {
          var x4 = $asArrayOf_D(slice, 1);
          while ((i < len)) {
            var arg1$2 = $n(x4).get(i);
            f(arg1$2);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_J)) {
          var x5 = $asArrayOf_J(slice, 1);
          while ((i < len)) {
            var t = $n(x5).get(i);
            var lo = t.RTLong__f_lo;
            var hi = t.RTLong__f_hi;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_F)) {
          var x6 = $asArrayOf_F(slice, 1);
          while ((i < len)) {
            var arg1$3 = $n(x6).get(i);
            f(arg1$3);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_C)) {
          var x7 = $asArrayOf_C(slice, 1);
          while ((i < len)) {
            var arg1$4 = $n(x7).get(i);
            f($bC(arg1$4));
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_B)) {
          var x8 = $asArrayOf_B(slice, 1);
          while ((i < len)) {
            var arg1$5 = $n(x8).get(i);
            f(arg1$5);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_S)) {
          var x9 = $asArrayOf_S(slice, 1);
          while ((i < len)) {
            var arg1$6 = $n(x9).get(i);
            f(arg1$6);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10 = $asArrayOf_Z(slice, 1);
          while ((i < len)) {
            var arg1$7 = $n(x10).get(i);
            f(arg1$7);
            i = ((1 + i) | 0)
          }
        } else {
          throw new $c_s_MatchError(slice)
        };
        return (void 0)
      };
      var a$1 = (31 & ((((32768 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0));
      var dest$2 = $thiz.sci_VectorBuilder__f_a3;
      $systemArraycopyRefs($n(slice), 0, $n(dest$2), destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.sci_VectorBuilder__f_a3;
        $systemArraycopyRefs($n(slice), copy1$2, $n(dest$3), 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10))
      };
      break
    }
    case 4: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 32768) | 0) !== 0)) {
        $m_sc_ArrayOps$();
        var f$1 = ((e$3$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$3$2, 1), 3)
        });
        var len$1 = $n(slice).u.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var arg1$8 = $n(slice).get(i$1);
            f$1(arg1$8);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$1 = $asArrayOf_I(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$9 = $n(x3$1).get(i$1);
            f$1(arg1$9);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$1 = $asArrayOf_D(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$10 = $n(x4$1).get(i$1);
            f$1(arg1$10);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$1 = $asArrayOf_J(slice, 1);
          while ((i$1 < len$1)) {
            var t$1 = $n(x5$1).get(i$1);
            var lo$1 = t$1.RTLong__f_lo;
            var hi$1 = t$1.RTLong__f_hi;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$1 = $asArrayOf_F(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$11 = $n(x6$1).get(i$1);
            f$1(arg1$11);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$1 = $asArrayOf_C(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$12 = $n(x7$1).get(i$1);
            f$1($bC(arg1$12));
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$1 = $asArrayOf_B(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$13 = $n(x8$1).get(i$1);
            f$1(arg1$13);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$1 = $asArrayOf_S(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$14 = $n(x9$1).get(i$1);
            f$1(arg1$14);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$1 = $asArrayOf_Z(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$15 = $n(x10$1).get(i$1);
            f$1(arg1$15);
            i$1 = ((1 + i$1) | 0)
          }
        } else {
          throw new $c_s_MatchError(slice)
        };
        return (void 0)
      };
      var a$2 = (31 & ((((1048576 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0));
      var dest$4 = $thiz.sci_VectorBuilder__f_a4;
      $systemArraycopyRefs($n(slice), 0, $n(dest$4), destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.sci_VectorBuilder__f_a4;
        $systemArraycopyRefs($n(slice), copy1$3, $n(dest$5), 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15))
      };
      break
    }
    case 5: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1048576) | 0) !== 0)) {
        $m_sc_ArrayOps$();
        var f$2 = ((e$4$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$4$2, 1), 4)
        });
        var len$2 = $n(slice).u.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var arg1$16 = $n(slice).get(i$2);
            f$2(arg1$16);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$2 = $asArrayOf_I(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$17 = $n(x3$2).get(i$2);
            f$2(arg1$17);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$2 = $asArrayOf_D(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$18 = $n(x4$2).get(i$2);
            f$2(arg1$18);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$2 = $asArrayOf_J(slice, 1);
          while ((i$2 < len$2)) {
            var t$2 = $n(x5$2).get(i$2);
            var lo$2 = t$2.RTLong__f_lo;
            var hi$2 = t$2.RTLong__f_hi;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$2 = $asArrayOf_F(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$19 = $n(x6$2).get(i$2);
            f$2(arg1$19);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$2 = $asArrayOf_C(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$20 = $n(x7$2).get(i$2);
            f$2($bC(arg1$20));
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$2 = $asArrayOf_B(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$21 = $n(x8$2).get(i$2);
            f$2(arg1$21);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$2 = $asArrayOf_S(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$22 = $n(x9$2).get(i$2);
            f$2(arg1$22);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$2 = $asArrayOf_Z(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$23 = $n(x10$2).get(i$2);
            f$2(arg1$23);
            i$2 = ((1 + i$2) | 0)
          }
        } else {
          throw new $c_s_MatchError(slice)
        };
        return (void 0)
      };
      var a$3 = (31 & ((((33554432 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0));
      var dest$6 = $thiz.sci_VectorBuilder__f_a5;
      $systemArraycopyRefs($n(slice), 0, $n(dest$6), destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.sci_VectorBuilder__f_a5;
        $systemArraycopyRefs($n(slice), copy1$4, $n(dest$7), 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20))
      };
      break
    }
    case 6: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 33554432) | 0) !== 0)) {
        $m_sc_ArrayOps$();
        var f$3 = ((e$5$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$5$2, 1), 5)
        });
        var len$3 = $n(slice).u.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var arg1$24 = $n(slice).get(i$3);
            f$3(arg1$24);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$3 = $asArrayOf_I(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$25 = $n(x3$3).get(i$3);
            f$3(arg1$25);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$3 = $asArrayOf_D(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$26 = $n(x4$3).get(i$3);
            f$3(arg1$26);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$3 = $asArrayOf_J(slice, 1);
          while ((i$3 < len$3)) {
            var t$3 = $n(x5$3).get(i$3);
            var lo$3 = t$3.RTLong__f_lo;
            var hi$3 = t$3.RTLong__f_hi;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$3 = $asArrayOf_F(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$27 = $n(x6$3).get(i$3);
            f$3(arg1$27);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$3 = $asArrayOf_C(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$28 = $n(x7$3).get(i$3);
            f$3($bC(arg1$28));
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$3 = $asArrayOf_B(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$29 = $n(x8$3).get(i$3);
            f$3(arg1$29);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$3 = $asArrayOf_S(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$30 = $n(x9$3).get(i$3);
            f$3(arg1$30);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$3 = $asArrayOf_Z(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$31 = $n(x10$3).get(i$3);
            f$3(arg1$31);
            i$3 = ((1 + i$3) | 0)
          }
        } else {
          throw new $c_s_MatchError(slice)
        };
        return (void 0)
      };
      var destPos$5 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements")
      };
      var dest$8 = $thiz.sci_VectorBuilder__f_a6;
      $systemArraycopyRefs($n(slice), 0, $n(dest$8), destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break
    }
    default: {
      throw new $c_s_MatchError(dim)
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = $n(xs).vectorSliceCount__I();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = $n(xs).vectorSlice__I__AO(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice)
    } else if ((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32) || ($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1)
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((data$2) => {
        var data = $asArrayOf_O(data$2, 1);
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data)
      })))
    };
    sliceIdx = ((1 + sliceIdx) | 0)
  };
  return $thiz
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor)
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest + n) | 0);
    var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor)
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth))
  } else if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 1)) {
      $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a2).set(0, $thiz.sci_VectorBuilder__f_a1);
      $thiz.sci_VectorBuilder__f_depth = 2
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1)
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 2)) {
      $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a3).set(0, $thiz.sci_VectorBuilder__f_a2);
      $thiz.sci_VectorBuilder__f_depth = 3
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2)
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 3)) {
      $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a4).set(0, $thiz.sci_VectorBuilder__f_a3);
      $thiz.sci_VectorBuilder__f_depth = 4
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3)
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 4)) {
      $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a5).set(0, $thiz.sci_VectorBuilder__f_a4);
      $thiz.sci_VectorBuilder__f_depth = 5
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4)
  } else {
    if (($thiz.sci_VectorBuilder__f_depth <= 5)) {
      $thiz.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n($thiz.sci_VectorBuilder__f_a6).set(0, $thiz.sci_VectorBuilder__f_a5);
      $thiz.sci_VectorBuilder__f_depth = 6
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
    $n($thiz.sci_VectorBuilder__f_a6).set(((idx >>> 25) | 0), $thiz.sci_VectorBuilder__f_a5)
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_a6 = null;
  this.sci_VectorBuilder__f_a5 = null;
  this.sci_VectorBuilder__f_a4 = null;
  this.sci_VectorBuilder__f_a3 = null;
  this.sci_VectorBuilder__f_a2 = null;
  this.sci_VectorBuilder__f_a1 = null;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_a1 = new $ac_O(32);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 1
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
  /*<skip>*/
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_VectorBuilder.prototype.initFrom__sci_Vector__sci_VectorBuilder = (function(v) {
  var x1 = $n(v).vectorSliceCount__I();
  switch (x1) {
    case 0: {
      break
    }
    case 1: {
      var v1 = $as_sci_Vector1(v);
      this.sci_VectorBuilder__f_depth = 1;
      var i = $n($n(v1).sci_Vector__f_prefix1).u.length;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      var a = $n(v1).sci_Vector__f_prefix1;
      this.sci_VectorBuilder__f_a1 = (($n(a).u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
      break
    }
    case 3: {
      var v2 = $as_sci_Vector2(v);
      var d2 = $n(v2).sci_Vector2__f_data2;
      var a$1 = $n(v2).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$1).u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
      this.sci_VectorBuilder__f_depth = 2;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32 - $n(v2).sci_Vector2__f_len1) | 0);
      var i$1 = (($n(v2).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a2).set(0, $n(v2).sci_Vector__f_prefix1);
      var dest = this.sci_VectorBuilder__f_a2;
      var length = $n(d2).u.length;
      $systemArraycopyRefs($n(d2), 0, $n(dest), 1, length);
      $n(this.sci_VectorBuilder__f_a2).set(((1 + $n(d2).u.length) | 0), this.sci_VectorBuilder__f_a1);
      break
    }
    case 5: {
      var v3 = $as_sci_Vector3(v);
      var d3 = $n(v3).sci_Vector3__f_data3;
      var s2 = $n(v3).sci_Vector3__f_suffix2;
      var a$2 = $n(v3).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$2).u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
      this.sci_VectorBuilder__f_depth = 3;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1024 - $n(v3).sci_Vector3__f_len12) | 0);
      var i$2 = (($n(v3).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a3).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v3).sci_Vector__f_prefix1, $n(v3).sci_Vector3__f_prefix2), 2));
      var dest$1 = this.sci_VectorBuilder__f_a3;
      var length$1 = $n(d3).u.length;
      $systemArraycopyRefs($n(d3), 0, $n(dest$1), 1, length$1);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
      $n(this.sci_VectorBuilder__f_a3).set(((1 + $n(d3).u.length) | 0), this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 7: {
      var v4 = $as_sci_Vector4(v);
      var d4 = $n(v4).sci_Vector4__f_data4;
      var s3 = $n(v4).sci_Vector4__f_suffix3;
      var s2$2 = $n(v4).sci_Vector4__f_suffix2;
      var a$3 = $n(v4).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$3).u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
      this.sci_VectorBuilder__f_depth = 4;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32768 - $n(v4).sci_Vector4__f_len123) | 0);
      var i$3 = (($n(v4).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a4).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v4).sci_Vector__f_prefix1, $n(v4).sci_Vector4__f_prefix2), $n(v4).sci_Vector4__f_prefix3), 3));
      var dest$2 = this.sci_VectorBuilder__f_a4;
      var length$2 = $n(d4).u.length;
      $systemArraycopyRefs($n(d4), 0, $n(dest$2), 1, length$2);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
      $n(this.sci_VectorBuilder__f_a4).set(((1 + $n(d4).u.length) | 0), this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$2).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 9: {
      var v5 = $as_sci_Vector5(v);
      var d5 = $n(v5).sci_Vector5__f_data5;
      var s4 = $n(v5).sci_Vector5__f_suffix4;
      var s3$2 = $n(v5).sci_Vector5__f_suffix3;
      var s2$3 = $n(v5).sci_Vector5__f_suffix2;
      var a$4 = $n(v5).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$4).u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
      this.sci_VectorBuilder__f_depth = 5;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1048576 - $n(v5).sci_Vector5__f_len1234) | 0);
      var i$4 = (($n(v5).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a5).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v5).sci_Vector__f_prefix1, $n(v5).sci_Vector5__f_prefix2), $n(v5).sci_Vector5__f_prefix3), $n(v5).sci_Vector5__f_prefix4), 4));
      var dest$3 = this.sci_VectorBuilder__f_a5;
      var length$3 = $n(d5).u.length;
      $systemArraycopyRefs($n(d5), 0, $n(dest$3), 1, length$3);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
      $n(this.sci_VectorBuilder__f_a5).set(((1 + $n(d5).u.length) | 0), this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$2).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$3).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 11: {
      var v6 = $as_sci_Vector6(v);
      var d6 = $n(v6).sci_Vector6__f_data6;
      var s5 = $n(v6).sci_Vector6__f_suffix5;
      var s4$2 = $n(v6).sci_Vector6__f_suffix4;
      var s3$3 = $n(v6).sci_Vector6__f_suffix3;
      var s2$4 = $n(v6).sci_Vector6__f_suffix2;
      var a$5 = $n(v6).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$5).u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
      this.sci_VectorBuilder__f_depth = 6;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((33554432 - $n(v6).sci_Vector6__f_len12345) | 0);
      var i$5 = (($n(v6).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n(this.sci_VectorBuilder__f_a6).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v6).sci_Vector__f_prefix1, $n(v6).sci_Vector6__f_prefix2), $n(v6).sci_Vector6__f_prefix3), $n(v6).sci_Vector6__f_prefix4), $n(v6).sci_Vector6__f_prefix5), 5));
      var dest$4 = this.sci_VectorBuilder__f_a6;
      var length$4 = $n(d6).u.length;
      $systemArraycopyRefs($n(d6), 0, $n(dest$4), 1, length$4);
      this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
      $n(this.sci_VectorBuilder__f_a6).set(((1 + $n(d6).u.length) | 0), this.sci_VectorBuilder__f_a5);
      $n(this.sci_VectorBuilder__f_a5).set($n(s5).u.length, this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4$2).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$4).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0)
  };
  return this
});
$c_sci_VectorBuilder.prototype.alignTo__I__sci_Vector__sci_VectorBuilder = (function(before, bigVector) {
  if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 !== 0) || (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest !== 0))) {
    throw new $c_jl_UnsupportedOperationException("A non-empty VectorBuilder cannot be aligned retrospectively. Please call .reset() or use a new VectorBuilder.")
  };
  var x = $m_sci_Vector0$();
  if (x.equals__O__Z(bigVector)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = 0;
    var x1$2___2$mcI$sp = 1
  } else if ((bigVector instanceof $c_sci_Vector1)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = 0;
    var x1$2___2$mcI$sp = 1
  } else if ((bigVector instanceof $c_sci_Vector2)) {
    var x4 = $as_sci_Vector2(bigVector);
    var _1$mcI$sp = $n(x4).sci_Vector2__f_len1;
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = _1$mcI$sp;
    var x1$2___2$mcI$sp = 32
  } else if ((bigVector instanceof $c_sci_Vector3)) {
    var x5 = $as_sci_Vector3(bigVector);
    var _1$mcI$sp$1 = $n(x5).sci_Vector3__f_len12;
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = _1$mcI$sp$1;
    var x1$2___2$mcI$sp = 1024
  } else if ((bigVector instanceof $c_sci_Vector4)) {
    var x6 = $as_sci_Vector4(bigVector);
    var _1$mcI$sp$2 = $n(x6).sci_Vector4__f_len123;
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = _1$mcI$sp$2;
    var x1$2___2$mcI$sp = 32768
  } else if ((bigVector instanceof $c_sci_Vector5)) {
    var x7 = $as_sci_Vector5(bigVector);
    var _1$mcI$sp$3 = $n(x7).sci_Vector5__f_len1234;
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = _1$mcI$sp$3;
    var x1$2___2$mcI$sp = 1048576
  } else {
    if ((!(bigVector instanceof $c_sci_Vector6))) {
      throw new $c_s_MatchError(bigVector)
    };
    var x8 = $as_sci_Vector6(bigVector);
    var _1$mcI$sp$4 = $n(x8).sci_Vector6__f_len12345;
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = _1$mcI$sp$4;
    var x1$2___2$mcI$sp = 33554432
  };
  var prefixLength = x1$2___1$mcI$sp;
  var maxPrefixLength = x1$2___2$mcI$sp;
  if ((maxPrefixLength === 1)) {
    return this
  };
  var overallPrefixLength = $intMod(((before + prefixLength) | 0), maxPrefixLength);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = $intMod(((maxPrefixLength - overallPrefixLength) | 0), maxPrefixLength);
  $p_sci_VectorBuilder__advanceN__I__V(this, ((-32) & this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset));
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset);
  this.sci_VectorBuilder__f_prefixIsRightAligned = true;
  return this
});
$c_sci_VectorBuilder.prototype.addOne__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V(this)
  };
  $n(this.sci_VectorBuilder__f_a1).set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
  return this
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__sci_VectorBuilder = (function(xs) {
  if ((xs instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(xs);
    return ((((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) && (!this.sci_VectorBuilder__f_prefixIsRightAligned)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2))
  } else {
    return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
  }
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  if (this.sci_VectorBuilder__f_prefixIsRightAligned) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this)
  };
  var len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var realLen = ((len - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$()
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len))
  } else if ((len <= 32)) {
    var a = this.sci_VectorBuilder__f_a1;
    return new $c_sci_Vector1((($n(a).u.length === realLen) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, realLen)))
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var original = this.sci_VectorBuilder__f_a2;
    var data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, 1, i2), 2);
    var prefix1 = $n(this.sci_VectorBuilder__f_a2).get(0);
    var a$1 = $n(this.sci_VectorBuilder__f_a2).get(i2);
    var len$1 = ((1 + i1) | 0);
    var suffix1 = (($n(a$1).u.length === len$1) ? a$1 : $m_ju_Arrays$().copyOf__AO__I__AO(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0), data, suffix1, realLen)
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var original$1 = this.sci_VectorBuilder__f_a3;
    var data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i3), 3);
    var a$2 = $n(this.sci_VectorBuilder__f_a3).get(0);
    var to = $n(a$2).u.length;
    var prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 1, to), 2);
    var prefix1$2 = $n($n(this.sci_VectorBuilder__f_a3).get(0)).get(0);
    var original$2 = $n(this.sci_VectorBuilder__f_a3).get(i3);
    var suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$2, i2$2), 2);
    var a$3 = $n($n(this.sci_VectorBuilder__f_a3).get(i3)).get(i2$2);
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = (($n(a$3).u.length === len$2) ? a$3 : $m_ju_Arrays$().copyOf__AO__I__AO(a$3, len$2));
    var len1 = $n(prefix1$2).u.length;
    var len12 = ((len1 + ($n(prefix2).u.length << 5)) | 0);
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen)
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var original$3 = this.sci_VectorBuilder__f_a4;
    var data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, 1, i4), 4);
    var a$4 = $n(this.sci_VectorBuilder__f_a4).get(0);
    var to$1 = $n(a$4).u.length;
    var prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$1), 3);
    var a$5 = $n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0);
    var to$2 = $n(a$5).u.length;
    var prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 1, to$2), 2);
    var prefix1$3 = $n($n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0)).get(0);
    var original$4 = $n(this.sci_VectorBuilder__f_a4).get(i4);
    var suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$4, i3$2), 3);
    var original$5 = $n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2);
    var suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i2$3), 2);
    var a$6 = $n($n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2)).get(i2$3);
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = (($n(a$6).u.length === len$3) ? a$6 : $m_ju_Arrays$().copyOf__AO__I__AO(a$6, len$3));
    var len1$2 = $n(prefix1$3).u.length;
    var len12$2 = ((len1$2 + ($n(prefix2$2).u.length << 5)) | 0);
    var len123 = ((len12$2 + ($n(prefix3).u.length << 10)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen)
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var original$6 = this.sci_VectorBuilder__f_a5;
    var data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$6, 1, i5), 5);
    var a$7 = $n(this.sci_VectorBuilder__f_a5).get(0);
    var to$3 = $n(a$7).u.length;
    var prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$3), 4);
    var a$8 = $n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0);
    var to$4 = $n(a$8).u.length;
    var prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$4), 3);
    var a$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0);
    var to$5 = $n(a$9).u.length;
    var prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$9, 1, to$5), 2);
    var prefix1$4 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0)).get(0);
    var original$7 = $n(this.sci_VectorBuilder__f_a5).get(i5);
    var suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$7, i4$2), 4);
    var original$8 = $n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2);
    var suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i3$3), 3);
    var original$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3);
    var suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i2$4), 2);
    var a$10 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3)).get(i2$4);
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = (($n(a$10).u.length === len$4) ? a$10 : $m_ju_Arrays$().copyOf__AO__I__AO(a$10, len$4));
    var len1$3 = $n(prefix1$4).u.length;
    var len12$3 = ((len1$3 + ($n(prefix2$3).u.length << 5)) | 0);
    var len123$2 = ((len12$3 + ($n(prefix3$2).u.length << 10)) | 0);
    var len1234 = ((len123$2 + ($n(prefix4).u.length << 15)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen)
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var original$10 = this.sci_VectorBuilder__f_a6;
    var data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$10, 1, i6), 6);
    var a$11 = $n(this.sci_VectorBuilder__f_a6).get(0);
    var to$6 = $n(a$11).u.length;
    var prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$6), 5);
    var a$12 = $n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0);
    var to$7 = $n(a$12).u.length;
    var prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$7), 4);
    var a$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0);
    var to$8 = $n(a$13).u.length;
    var prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$8), 3);
    var a$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0);
    var to$9 = $n(a$14).u.length;
    var prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$14, 1, to$9), 2);
    var prefix1$5 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0)).get(0);
    var original$11 = $n(this.sci_VectorBuilder__f_a6).get(i6);
    var suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$11, i5$2), 5);
    var original$12 = $n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2);
    var suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i4$3), 4);
    var original$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3);
    var suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i3$4), 3);
    var original$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4);
    var suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i2$5), 2);
    var a$15 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4)).get(i2$5);
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = (($n(a$15).u.length === len$5) ? a$15 : $m_ju_Arrays$().copyOf__AO__I__AO(a$15, len$5));
    var len1$4 = $n(prefix1$5).u.length;
    var len12$4 = ((len1$4 + ($n(prefix2$4).u.length << 5)) | 0);
    var len123$3 = ((len12$4 + ($n(prefix3$3).u.length << 10)) | 0);
    var len1234$2 = ((len123$3 + ($n(prefix4$2).u.length << 15)) | 0);
    var len12345 = ((len1234$2 + ($n(prefix5).u.length << 20)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen)
  }
});
$c_sci_VectorBuilder.prototype.toString__T = (function() {
  return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")")
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector()
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
});
$c_sci_VectorBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_VectorBuilder(elem)
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
var $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
/** @constructor */
function $c_scm_Buffer$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$())
}
$c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
  /*<skip>*/
}
$h_scm_Buffer$.prototype = $c_scm_Buffer$.prototype;
var $d_scm_Buffer$ = new $TypeData().initClass({
  scm_Buffer$: 0
}, false, "scala.collection.mutable.Buffer$", {
  scm_Buffer$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Buffer$.prototype.$classData = $d_scm_Buffer$;
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$()
  };
  return $n_scm_Buffer$
}
/** @constructor */
function $c_scm_ListBuffer$() {
  /*<skip>*/
}
$c_scm_ListBuffer$.prototype = new $h_O();
$c_scm_ListBuffer$.prototype.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
  /*<skip>*/
}
$h_scm_ListBuffer$.prototype = $c_scm_ListBuffer$.prototype;
$c_scm_ListBuffer$.prototype.apply__sci_Seq__O = (function(elems) {
  return new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(elems)
});
$c_scm_ListBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowableBuilder(new $c_scm_ListBuffer())
});
$c_scm_ListBuffer$.prototype.from__sc_IterableOnce__O = (function(source) {
  return new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(source)
});
var $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.scm_MutationTracker$CheckedIterator__f_underlying = null;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = null;
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = 0;
  this.scm_MutationTracker$CheckedIterator__f_underlying = underlying;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = mutationCount;
  var this$1 = $n(mutationCount);
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = $uI(this$1.apply__O())
}
$c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$c_scm_MutationTracker$CheckedIterator.prototype.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
  /*<skip>*/
}
$h_scm_MutationTracker$CheckedIterator.prototype = $c_scm_MutationTracker$CheckedIterator.prototype;
$c_scm_MutationTracker$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$2 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_MutationTracker$CheckedIterator__f_expectedCount;
  var this$1 = $n(this.scm_MutationTracker$CheckedIterator__f_mutationCount);
  var actualCount = $uI(this$1.apply__O());
  this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).hasNext__Z()
});
$c_scm_MutationTracker$CheckedIterator.prototype.next__O = (function() {
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).next__O()
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().initClass({
  scm_MutationTracker$CheckedIterator: 0
}, false, "scala.collection.mutable.MutationTracker$CheckedIterator", {
  scm_MutationTracker$CheckedIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_scm_MutationTracker$CheckedIterator.prototype.$classData = $d_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $c_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$c_sjs_js_WrappedArray$.prototype = new $h_O();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(elems)
});
$c_sjs_js_WrappedArray$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
  var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
  return $as_sjs_js_WrappedArray($n($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source))).result__O())
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
  /*<skip>*/
}
$c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$c_sjsr_WrappedVarArgs$.prototype.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs$.prototype = $c_sjsr_WrappedVarArgs$.prototype;
$c_sjsr_WrappedVarArgs$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(elems)
});
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__sjsr_WrappedVarArgs = (function(source) {
  var this$1 = $n(this.newBuilder__scm_Builder());
  return $as_sjsr_WrappedVarArgs($n($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(source))).result__O())
});
$c_sjsr_WrappedVarArgs$.prototype.newBuilder__scm_Builder = (function() {
  var array = [];
  var this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var f = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $as_sjs_js_WrappedArray(x$1$2);
    return new $c_sjsr_WrappedVarArgs($n(x$1).sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
  }));
  return new $c_scm_Builder$$anon$1(this$4, f)
});
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
}
/** @constructor */
function $c_s_util_Left(value) {
  this.s_util_Left__f_value = null;
  this.s_util_Left__f_value = value
}
$c_s_util_Left.prototype = new $h_s_util_Either();
$c_s_util_Left.prototype.constructor = $c_s_util_Left;
/** @constructor */
function $h_s_util_Left() {
  /*<skip>*/
}
$h_s_util_Left.prototype = $c_s_util_Left.prototype;
$c_s_util_Left.prototype.productPrefix__T = (function() {
  return "Left"
});
$c_s_util_Left.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Left.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Left__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Left.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Left.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Left.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Left.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Left)) {
    var Left$1 = $as_s_util_Left(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Left__f_value, $n(Left$1).s_util_Left__f_value)
  } else {
    return false
  }
});
function $as_s_util_Left(obj) {
  return (((obj instanceof $c_s_util_Left) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Left"))
}
function $isArrayOf_s_util_Left(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Left)))
}
function $asArrayOf_s_util_Left(obj, depth) {
  return (($isArrayOf_s_util_Left(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Left;", depth))
}
var $d_s_util_Left = new $TypeData().initClass({
  s_util_Left: 0
}, false, "scala.util.Left", {
  s_util_Left: 1,
  s_util_Either: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left.prototype.$classData = $d_s_util_Left;
/** @constructor */
function $c_s_util_Right(value) {
  this.s_util_Right__f_value = null;
  this.s_util_Right__f_value = value
}
$c_s_util_Right.prototype = new $h_s_util_Either();
$c_s_util_Right.prototype.constructor = $c_s_util_Right;
/** @constructor */
function $h_s_util_Right() {
  /*<skip>*/
}
$h_s_util_Right.prototype = $c_s_util_Right.prototype;
$c_s_util_Right.prototype.productPrefix__T = (function() {
  return "Right"
});
$c_s_util_Right.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Right.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Right__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Right.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Right.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Right.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Right.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Right)) {
    var Right$1 = $as_s_util_Right(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Right__f_value, $n(Right$1).s_util_Right__f_value)
  } else {
    return false
  }
});
function $as_s_util_Right(obj) {
  return (((obj instanceof $c_s_util_Right) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Right"))
}
function $isArrayOf_s_util_Right(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Right)))
}
function $asArrayOf_s_util_Right(obj, depth) {
  return (($isArrayOf_s_util_Right(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Right;", depth))
}
var $d_s_util_Right = new $TypeData().initClass({
  s_util_Right: 0
}, false, "scala.util.Right", {
  s_util_Right: 1,
  s_util_Either: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right.prototype.$classData = $d_s_util_Right;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Js$$anon$1(r$1, m$1) {
  this.Ljapgolly_scalajs_react_component_Js$$anon$1__f_raw = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$1__f_mountRaw = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$1__f_raw = r$1;
  this.Ljapgolly_scalajs_react_component_Js$$anon$1__f_mountRaw = m$1
}
$c_Ljapgolly_scalajs_react_component_Js$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_Js$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Js$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Js$$anon$1() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_Js$$anon$1.prototype = $c_Ljapgolly_scalajs_react_component_Js$$anon$1.prototype;
$c_Ljapgolly_scalajs_react_component_Js$$anon$1.prototype.raw__Ljapgolly_scalajs_react_facade_React$ComponentElement = (function() {
  return this.Ljapgolly_scalajs_react_component_Js$$anon$1__f_raw
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$1.prototype.mountRaw__F1 = (function() {
  return this.Ljapgolly_scalajs_react_component_Js$$anon$1__f_mountRaw
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$1.prototype.mapUnmountedProps__F1__Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot = (function(f) {
  var this$1 = $m_Ljapgolly_scalajs_react_util_Util$();
  var mm = this$1.Ljapgolly_scalajs_react_util_Util$__f_identity;
  return new $c_Ljapgolly_scalajs_react_component_Js$$anon$2(this, f, mm)
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$1.prototype.mapMounted__F1__Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot = (function(f) {
  var this$1 = $m_Ljapgolly_scalajs_react_util_Util$();
  var mp = this$1.Ljapgolly_scalajs_react_util_Util$__f_identity;
  return new $c_Ljapgolly_scalajs_react_component_Js$$anon$2(this, mp, f)
});
var $d_Ljapgolly_scalajs_react_component_Js$$anon$1 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_Js$$anon$1: 0
}, false, "japgolly.scalajs.react.component.Js$$anon$1", {
  Ljapgolly_scalajs_react_component_Js$$anon$1: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Js$UnmountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedRaw: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedWithRoot: 1
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$1.prototype.$classData = $d_Ljapgolly_scalajs_react_component_Js$$anon$1;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Js$$anon$2(from$1, mp$1, mm$1) {
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_raw = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mountRaw = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_from$1 = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mp$1 = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mm$1 = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_from$1 = from$1;
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mp$1 = mp$1;
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mm$1 = mm$1;
  var this$1 = $n(from$1);
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_raw = this$1.raw__Ljapgolly_scalajs_react_facade_React$ComponentElement();
  this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mountRaw = $n(mm$1).compose__F1__F1($n(from$1).mountRaw__F1())
}
$c_Ljapgolly_scalajs_react_component_Js$$anon$2.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_Js$$anon$2.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Js$$anon$2;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Js$$anon$2() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_Js$$anon$2.prototype = $c_Ljapgolly_scalajs_react_component_Js$$anon$2.prototype;
$c_Ljapgolly_scalajs_react_component_Js$$anon$2.prototype.raw__Ljapgolly_scalajs_react_facade_React$ComponentElement = (function() {
  return this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_raw
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$2.prototype.mapUnmountedProps__F1__Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot = (function(f) {
  var from = this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_from$1;
  var mp = $n(f).compose__F1__F1(this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mp$1);
  var mm = this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mm$1;
  return new $c_Ljapgolly_scalajs_react_component_Js$$anon$2(from, mp, mm)
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$2.prototype.mapMounted__F1__Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot = (function(f) {
  var from = this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_from$1;
  var mp = this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mp$1;
  var mm = $n(f).compose__F1__F1(this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mm$1);
  return new $c_Ljapgolly_scalajs_react_component_Js$$anon$2(from, mp, mm)
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$2.prototype.mountRaw__F1 = (function() {
  return this.Ljapgolly_scalajs_react_component_Js$$anon$2__f_mountRaw
});
var $d_Ljapgolly_scalajs_react_component_Js$$anon$2 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_Js$$anon$2: 0
}, false, "japgolly.scalajs.react.component.Js$$anon$2", {
  Ljapgolly_scalajs_react_component_Js$$anon$2: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_Js$UnmountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Js$UnmountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedRaw: 1,
  Ljapgolly_scalajs_react_component_Generic$UnmountedWithRoot: 1
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$2.prototype.$classData = $d_Ljapgolly_scalajs_react_component_Js$$anon$2;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1(outer, rc$1, c$1, pf$1) {
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_raw = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_ctor = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_$outer = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_pf$1 = null;
  if ((outer === null)) {
    $n(null)
  } else {
    this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_$outer = outer
  };
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_pf$1 = pf$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_raw = rc$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_ctor = c$1
}
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype = $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype;
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.raw__sjs_js_Any = (function() {
  return this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_raw
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.ctor__Ljapgolly_scalajs_react_CtorType = (function() {
  return this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_ctor
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.cmapCtorProps__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(f) {
  var this$3 = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_$outer);
  var this$1 = $m_Ljapgolly_scalajs_react_util_Util$();
  var mc = this$1.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var this$2 = $m_Ljapgolly_scalajs_react_util_Util$();
  var mu = this$2.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var pf = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_pf$1;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(this$3, this, mc, f, mu, pf)
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.mapUnmounted__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(f) {
  var this$3 = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_$outer);
  var this$1 = $m_Ljapgolly_scalajs_react_util_Util$();
  var cp = this$1.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var this$2 = $m_Ljapgolly_scalajs_react_util_Util$();
  var mc = this$2.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var pf = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1__f_pf$1;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(this$3, this, mc, cp, f, pf)
});
var $d_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1: 0
}, false, "japgolly.scalajs.react.component.JsBaseComponentTemplate$$anon$1", {
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentRaw: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentWithRoot: 1
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1.prototype.$classData = $d_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$1;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(outer, from$1, mc$1, cp$1, mu$1, pf$2) {
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_raw = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_ctor = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_$outer = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_from$1 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mc$1 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_cp$1 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mu$1 = null;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$2 = null;
  if ((outer === null)) {
    $n(null)
  } else {
    this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_$outer = outer
  };
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_from$1 = from$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mc$1 = mc$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_cp$1 = cp$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mu$1 = mu$1;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$2 = pf$2;
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_raw = $n(from$1).raw__sjs_js_Any();
  var f = $n(mc$1).apply__O__O($n(from$1).ctor__Ljapgolly_scalajs_react_CtorType());
  var p = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$2;
  var this$4 = $n(p);
  this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_ctor = this$4.dimap__Ljapgolly_scalajs_react_CtorType$Nullary__F1__F1__Ljapgolly_scalajs_react_CtorType$Nullary($as_Ljapgolly_scalajs_react_CtorType$Nullary(f), cp$1, mu$1)
}
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.constructor = $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype = $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype;
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.raw__sjs_js_Any = (function() {
  return this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_raw
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.ctor__Ljapgolly_scalajs_react_CtorType = (function() {
  return this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_ctor
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.cmapCtorProps__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(f) {
  var this$1 = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_$outer);
  var from = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_from$1;
  var cp = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_cp$1).compose__F1__F1(f);
  var mc = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mc$1;
  var mu = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mu$1;
  var pf = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$2;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(this$1, from, mc, cp, mu, pf)
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.mapUnmounted__F1__Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot = (function(f) {
  var this$1 = $n(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_$outer);
  var from = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_from$1;
  var cp = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_cp$1;
  var mc = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mc$1;
  var mu = $n(f).compose__F1__F1(this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_mu$1);
  var pf = this.Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2__f_pf$2;
  return new $c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2(this$1, from, mc, cp, mu, pf)
});
var $d_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2: 0
}, false, "japgolly.scalajs.react.component.JsBaseComponentTemplate$$anon$2", {
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentWithRoot: 1,
  Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$ComponentSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentRaw: 1,
  Ljapgolly_scalajs_react_component_Generic$ComponentWithRoot: 1
});
$c_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2.prototype.$classData = $d_Ljapgolly_scalajs_react_component_JsBaseComponentTemplate$$anon$2;
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz)
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $x_1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($x_1 ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi)
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
function $f_T__codePointAt__I__I($thiz, index) {
  $charAt($thiz, index);
  return $uI($thiz.codePointAt(index))
}
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $x_1 = res;
    var index = i;
    res = (($x_1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  } else {
    return $as_T($thiz.repeat(count))
  }
}
function $f_T__replaceAll__T__T__T($thiz, regex, replacement) {
  var this$2 = $n($m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0));
  return new $c_ju_regex_Matcher(this$2, $thiz).replaceAll__T__T(replacement)
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(index) {
    super();
    var s = ("String index out of range: " + index);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.ju_regex_PatternSyntaxException__f_desc = null;
    this.ju_regex_PatternSyntaxException__f_regex = null;
    this.ju_regex_PatternSyntaxException__f_index = 0;
    this.ju_regex_PatternSyntaxException__f_desc = desc;
    this.ju_regex_PatternSyntaxException__f_regex = regex;
    this.ju_regex_PatternSyntaxException__f_index = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    var idx = this.ju_regex_PatternSyntaxException__f_index;
    var re = this.ju_regex_PatternSyntaxException__f_regex;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.ju_regex_PatternSyntaxException__f_desc + indexHint) + "\n") + re);
    if (((idx >= 0) && (re !== null))) {
      var this$1 = $n(re);
      var $x_1 = (idx < this$1.length)
    } else {
      var $x_1 = false
    };
    if ($x_1) {
      return (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^")
    } else {
      return base
    }
  };
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().initClass({
  ju_regex_PatternSyntaxException: 0
}, false, "java.util.regex.PatternSyntaxException", {
  ju_regex_PatternSyntaxException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_PatternSyntaxException.prototype.$classData = $d_ju_regex_PatternSyntaxException;
/** @constructor */
function $c_s_None$() {
  /*<skip>*/
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
  /*<skip>*/
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw new $c_ju_NoSuchElementException("None.get")
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None"
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880
});
$c_s_None$.prototype.toString__T = (function() {
  return "None"
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E()
});
var $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
  /*<skip>*/
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some"
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value)
  } else {
    return false
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
var $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T()
});
$c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f)
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1)
});
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value))
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I()
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b)
  };
  return this
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_pos = 0;
  this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder = $n(self).length__I();
  this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_pos = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder) | 0)
}
$c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder > 0)
});
$c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_pos);
    this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_pos = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_pos) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder) | 0);
    return r
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  if ((this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder > 0)) {
    if ((this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder <= from)) {
      this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder = 0
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder))) {
        this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder = until
      }
    } else {
      this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_pos = ((this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_pos - from) | 0);
      if (((until >= 0) && (until < this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder))) {
        if ((until <= from)) {
          this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder = 0
        } else {
          this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder = ((until - from) | 0)
        }
      } else {
        this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder = ((this.sc_IndexedSeqView$IndexedSeqViewReverseIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewReverseIterator$$remainder - from) | 0)
      }
    }
  };
  return this
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewReverseIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", {
  sc_IndexedSeqView$IndexedSeqViewReverseIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
function $f_sc_StrictOptimizedSeqOps__prepended__O__O($thiz, elem) {
  var b = $n($thiz.iterableFactory__sc_SeqFactory()).newBuilder__scm_Builder();
  if (($thiz.knownSize__I() >= 0)) {
    $n(b).sizeHint__I__V(((1 + $thiz.length__I()) | 0))
  };
  var this$1 = $n(b);
  this$1.addOne__O__scm_Growable(elem);
  var this$2 = $n(b);
  this$2.addAll__sc_IterableOnce__scm_Growable($thiz);
  return $n(b).result__O()
}
function $f_sc_StrictOptimizedSeqOps__prependedAll__sc_IterableOnce__O($thiz, prefix) {
  var b = $n($thiz.iterableFactory__sc_SeqFactory()).newBuilder__scm_Builder();
  var this$1 = $n(b);
  this$1.addAll__sc_IterableOnce__scm_Growable(prefix);
  var this$2 = $n(b);
  this$2.addAll__sc_IterableOnce__scm_Growable($thiz);
  return $n(b).result__O()
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  var slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while (($n(slice).u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx)
  };
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  var count = $thiz.sci_NewVectorIterator__f_sliceCount;
  var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul($n(slice).u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0)
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz)
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io
  };
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var a = $n($thiz.sci_NewVectorIterator__f_a1).u.length;
  var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.sci_NewVectorIterator__f_v = null;
  this.sci_NewVectorIterator__f_totalLength = 0;
  this.sci_NewVectorIterator__f_sliceCount = 0;
  this.sci_NewVectorIterator__f_a1 = null;
  this.sci_NewVectorIterator__f_a2 = null;
  this.sci_NewVectorIterator__f_a3 = null;
  this.sci_NewVectorIterator__f_a4 = null;
  this.sci_NewVectorIterator__f_a5 = null;
  this.sci_NewVectorIterator__f_a6 = null;
  this.sci_NewVectorIterator__f_a1len = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 0;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = 0;
  this.sci_NewVectorIterator__f_v = v;
  this.sci_NewVectorIterator__f_totalLength = totalLength;
  this.sci_NewVectorIterator__f_sliceCount = sliceCount;
  this.sci_NewVectorIterator__f_a1 = $n(v).sci_Vector__f_prefix1;
  this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 1;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len
}
$c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
  /*<skip>*/
}
$h_sci_NewVectorIterator.prototype = $c_sci_NewVectorIterator.prototype;
$c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
  return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0)
});
$c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
});
$c_sci_NewVectorIterator.prototype.next__O = (function() {
  if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
    $p_sci_NewVectorIterator__advance__V(this)
  };
  var r = $n(this.sci_NewVectorIterator__f_a1).get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  return r
});
$c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.sci_NewVectorIterator__f_totalLength;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_a1len = 0
    } else {
      while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this)
      };
      var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
      if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
        var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
        this.sci_NewVectorIterator__f_oldPos = io
      };
      this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
      if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1
      }
    }
  };
  return this
});
$c_sci_NewVectorIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var srcLen = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this)
    };
    var a = ((total - copied) | 0);
    var b = (($n(this.sci_NewVectorIterator__f_a1).u.length - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.sci_NewVectorIterator__f_a1;
      var srcPos = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1;
      var destPos = ((start + copied) | 0);
      $systemArraycopyFull($n(src), srcPos, $n(xs), destPos, count)
    } else {
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_NewVectorIterator__f_a1, this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1, xs, ((start + copied) | 0), count)
    };
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + count) | 0);
    copied = ((copied + count) | 0)
  };
  return total
});
var $d_sci_NewVectorIterator = new $TypeData().initClass({
  sci_NewVectorIterator: 0
}, false, "scala.collection.immutable.NewVectorIterator", {
  sci_NewVectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
});
$c_sci_NewVectorIterator.prototype.$classData = $d_sci_NewVectorIterator;
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype = $c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype;
var $d_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$: 0
}, false, "japgolly.scalajs.react.util.EffectCallback$asyncCallback$", {
  Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$: 1,
  O: 1,
  Ljapgolly_scalajs_react_util_Effect$Async: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch: 1,
  Ljapgolly_scalajs_react_util_Effect: 1,
  Ljapgolly_scalajs_react_util_Monad: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch$WithDefaults: 1,
  Ljapgolly_scalajs_react_util_Effect$WithDefaults: 1
});
$c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$.prototype.$classData = $d_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$;
var $n_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$;
function $m_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$() {
  if ((!$n_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$)) {
    $n_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$ = new $c_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$()
  };
  return $n_Ljapgolly_scalajs_react_util_EffectCallback$asyncCallback$
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
}
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
function $f_Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW__state__O($thiz) {
  return $n($n($as_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base($thiz)).mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).state__O()
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1() {
  /*<skip>*/
}
$c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1.prototype = $c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1.prototype;
$c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1.prototype.delay__F0__O = (function(a) {
  return $n(a).apply__O()
});
$c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1.prototype.runSync__F0__O = (function(a) {
  return $n(a).apply__O()
});
var $d_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1: 0
}, false, "japgolly.scalajs.react.util.Effect$UnsafeSync$$anon$1", {
  Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1: 1,
  O: 1,
  Ljapgolly_scalajs_react_util_Effect$UnsafeSync$WithDefaults: 1,
  Ljapgolly_scalajs_react_util_Effect$UnsafeSync: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch: 1,
  Ljapgolly_scalajs_react_util_Effect: 1,
  Ljapgolly_scalajs_react_util_Monad: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch$WithDefaults: 1,
  Ljapgolly_scalajs_react_util_Effect$WithDefaults: 1
});
$c_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1.prototype.$classData = $d_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$$anon$1;
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s
    }
  }
}
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
function $as_sc_StrictOptimizedLinearSeqOps(obj) {
  return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"))
}
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
function $asArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StrictOptimizedLinearSeqOps;", depth))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_util_EffectCallback$callback$() {
  $n_Ljapgolly_scalajs_react_util_EffectCallback$callback$ = this;
  $m_Ljapgolly_scalajs_react_callback_Callback$();
  new $c_sjsr_AnonFunction2(((x$1$2, x$2$2) => {
    var x$1 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(x$1$2)).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
    var x$2 = $as_F0(x$2$2);
    return new $c_Ljapgolly_scalajs_react_callback_CallbackTo($m_Ljapgolly_scalajs_react_callback_CallbackTo$().$greater$greater$extension__Ljapgolly_scalajs_react_callback_Trampoline__Ljapgolly_scalajs_react_callback_Trampoline__Ljapgolly_scalajs_react_callback_Trampoline(x$1, $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(x$2).apply__O())).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline))
  }));
  new $c_sjsr_AnonFunction2(((x$3$2, x$4$2) => {
    var x$3 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo(x$3$2)).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
    var x$4 = $as_F0(x$4$2);
    var $x_2 = $m_Ljapgolly_scalajs_react_callback_CallbackTo$();
    var $x_1 = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(x$4).apply__O())).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
    var this$3 = $m_s_$less$colon$less$();
    return new $c_Ljapgolly_scalajs_react_callback_CallbackTo($n($x_2).$bar$bar$extension__Ljapgolly_scalajs_react_callback_Trampoline__Ljapgolly_scalajs_react_callback_Trampoline__s_$less$colon$less__Ljapgolly_scalajs_react_callback_Trampoline(x$3, $x_1, this$3.s_$less$colon$less$__f_singleton))
  }))
}
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.constructor = $c_Ljapgolly_scalajs_react_util_EffectCallback$callback$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_util_EffectCallback$callback$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype = $c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype;
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.runSync__F0__O = (function(f) {
  var this$ = $n($as_Ljapgolly_scalajs_react_callback_CallbackTo($n(f).apply__O())).Ljapgolly_scalajs_react_callback_CallbackTo__f_japgolly$scalajs$react$callback$CallbackTo$$trampoline;
  var this$2 = $n(this$);
  return $m_Ljapgolly_scalajs_react_callback_Trampoline$().run__Ljapgolly_scalajs_react_callback_Trampoline__O(this$2)
});
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.delay__F0__O = (function(a) {
  return new $c_Ljapgolly_scalajs_react_callback_CallbackTo(($m_Ljapgolly_scalajs_react_callback_Trampoline$(), new $c_Ljapgolly_scalajs_react_callback_Trampoline$Delay(a)))
});
var $d_Ljapgolly_scalajs_react_util_EffectCallback$callback$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_util_EffectCallback$callback$: 0
}, false, "japgolly.scalajs.react.util.EffectCallback$callback$", {
  Ljapgolly_scalajs_react_util_EffectCallback$callback$: 1,
  O: 1,
  Ljapgolly_scalajs_react_util_Effect$Sync$WithDefaultDispatch: 1,
  Ljapgolly_scalajs_react_util_Effect$Sync: 1,
  Ljapgolly_scalajs_react_util_Effect$UnsafeSync: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch: 1,
  Ljapgolly_scalajs_react_util_Effect: 1,
  Ljapgolly_scalajs_react_util_Monad: 1,
  Ljapgolly_scalajs_react_util_Effect$Dispatch$WithDefaults: 1,
  Ljapgolly_scalajs_react_util_Effect$WithDefaults: 1
});
$c_Ljapgolly_scalajs_react_util_EffectCallback$callback$.prototype.$classData = $d_Ljapgolly_scalajs_react_util_EffectCallback$callback$;
var $n_Ljapgolly_scalajs_react_util_EffectCallback$callback$;
function $m_Ljapgolly_scalajs_react_util_EffectCallback$callback$() {
  if ((!$n_Ljapgolly_scalajs_react_util_EffectCallback$callback$)) {
    $n_Ljapgolly_scalajs_react_util_EffectCallback$callback$ = new $c_Ljapgolly_scalajs_react_util_EffectCallback$callback$()
  };
  return $n_Ljapgolly_scalajs_react_util_EffectCallback$callback$
}
function $ct_Ljapgolly_scalajs_react_vdom_PackageBase__($thiz) {
  $ct_Ljapgolly_scalajs_react_vdom_Exports__($thiz);
  $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1__$init$__V($thiz);
  $f_Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr__$init$__V($thiz);
  return $thiz
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_PackageBase() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null;
  this.Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString = null
}
$c_Ljapgolly_scalajs_react_vdom_PackageBase.prototype = new $h_Ljapgolly_scalajs_react_vdom_Exports();
$c_Ljapgolly_scalajs_react_vdom_PackageBase.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_PackageBase;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_PackageBase() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_PackageBase.prototype = $c_Ljapgolly_scalajs_react_vdom_PackageBase.prototype;
/** @constructor */
function $c_sc_AbstractView() {
  /*<skip>*/
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
  /*<skip>*/
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this)
});
function $is_Ljapgolly_scalajs_react_component_Generic$MountedWithRoot(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_component_Generic$MountedWithRoot)))
}
function $as_Ljapgolly_scalajs_react_component_Generic$MountedWithRoot(obj) {
  return (($is_Ljapgolly_scalajs_react_component_Generic$MountedWithRoot(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.Generic$MountedWithRoot"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_Generic$MountedWithRoot(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_Generic$MountedWithRoot)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_Generic$MountedWithRoot(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_Generic$MountedWithRoot(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.Generic$MountedWithRoot;", depth))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate(raw, prevProps, prevState, snapshot, evidence$5, evidence$6) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate__f_prevProps = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate__f_prevState = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate__f_prevProps = prevProps;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate__f_prevState = prevState;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$5, evidence$6)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((((((((("ComponentDidUpdate(props: " + this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate__f_prevProps) + " \u2192 ") + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).props__O()) + ", state: ") + this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate__f_prevState) + " \u2192 ") + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).state__O()) + ")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$ComponentDidUpdate", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateW: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ForceUpdate: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidUpdate;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount(raw, evidence$7, evidence$8) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$7, evidence$8)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((((("ComponentWillMount(props: " + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).props__O()) + ", state: ") + $f_Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW__state__O(this)) + ")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$ComponentWillMount", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateW: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillMount;
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_PackageBase$() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null;
  this.Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString = null;
  $ct_Ljapgolly_scalajs_react_vdom_PackageBase__(this)
}
$c_Ljapgolly_scalajs_react_vdom_PackageBase$.prototype = new $h_Ljapgolly_scalajs_react_vdom_PackageBase();
$c_Ljapgolly_scalajs_react_vdom_PackageBase$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_PackageBase$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_PackageBase$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_PackageBase$.prototype = $c_Ljapgolly_scalajs_react_vdom_PackageBase$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_PackageBase$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_PackageBase$: 0
}, false, "japgolly.scalajs.react.vdom.PackageBase$", {
  Ljapgolly_scalajs_react_vdom_PackageBase$: 1,
  Ljapgolly_scalajs_react_vdom_PackageBase: 1,
  Ljapgolly_scalajs_react_vdom_Exports: 1,
  O: 1,
  Ljapgolly_scalajs_react_vdom_Implicits: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForTagMod: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1: 1,
  Ljapgolly_scalajs_react_vdom_CssUnitsOps: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomNode: 1,
  Ljapgolly_scalajs_react_vdom_VdomNodeScalaSpecificImplicits: 1
});
$c_Ljapgolly_scalajs_react_vdom_PackageBase$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_PackageBase$;
var $n_Ljapgolly_scalajs_react_vdom_PackageBase$;
function $m_Ljapgolly_scalajs_react_vdom_PackageBase$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_PackageBase$)) {
    $n_Ljapgolly_scalajs_react_vdom_PackageBase$ = new $c_Ljapgolly_scalajs_react_vdom_PackageBase$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_PackageBase$
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$() {
  this.Ljapgolly_scalajs_react_vdom_Exports__f_HtmlTagOf = null;
  this.Ljapgolly_scalajs_react_vdom_Exports__f_VdomAttr = null;
  this.Ljapgolly_scalajs_react_vdom_PackageBase__f_vdomAttrVtString = null;
  this.Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less = null;
  this.Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up = null;
  $ct_Ljapgolly_scalajs_react_vdom_PackageBase__(this);
  $n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$ = this;
  this.Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$less = $m_Ljapgolly_scalajs_react_vdom_HtmlTags$();
  this.Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$__f_$up = $m_Ljapgolly_scalajs_react_vdom_HtmlAttrAndStyles$()
}
$c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$.prototype = new $h_Ljapgolly_scalajs_react_vdom_PackageBase();
$c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$.prototype.constructor = $c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$;
/** @constructor */
function $h_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$.prototype = $c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$.prototype;
var $d_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$ = new $TypeData().initClass({
  Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$: 0
}, false, "japgolly.scalajs.react.vdom.html_$less$up$", {
  Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$: 1,
  Ljapgolly_scalajs_react_vdom_PackageBase: 1,
  Ljapgolly_scalajs_react_vdom_Exports: 1,
  O: 1,
  Ljapgolly_scalajs_react_vdom_Implicits: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForTagMod: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomAttr1: 1,
  Ljapgolly_scalajs_react_vdom_CssUnitsOps: 1,
  Ljapgolly_scalajs_react_vdom_ImplicitsForVdomNode: 1,
  Ljapgolly_scalajs_react_vdom_VdomNodeScalaSpecificImplicits: 1
});
$c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$.prototype.$classData = $d_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$;
var $n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$;
function $m_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$() {
  if ((!$n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$)) {
    $n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$ = new $c_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$()
  };
  return $n_Ljapgolly_scalajs_react_vdom_html\uff3f$less$up$
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2)
      }
    };
    return false
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
function $ct_Ljapgolly_scalajs_react_component_Template$MountedMapped__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__($thiz, from, mp, ls, ft, at) {
  $thiz.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_from = from;
  $thiz.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_mp = mp;
  $thiz.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ls = ls;
  $thiz.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ft = ft;
  $thiz.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_at = at;
  return $thiz
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Template$MountedMapped() {
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_from = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_mp = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ls = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ft = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_at = null
}
$c_Ljapgolly_scalajs_react_component_Template$MountedMapped.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_Template$MountedMapped.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Template$MountedMapped;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Template$MountedMapped() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_Template$MountedMapped.prototype = $c_Ljapgolly_scalajs_react_component_Template$MountedMapped.prototype;
$c_Ljapgolly_scalajs_react_component_Template$MountedMapped.prototype.props__O = (function() {
  var this$2 = $n(this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ft);
  var ga = new $c_sjsr_AnonFunction0((() => $n(this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_mp).apply__O__O($n(this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_from).props__O())));
  var g = $m_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$().id__Ljapgolly_scalajs_react_util_Effect$UnsafeSync();
  return $f_Ljapgolly_scalajs_react_util_Effect$UnsafeSync__transSync__F0__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__O(this$2, ga, g)
});
$c_Ljapgolly_scalajs_react_component_Template$MountedMapped.prototype.state__O = (function() {
  var this$2 = $n(this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ft);
  var ga = new $c_sjsr_AnonFunction0((() => $n($n(this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ls).Ljapgolly_scalajs_react_internal_Lens__f_get).apply__O__O($n(this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_from).state__O())));
  var g = $m_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$().id__Ljapgolly_scalajs_react_util_Effect$UnsafeSync();
  return $f_Ljapgolly_scalajs_react_util_Effect$UnsafeSync__transSync__F0__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__O(this$2, ga, g)
});
$c_Ljapgolly_scalajs_react_component_Template$MountedMapped.prototype.withEffect__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot = (function(t) {
  return this.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot(this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_mp, this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ls, t, this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_at)
});
function $ct_Ljapgolly_scalajs_react_component_Template$MountedWithRoot__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__($thiz, ft, at) {
  $thiz.Ljapgolly_scalajs_react_component_Template$MountedWithRoot__f_at = at;
  return $thiz
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Template$MountedWithRoot() {
  this.Ljapgolly_scalajs_react_component_Template$MountedWithRoot__f_at = null
}
$c_Ljapgolly_scalajs_react_component_Template$MountedWithRoot.prototype = new $h_O();
$c_Ljapgolly_scalajs_react_component_Template$MountedWithRoot.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Template$MountedWithRoot;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Template$MountedWithRoot() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_Template$MountedWithRoot.prototype = $c_Ljapgolly_scalajs_react_component_Template$MountedWithRoot.prototype;
$c_Ljapgolly_scalajs_react_component_Template$MountedWithRoot.prototype.withEffect__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot = (function(f1) {
  var this$1 = $m_Ljapgolly_scalajs_react_util_Util$();
  var $x_1 = this$1.Ljapgolly_scalajs_react_util_Util$__f_identity;
  var this$2 = $m_Ljapgolly_scalajs_react_internal_Lens$();
  return this.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot($x_1, this$2.Ljapgolly_scalajs_react_internal_Lens$__f_idInstance, f1, this.Ljapgolly_scalajs_react_component_Template$MountedWithRoot__f_at)
});
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch(raw, rawError, rawInfo, evidence$1, evidence$2) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch__f_error = null;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$1, evidence$2);
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch__f_error = new $c_Ljapgolly_scalajs_react_ReactCaughtError(rawError, rawInfo)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((("ComponentDidCatch(" + $n(this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch__f_error).rawErrorString__T()) + ")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$ComponentDidCatch", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateW: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ForceUpdate: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidCatch;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount(raw, evidence$3, evidence$4) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$3, evidence$4)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((((("ComponentDidMount(props: " + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).props__O()) + ", state: ") + $f_Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW__state__O(this)) + ")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$ComponentDidMount", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateW: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ForceUpdate: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentDidMount;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps(raw, nextProps, evidence$11, evidence$12) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps__f_nextProps = null;
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps__f_nextProps = nextProps;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$11, evidence$12)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((((((("ComponentWillReceiveProps(props: " + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).props__O()) + " \u2192 ") + this.Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps__f_nextProps) + ", state: ") + $f_Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW__state__O(this)) + ")"))
});
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$ComponentWillReceiveProps", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateW: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ForceUpdate: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$ComponentWillReceiveProps;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope(raw, evidence$19, evidence$20) {
  this.Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__f_raw = null;
  $ct_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base__Ljapgolly_scalajs_react_facade_React$Component__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, raw, evidence$19, evidence$20)
}
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope.prototype = new $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$Base();
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope.prototype.constructor = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope.prototype = $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope.prototype;
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope.prototype.toString__T = (function() {
  return $m_Ljapgolly_scalajs_react_component_builder_LifecycleF$().japgolly$scalajs$react$component$builder$LifecycleF$$wrapTostring__T__T((((("Render(props: " + $n(this.mountedImpure__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot()).props__O()) + ", state: ") + $f_Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW__state__O(this)) + ")"))
});
function $as_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope(obj) {
  return (((obj instanceof $c_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.builder.LifecycleF$RenderScope"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.builder.LifecycleF$RenderScope;", depth))
}
var $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope: 0
}, false, "japgolly.scalajs.react.component.builder.LifecycleF$RenderScope", {
  Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$Base: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateRW: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$StateW: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1,
  Ljapgolly_scalajs_react_component_builder_LifecycleF$ForceUpdate: 1
});
$c_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope.prototype.$classData = $d_Ljapgolly_scalajs_react_component_builder_LifecycleF$RenderScope;
function $is_Ljapgolly_scalajs_react_component_Js$MountedWithRoot(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_component_Js$MountedWithRoot)))
}
function $as_Ljapgolly_scalajs_react_component_Js$MountedWithRoot(obj) {
  return (($is_Ljapgolly_scalajs_react_component_Js$MountedWithRoot(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.Js$MountedWithRoot"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_Js$MountedWithRoot(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_Js$MountedWithRoot)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_Js$MountedWithRoot(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_Js$MountedWithRoot(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.Js$MountedWithRoot;", depth))
}
function $is_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljapgolly_scalajs_react_component_Scala$MountedWithRoot)))
}
function $as_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(obj) {
  return (($is_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "japgolly.scalajs.react.component.Scala$MountedWithRoot"))
}
function $isArrayOf_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljapgolly_scalajs_react_component_Scala$MountedWithRoot)))
}
function $asArrayOf_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(obj, depth) {
  return (($isArrayOf_Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljapgolly.scalajs.react.component.Scala$MountedWithRoot;", depth))
}
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sc_AbstractSeq.prototype.size__I = (function() {
  return this.length__I()
});
$c_sc_AbstractSeq.prototype.sizeCompare__I__I = (function(otherSize) {
  return this.lengthCompare__I__I(otherSize)
});
$c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len)
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sc_AbstractSeq.prototype.compose__F1__F1 = (function(g) {
  return $f_F1__compose__F1__F1(this, g)
});
/** @constructor */
function $c_sc_AbstractSeqView() {
  /*<skip>*/
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
  /*<skip>*/
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
  /*<skip>*/
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx)
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I()
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z()
});
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Js$$anon$3(r$2) {
  this.Ljapgolly_scalajs_react_component_Template$MountedWithRoot__f_at = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$3__f_raw = null;
  var $x_1 = $m_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$().id__Ljapgolly_scalajs_react_util_Effect$UnsafeSync();
  var this$1 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
  $ct_Ljapgolly_scalajs_react_component_Template$MountedWithRoot__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, $x_1, this$1.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async);
  this.Ljapgolly_scalajs_react_component_Js$$anon$3__f_raw = r$2
}
$c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype = new $h_Ljapgolly_scalajs_react_component_Template$MountedWithRoot();
$c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Js$$anon$3;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Js$$anon$3() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype = $c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype;
$c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype.raw__Ljapgolly_scalajs_react_facade_React$Component = (function() {
  return this.Ljapgolly_scalajs_react_component_Js$$anon$3__f_raw
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype.props__sjs_js_Object = (function() {
  return this.Ljapgolly_scalajs_react_component_Js$$anon$3__f_raw.props
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype.state__sjs_js_Object = (function() {
  return this.Ljapgolly_scalajs_react_component_Js$$anon$3__f_raw.state
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot = (function(mp, ls, ft, at) {
  return new $c_Ljapgolly_scalajs_react_component_Js$$anon$4(this, mp, ls, ft, at)
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype.state__O = (function() {
  return this.state__sjs_js_Object()
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype.props__O = (function() {
  return this.props__sjs_js_Object()
});
var $d_Ljapgolly_scalajs_react_component_Js$$anon$3 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_Js$$anon$3: 0
}, false, "japgolly.scalajs.react.component.Js$$anon$3", {
  Ljapgolly_scalajs_react_component_Js$$anon$3: 1,
  Ljapgolly_scalajs_react_component_Template$MountedWithRoot: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedRaw: 1,
  Ljapgolly_scalajs_react_StateAccess: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1,
  Ljapgolly_scalajs_react_component_Js$MountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Js$MountedSimple: 1
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$3.prototype.$classData = $d_Ljapgolly_scalajs_react_component_Js$$anon$3;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Js$$anon$4(from$2, mp$2, ls$1, ft$1, at$1) {
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_from = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_mp = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ls = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ft = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_at = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$4__f_raw = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$4__f_from$2 = null;
  this.Ljapgolly_scalajs_react_component_Js$$anon$4__f_from$2 = from$2;
  $ct_Ljapgolly_scalajs_react_component_Template$MountedMapped__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, from$2, mp$2, ls$1, ft$1, at$1);
  this.Ljapgolly_scalajs_react_component_Js$$anon$4__f_raw = $n(from$2).raw__Ljapgolly_scalajs_react_facade_React$Component()
}
$c_Ljapgolly_scalajs_react_component_Js$$anon$4.prototype = new $h_Ljapgolly_scalajs_react_component_Template$MountedMapped();
$c_Ljapgolly_scalajs_react_component_Js$$anon$4.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Js$$anon$4;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Js$$anon$4() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_Js$$anon$4.prototype = $c_Ljapgolly_scalajs_react_component_Js$$anon$4.prototype;
$c_Ljapgolly_scalajs_react_component_Js$$anon$4.prototype.raw__Ljapgolly_scalajs_react_facade_React$Component = (function() {
  return this.Ljapgolly_scalajs_react_component_Js$$anon$4__f_raw
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$4.prototype.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Js$MountedWithRoot = (function(mp, ls, ft, at) {
  var from = this.Ljapgolly_scalajs_react_component_Js$$anon$4__f_from$2;
  return new $c_Ljapgolly_scalajs_react_component_Js$$anon$4(from, mp, ls, ft, at)
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$4.prototype.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot = (function(mp, ls, ft, at) {
  return this.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Js$MountedWithRoot(mp, ls, ft, at)
});
var $d_Ljapgolly_scalajs_react_component_Js$$anon$4 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_Js$$anon$4: 0
}, false, "japgolly.scalajs.react.component.Js$$anon$4", {
  Ljapgolly_scalajs_react_component_Js$$anon$4: 1,
  Ljapgolly_scalajs_react_component_Template$MountedMapped: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedRaw: 1,
  Ljapgolly_scalajs_react_StateAccess: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1,
  Ljapgolly_scalajs_react_component_Js$MountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Js$MountedSimple: 1
});
$c_Ljapgolly_scalajs_react_component_Js$$anon$4.prototype.$classData = $d_Ljapgolly_scalajs_react_component_Js$$anon$4;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Scala$$anon$1(x$1) {
  this.Ljapgolly_scalajs_react_component_Template$MountedWithRoot__f_at = null;
  this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_js = null;
  this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_raw = null;
  this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_x$1 = null;
  this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_x$1 = x$1;
  var $x_1 = $m_Ljapgolly_scalajs_react_util_Effect$UnsafeSync$().id__Ljapgolly_scalajs_react_util_Effect$UnsafeSync();
  var this$1 = $m_Ljapgolly_scalajs_react_util_DefaultEffects$();
  $ct_Ljapgolly_scalajs_react_component_Template$MountedWithRoot__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, $x_1, this$1.Ljapgolly_scalajs_react_util_DefaultEffects$__f_Async);
  this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_js = x$1;
  this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_raw = $n(x$1).raw__Ljapgolly_scalajs_react_facade_React$Component()
}
$c_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype = new $h_Ljapgolly_scalajs_react_component_Template$MountedWithRoot();
$c_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Scala$$anon$1;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Scala$$anon$1() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype = $c_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype;
$c_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype.js__Ljapgolly_scalajs_react_component_Js$MountedWithRoot = (function() {
  return this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_js
});
$c_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype.raw__Ljapgolly_scalajs_react_facade_React$Component = (function() {
  return this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_raw
});
$c_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype.props__O = (function() {
  return $n(this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_x$1).props__O().a
});
$c_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype.state__O = (function() {
  return $n(this.Ljapgolly_scalajs_react_component_Scala$$anon$1__f_x$1).state__O().a
});
$c_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot = (function(mp, ls, ft, at) {
  return new $c_Ljapgolly_scalajs_react_component_Scala$$anon$2(this, mp, ls, ft, at)
});
var $d_Ljapgolly_scalajs_react_component_Scala$$anon$1 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_Scala$$anon$1: 0
}, false, "japgolly.scalajs.react.component.Scala$$anon$1", {
  Ljapgolly_scalajs_react_component_Scala$$anon$1: 1,
  Ljapgolly_scalajs_react_component_Template$MountedWithRoot: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedRaw: 1,
  Ljapgolly_scalajs_react_StateAccess: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1,
  Ljapgolly_scalajs_react_component_Scala$MountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Scala$MountedSimple: 1
});
$c_Ljapgolly_scalajs_react_component_Scala$$anon$1.prototype.$classData = $d_Ljapgolly_scalajs_react_component_Scala$$anon$1;
/** @constructor */
function $c_Ljapgolly_scalajs_react_component_Scala$$anon$2(from$1, mp$1, ls$1, ft$1, at$1) {
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_from = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_mp = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ls = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_ft = null;
  this.Ljapgolly_scalajs_react_component_Template$MountedMapped__f_at = null;
  this.Ljapgolly_scalajs_react_component_Scala$$anon$2__f_js = null;
  this.Ljapgolly_scalajs_react_component_Scala$$anon$2__f_raw = null;
  this.Ljapgolly_scalajs_react_component_Scala$$anon$2__f_from$1 = null;
  this.Ljapgolly_scalajs_react_component_Scala$$anon$2__f_from$1 = from$1;
  $ct_Ljapgolly_scalajs_react_component_Template$MountedMapped__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__(this, from$1, mp$1, ls$1, ft$1, at$1);
  this.Ljapgolly_scalajs_react_component_Scala$$anon$2__f_js = $n(from$1).js__Ljapgolly_scalajs_react_component_Js$MountedWithRoot();
  this.Ljapgolly_scalajs_react_component_Scala$$anon$2__f_raw = $n(from$1).raw__Ljapgolly_scalajs_react_facade_React$Component()
}
$c_Ljapgolly_scalajs_react_component_Scala$$anon$2.prototype = new $h_Ljapgolly_scalajs_react_component_Template$MountedMapped();
$c_Ljapgolly_scalajs_react_component_Scala$$anon$2.prototype.constructor = $c_Ljapgolly_scalajs_react_component_Scala$$anon$2;
/** @constructor */
function $h_Ljapgolly_scalajs_react_component_Scala$$anon$2() {
  /*<skip>*/
}
$h_Ljapgolly_scalajs_react_component_Scala$$anon$2.prototype = $c_Ljapgolly_scalajs_react_component_Scala$$anon$2.prototype;
$c_Ljapgolly_scalajs_react_component_Scala$$anon$2.prototype.js__Ljapgolly_scalajs_react_component_Js$MountedWithRoot = (function() {
  return this.Ljapgolly_scalajs_react_component_Scala$$anon$2__f_js
});
$c_Ljapgolly_scalajs_react_component_Scala$$anon$2.prototype.raw__Ljapgolly_scalajs_react_facade_React$Component = (function() {
  return this.Ljapgolly_scalajs_react_component_Scala$$anon$2__f_raw
});
$c_Ljapgolly_scalajs_react_component_Scala$$anon$2.prototype.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot = (function(mp, ls, ft, at) {
  var from = this.Ljapgolly_scalajs_react_component_Scala$$anon$2__f_from$1;
  return new $c_Ljapgolly_scalajs_react_component_Scala$$anon$2(from, mp, ls, ft, at)
});
$c_Ljapgolly_scalajs_react_component_Scala$$anon$2.prototype.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Generic$MountedWithRoot = (function(mp, ls, ft, at) {
  return this.mapped__F1__Ljapgolly_scalajs_react_internal_Lens__Ljapgolly_scalajs_react_util_Effect$UnsafeSync__Ljapgolly_scalajs_react_util_Effect$Async__Ljapgolly_scalajs_react_component_Scala$MountedWithRoot(mp, ls, ft, at)
});
var $d_Ljapgolly_scalajs_react_component_Scala$$anon$2 = new $TypeData().initClass({
  Ljapgolly_scalajs_react_component_Scala$$anon$2: 0
}, false, "japgolly.scalajs.react.component.Scala$$anon$2", {
  Ljapgolly_scalajs_react_component_Scala$$anon$2: 1,
  Ljapgolly_scalajs_react_component_Template$MountedMapped: 1,
  O: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedSimple: 1,
  Ljapgolly_scalajs_react_component_Generic$MountedRaw: 1,
  Ljapgolly_scalajs_react_StateAccess: 1,
  Ljapgolly_scalajs_react_StateAccess$Write: 1,
  Ljapgolly_scalajs_react_StateAccess$SetState: 1,
  Ljapgolly_scalajs_react_StateAccess$Base: 1,
  Ljapgolly_scalajs_react_StateAccess$ModState: 1,
  Ljapgolly_scalajs_react_StateAccess$WriteWithProps: 1,
  Ljapgolly_scalajs_react_StateAccess$ModStateWithProps: 1,
  Ljapgolly_scalajs_react_component_Scala$MountedWithRoot: 1,
  Ljapgolly_scalajs_react_component_Scala$MountedSimple: 1
});
$c_Ljapgolly_scalajs_react_component_Scala$$anon$2.prototype.$classData = $d_Ljapgolly_scalajs_react_component_Scala$$anon$2;
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
});
$c_sc_IndexedSeqView$Id.prototype.reverseIterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(this)
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView"
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I()
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
/** @constructor */
function $c_sci_AbstractSeq() {
  /*<skip>*/
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
  /*<skip>*/
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I())
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength
        } else {
          var maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    if ($thiz.sci_LazyList__f_midEvaluation) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "self-referential LazyList or a derivation thereof has no more elements")
    };
    $thiz.sci_LazyList__f_midEvaluation = true;
    try {
      var res = $as_sci_LazyList$State($n($thiz.sci_LazyList__f_lazyState).apply__O())
    } finally {
      $thiz.sci_LazyList__f_midEvaluation = false
    };
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  var this$1 = $n(b);
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    var this$2 = $n(b);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    var this$3 = $n(b);
    var obj = $n($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $n($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    var elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($n($as_sci_LazyList(elem)).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $n($as_sci_LazyList(elem$2)).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) {
        var this$6 = $n($as_sci_LazyList(elem$2));
        elem$2 = $n(this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) && ($n($as_sci_LazyList(elem)).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $n($as_sci_LazyList(elem$2)).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          var this$7 = $n(b);
          this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$8 = $n($as_sci_LazyList(elem));
          var obj$1 = $n(this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
          this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          var this$9 = $n($as_sci_LazyList(elem));
          elem = $n(this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          var this$10 = $n($as_sci_LazyList(elem$2));
          elem$2 = $n(this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          if (($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) {
            var this$11 = $n($as_sci_LazyList(elem$2));
            elem$2 = $n(this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
          }
        }
      }
    };
    if ((!($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        var this$12 = $n(b);
        this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$13 = $n($as_sci_LazyList(elem));
        var obj$2 = $n(this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
        this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        var this$14 = $n($as_sci_LazyList(elem));
        elem = $n(this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
      };
      if ((!$n($as_sci_LazyList(elem)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        var this$15 = $n(b);
        this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || ($n(a).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$1).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$16 = $n(runner);
          runner = $n(this$16.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          var this$17 = $n($as_sci_LazyList(elem$2));
          elem$2 = $n(this$17.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      var a$1 = $as_sci_LazyList(elem);
      var b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || ($n(a$1).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        var this$18 = $n(b);
        this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$19 = $n($as_sci_LazyList(elem));
        var obj$3 = $n(this$19.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
        this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        var this$20 = $n($as_sci_LazyList(elem));
        elem = $n(this$20.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
      };
      while (true) {
        var a$2 = $as_sci_LazyList(elem);
        var b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || ($n(a$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$3).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$21 = $n(b);
          this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$22 = $n($as_sci_LazyList(elem));
          var obj$4 = $n(this$22.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
          this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          var this$23 = $n($as_sci_LazyList(elem));
          elem = $n(this$23.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
        } else {
          break
        }
      };
      var this$24 = $n(b);
      this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  var this$25 = $n(b);
  this$25.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$25.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
  this.sci_LazyList__f_lazyState = null;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false;
  this.sci_LazyList__f_bitmap$0 = false;
  this.sci_LazyList__f_lazyState = lazyState;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false
}
$c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$c_sci_LazyList.prototype.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
  /*<skip>*/
}
$h_sci_LazyList.prototype = $c_sci_LazyList.prototype;
$c_sci_LazyList.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_LazyList.prototype.length__I = (function() {
  return $f_sc_LinearSeqOps__length__I(this)
});
$c_sci_LazyList.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
});
$c_sci_LazyList.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_LazyList.prototype.scala$collection$immutable$LazyList$$state__sci_LazyList$State = (function() {
  return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
});
$c_sci_LazyList.prototype.isEmpty__Z = (function() {
  return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
});
$c_sci_LazyList.prototype.knownSize__I = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1))
});
$c_sci_LazyList.prototype.head__O = (function() {
  return $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O()
});
$c_sci_LazyList.prototype.force__sci_LazyList = (function() {
  var these = this;
  var those = this;
  if ((!$n(these).isEmpty__Z())) {
    var this$1 = $n(these);
    these = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  };
  while ((those !== these)) {
    if ($n(these).isEmpty__Z()) {
      return this
    };
    var this$2 = $n(these);
    these = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ($n(these).isEmpty__Z()) {
      return this
    };
    var this$3 = $n(these);
    these = $n(this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ((these === those)) {
      return this
    };
    var this$4 = $n(those);
    those = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  };
  return this
});
$c_sci_LazyList.prototype.iterator__sc_Iterator = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
});
$c_sci_LazyList.prototype.foreach__F1__V = (function(f) {
  var _$this = this;
  while ((!$n(_$this).isEmpty__Z())) {
    var $x_1 = $n(f);
    var this$1 = $n(_$this);
    $n($x_1).apply__O__O($n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O());
    var this$2 = $n(_$this);
    _$this = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  }
});
$c_sci_LazyList.prototype.className__T = (function() {
  return "LazyList"
});
$c_sci_LazyList.prototype.prepended__O__sci_LazyList = (function(elem) {
  $m_sci_LazyList$();
  var state = new $c_sjsr_AnonFunction0((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, this)
  }));
  return new $c_sci_LazyList(state)
});
$c_sci_LazyList.prototype.prependedAll__sc_IterableOnce__sci_LazyList = (function(prefix) {
  if ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$()))) {
    return $m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(prefix)
  } else if (($n(prefix).knownSize__I() === 0)) {
    return this
  } else {
    $m_sci_LazyList$();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State($n(prefix).iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => this.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))));
    return new $c_sci_LazyList(state)
  }
});
$c_sci_LazyList.prototype.drop__I__sci_LazyList = (function(n) {
  return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
});
$c_sci_LazyList.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  this.force__sci_LazyList();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $n(sb).scm_StringBuilder__f_underlying, start, sep, end);
  return sb
});
$c_sci_LazyList.prototype.toString__T = (function() {
  return $n($p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")")).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_sci_LazyList.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_LazyList(n)
});
$c_sci_LazyList.prototype.prependedAll__sc_IterableOnce__O = (function(prefix) {
  return this.prependedAll__sc_IterableOnce__sci_LazyList(prefix)
});
$c_sci_LazyList.prototype.prepended__O__O = (function(elem) {
  return this.prepended__O__sci_LazyList(elem)
});
$c_sci_LazyList.prototype.tail__O = (function() {
  return $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
});
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
var $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
}
$c_sjsr_WrappedVarArgs.prototype = new $h_O();
$c_sjsr_WrappedVarArgs.prototype.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs.prototype = $c_sjsr_WrappedVarArgs.prototype;
$c_sjsr_WrappedVarArgs.prototype.prepended__O__O = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__prepended__O__O(this, elem)
});
$c_sjsr_WrappedVarArgs.prototype.prependedAll__sc_IterableOnce__O = (function(prefix) {
  return $f_sc_StrictOptimizedSeqOps__prependedAll__sc_IterableOnce__O(this, prefix)
});
$c_sjsr_WrappedVarArgs.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sjsr_WrappedVarArgs.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
});
$c_sjsr_WrappedVarArgs.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_sjsr_WrappedVarArgs.prototype.view__sc_IndexedSeqView = (function() {
  return new $c_sc_IndexedSeqView$Id(this)
});
$c_sjsr_WrappedVarArgs.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOps__head__O(this)
});
$c_sjsr_WrappedVarArgs.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjsr_WrappedVarArgs.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sjsr_WrappedVarArgs.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjsr_WrappedVarArgs.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sjsr_WrappedVarArgs.prototype.size__I = (function() {
  return this.length__I()
});
$c_sjsr_WrappedVarArgs.prototype.sizeCompare__I__I = (function(otherSize) {
  var x = this.length__I();
  return ((x === otherSize) ? 0 : ((x < otherSize) ? (-1) : 1))
});
$c_sjsr_WrappedVarArgs.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sjsr_WrappedVarArgs.prototype.compose__F1__F1 = (function(g) {
  return $f_F1__compose__F1__F1(this, g)
});
$c_sjsr_WrappedVarArgs.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f)
});
$c_sjsr_WrappedVarArgs.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sjsr_WrappedVarArgs.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sjsr_WrappedVarArgs.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sjsr_WrappedVarArgs$()
});
$c_sjsr_WrappedVarArgs.prototype.length__I = (function() {
  return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
});
$c_sjsr_WrappedVarArgs.prototype.apply__I__O = (function(idx) {
  return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
});
$c_sjsr_WrappedVarArgs.prototype.className__T = (function() {
  return "WrappedVarArgs"
});
$c_sjsr_WrappedVarArgs.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"))
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth))
}
var $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
/** @constructor */
function $c_scm_AbstractBuffer() {
  /*<skip>*/
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
  /*<skip>*/
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz
}
/** @constructor */
function $c_sci_Vector() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
  /*<skip>*/
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sci_Vector.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sci_Vector.prototype.view__sc_IndexedSeqView = (function() {
  return new $c_sc_IndexedSeqView$Id(this)
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sci_Vector.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sci_Vector.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sci_Vector$()
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this instanceof $c_sci_BigVector) ? $n($as_sci_BigVector(this)).sci_BigVector__f_length0 : $n(this.sci_Vector__f_prefix1).u.length)
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()))
});
$c_sci_Vector.prototype.prependedAll__sc_IterableOnce__sci_Vector = (function(prefix) {
  var k = $n(prefix).knownSize__I();
  return ((k === 0) ? this : ((k < 0) ? $as_sci_Vector($f_sc_StrictOptimizedSeqOps__prependedAll__sc_IterableOnce__O(this, prefix)) : this.prependedAll0__sc_IterableOnce__I__sci_Vector(prefix, k)))
});
$c_sci_Vector.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector = (function(prefix, k) {
  var tinyAppendLimit = ((4 + this.vectorSliceCount__I()) | 0);
  if ((k < tinyAppendLimit)) {
    var v = this;
    var this$1 = $n($m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq(prefix));
    var it = $n(this$1.view__sc_IndexedSeqView()).reverseIterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      var rassoc$1 = $n(it).next__O();
      var this$2 = $n(v);
      v = this$2.prepended__O__sci_Vector(rassoc$1)
    };
    return v
  } else if (((this.length__I() < ((k >>> 5) | 0)) && (prefix instanceof $c_sci_Vector))) {
    var v$2 = $as_sci_Vector(prefix);
    var it$2 = this.iterator__sc_Iterator();
    while ($n(it$2).hasNext__Z()) {
      var this$3 = $n(v$2);
      var elem = $n(it$2).next__O();
      v$2 = $as_sci_Vector(this$3.appended__O__O(elem))
    };
    return v$2
  } else {
    return ((k < (((-64) + this.length__I()) | 0)) ? $n($n($n(new $c_sci_VectorBuilder().alignTo__I__sci_Vector__sci_VectorBuilder(k, this)).addAll__sc_IterableOnce__sci_VectorBuilder(prefix)).addAll__sc_IterableOnce__sci_VectorBuilder(this)).result__sci_Vector() : $as_sci_Vector($f_sc_StrictOptimizedSeqOps__prependedAll__sc_IterableOnce__O(this, prefix)))
  }
});
$c_sci_Vector.prototype.className__T = (function() {
  return "Vector"
});
$c_sci_Vector.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $n(this.iterator__sc_Iterator()).copyToArray__O__I__I__I(xs, start, len)
});
$c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
});
$c_sci_Vector.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.length__I()) | 0)) + ")"))
});
$c_sci_Vector.prototype.head__O = (function() {
  if (($n(this.sci_Vector__f_prefix1).u.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head")
  } else {
    return $n(this.sci_Vector__f_prefix1).get(0)
  }
});
$c_sci_Vector.prototype.foreach__F1__V = (function(f) {
  var c = this.vectorSliceCount__I();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $n($x_1).foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
    i = ((1 + i) | 0)
  }
});
$c_sci_Vector.prototype.prependedAll__sc_IterableOnce__O = (function(prefix) {
  return this.prependedAll__sc_IterableOnce__sci_Vector(prefix)
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
function $as_sci_ArraySeq$ofRef(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"))
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)))
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth))
}
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1)
    } else if ($n(xs).isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sci_List($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sci_List($n(a).tail__O());
        var temp$b = $as_sci_List($n(b).tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_List.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sci_List$()
});
$c_sci_List.prototype.$colon$colon$colon__sci_List__sci_List = (function(prefix) {
  if (this.isEmpty__Z()) {
    return prefix
  } else if ($n(prefix).isEmpty__Z()) {
    return this
  } else {
    var result = new $c_sci_$colon$colon($n(prefix).head__O(), this);
    var curr = result;
    var that = $as_sci_List($n(prefix).tail__O());
    while ((!$n(that).isEmpty__Z())) {
      var temp = new $c_sci_$colon$colon($n(that).head__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp;
      that = $as_sci_List($n(that).tail__O())
    };
    return result
  }
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$())
});
$c_sci_List.prototype.prepended__O__sci_List = (function(elem) {
  return new $c_sci_$colon$colon(elem, this)
});
$c_sci_List.prototype.prependedAll__sc_IterableOnce__sci_List = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    var x2 = $as_sci_List(prefix);
    return this.$colon$colon$colon__sci_List__sci_List(x2)
  };
  if (($n(prefix).knownSize__I() === 0)) {
    return this
  };
  if ((prefix instanceof $c_scm_ListBuffer)) {
    var x3 = $as_scm_ListBuffer(prefix);
    if (this.isEmpty__Z()) {
      return $n(x3).toList__sci_List()
    }
  };
  var iter = $n(prefix).iterator__sc_Iterator();
  if ($n(iter).hasNext__Z()) {
    var result = new $c_sci_$colon$colon($n(iter).next__O(), this);
    var curr = result;
    while ($n(iter).hasNext__Z()) {
      var temp = new $c_sci_$colon$colon($n(iter).next__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp
    };
    return result
  } else {
    return this
  }
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!$n(these).isEmpty__Z())) {
    $n(f).apply__O__O($n(these).head__O());
    these = $as_sci_List($n(these).tail__O())
  }
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List($n(these).tail__O())
  };
  return len
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
});
$c_sci_List.prototype.className__T = (function() {
  return "List"
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
  } else {
    return $f_sc_Seq__equals__O__Z(this, o)
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
});
$c_sci_List.prototype.prependedAll__sc_IterableOnce__O = (function(prefix) {
  return this.prependedAll__sc_IterableOnce__sci_List(prefix)
});
$c_sci_List.prototype.prepended__O__O = (function(elem) {
  return this.prepended__O__sci_List(elem)
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_VectorImpl.prototype = new $h_sci_Vector();
$c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
  /*<skip>*/
}
$h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz
}
/** @constructor */
function $c_sci_BigVector() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0
}
$c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
  /*<skip>*/
}
$h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"))
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)))
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth))
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.sci_Vector__f_prefix1 = null;
  $ct_sci_Vector__AO__(this, _data1)
}
$c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$c_sci_Vector1.prototype.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
  /*<skip>*/
}
$h_sci_Vector1.prototype = $c_sci_Vector1.prototype;
$c_sci_Vector1.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index)
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector1.prototype.appended__O__sci_Vector = (function(elem) {
  var len1 = $n(this.sci_Vector__f_prefix1).u.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_Vector__f_prefix1, elem))
  } else {
    var $x_2 = this.sci_Vector__f_prefix1;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33)
  }
});
$c_sci_Vector1.prototype.prepended__O__sci_Vector = (function(elem) {
  var len1 = $n(this.sci_Vector__f_prefix1).u.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().copyPrepend1__O__AO__AO(elem, this.sci_Vector__f_prefix1))
  } else {
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    return new $c_sci_Vector2(a, 1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2, this.sci_Vector__f_prefix1, ((1 + len1) | 0))
  }
});
$c_sci_Vector1.prototype.vectorSliceCount__I = (function() {
  return 1
});
$c_sci_Vector1.prototype.vectorSlice__I__AO = (function(idx) {
  return this.sci_Vector__f_prefix1
});
$c_sci_Vector1.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector = (function(prefix, k) {
  var x1 = $m_sci_VectorStatics$().prepend1IfSpace__AO__sc_IterableOnce__AO(this.sci_Vector__f_prefix1, prefix);
  return ((x1 === null) ? $c_sci_Vector.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector.call(this, prefix, k) : new $c_sci_Vector1(x1))
});
$c_sci_Vector1.prototype.prepended__O__O = (function(elem) {
  return this.prepended__O__sci_Vector(elem)
});
$c_sci_Vector1.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector1.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index)
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector1(obj) {
  return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"))
}
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)))
}
function $asArrayOf_sci_Vector1(obj, depth) {
  return (($isArrayOf_sci_Vector1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector1;", depth))
}
var $d_sci_Vector1 = new $TypeData().initClass({
  sci_Vector1: 0
}, false, "scala.collection.immutable.Vector1", {
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector1.prototype.$classData = $d_sci_Vector1;
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
  /*<skip>*/
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next
});
var $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list")
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list")
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_sci_Vector0$() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0)
}
$c_sci_Vector0$.prototype = new $h_sci_BigVector();
$c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
  /*<skip>*/
}
$h_sci_Vector0$.prototype = $c_sci_Vector0$.prototype;
$c_sci_Vector0$.prototype.apply__I__E = (function(index) {
  throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
});
$c_sci_Vector0$.prototype.appended__O__sci_Vector = (function(elem) {
  var a = new $ac_O(1);
  $n(a).set(0, elem);
  return new $c_sci_Vector1(a)
});
$c_sci_Vector0$.prototype.prepended__O__sci_Vector = (function(elem) {
  var a = new $ac_O(1);
  $n(a).set(0, elem);
  return new $c_sci_Vector1(a)
});
$c_sci_Vector0$.prototype.vectorSliceCount__I = (function() {
  return 0
});
$c_sci_Vector0$.prototype.vectorSlice__I__AO = (function(idx) {
  return null
});
$c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)))
});
$c_sci_Vector0$.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector = (function(prefix, k) {
  return $m_sci_Vector$().from__sc_IterableOnce__sci_Vector(prefix)
});
$c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"))
});
$c_sci_Vector0$.prototype.prepended__O__O = (function(elem) {
  return this.prepended__O__sci_Vector(elem)
});
$c_sci_Vector0$.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
  this.apply__I__E($uI(v1))
});
$c_sci_Vector0$.prototype.apply__I__O = (function(i) {
  this.apply__I__E(i)
});
var $d_sci_Vector0$ = new $TypeData().initClass({
  sci_Vector0$: 0
}, false, "scala.collection.immutable.Vector0$", {
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector0$.prototype.$classData = $d_sci_Vector0$;
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$()
  };
  return $n_sci_Vector0$
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector2__f_len1 = 0;
  this.sci_Vector2__f_data2 = null;
  this.sci_Vector2__f_len1 = len1;
  this.sci_Vector2__f_data2 = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector2.prototype = new $h_sci_BigVector();
$c_sci_Vector2.prototype.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
  /*<skip>*/
}
$h_sci_Vector2.prototype = $c_sci_Vector2.prototype;
$c_sci_Vector2.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector2.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector2__f_len1;
    var x$5 = this.sci_Vector2__f_data2;
    return new $c_sci_Vector2(x$3, x$4, x$5, x$1, x$2)
  } else if (($n(this.sci_Vector2__f_data2).u.length < 30)) {
    var x$6 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector2__f_data2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$8 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$9 = this.sci_Vector__f_prefix1;
    var x$10 = this.sci_Vector2__f_len1;
    return new $c_sci_Vector2(x$9, x$10, x$6, a, x$8)
  } else {
    var $x_5 = this.sci_Vector__f_prefix1;
    var $x_4 = this.sci_Vector2__f_len1;
    var $x_3 = this.sci_Vector2__f_data2;
    var $x_2 = this.sci_Vector2__f_len1;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x = this.sci_BigVector__f_suffix1;
    var a$1 = new ($d_O.getArrayOf().getArrayOf().constr)(1);
    $n(a$1).set(0, x);
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector2.prototype.prepended__O__sci_Vector = (function(elem) {
  if ((this.sci_Vector2__f_len1 < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyPrepend1__O__AO__AO(elem, this.sci_Vector__f_prefix1);
    var x$2 = ((1 + this.sci_Vector2__f_len1) | 0);
    var x$3 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$4 = this.sci_Vector2__f_data2;
    var x$5 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector2(x$1, x$2, x$4, x$5, x$3)
  } else if (($n(this.sci_Vector2__f_data2).u.length < 30)) {
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$8 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector2__f_data2), 2);
    var x$9 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$10 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector2(a, 1, x$8, x$10, x$9)
  } else {
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x = this.sci_Vector__f_prefix1;
    var a$2 = new ($d_O.getArrayOf().getArrayOf().constr)(1);
    $n(a$2).set(0, x);
    return new $c_sci_Vector3(a$1, 1, a$2, ((1 + this.sci_Vector2__f_len1) | 0), $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3, this.sci_Vector2__f_data2, this.sci_BigVector__f_suffix1, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector2.prototype.vectorSliceCount__I = (function() {
  return 3
});
$c_sci_Vector2.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector2__f_data2;
      break
    }
    case 2: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector2.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector = (function(prefix, k) {
  var x1 = $m_sci_VectorStatics$().prepend1IfSpace__AO__sc_IterableOnce__AO(this.sci_Vector__f_prefix1, prefix);
  if ((x1 === null)) {
    return $c_sci_Vector.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector.call(this, prefix, k)
  } else {
    var diff = (($n(x1).u.length - $n(this.sci_Vector__f_prefix1).u.length) | 0);
    var x$2 = ((this.sci_Vector2__f_len1 + diff) | 0);
    var x$3 = ((this.sci_BigVector__f_length0 + diff) | 0);
    var x$4 = this.sci_Vector2__f_data2;
    var x$5 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector2(x1, x$2, x$4, x$5, x$3)
  }
});
$c_sci_Vector2.prototype.prepended__O__O = (function(elem) {
  return this.prepended__O__sci_Vector(elem)
});
$c_sci_Vector2.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector2.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector2(obj) {
  return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"))
}
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)))
}
function $asArrayOf_sci_Vector2(obj, depth) {
  return (($isArrayOf_sci_Vector2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector2;", depth))
}
var $d_sci_Vector2 = new $TypeData().initClass({
  sci_Vector2: 0
}, false, "scala.collection.immutable.Vector2", {
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector2.prototype.$classData = $d_sci_Vector2;
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector3__f_len1 = 0;
  this.sci_Vector3__f_prefix2 = null;
  this.sci_Vector3__f_len12 = 0;
  this.sci_Vector3__f_data3 = null;
  this.sci_Vector3__f_suffix2 = null;
  this.sci_Vector3__f_len1 = len1;
  this.sci_Vector3__f_prefix2 = prefix2;
  this.sci_Vector3__f_len12 = len12;
  this.sci_Vector3__f_data3 = data3;
  this.sci_Vector3__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector3.prototype = new $h_sci_BigVector();
$c_sci_Vector3.prototype.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
  /*<skip>*/
}
$h_sci_Vector3.prototype = $c_sci_Vector3.prototype;
$c_sci_Vector3.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector3.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector3__f_len1;
    var x$5 = this.sci_Vector3__f_prefix2;
    var x$6 = this.sci_Vector3__f_len12;
    var x$7 = this.sci_Vector3__f_data3;
    var x$8 = this.sci_Vector3__f_suffix2;
    return new $c_sci_Vector3(x$3, x$4, x$5, x$6, x$7, x$8, x$1, x$2)
  } else if (($n(this.sci_Vector3__f_suffix2).u.length < 31)) {
    var x$9 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$11 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$12 = this.sci_Vector__f_prefix1;
    var x$13 = this.sci_Vector3__f_len1;
    var x$14 = this.sci_Vector3__f_prefix2;
    var x$15 = this.sci_Vector3__f_len12;
    var x$16 = this.sci_Vector3__f_data3;
    return new $c_sci_Vector3(x$12, x$13, x$14, x$15, x$16, x$9, a, x$11)
  } else if (($n(this.sci_Vector3__f_data3).u.length < 30)) {
    var x$17 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_data3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$18 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$21 = this.sci_Vector__f_prefix1;
    var x$22 = this.sci_Vector3__f_len1;
    var x$23 = this.sci_Vector3__f_prefix2;
    var x$24 = this.sci_Vector3__f_len12;
    return new $c_sci_Vector3(x$21, x$22, x$23, x$24, x$17, x$18, a$1, x$20)
  } else {
    var $x_8 = this.sci_Vector__f_prefix1;
    var $x_7 = this.sci_Vector3__f_len1;
    var $x_6 = this.sci_Vector3__f_prefix2;
    var $x_5 = this.sci_Vector3__f_len12;
    var $x_4 = this.sci_Vector3__f_data3;
    var $x_3 = this.sci_Vector3__f_len12;
    var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a$2 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(1);
    $n(a$2).set(0, x);
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    $n(a$3).set(0, elem);
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector3.prototype.prepended__O__sci_Vector = (function(elem) {
  if ((this.sci_Vector3__f_len1 < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyPrepend1__O__AO__AO(elem, this.sci_Vector__f_prefix1);
    var x$2 = ((1 + this.sci_Vector3__f_len1) | 0);
    var x$3 = ((1 + this.sci_Vector3__f_len12) | 0);
    var x$4 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$5 = this.sci_Vector3__f_prefix2;
    var x$6 = this.sci_Vector3__f_data3;
    var x$7 = this.sci_Vector3__f_suffix2;
    var x$8 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector3(x$1, x$2, x$5, x$3, x$6, x$7, x$8, x$4)
  } else if ((this.sci_Vector3__f_len12 < 1024)) {
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$11 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector3__f_prefix2), 2);
    var x$12 = ((1 + this.sci_Vector3__f_len12) | 0);
    var x$13 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$14 = this.sci_Vector3__f_data3;
    var x$15 = this.sci_Vector3__f_suffix2;
    var x$16 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector3(a, 1, x$11, x$12, x$14, x$15, x$16, x$13)
  } else if (($n(this.sci_Vector3__f_data3).u.length < 30)) {
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$19 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$21 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector3__f_prefix2), this.sci_Vector3__f_data3), 3);
    var x$22 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$23 = this.sci_Vector3__f_suffix2;
    var x$24 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector3(a$1, 1, x$19, 1, x$21, x$23, x$24, x$22)
  } else {
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector3__f_prefix2), 2);
    var a$3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(1);
    $n(a$3).set(0, x);
    return new $c_sci_Vector4(a$2, 1, $x_1, 1, a$3, ((1 + this.sci_Vector3__f_len12) | 0), $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4, this.sci_Vector3__f_data3, this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector3.prototype.vectorSliceCount__I = (function() {
  return 5
});
$c_sci_Vector3.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector3__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector3__f_data3;
      break
    }
    case 3: {
      return this.sci_Vector3__f_suffix2;
      break
    }
    case 4: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector3.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector = (function(prefix, k) {
  var x1 = $m_sci_VectorStatics$().prepend1IfSpace__AO__sc_IterableOnce__AO(this.sci_Vector__f_prefix1, prefix);
  if ((x1 === null)) {
    return $c_sci_Vector.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector.call(this, prefix, k)
  } else {
    var diff = (($n(x1).u.length - $n(this.sci_Vector__f_prefix1).u.length) | 0);
    var x$2 = ((this.sci_Vector3__f_len1 + diff) | 0);
    var x$3 = ((this.sci_Vector3__f_len12 + diff) | 0);
    var x$4 = ((this.sci_BigVector__f_length0 + diff) | 0);
    var x$5 = this.sci_Vector3__f_prefix2;
    var x$6 = this.sci_Vector3__f_data3;
    var x$7 = this.sci_Vector3__f_suffix2;
    var x$8 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector3(x1, x$2, x$5, x$3, x$6, x$7, x$8, x$4)
  }
});
$c_sci_Vector3.prototype.prepended__O__O = (function(elem) {
  return this.prepended__O__sci_Vector(elem)
});
$c_sci_Vector3.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector3.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector3(obj) {
  return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"))
}
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)))
}
function $asArrayOf_sci_Vector3(obj, depth) {
  return (($isArrayOf_sci_Vector3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector3;", depth))
}
var $d_sci_Vector3 = new $TypeData().initClass({
  sci_Vector3: 0
}, false, "scala.collection.immutable.Vector3", {
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector3.prototype.$classData = $d_sci_Vector3;
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector4__f_len1 = 0;
  this.sci_Vector4__f_prefix2 = null;
  this.sci_Vector4__f_len12 = 0;
  this.sci_Vector4__f_prefix3 = null;
  this.sci_Vector4__f_len123 = 0;
  this.sci_Vector4__f_data4 = null;
  this.sci_Vector4__f_suffix3 = null;
  this.sci_Vector4__f_suffix2 = null;
  this.sci_Vector4__f_len1 = len1;
  this.sci_Vector4__f_prefix2 = prefix2;
  this.sci_Vector4__f_len12 = len12;
  this.sci_Vector4__f_prefix3 = prefix3;
  this.sci_Vector4__f_len123 = len123;
  this.sci_Vector4__f_data4 = data4;
  this.sci_Vector4__f_suffix3 = suffix3;
  this.sci_Vector4__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector4.prototype = new $h_sci_BigVector();
$c_sci_Vector4.prototype.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
  /*<skip>*/
}
$h_sci_Vector4.prototype = $c_sci_Vector4.prototype;
$c_sci_Vector4.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector4.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector4__f_len1;
    var x$5 = this.sci_Vector4__f_prefix2;
    var x$6 = this.sci_Vector4__f_len12;
    var x$7 = this.sci_Vector4__f_prefix3;
    var x$8 = this.sci_Vector4__f_len123;
    var x$9 = this.sci_Vector4__f_data4;
    var x$10 = this.sci_Vector4__f_suffix3;
    var x$11 = this.sci_Vector4__f_suffix2;
    return new $c_sci_Vector4(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$1, x$2)
  } else if (($n(this.sci_Vector4__f_suffix2).u.length < 31)) {
    var x$12 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$14 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$15 = this.sci_Vector__f_prefix1;
    var x$16 = this.sci_Vector4__f_len1;
    var x$17 = this.sci_Vector4__f_prefix2;
    var x$18 = this.sci_Vector4__f_len12;
    var x$19 = this.sci_Vector4__f_prefix3;
    var x$20 = this.sci_Vector4__f_len123;
    var x$21 = this.sci_Vector4__f_data4;
    var x$22 = this.sci_Vector4__f_suffix3;
    return new $c_sci_Vector4(x$15, x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$12, a, x$14)
  } else if (($n(this.sci_Vector4__f_suffix3).u.length < 31)) {
    var x$23 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$24 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$26 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$27 = this.sci_Vector__f_prefix1;
    var x$28 = this.sci_Vector4__f_len1;
    var x$29 = this.sci_Vector4__f_prefix2;
    var x$30 = this.sci_Vector4__f_len12;
    var x$31 = this.sci_Vector4__f_prefix3;
    var x$32 = this.sci_Vector4__f_len123;
    var x$33 = this.sci_Vector4__f_data4;
    return new $c_sci_Vector4(x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$23, x$24, a$1, x$26)
  } else if (($n(this.sci_Vector4__f_data4).u.length < 30)) {
    var x$34 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_data4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var x$35 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$39 = this.sci_Vector__f_prefix1;
    var x$40 = this.sci_Vector4__f_len1;
    var x$41 = this.sci_Vector4__f_prefix2;
    var x$42 = this.sci_Vector4__f_len12;
    var x$43 = this.sci_Vector4__f_prefix3;
    var x$44 = this.sci_Vector4__f_len123;
    return new $c_sci_Vector4(x$39, x$40, x$41, x$42, x$43, x$44, x$34, x$35, x$36, a$2, x$38)
  } else {
    var $x_11 = this.sci_Vector__f_prefix1;
    var $x_10 = this.sci_Vector4__f_len1;
    var $x_9 = this.sci_Vector4__f_prefix2;
    var $x_8 = this.sci_Vector4__f_len12;
    var $x_7 = this.sci_Vector4__f_prefix3;
    var $x_6 = this.sci_Vector4__f_len123;
    var $x_5 = this.sci_Vector4__f_data4;
    var $x_4 = this.sci_Vector4__f_len123;
    var $x_3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var a$3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    $n(a$3).set(0, x);
    var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$4 = new $ac_O(1);
    $n(a$4).set(0, elem);
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector4.prototype.prepended__O__sci_Vector = (function(elem) {
  if ((this.sci_Vector4__f_len1 < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyPrepend1__O__AO__AO(elem, this.sci_Vector__f_prefix1);
    var x$2 = ((1 + this.sci_Vector4__f_len1) | 0);
    var x$3 = ((1 + this.sci_Vector4__f_len12) | 0);
    var x$4 = ((1 + this.sci_Vector4__f_len123) | 0);
    var x$5 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$6 = this.sci_Vector4__f_prefix2;
    var x$7 = this.sci_Vector4__f_prefix3;
    var x$8 = this.sci_Vector4__f_data4;
    var x$9 = this.sci_Vector4__f_suffix3;
    var x$10 = this.sci_Vector4__f_suffix2;
    var x$11 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector4(x$1, x$2, x$6, x$3, x$7, x$4, x$8, x$9, x$10, x$11, x$5)
  } else if ((this.sci_Vector4__f_len12 < 1024)) {
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$14 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector4__f_prefix2), 2);
    var x$15 = ((1 + this.sci_Vector4__f_len12) | 0);
    var x$16 = ((1 + this.sci_Vector4__f_len123) | 0);
    var x$17 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$18 = this.sci_Vector4__f_prefix3;
    var x$19 = this.sci_Vector4__f_data4;
    var x$20 = this.sci_Vector4__f_suffix3;
    var x$21 = this.sci_Vector4__f_suffix2;
    var x$22 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector4(a, 1, x$14, x$15, x$18, x$16, x$19, x$20, x$21, x$22, x$17)
  } else if ((this.sci_Vector4__f_len123 < 32768)) {
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$25 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$27 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector4__f_prefix2), this.sci_Vector4__f_prefix3), 3);
    var x$28 = ((1 + this.sci_Vector4__f_len123) | 0);
    var x$29 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$30 = this.sci_Vector4__f_data4;
    var x$31 = this.sci_Vector4__f_suffix3;
    var x$32 = this.sci_Vector4__f_suffix2;
    var x$33 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector4(a$1, 1, x$25, 1, x$27, x$28, x$30, x$31, x$32, x$33, x$29)
  } else if (($n(this.sci_Vector4__f_data4).u.length < 30)) {
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$38 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$40 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector4__f_prefix2), this.sci_Vector4__f_prefix3), this.sci_Vector4__f_data4), 4);
    var x$41 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$42 = this.sci_Vector4__f_suffix3;
    var x$43 = this.sci_Vector4__f_suffix2;
    var x$44 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector4(a$2, 1, x$36, 1, x$38, 1, x$40, x$42, x$43, x$44, x$41)
  } else {
    var a$3 = new $ac_O(1);
    $n(a$3).set(0, elem);
    var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector4__f_prefix2), this.sci_Vector4__f_prefix3), 3);
    var a$4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    $n(a$4).set(0, x);
    return new $c_sci_Vector5(a$3, 1, $x_2, 1, $x_1, 1, a$4, ((1 + this.sci_Vector4__f_len123) | 0), $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5, this.sci_Vector4__f_data4, this.sci_Vector4__f_suffix3, this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector4.prototype.vectorSliceCount__I = (function() {
  return 7
});
$c_sci_Vector4.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector4__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector4__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector4__f_data4;
      break
    }
    case 4: {
      return this.sci_Vector4__f_suffix3;
      break
    }
    case 5: {
      return this.sci_Vector4__f_suffix2;
      break
    }
    case 6: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector4.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector = (function(prefix, k) {
  var x1 = $m_sci_VectorStatics$().prepend1IfSpace__AO__sc_IterableOnce__AO(this.sci_Vector__f_prefix1, prefix);
  if ((x1 === null)) {
    return $c_sci_Vector.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector.call(this, prefix, k)
  } else {
    var diff = (($n(x1).u.length - $n(this.sci_Vector__f_prefix1).u.length) | 0);
    var x$2 = ((this.sci_Vector4__f_len1 + diff) | 0);
    var x$3 = ((this.sci_Vector4__f_len12 + diff) | 0);
    var x$4 = ((this.sci_Vector4__f_len123 + diff) | 0);
    var x$5 = ((this.sci_BigVector__f_length0 + diff) | 0);
    var x$6 = this.sci_Vector4__f_prefix2;
    var x$7 = this.sci_Vector4__f_prefix3;
    var x$8 = this.sci_Vector4__f_data4;
    var x$9 = this.sci_Vector4__f_suffix3;
    var x$10 = this.sci_Vector4__f_suffix2;
    var x$11 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector4(x1, x$2, x$6, x$3, x$7, x$4, x$8, x$9, x$10, x$11, x$5)
  }
});
$c_sci_Vector4.prototype.prepended__O__O = (function(elem) {
  return this.prepended__O__sci_Vector(elem)
});
$c_sci_Vector4.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector4.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector4(obj) {
  return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"))
}
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)))
}
function $asArrayOf_sci_Vector4(obj, depth) {
  return (($isArrayOf_sci_Vector4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector4;", depth))
}
var $d_sci_Vector4 = new $TypeData().initClass({
  sci_Vector4: 0
}, false, "scala.collection.immutable.Vector4", {
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector4.prototype.$classData = $d_sci_Vector4;
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector5__f_len1 = 0;
  this.sci_Vector5__f_prefix2 = null;
  this.sci_Vector5__f_len12 = 0;
  this.sci_Vector5__f_prefix3 = null;
  this.sci_Vector5__f_len123 = 0;
  this.sci_Vector5__f_prefix4 = null;
  this.sci_Vector5__f_len1234 = 0;
  this.sci_Vector5__f_data5 = null;
  this.sci_Vector5__f_suffix4 = null;
  this.sci_Vector5__f_suffix3 = null;
  this.sci_Vector5__f_suffix2 = null;
  this.sci_Vector5__f_len1 = len1;
  this.sci_Vector5__f_prefix2 = prefix2;
  this.sci_Vector5__f_len12 = len12;
  this.sci_Vector5__f_prefix3 = prefix3;
  this.sci_Vector5__f_len123 = len123;
  this.sci_Vector5__f_prefix4 = prefix4;
  this.sci_Vector5__f_len1234 = len1234;
  this.sci_Vector5__f_data5 = data5;
  this.sci_Vector5__f_suffix4 = suffix4;
  this.sci_Vector5__f_suffix3 = suffix3;
  this.sci_Vector5__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector5.prototype = new $h_sci_BigVector();
$c_sci_Vector5.prototype.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
  /*<skip>*/
}
$h_sci_Vector5.prototype = $c_sci_Vector5.prototype;
$c_sci_Vector5.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector5.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector5__f_len1;
    var x$5 = this.sci_Vector5__f_prefix2;
    var x$6 = this.sci_Vector5__f_len12;
    var x$7 = this.sci_Vector5__f_prefix3;
    var x$8 = this.sci_Vector5__f_len123;
    var x$9 = this.sci_Vector5__f_prefix4;
    var x$10 = this.sci_Vector5__f_len1234;
    var x$11 = this.sci_Vector5__f_data5;
    var x$12 = this.sci_Vector5__f_suffix4;
    var x$13 = this.sci_Vector5__f_suffix3;
    var x$14 = this.sci_Vector5__f_suffix2;
    return new $c_sci_Vector5(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$1, x$2)
  } else if (($n(this.sci_Vector5__f_suffix2).u.length < 31)) {
    var x$15 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$17 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$18 = this.sci_Vector__f_prefix1;
    var x$19 = this.sci_Vector5__f_len1;
    var x$20 = this.sci_Vector5__f_prefix2;
    var x$21 = this.sci_Vector5__f_len12;
    var x$22 = this.sci_Vector5__f_prefix3;
    var x$23 = this.sci_Vector5__f_len123;
    var x$24 = this.sci_Vector5__f_prefix4;
    var x$25 = this.sci_Vector5__f_len1234;
    var x$26 = this.sci_Vector5__f_data5;
    var x$27 = this.sci_Vector5__f_suffix4;
    var x$28 = this.sci_Vector5__f_suffix3;
    return new $c_sci_Vector5(x$18, x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$15, a, x$17)
  } else if (($n(this.sci_Vector5__f_suffix3).u.length < 31)) {
    var x$29 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$30 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$32 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$33 = this.sci_Vector__f_prefix1;
    var x$34 = this.sci_Vector5__f_len1;
    var x$35 = this.sci_Vector5__f_prefix2;
    var x$36 = this.sci_Vector5__f_len12;
    var x$37 = this.sci_Vector5__f_prefix3;
    var x$38 = this.sci_Vector5__f_len123;
    var x$39 = this.sci_Vector5__f_prefix4;
    var x$40 = this.sci_Vector5__f_len1234;
    var x$41 = this.sci_Vector5__f_data5;
    var x$42 = this.sci_Vector5__f_suffix4;
    return new $c_sci_Vector5(x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$29, x$30, a$1, x$32)
  } else if (($n(this.sci_Vector5__f_suffix4).u.length < 31)) {
    var x$43 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var x$44 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$45 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var x$47 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$48 = this.sci_Vector__f_prefix1;
    var x$49 = this.sci_Vector5__f_len1;
    var x$50 = this.sci_Vector5__f_prefix2;
    var x$51 = this.sci_Vector5__f_len12;
    var x$52 = this.sci_Vector5__f_prefix3;
    var x$53 = this.sci_Vector5__f_len123;
    var x$54 = this.sci_Vector5__f_prefix4;
    var x$55 = this.sci_Vector5__f_len1234;
    var x$56 = this.sci_Vector5__f_data5;
    return new $c_sci_Vector5(x$48, x$49, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$43, x$44, x$45, a$2, x$47)
  } else if (($n(this.sci_Vector5__f_data5).u.length < 30)) {
    var x$57 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_data5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
    var x$58 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$59 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$60 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    $n(a$3).set(0, elem);
    var x$62 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$63 = this.sci_Vector__f_prefix1;
    var x$64 = this.sci_Vector5__f_len1;
    var x$65 = this.sci_Vector5__f_prefix2;
    var x$66 = this.sci_Vector5__f_len12;
    var x$67 = this.sci_Vector5__f_prefix3;
    var x$68 = this.sci_Vector5__f_len123;
    var x$69 = this.sci_Vector5__f_prefix4;
    var x$70 = this.sci_Vector5__f_len1234;
    return new $c_sci_Vector5(x$63, x$64, x$65, x$66, x$67, x$68, x$69, x$70, x$57, x$58, x$59, x$60, a$3, x$62)
  } else {
    var $x_14 = this.sci_Vector__f_prefix1;
    var $x_13 = this.sci_Vector5__f_len1;
    var $x_12 = this.sci_Vector5__f_prefix2;
    var $x_11 = this.sci_Vector5__f_len12;
    var $x_10 = this.sci_Vector5__f_prefix3;
    var $x_9 = this.sci_Vector5__f_len123;
    var $x_8 = this.sci_Vector5__f_prefix4;
    var $x_7 = this.sci_Vector5__f_len1234;
    var $x_6 = this.sci_Vector5__f_data5;
    var $x_5 = this.sci_Vector5__f_len1234;
    var $x_4 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty6;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var a$4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    $n(a$4).set(0, x);
    var $x_3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$5 = new $ac_O(1);
    $n(a$5).set(0, elem);
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector5.prototype.prepended__O__sci_Vector = (function(elem) {
  if ((this.sci_Vector5__f_len1 < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyPrepend1__O__AO__AO(elem, this.sci_Vector__f_prefix1);
    var x$2 = ((1 + this.sci_Vector5__f_len1) | 0);
    var x$3 = ((1 + this.sci_Vector5__f_len12) | 0);
    var x$4 = ((1 + this.sci_Vector5__f_len123) | 0);
    var x$5 = ((1 + this.sci_Vector5__f_len1234) | 0);
    var x$6 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$7 = this.sci_Vector5__f_prefix2;
    var x$8 = this.sci_Vector5__f_prefix3;
    var x$9 = this.sci_Vector5__f_prefix4;
    var x$10 = this.sci_Vector5__f_data5;
    var x$11 = this.sci_Vector5__f_suffix4;
    var x$12 = this.sci_Vector5__f_suffix3;
    var x$13 = this.sci_Vector5__f_suffix2;
    var x$14 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector5(x$1, x$2, x$7, x$3, x$8, x$4, x$9, x$5, x$10, x$11, x$12, x$13, x$14, x$6)
  } else if ((this.sci_Vector5__f_len12 < 1024)) {
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$17 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector5__f_prefix2), 2);
    var x$18 = ((1 + this.sci_Vector5__f_len12) | 0);
    var x$19 = ((1 + this.sci_Vector5__f_len123) | 0);
    var x$20 = ((1 + this.sci_Vector5__f_len1234) | 0);
    var x$21 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$22 = this.sci_Vector5__f_prefix3;
    var x$23 = this.sci_Vector5__f_prefix4;
    var x$24 = this.sci_Vector5__f_data5;
    var x$25 = this.sci_Vector5__f_suffix4;
    var x$26 = this.sci_Vector5__f_suffix3;
    var x$27 = this.sci_Vector5__f_suffix2;
    var x$28 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector5(a, 1, x$17, x$18, x$22, x$19, x$23, x$20, x$24, x$25, x$26, x$27, x$28, x$21)
  } else if ((this.sci_Vector5__f_len123 < 32768)) {
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$31 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$33 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector5__f_prefix2), this.sci_Vector5__f_prefix3), 3);
    var x$34 = ((1 + this.sci_Vector5__f_len123) | 0);
    var x$35 = ((1 + this.sci_Vector5__f_len1234) | 0);
    var x$36 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$37 = this.sci_Vector5__f_prefix4;
    var x$38 = this.sci_Vector5__f_data5;
    var x$39 = this.sci_Vector5__f_suffix4;
    var x$40 = this.sci_Vector5__f_suffix3;
    var x$41 = this.sci_Vector5__f_suffix2;
    var x$42 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector5(a$1, 1, x$31, 1, x$33, x$34, x$37, x$35, x$38, x$39, x$40, x$41, x$42, x$36)
  } else if ((this.sci_Vector5__f_len1234 < 1048576)) {
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var x$45 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$47 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$49 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector5__f_prefix2), this.sci_Vector5__f_prefix3), this.sci_Vector5__f_prefix4), 4);
    var x$50 = ((1 + this.sci_Vector5__f_len1234) | 0);
    var x$51 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$52 = this.sci_Vector5__f_data5;
    var x$53 = this.sci_Vector5__f_suffix4;
    var x$54 = this.sci_Vector5__f_suffix3;
    var x$55 = this.sci_Vector5__f_suffix2;
    var x$56 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector5(a$2, 1, x$45, 1, x$47, 1, x$49, x$50, x$52, x$53, x$54, x$55, x$56, x$51)
  } else if (($n(this.sci_Vector5__f_data5).u.length < 30)) {
    var a$3 = new $ac_O(1);
    $n(a$3).set(0, elem);
    var x$59 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$61 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$63 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$65 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector5__f_prefix2), this.sci_Vector5__f_prefix3), this.sci_Vector5__f_prefix4), this.sci_Vector5__f_data5), 5);
    var x$66 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$67 = this.sci_Vector5__f_suffix4;
    var x$68 = this.sci_Vector5__f_suffix3;
    var x$69 = this.sci_Vector5__f_suffix2;
    var x$70 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector5(a$3, 1, x$59, 1, x$61, 1, x$63, 1, x$65, x$67, x$68, x$69, x$70, x$66)
  } else {
    var a$4 = new $ac_O(1);
    $n(a$4).set(0, elem);
    var $x_3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector5__f_prefix2), this.sci_Vector5__f_prefix3), this.sci_Vector5__f_prefix4), 4);
    var a$5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    $n(a$5).set(0, x);
    return new $c_sci_Vector6(a$4, 1, $x_3, 1, $x_2, 1, $x_1, 1, a$5, ((1 + this.sci_Vector5__f_len1234) | 0), $m_sci_VectorStatics$().sci_VectorStatics$__f_empty6, this.sci_Vector5__f_data5, this.sci_Vector5__f_suffix4, this.sci_Vector5__f_suffix3, this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector5.prototype.vectorSliceCount__I = (function() {
  return 9
});
$c_sci_Vector5.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector5__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector5__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector5__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector5__f_data5;
      break
    }
    case 5: {
      return this.sci_Vector5__f_suffix4;
      break
    }
    case 6: {
      return this.sci_Vector5__f_suffix3;
      break
    }
    case 7: {
      return this.sci_Vector5__f_suffix2;
      break
    }
    case 8: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector5.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector = (function(prefix, k) {
  var x1 = $m_sci_VectorStatics$().prepend1IfSpace__AO__sc_IterableOnce__AO(this.sci_Vector__f_prefix1, prefix);
  if ((x1 === null)) {
    return $c_sci_Vector.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector.call(this, prefix, k)
  } else {
    var diff = (($n(x1).u.length - $n(this.sci_Vector__f_prefix1).u.length) | 0);
    var x$2 = ((this.sci_Vector5__f_len1 + diff) | 0);
    var x$3 = ((this.sci_Vector5__f_len12 + diff) | 0);
    var x$4 = ((this.sci_Vector5__f_len123 + diff) | 0);
    var x$5 = ((this.sci_Vector5__f_len1234 + diff) | 0);
    var x$6 = ((this.sci_BigVector__f_length0 + diff) | 0);
    var x$7 = this.sci_Vector5__f_prefix2;
    var x$8 = this.sci_Vector5__f_prefix3;
    var x$9 = this.sci_Vector5__f_prefix4;
    var x$10 = this.sci_Vector5__f_data5;
    var x$11 = this.sci_Vector5__f_suffix4;
    var x$12 = this.sci_Vector5__f_suffix3;
    var x$13 = this.sci_Vector5__f_suffix2;
    var x$14 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector5(x1, x$2, x$7, x$3, x$8, x$4, x$9, x$5, x$10, x$11, x$12, x$13, x$14, x$6)
  }
});
$c_sci_Vector5.prototype.prepended__O__O = (function(elem) {
  return this.prepended__O__sci_Vector(elem)
});
$c_sci_Vector5.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector5.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector5(obj) {
  return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"))
}
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)))
}
function $asArrayOf_sci_Vector5(obj, depth) {
  return (($isArrayOf_sci_Vector5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector5;", depth))
}
var $d_sci_Vector5 = new $TypeData().initClass({
  sci_Vector5: 0
}, false, "scala.collection.immutable.Vector5", {
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector5.prototype.$classData = $d_sci_Vector5;
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector6__f_len1 = 0;
  this.sci_Vector6__f_prefix2 = null;
  this.sci_Vector6__f_len12 = 0;
  this.sci_Vector6__f_prefix3 = null;
  this.sci_Vector6__f_len123 = 0;
  this.sci_Vector6__f_prefix4 = null;
  this.sci_Vector6__f_len1234 = 0;
  this.sci_Vector6__f_prefix5 = null;
  this.sci_Vector6__f_len12345 = 0;
  this.sci_Vector6__f_data6 = null;
  this.sci_Vector6__f_suffix5 = null;
  this.sci_Vector6__f_suffix4 = null;
  this.sci_Vector6__f_suffix3 = null;
  this.sci_Vector6__f_suffix2 = null;
  this.sci_Vector6__f_len1 = len1;
  this.sci_Vector6__f_prefix2 = prefix2;
  this.sci_Vector6__f_len12 = len12;
  this.sci_Vector6__f_prefix3 = prefix3;
  this.sci_Vector6__f_len123 = len123;
  this.sci_Vector6__f_prefix4 = prefix4;
  this.sci_Vector6__f_len1234 = len1234;
  this.sci_Vector6__f_prefix5 = prefix5;
  this.sci_Vector6__f_len12345 = len12345;
  this.sci_Vector6__f_data6 = data6;
  this.sci_Vector6__f_suffix5 = suffix5;
  this.sci_Vector6__f_suffix4 = suffix4;
  this.sci_Vector6__f_suffix3 = suffix3;
  this.sci_Vector6__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector6.prototype = new $h_sci_BigVector();
$c_sci_Vector6.prototype.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
  /*<skip>*/
}
$h_sci_Vector6.prototype = $c_sci_Vector6.prototype;
$c_sci_Vector6.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4))
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector6.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector6__f_len1;
    var x$5 = this.sci_Vector6__f_prefix2;
    var x$6 = this.sci_Vector6__f_len12;
    var x$7 = this.sci_Vector6__f_prefix3;
    var x$8 = this.sci_Vector6__f_len123;
    var x$9 = this.sci_Vector6__f_prefix4;
    var x$10 = this.sci_Vector6__f_len1234;
    var x$11 = this.sci_Vector6__f_prefix5;
    var x$12 = this.sci_Vector6__f_len12345;
    var x$13 = this.sci_Vector6__f_data6;
    var x$14 = this.sci_Vector6__f_suffix5;
    var x$15 = this.sci_Vector6__f_suffix4;
    var x$16 = this.sci_Vector6__f_suffix3;
    var x$17 = this.sci_Vector6__f_suffix2;
    return new $c_sci_Vector6(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$1, x$2)
  } else if (($n(this.sci_Vector6__f_suffix2).u.length < 31)) {
    var x$18 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$21 = this.sci_Vector__f_prefix1;
    var x$22 = this.sci_Vector6__f_len1;
    var x$23 = this.sci_Vector6__f_prefix2;
    var x$24 = this.sci_Vector6__f_len12;
    var x$25 = this.sci_Vector6__f_prefix3;
    var x$26 = this.sci_Vector6__f_len123;
    var x$27 = this.sci_Vector6__f_prefix4;
    var x$28 = this.sci_Vector6__f_len1234;
    var x$29 = this.sci_Vector6__f_prefix5;
    var x$30 = this.sci_Vector6__f_len12345;
    var x$31 = this.sci_Vector6__f_data6;
    var x$32 = this.sci_Vector6__f_suffix5;
    var x$33 = this.sci_Vector6__f_suffix4;
    var x$34 = this.sci_Vector6__f_suffix3;
    return new $c_sci_Vector6(x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$34, x$18, a, x$20)
  } else if (($n(this.sci_Vector6__f_suffix3).u.length < 31)) {
    var x$35 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$39 = this.sci_Vector__f_prefix1;
    var x$40 = this.sci_Vector6__f_len1;
    var x$41 = this.sci_Vector6__f_prefix2;
    var x$42 = this.sci_Vector6__f_len12;
    var x$43 = this.sci_Vector6__f_prefix3;
    var x$44 = this.sci_Vector6__f_len123;
    var x$45 = this.sci_Vector6__f_prefix4;
    var x$46 = this.sci_Vector6__f_len1234;
    var x$47 = this.sci_Vector6__f_prefix5;
    var x$48 = this.sci_Vector6__f_len12345;
    var x$49 = this.sci_Vector6__f_data6;
    var x$50 = this.sci_Vector6__f_suffix5;
    var x$51 = this.sci_Vector6__f_suffix4;
    return new $c_sci_Vector6(x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$35, x$36, a$1, x$38)
  } else if (($n(this.sci_Vector6__f_suffix4).u.length < 31)) {
    var x$52 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var x$53 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$54 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var x$56 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$57 = this.sci_Vector__f_prefix1;
    var x$58 = this.sci_Vector6__f_len1;
    var x$59 = this.sci_Vector6__f_prefix2;
    var x$60 = this.sci_Vector6__f_len12;
    var x$61 = this.sci_Vector6__f_prefix3;
    var x$62 = this.sci_Vector6__f_len123;
    var x$63 = this.sci_Vector6__f_prefix4;
    var x$64 = this.sci_Vector6__f_len1234;
    var x$65 = this.sci_Vector6__f_prefix5;
    var x$66 = this.sci_Vector6__f_len12345;
    var x$67 = this.sci_Vector6__f_data6;
    var x$68 = this.sci_Vector6__f_suffix5;
    return new $c_sci_Vector6(x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$52, x$53, x$54, a$2, x$56)
  } else if (($n(this.sci_Vector6__f_suffix5).u.length < 31)) {
    var x$69 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
    var x$70 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$71 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$72 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    $n(a$3).set(0, elem);
    var x$74 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$75 = this.sci_Vector__f_prefix1;
    var x$76 = this.sci_Vector6__f_len1;
    var x$77 = this.sci_Vector6__f_prefix2;
    var x$78 = this.sci_Vector6__f_len12;
    var x$79 = this.sci_Vector6__f_prefix3;
    var x$80 = this.sci_Vector6__f_len123;
    var x$81 = this.sci_Vector6__f_prefix4;
    var x$82 = this.sci_Vector6__f_len1234;
    var x$83 = this.sci_Vector6__f_prefix5;
    var x$84 = this.sci_Vector6__f_len12345;
    var x$85 = this.sci_Vector6__f_data6;
    return new $c_sci_Vector6(x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, x$84, x$85, x$69, x$70, x$71, x$72, a$3, x$74)
  } else if (($n(this.sci_Vector6__f_data6).u.length < 62)) {
    var x$86 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_data6, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))))), 6);
    var x$87 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
    var x$88 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$89 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$90 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$4 = new $ac_O(1);
    $n(a$4).set(0, elem);
    var x$92 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$93 = this.sci_Vector__f_prefix1;
    var x$94 = this.sci_Vector6__f_len1;
    var x$95 = this.sci_Vector6__f_prefix2;
    var x$96 = this.sci_Vector6__f_len12;
    var x$97 = this.sci_Vector6__f_prefix3;
    var x$98 = this.sci_Vector6__f_len123;
    var x$99 = this.sci_Vector6__f_prefix4;
    var x$100 = this.sci_Vector6__f_len1234;
    var x$101 = this.sci_Vector6__f_prefix5;
    var x$102 = this.sci_Vector6__f_len12345;
    return new $c_sci_Vector6(x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, x$102, x$86, x$87, x$88, x$89, x$90, a$4, x$92)
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
$c_sci_Vector6.prototype.prepended__O__sci_Vector = (function(elem) {
  if ((this.sci_Vector6__f_len1 < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyPrepend1__O__AO__AO(elem, this.sci_Vector__f_prefix1);
    var x$2 = ((1 + this.sci_Vector6__f_len1) | 0);
    var x$3 = ((1 + this.sci_Vector6__f_len12) | 0);
    var x$4 = ((1 + this.sci_Vector6__f_len123) | 0);
    var x$5 = ((1 + this.sci_Vector6__f_len1234) | 0);
    var x$6 = ((1 + this.sci_Vector6__f_len12345) | 0);
    var x$7 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$8 = this.sci_Vector6__f_prefix2;
    var x$9 = this.sci_Vector6__f_prefix3;
    var x$10 = this.sci_Vector6__f_prefix4;
    var x$11 = this.sci_Vector6__f_prefix5;
    var x$12 = this.sci_Vector6__f_data6;
    var x$13 = this.sci_Vector6__f_suffix5;
    var x$14 = this.sci_Vector6__f_suffix4;
    var x$15 = this.sci_Vector6__f_suffix3;
    var x$16 = this.sci_Vector6__f_suffix2;
    var x$17 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector6(x$1, x$2, x$8, x$3, x$9, x$4, x$10, x$5, x$11, x$6, x$12, x$13, x$14, x$15, x$16, x$17, x$7)
  } else if ((this.sci_Vector6__f_len12 < 1024)) {
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$20 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector6__f_prefix2), 2);
    var x$21 = ((1 + this.sci_Vector6__f_len12) | 0);
    var x$22 = ((1 + this.sci_Vector6__f_len123) | 0);
    var x$23 = ((1 + this.sci_Vector6__f_len1234) | 0);
    var x$24 = ((1 + this.sci_Vector6__f_len12345) | 0);
    var x$25 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$26 = this.sci_Vector6__f_prefix3;
    var x$27 = this.sci_Vector6__f_prefix4;
    var x$28 = this.sci_Vector6__f_prefix5;
    var x$29 = this.sci_Vector6__f_data6;
    var x$30 = this.sci_Vector6__f_suffix5;
    var x$31 = this.sci_Vector6__f_suffix4;
    var x$32 = this.sci_Vector6__f_suffix3;
    var x$33 = this.sci_Vector6__f_suffix2;
    var x$34 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector6(a, 1, x$20, x$21, x$26, x$22, x$27, x$23, x$28, x$24, x$29, x$30, x$31, x$32, x$33, x$34, x$25)
  } else if ((this.sci_Vector6__f_len123 < 32768)) {
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$37 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$39 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector6__f_prefix2), this.sci_Vector6__f_prefix3), 3);
    var x$40 = ((1 + this.sci_Vector6__f_len123) | 0);
    var x$41 = ((1 + this.sci_Vector6__f_len1234) | 0);
    var x$42 = ((1 + this.sci_Vector6__f_len12345) | 0);
    var x$43 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$44 = this.sci_Vector6__f_prefix4;
    var x$45 = this.sci_Vector6__f_prefix5;
    var x$46 = this.sci_Vector6__f_data6;
    var x$47 = this.sci_Vector6__f_suffix5;
    var x$48 = this.sci_Vector6__f_suffix4;
    var x$49 = this.sci_Vector6__f_suffix3;
    var x$50 = this.sci_Vector6__f_suffix2;
    var x$51 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector6(a$1, 1, x$37, 1, x$39, x$40, x$44, x$41, x$45, x$42, x$46, x$47, x$48, x$49, x$50, x$51, x$43)
  } else if ((this.sci_Vector6__f_len1234 < 1048576)) {
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var x$54 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$56 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$58 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector6__f_prefix2), this.sci_Vector6__f_prefix3), this.sci_Vector6__f_prefix4), 4);
    var x$59 = ((1 + this.sci_Vector6__f_len1234) | 0);
    var x$60 = ((1 + this.sci_Vector6__f_len12345) | 0);
    var x$61 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$62 = this.sci_Vector6__f_prefix5;
    var x$63 = this.sci_Vector6__f_data6;
    var x$64 = this.sci_Vector6__f_suffix5;
    var x$65 = this.sci_Vector6__f_suffix4;
    var x$66 = this.sci_Vector6__f_suffix3;
    var x$67 = this.sci_Vector6__f_suffix2;
    var x$68 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector6(a$2, 1, x$54, 1, x$56, 1, x$58, x$59, x$62, x$60, x$63, x$64, x$65, x$66, x$67, x$68, x$61)
  } else if ((this.sci_Vector6__f_len12345 < 33554432)) {
    var a$3 = new $ac_O(1);
    $n(a$3).set(0, elem);
    var x$71 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$73 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$75 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$77 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector6__f_prefix2), this.sci_Vector6__f_prefix3), this.sci_Vector6__f_prefix4), this.sci_Vector6__f_prefix5), 5);
    var x$78 = ((1 + this.sci_Vector6__f_len12345) | 0);
    var x$79 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$80 = this.sci_Vector6__f_data6;
    var x$81 = this.sci_Vector6__f_suffix5;
    var x$82 = this.sci_Vector6__f_suffix4;
    var x$83 = this.sci_Vector6__f_suffix3;
    var x$84 = this.sci_Vector6__f_suffix2;
    var x$85 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector6(a$3, 1, x$71, 1, x$73, 1, x$75, 1, x$77, x$78, x$80, x$81, x$82, x$83, x$84, x$85, x$79)
  } else if (($n(this.sci_Vector6__f_data6).u.length < 62)) {
    var a$4 = new $ac_O(1);
    $n(a$4).set(0, elem);
    var x$88 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var x$90 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$92 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$94 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
    var x$96 = $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(this.sci_Vector__f_prefix1, this.sci_Vector6__f_prefix2), this.sci_Vector6__f_prefix3), this.sci_Vector6__f_prefix4), this.sci_Vector6__f_prefix5), this.sci_Vector6__f_data6), 6);
    var x$97 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$98 = this.sci_Vector6__f_suffix5;
    var x$99 = this.sci_Vector6__f_suffix4;
    var x$100 = this.sci_Vector6__f_suffix3;
    var x$101 = this.sci_Vector6__f_suffix2;
    var x$102 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector6(a$4, 1, x$88, 1, x$90, 1, x$92, 1, x$94, 1, x$96, x$98, x$99, x$100, x$101, x$102, x$97)
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
$c_sci_Vector6.prototype.vectorSliceCount__I = (function() {
  return 11
});
$c_sci_Vector6.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector6__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector6__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector6__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector6__f_prefix5;
      break
    }
    case 5: {
      return this.sci_Vector6__f_data6;
      break
    }
    case 6: {
      return this.sci_Vector6__f_suffix5;
      break
    }
    case 7: {
      return this.sci_Vector6__f_suffix4;
      break
    }
    case 8: {
      return this.sci_Vector6__f_suffix3;
      break
    }
    case 9: {
      return this.sci_Vector6__f_suffix2;
      break
    }
    case 10: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector6.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector = (function(prefix, k) {
  var x1 = $m_sci_VectorStatics$().prepend1IfSpace__AO__sc_IterableOnce__AO(this.sci_Vector__f_prefix1, prefix);
  if ((x1 === null)) {
    return $c_sci_Vector.prototype.prependedAll0__sc_IterableOnce__I__sci_Vector.call(this, prefix, k)
  } else {
    var diff = (($n(x1).u.length - $n(this.sci_Vector__f_prefix1).u.length) | 0);
    var x$2 = ((this.sci_Vector6__f_len1 + diff) | 0);
    var x$3 = ((this.sci_Vector6__f_len12 + diff) | 0);
    var x$4 = ((this.sci_Vector6__f_len123 + diff) | 0);
    var x$5 = ((this.sci_Vector6__f_len1234 + diff) | 0);
    var x$6 = ((this.sci_Vector6__f_len12345 + diff) | 0);
    var x$7 = ((this.sci_BigVector__f_length0 + diff) | 0);
    var x$8 = this.sci_Vector6__f_prefix2;
    var x$9 = this.sci_Vector6__f_prefix3;
    var x$10 = this.sci_Vector6__f_prefix4;
    var x$11 = this.sci_Vector6__f_prefix5;
    var x$12 = this.sci_Vector6__f_data6;
    var x$13 = this.sci_Vector6__f_suffix5;
    var x$14 = this.sci_Vector6__f_suffix4;
    var x$15 = this.sci_Vector6__f_suffix3;
    var x$16 = this.sci_Vector6__f_suffix2;
    var x$17 = this.sci_BigVector__f_suffix1;
    return new $c_sci_Vector6(x1, x$2, x$8, x$3, x$9, x$4, x$10, x$5, x$11, x$6, x$12, x$13, x$14, x$15, x$16, x$17, x$7)
  }
});
$c_sci_Vector6.prototype.prepended__O__O = (function(elem) {
  return this.prepended__O__sci_Vector(elem)
});
$c_sci_Vector6.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector6.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4))
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector6(obj) {
  return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"))
}
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)))
}
function $asArrayOf_sci_Vector6(obj, depth) {
  return (($isArrayOf_sci_Vector6(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector6;", depth))
}
var $d_sci_Vector6 = new $TypeData().initClass({
  sci_Vector6: 0
}, false, "scala.collection.immutable.Vector6", {
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector6.prototype.$classData = $d_sci_Vector6;
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_StringBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I()
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I()
});
$c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
  var this$1 = $n(this.scm_StringBuilder__f_underlying);
  var str = $as_T(String.fromCharCode(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0)
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i))
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = $n(buf).scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = $n(buf).scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.scm_ListBuffer__f_mutationCount = ((1 + $thiz.scm_ListBuffer__f_mutationCount) | 0);
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz)
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = null;
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0;
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = $m_sci_Nil$();
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
  /*<skip>*/
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_MutationTracker$CheckedIterator($n(this.scm_ListBuffer__f_first).iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => this.scm_ListBuffer__f_mutationCount)))
});
$c_scm_ListBuffer.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_scm_ListBuffer$()
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(i) {
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
});
$c_scm_ListBuffer.prototype.length__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.knownSize__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return (this.scm_ListBuffer__f_len === 0)
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
  return this.scm_ListBuffer__f_first
});
$c_scm_ListBuffer.prototype.addOne__O__scm_ListBuffer = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.scm_ListBuffer__f_len === 0)) {
    this.scm_ListBuffer__f_first = last1
  } else {
    $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = last1
  };
  this.scm_ListBuffer__f_last0 = last1;
  this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
  return this
});
$c_scm_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
    this.scm_ListBuffer__f_first = last0;
    while ($n(it).hasNext__Z()) {
      var last1 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
      $n(last0).sci_$colon$colon__f_next = last1;
      last0 = last1;
      len = ((1 + len) | 0)
    };
    this.scm_ListBuffer__f_len = len;
    this.scm_ListBuffer__f_last0 = last0
  };
  return this
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var fresh = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = $n(fresh).scm_ListBuffer__f_first
    } else {
      $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = $n(fresh).scm_ListBuffer__f_first
    };
    this.scm_ListBuffer__f_last0 = $n(fresh).scm_ListBuffer__f_last0;
    this.scm_ListBuffer__f_len = ((this.scm_ListBuffer__f_len + $n(fresh).scm_ListBuffer__f_len) | 0)
  };
  return this
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer"
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_ListBuffer(xs)
});
$c_scm_ListBuffer.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.result__O = (function() {
  return this.toList__sci_List()
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
});
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
var $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  var x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjs_js_WrappedArray.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sjs_js_WrappedArray$()
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.className__T = (function() {
  return "WrappedArray"
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_LFP101Lecture__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
//# sourceMappingURL=fp101-lecture-fastopt.js.map
