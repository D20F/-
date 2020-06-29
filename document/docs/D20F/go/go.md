# go
## 配置git config
[http]
	proxy = socks5://127.0.0.1:1080

## 谷歌提供的一个环境变量
GOPROXY="https://goproxy.cn,direct"

## Go mod
用go mod 命令初始化项目
go mod init 项目名 来初始化
go mod tidy拉取没有的模块

## 并发
主进程死亡，并发进程也死亡

## defer 栈
defer被压进栈,会后进先出

## 包管理
go mod init 初始化主包名
同级目录下同包,不需要导入
不同级目录,不同目录,主main入口下,在主包名/包导入

## 

package main

import (
	// "net/http"
	// "strings"

	// "github.com/gin-gonic/gin"
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
	// "github.com/jmoiron/sqlx"
)

var Db *sql.DB

type User struct {
	name   string `db:"name"`
	title  string `db:"title"`
	author string `db:"author"`
	date   string `db:"date"`
}

func init() {
	var err error
	Db, err = sql.Open("mysql", "D:123456@tcp(106.55.6.193:3306)/d_data")

	if err != nil {
		fmt.Println("open mysql failed,", err)
		return
	}
	fmt.Println("连接成功")
}
func main() {
	var users []User

	rows, err := Db.Query("select name, title, author, date from D_tb")
	defer rows.Close()
	for rows.Next() {
		t := User{}
		err = rows.Scan(&t.name, &t.title, &t.author, &t.date)
		users = append(users, t)
	}
	err = rows.Err()
	if err != nil {
		fmt.Printf("get failed, err: %v\n", err)
		return
	}
	fmt.Printf("users:%#v\n", users)
}



