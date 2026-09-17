import type { Photo } from "react-photo-album";
import ServerPhotoAlbum from "react-photo-album/server";
import "react-photo-album/masonry.css";

export type GalleryPhoto = Photo & {
  caption?: string;
};

interface Props {
  photos: GalleryPhoto[];
}

/**
 * Static masonry gallery: photos keep their aspect ratio, are placed in order
 * into the shortest column (fills gaps), and render as plain HTML (no client JS).
 */
export default function GalleryAlbum({ photos }: Props) {
  return (
    <ServerPhotoAlbum
      layout="masonry"
      photos={photos}
      breakpoints={[480, 768, 1024]}
      spacing={12}
      columns={(width) => {
        if (width < 480) return 2;
        if (width < 768) return 3;
        return 4;
      }}
      sizes={{
        size: "min(100vw - 2rem, 80rem)",
        sizes: [
          { viewport: "(max-width: 1280px)", size: "calc(100vw - 2rem)" },
        ],
      }}
      componentsProps={{
        container: { id: "gallery", className: "mx-auto max-w-7xl" },
        image: { className: "rounded-md" },
      }}
      render={{
        link: (props, { photo }) => (
          <a
            {...props}
            data-pswp-width={photo.width}
            data-pswp-height={photo.height}
            data-pswp-caption={photo.caption ?? ""}
            target="_blank"
            rel="noreferrer"
            className={[props.className, "transition-opacity hover:opacity-90"]
              .filter(Boolean)
              .join(" ")}
          />
        ),
      }}
    />
  );
}
