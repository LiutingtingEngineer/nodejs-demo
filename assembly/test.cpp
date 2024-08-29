#include <iostream>
#include <ctime>

using namespace std;

int fib(int n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

int main() {
    int  t1,t2;
    t1 = clock();
    int res = fib(25);
    t2 = clock();
    double duration = (t2 - t1) * 1000 / CLOCKS_PER_SEC ;
    std::cout << duration << "ms" << std::endl;
    std::cout << res << std::endl;
    return 0;
}