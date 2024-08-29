package main

import (
	"net/http"
)

func main() {
	// 创建处理请求的处理函数
	handler := func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(200)
		// // 设置响应头
		// w.Header().Set("Content-Type", "text/plain")

		// // 发送响应
		// fmt.Fprint(w, "Hello, World!")
	}

	// 注册处理函数并启动服务器
	http.HandleFunc("/", handler)
	http.ListenAndServe(":4000", nil)
}
