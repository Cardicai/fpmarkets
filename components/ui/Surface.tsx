export default function Surface({children}:{children:React.ReactNode}) {
  return <div style={{border:"1px solid rgba(255,255,255,.12)",background:"rgba(255,255,255,.05)",borderRadius:16,padding:16,boxShadow:"0 0 30px rgba(0,160,255,.08)"}}>{children}</div>;
}
