
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
type Consent = { essential: boolean; analytics: boolean; marketing: boolean };
type Ctx = { consent: Consent | null; setConsent: (c: Consent)=>void; ready: boolean; openPrefs: ()=>void; closePrefs: ()=>void; prefsOpen: boolean; };
const ConsentCtx = createContext<Ctx | null>(null);
const KEY = "rafa-consent-v1";
export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<Consent | null>(null);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(()=>{ try{ const saved=localStorage.getItem(KEY); if(saved) setConsentState(JSON.parse(saved)); }catch{} setReady(true); },[]);
  const setConsent=(c:Consent)=>{ setConsentState(c); try{ localStorage.setItem(KEY, JSON.stringify(c)); }catch{} };
  return <ConsentCtx.Provider value={{consent,setConsent,ready,openPrefs:()=>setPrefsOpen(true),closePrefs:()=>setPrefsOpen(false),prefsOpen}}>{children}</ConsentCtx.Provider>;
}
export function useConsent(){ const ctx=useContext(ConsentCtx); if(!ctx) throw new Error("useConsent must be used within ConsentProvider"); return ctx; }
