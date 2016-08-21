#include<iostream>
#include<cmath>
using namespace std;
double a, b, c;
int main() {
  cin >> a >> b >> c;
  if (a != 0) {
    float disc = b*b- 4 * a * c;
    if (disc == 0) {
      printf("x1=x2=%.5f\n", (-b) / (2 * a));
    }
	else if (disc > 0) {
		float x1=(-b + sqrt(b*b-4*a*c))/(2*a);
		float x2=(-b - sqrt(b*b-4*a*c))/(2*a);
      if (x2>x1) {
		  printf("x1=%.5f;x2=%.5f\n",x2,x1);
      }
      else {
          printf("x1=%.5f;x2=%.5f\n",x1,x2);
      }
    }
    else {
		float s=-b / (2*a);
		float x=sqrt(4*a*c-b*b) / (2*a);
      if (s == 0) {
		  printf("x1=%.5f+%.5fi;x2=%.5f-%.5fi\n",-s,x,-s,x);
      }
      else {
        printf("x1=%.5f+%.5fi;x2=%.5f-%.5fi\n", s, x,s,x);
      }
    }
  }
  system("pause");
  return 0;
}
