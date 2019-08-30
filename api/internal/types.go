package internal

import (
	"database/sql"
)

// Args used for this application
type Args struct {
	// Port used by this service
	Port int
}

// Handler object used to handle the HTTP API
type Handler struct {
	// DB object that'll be used
	DB *sql.DB
}

// Object struct for database query
type Object struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}
