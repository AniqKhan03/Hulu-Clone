import { useRouter } from "next/router";
import Header from "../components/Header";
import Image from "next/image";

function Search() {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const result = router.query;
  console.log(result);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center">
        <div className="max-w-2xl max-h-2xl">
          <Image
            src={
              `https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
              }` || `https://image.tmdb.org/t/p/original/${result.poster.path}`
            }
            height={1080}
            width={1920}
            objectFit="cover"
          />
        </div>

        <div className="flex justify-center pl-8">
          <div className="p-2">
            <h2 className="mt-1 text-4xl text-white p-2">
              {result.title || result.original_name}
            </h2>
            <p className="text-xl max-w-lg p-2">{result.overview}</p>

            <p className="flex items-center text-lg p-2">
              Release Date: {result.release_date || result.first_air_date}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
