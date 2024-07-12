import java.util.Scanner;
public class Loops {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m=n;
        int reverse=0;
        while(m>0){
         reverse=reverse*10+m%10;
         m=m/10;
        }

        System.out.println(reverse);
     }
}
