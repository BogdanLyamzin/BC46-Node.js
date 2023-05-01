const express = require("express");

const moviesControllers = require("../../controllers/movies-controllers");

const schemas = require("../../schemas/movies-schemas");

const {validateBody} = require("../../utils");

const router = express.Router();

router.get("/", moviesControllers.getAllMovies);

router.get("/:id", moviesControllers.getMovieById);

router.post("/", validateBody(schemas.movieAddSchema), moviesControllers.addMovie);

router.put("/:id",  validateBody(schemas.movieAddSchema), moviesControllers.updateMovieById);

router.delete("/:id", moviesControllers.deleteMovieById);

module.exports = router;