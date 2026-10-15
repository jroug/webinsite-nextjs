import localFont from "next/font/local";
import "./globals.css";

const cabin = localFont({
  src: "./fonts/Cabin/Cabin-VariableFont_wdth,wght.ttf",
  variable: "--font-cabin",
  display: "swap",
});

const quicksand = localFont({
  src: "./fonts/Quicksand/Quicksand-VariableFont_wght.ttf",
  variable: "--font-quicksand",
  display: "swap",
});

const flaticon = localFont({
  src: "./fonts/Flaticon/flaticon.woff2",
  variable: "--font-flaticon",
  display: "swap",
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cabin.variable} ${quicksand.variable} ${flaticon.variable}`} >
      <body>{children}</body>
    </html>
  );
}
