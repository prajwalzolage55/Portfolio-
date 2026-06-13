import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prajwal Zolage — Portfolio",
    short_name: "Prajwal Z",
    description:
      "Portfolio of Prajwal Zolage — Software Developer & AI/ML Enthusiast",
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#121212",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
