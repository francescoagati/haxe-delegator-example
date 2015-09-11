class Foo {
  public var x:String = "";
  inline public function sum(a,b) return a+b;
}


class Bar {
  inline public function sum2(a,b,c) return a+b+c;
}


typedef Settings = {
  username:String,
  password:String,
  host:String,
  port:String
}


@:tink class FooBar2 {

    inline public static function trace_get(key) {
        trace(key);
        return untyped gina[pina];
    }
    inline public static function trace_set(key,value:String) {
      trace([key,value]);
      return untyped gina[pina];
    }

    inline public static function trace_call(name,id,args:Dynamic) {
      trace([name,id,args]);
    }

    inline static function get_settings(name:String) return untyped db.settings[name];
    inline static function set_settings(name:String,value) return untyped db.settings[name] = value;

    public function new() {}
    @:forward function anyName(foo:Foo, bar:Bar) {
        get: trace_get($name),
        set: trace_set($name, param),
        call: trace_call($name,$id,$args)
    }


    @:forward inline function settings_config(settings:Settings) {
        get: get_settings($name),
        set: set_settings($name,param),
        //call: trace_call($name,$id,$args)
    }

}



class Main {

  public static function main() {
    var x = new FooBar2();
    x.x;
    x.x = "ss";
    x.sum(1,2);
    x.sum2(1,2,3);
    x.password = 'ddd';
    x.username = 'eee';

  }
}
