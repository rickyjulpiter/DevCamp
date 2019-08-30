package internal

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

// GetObjectByID a method to get object given objectID params in URL
func (h *Handler) GetObjectByID(w http.ResponseWriter, r *http.Request, param httprouter.Params) {
	var objects []Object
	object := Object{ID: 1, Name: "Sat"}
	objects = append(objects, object)

	bytes, err := json.Marshal(objects)
	if err != nil {
		log.Printf("[app][initHandler] %+v\n", err)
		return
	}

	renderJSON(w, bytes, http.StatusOK)
}
