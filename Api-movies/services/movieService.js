import Movie from "../models/Movie.js";


class movieService {

  async getAll() {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log(error);
    }
  }


  async Create(title, year, genre, director) {
    try {
      const newMovie = new Movie({
        title,
        year,
        genre,
        director,
      });
      await newMovie.save();
      console.log(`Filme "${title}" cadastrado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }

  async Delete(id) {
    try {
      await Movie.findByIdAndDelete(id);
      console.log(`Filme com a id: ${id} foi deletado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }


  async Update(id, title, year, genre, director) {
    try {
      await Movie.findByIdAndUpdate(id, {
        title,
        year,
        genre,
        director,
      });
      console.log(`Dados do filme com id ${id} alterados com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new movieService();
