#include <node.h>
#include <iostream>

namespace demo {

  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;
  using v8::Number;
  using v8::MaybeLocal;

  int fib(int n)
    {
      if (n <= 1)
      {
        return n;
      }
      else
      {
        return fib(n - 1) + fib(n - 2);
      }
    }

  void Method(const FunctionCallbackInfo<Value>& args) {

    // Isolate* isolate = args.GetIsolate();
    // if (args.Length() > 0 && args[0]->IsString()) {
    //   std::cout << "123" << std::endl;
    //   Local<String> str = args[0].As<String>();
    //   args.GetReturnValue().Set(str);
    // } else {
    //   std::cout << "678" << std::endl;
    //   MaybeLocal<String> maybeStr = String::NewFromUtf8(isolate, "Invalid argument");
    //   Local<String> str;
    //   str = maybeStr.ToLocalChecked();
    //   args.GetReturnValue().Set(str);
    // }

    // 是数字的处理方式
    if (args.Length() > 0 && args[0]->IsNumber()) {
      int num = args[0].As<Number>()->Value();
      int result = fib(num);
      args.GetReturnValue().Set(result);
    } else {
      args.GetReturnValue().Set(0);
    }
  }

  void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "fib", Method);
  }

  NODE_MODULE(addon, init);

}