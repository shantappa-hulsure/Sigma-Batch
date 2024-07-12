public class Patterns {
    public static void main (String args[]){
        String str = "";
        for (int i = 1; i <= 10; i++) {
            str = (i % 2) + " " + str;  
            System.out.println(str);    
        } 
}} 
