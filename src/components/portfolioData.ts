// Datos de portafolio para Home
export const archivos = [
  "/prueba_1.jpg",
  "/prueba_2.jpg",
  "/prueba_6.jpg",
  "/prueba_4.jpg",
  "/prueba_9.jpg",
  "/prueba_10.jpg",
  "/prueba_19.jpg",
  "/prueba_11.jpg",
  "/prueba_12.jpg",
  "/prueba_18.jpg",
  "/prueba_8.jpg",
  "/prueba_14.jpg",
  "/prueba_16.jpg",
  "/prueba_15.jpg",
  "/prueba_5.jpg",
  "/prueba_3.jpg",
  "/prueba_20.jpg",
  "/prueba_21.jpg",
  "/prueba_24.jpg",
];

export const paginasWeb = archivos.slice(0, 10);
export const disenoUXUI = [
  ...archivos.slice(10, 16),
  ...archivos
    .slice(16, 21)
    .filter(
      (img) => !img.includes("prueba_3.jpg") && !img.includes("prueba_24.jpg")
    ),
];
export const edicionVideo = [
  "/prueba_22.mp4",
  "/prueba_25.mp4",
  "/prueba_26.mp4",
  "/prueba_27.mp4",
  "/prueba_28.mp4",
];

export const paginasWebLinks = [
  "https://github.com/REyyyy43/DollarsHub",
  "https://ecommerce-product-page-nine-nu.vercel.app",
  "https://docs.realworld.build",
  "https://safetyculture.com",
  "https://www.taskade.com",
  "https://github.com/REyyyy43/RexDotWork",
  "https://www.airwallex.com/us",
  "https://rex-dot-work.vercel.app/",
  "https://rex-dot-work.vercel.app/",
  "https://www.gangain.com.ar/",
];
