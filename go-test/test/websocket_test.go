package test

import (
	"fmt"
	"log"
	"net/http"
	"testing"

	"time"

	"golang.org/x/net/websocket"
)

func Echo(ws *websocket.Conn) {
	var err error
	for {
		var reply string
		for {
			tt := time.After(time.Second * 1)
			fmt.Println("t=", <-tt)
			// 发送 tt
			if err = websocket.Message.Send(ws, "tt"); err != nil {
				fmt.Println("Can't send")
			}
		}
		// 接受
		if err = websocket.Message.Receive(ws, &reply); err != nil {
			fmt.Println("Can't receive")
			fmt.Println(reply)
			fmt.Println(&reply)
			break
		}

		fmt.Println("Received back from client: " + reply)

	}
}

func TestSocket(t *testing.T) {
	http.Handle("/", websocket.Handler(Echo))

	if err := http.ListenAndServe(":1234", nil); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}


