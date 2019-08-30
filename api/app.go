package main

import (
	"DevCamp/api/internal"
	"database/sql"
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	_ "github.com/lib/pq"
)

func initFlags(args *internal.Args) {
	port := flag.Int("port", 3000, "port number for server")
	args.Port = *port
}

func initHandler(handler *internal.Handler) error {
	// Initialize SQL DB
	db, err := sql.Open("postgres", "postgres://postgres:postgres@postgres:5432/?sslmode=disable")
	if err != nil {
		log.Printf("[app][initHandler] %+v\n", err)
		return err
	}
	handler.DB = db

	return nil
}

func initRouter(router *httprouter.Router, handler *internal.Handler) {
	// Index
	router.GET("/", handler.Index)

	// Object API
	router.GET("/object/:serID", handler.GetObjectByID)

	// `httprouter` library uses `ServeHTTP` method for it's 404 pages
	router.NotFound = handler
}

func main() {
	args := new(internal.Args)
	initFlags(args)

	handler := new(internal.Handler)
	if err := initHandler(handler); err != nil {
		log.Printf("[app][main] %+v\n", err)
		panic(err)
	}

	router := httprouter.New()
	initRouter(router, handler)

	fmt.Printf("Apps served on :%d\n", args.Port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", args.Port), router))
}
