package internal

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func renderJSON(w http.ResponseWriter, data []byte, status int) {
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// Most of the API HTTP response is a JSON format
	w.Header().Set("Content-Type", "application/json")

	// HTTP status (200 OK, 404 Not Found, 500 Internal Server Error, etc.)
	w.WriteHeader(status)

	// The actual data
	w.Write(data)
}

// Index is the home page handler
func (h *Handler) Index(w http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	renderJSON(w, []byte(`
		{
			"module": "search",
			"version": "1.0.0", 
			"tagline": "You know, for search"
		}
	`), http.StatusOK)
}

// ServeHTTP is used for 404 page
func (h *Handler) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	renderJSON(w, []byte(`
		{
			"message": "There's nothing here"
		}
	`), http.StatusNotFound)
}
