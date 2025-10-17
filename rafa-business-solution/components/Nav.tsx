
'use client';
import React from 'react';
const items=[
  {label:'Home',href:'#home'},
  {label:'Services',href:'/services'},
  {label:'Our Work',href:'/our-work'},
  {label:'Insights',href:'/insights'},
  {label:'About',href:'#about'},
  {label:'Careers',href:'/careers'},
  {label:'Contact',href:'#contact'}
];
export default function Nav(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-zinc-200 dark:bg-[#0b1220]/70 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">RAFA <span className="text-zinc-500 dark:text-zinc-400">Business Solution</span></a>
        <nav className="hidden md:flex gap-6 text-sm text-zinc-700 dark:text-zinc-200">
          {items.map(n => <a key={n.href} href={n.href} className="hover:text-zinc-900 dark:hover:text-white transition-colors">{n.label}</a>)}
        </nav>
      </div>
    </header>
  );
}
