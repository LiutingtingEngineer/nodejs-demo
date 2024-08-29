#include <iostream>

extern "C"
{
  // 反转数据
  int reversenumber(int n)
  {
    int reverse = 0, rem;
    while (n != 0)
    {
      rem = n % 10;
      reverse = reverse * 10 + rem;
      n /= 10;
    }
    return reverse;
  }

  // 减法
  int sub(int a, int b)
  {
    return a - b;
  }

  // 加法
  int add(int a, int b)
  {
    return a + b;
  }

  // 斐波那契函数
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
}
