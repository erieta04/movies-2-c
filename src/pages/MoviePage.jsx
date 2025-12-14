function MoviePage() {
  return <div>MOVIEPAGE</div>;
}

export default MoviePage;
// function MovieDetails({ selectedId, onCloseMovie }) {
//const [selectedId, setSelectedId] = useState(null);
//   const [movie, setMovie] = useState({});
//   const {
//     overview: overview,
//     poster_path: poster,
//     realease_date: realesedate,
//     title: title,
//     vote_avarage: vote_av,
//   } = movie;

//   useEffect(function () {
//     async function getMovieDetails() {
//       const res = await fetch(
//         `https://movies2cbackend-production.up.railway.app/api/search/movie?query=${selectedId}`
//       );
//       const data = res.json();
//       console.log(data);
//       setMovie(data);
//     }
//     getMovieDetails();
//   }, []);
//   return (
//     <div className="details">
//       <Button onClick={onCloseMovie}></Button>
//       <img src={poster} alt{`Poster of ${movie}`}></img>
//       {selectedId}
//     </div>
//   );
// }
