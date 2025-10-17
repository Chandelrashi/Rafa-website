
"use client";
import { useEffect, useState } from "react";
import { useConsent } from "./ConsentProvider";
const base="fixed left-1/2 -translate-x-1/2 z-[60] rounded-2xl shadow-lg border border-zinc-200/80 dark:border-white/10 bg-white/95 dark:bg-[#0b1220]/95 backdrop-blur";
export default function CookieConsent(){
  const { consent, setConsent, ready, prefsOpen, openPrefs, closePrefs } = useConsent();
  const [showBanner,setShowBanner]=useState(false);
  const [temp,setTemp]=useState({analytics:false,marketing:false});
  useEffect(()=>{
    if(ready && !consent) setShowBanner(true);
    if(consent) setTemp({analytics:consent.analytics, marketing:consent.marketing});
    const open=()=>openPrefs();
    document.addEventListener("open-cookies-prefs", open);
    return ()=>document.removeEventListener("open-cookies-prefs", open);
  },[ready,consent,openPrefs]);
  if(!ready) return null;
  const acceptAll=()=>{ setConsent({essential:true,analytics:true,marketing:true}); setShowBanner(false); };
  const rejectNon=()=>{ setConsent({essential:true,analytics:false,marketing:false}); setShowBanner(false); };
  const save=()=>{ setConsent({essential:true,analytics:temp.analytics,marketing:temp.marketing}); closePrefs(); setShowBanner(false); };
  return (<>
    {showBanner && !prefsOpen && !consent && (
      <div className={`${base} bottom-6 w-[min(680px,92vw)] p-4`}>
        <h3 className="font-semibold">We use cookies</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
          We use essential cookies to make our site work. We’d also like to use analytics cookies.
          Read our <a className="underline" href="/legal/cookies-policy">Cookies Policy</a>.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={acceptAll} className="rounded-xl px-4 py-2 text-white" style={{backgroundImage:"linear-gradient(90deg,#2563EB,#14B8A6)"}}>Accept all</button>
          <button onClick={rejectNon} className="rounded-xl px-4 py-2 border border-zinc-300 dark:border-white/15">Reject non-essential</button>
          <button onClick={openPrefs} className="rounded-xl px-4 py-2 border border-zinc-300 dark:border-white/15">Manage preferences</button>
        </div>
      </div>
    )}
    {prefsOpen && (
      <div className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm grid place-items-center p-4">
        <div className="w-[min(720px,96vw)] rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold">Cookie preferences</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Toggle which optional cookies you allow. Essential cookies are always on.</p>
            </div>
            <button onClick={closePrefs} className="rounded-xl border px-3 py-1 text-sm border-zinc-300 dark:border-white/15">Close</button>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border p-3 border-zinc-300 dark:border-white/15"><div className="font-medium">Essential</div><div className="text-sm text-zinc-600 dark:text-zinc-300">Required for core functionality. Always on.</div></div>
            <label className="rounded-xl border p-3 border-zinc-300 dark:border-white/15 flex items-start gap-3">
              <input type="checkbox" checked={temp.analytics} onChange={e=>setTemp(v=>({...v,analytics:e.target.checked}))}/>
              <div><div className="font-medium">Analytics</div><div className="text-sm text-zinc-600 dark:text-zinc-300">Helps us improve the site (anonymous usage).</div></div>
            </label>
            <label className="rounded-xl border p-3 border-zinc-300 dark:border-white/15 flex items-start gap-3">
              <input type="checkbox" checked={temp.marketing} onChange={e=>setTemp(v=>({...v,marketing:e.target.checked}))}/>
              <div><div className="font-medium">Marketing</div><div className="text-sm text-zinc-600 dark:text-zinc-300">Personalisation and remarketing (we rarely use).</div></div>
            </label>
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={save} className="rounded-xl px-4 py-2 text-white" style={{backgroundImage:"linear-gradient(90deg,#2563EB,#14B8A6)"}}>Save preferences</button>
            <a href="/legal/cookies-policy" className="rounded-xl px-4 py-2 border text-sm border-zinc-300 dark:border-white/15">Cookies Policy</a>
          </div>
        </div>
      </div>
    )}
  </>);
}
