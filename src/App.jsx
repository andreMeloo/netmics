import { useEffect, useState } from "react";
import Api from "./Api"


import Header from "./components/header/Header";
import FeatureComic from "./components/FeatureComic/FeatureComic";
import ComicRow from "./components/ComicRow/ComicRow";

export default function App() {

  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Api.getComicsLists();
      setComicsList(list)

      // Pegando o feature
      let randomChosenList = Math.floor(Math.random() * (list.length - 1));
      let randomChosenResult = Math.floor(Math.random() * (list[0].items.results.length - 1))
      let chosenComic = list[randomChosenList].items.results[randomChosenResult]

      while (chosenComic.description == null
        || chosenComic.dates.length == 0
        || chosenComic.prices.length == 0
        || chosenComic.pageCount == 0) {
        randomChosenList = Math.floor(Math.random() * (list.length - 1));
        randomChosenResult = Math.floor(Math.random() * (list[0].items.results.length - 1))
        chosenComic = list[randomChosenList].items.results[randomChosenResult];
      }

      setFeatureData(chosenComic);
    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListner = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListner);

    return () => {
      window.removeEventListener('scroll', scrollListner);
    }
  }, [])

  return (
    <>
      <Header black={blackHeader} />

      {featureData &&
        <FeatureComic item={featureData} />
      }

      {<section className="mt-[-150px]">
        {comicsList.map((item, key) => {
          return <ComicRow key={key} title={item.title} items={item.items} />
        })}
      </section>}

      <footer className="m-12 text-center">
        Developer by <a href="https://www.linkedin.com/in/andre-melo-sly/">Melo</a>
      </footer>

      {comicsList.length <= 0 &&
        <div className="left-0 top-0 right-0 bottom-0 z-[99] bg-[rgb(3,2,2)] flex justify-center items-center h-screen w-screen">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/da734b28921021.55d95297d71f4.gif" alt="carregando" />
        </div>
      }
    </>
  )
}

