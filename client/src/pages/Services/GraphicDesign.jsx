import PageHero from "../../components/PageHero";
import GalleryGrid from "../../components/GalleryGrid";
import { useApiData } from "../../hooks/useApiData";
import "./GraphicDesign.css";

function GraphicDesign() {
  const { data: items, status } = useApiData("/media?category=graphic_design");

  return (
    <>
      <PageHero
        title="Graphic Design"
        parentLabel="Services"
        currentLabel="Graphic Design"
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

export default GraphicDesign;
