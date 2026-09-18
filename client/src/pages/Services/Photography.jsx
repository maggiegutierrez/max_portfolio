import PageHero from "../../components/PageHero";
import GalleryGrid from "../../components/GalleryGrid";
import { useApiData } from "../../hooks/useApiData";
import "./Photography.css";

function Photography() {
  const { data: items, status } = useApiData("/media?category=photography");

  return (
    <>
      <PageHero
        title="Photography"
        parentLabel="Services"
        currentLabel="Photography"
      />
      {status === "loading" && (
        <p className="text-center">Loading gallery...</p>
      )}
      {status === "error" && (
        <p className="text-center">
          Couldn't load the gallery. Try again later.
        </p>
      )}
      <GalleryGrid items={items} />
    </>
  );
}

export default Photography;
