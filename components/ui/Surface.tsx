import { ReactNode } from "react";
export default function Surface({children, className=""}:{children:ReactNode; className?:string}) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(0,160,255,0.08)] ${className}`}>
      {children}
    </div>
  );
}
