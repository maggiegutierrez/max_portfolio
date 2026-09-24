import { readdirSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Carpetas reales donde subes los archivos manualmente:
// client/public/assets/images/Gallery/GraphicDesign
// client/public/assets/images/Gallery/Photography
const CLIENT_PUBLIC = path.resolve(__dirname, "../../../../client/public");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function titleFromFilename(filename) {
  return path
    .parse(filename)
    .name.replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function buildGalleryArray(folderName, category) {
  const folderPath = path.join(
    CLIENT_PUBLIC,
    "assets/images/Gallery",
    folderName,
  );

  let filenames;
  try {
    filenames = readdirSync(folderPath);
  } catch {
    console.warn(
      `No encontré ${folderPath} — sigo con un array vacío para "${category}".`,
    );
    return [];
  }

  const items = filenames
    .filter((filename) =>
      IMAGE_EXTENSIONS.includes(path.extname(filename).toLowerCase()),
    )
    .map((filename) => ({
      title: titleFromFilename(filename),
      category,
      imageUrl: `/assets/images/Gallery/${folderName}/${filename}`,
    }));

  return shuffle(items);
}

export const graphicDesign = buildGalleryArray(
  "GraphicDesign",
  "graphic_design",
);
export const photography = buildGalleryArray("Photography", "photography");

export const media = [...graphicDesign, ...photography];
