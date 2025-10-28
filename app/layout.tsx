import "./globals.css";
export const metadata = { title: "FP Markets", description: "App" };
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body style={{background:"#070a11",color:"#fff",margin:0,fontFamily:"system-ui,-apple-system,Segoe UI,Roboto,sans-serif"}}>{children}</body></html>;
}
