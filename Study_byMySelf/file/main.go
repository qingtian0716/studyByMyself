package main

import (
	"fmt"
	"math"
)

func calculateJ(x, y int) float64 {
	var j float64
	if x > 60 && y < 35 {
		j = float64(10*x - y)
	} else if x == 25 && y > 50 {
		j = float64((x-y)*int(math.Pow(10, 5))) / 7
	} else {
		j = float64(y) * math.Log(float64(x+10))
	}
	return j
}
func main() {
	var x, y int
	fmt.Print("请输入x值: ")
	fmt.Scanln(&x)
	fmt.Print("请输入y值: ")
	fmt.Scanln(&y)
	j := calculateJ(x, y)
	fmt.Println("j =", j)
}
