'use client';

import { useRef, useState } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';
import { photographs } from '@/lib/photographs';

export default function Photography() {
  const [selected, setSelected] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const photo = photographs[selected ?? 0];
  const move = (direction: number) => setSelected(current => current === null ? null : (current + direction + photographs.length) % photographs.length);

  return <section className="photography section" id="photography" aria-labelledby="photography-title">
    <h2 id="photography-title">Looking Around</h2>
    <div className="photography-grid">
      {[photographs.slice(0, 3), photographs.slice(3)].map((row, rowIndex) => <div className="photography-row" key={rowIndex} style={{ gridTemplateColumns: row.map(item => `${item.width / item.height}fr`).join(' ') }}>
        {row.map((item, columnIndex) => <figure className="photography-item" key={item.id}>
          <button type="button" className="photography-thumbnail" aria-haspopup="dialog" aria-label={`Enlarge photograph: ${item.alt} ${item.date.replace('-', '/')} · ${item.city}`} onClick={event => {
            opener.current = event.currentTarget;
            setSelected(rowIndex * 3 + columnIndex);
          }}>
            <Image unoptimized src={`/images/photography/${item.id}-thumb.webp`} width={item.width} height={item.height} alt={item.alt} loading="lazy" sizes="(max-width: 560px) 45vw, 280px" />
          </button>
          <figcaption><time dateTime={item.date}>{item.date.replace('-', '/')}</time><span aria-hidden="true"> · </span>{item.city}</figcaption>
        </figure>)}
      </div>)}
    </div>
    <Dialog.Root open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <Dialog.Portal>
        <Dialog.Backdrop className="photography-backdrop" />
        <Dialog.Popup className="photography-lightbox" initialFocus={closeButton} finalFocus={opener} onKeyDown={event => {
          if (event.altKey || event.ctrlKey || event.metaKey) return;
          if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
          if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
        }}>
          <Dialog.Title className="sr-only">Looking Around</Dialog.Title>
          <div className="photography-toolbar">
            <span className="photography-counter" aria-live="polite" aria-atomic="true">{(selected ?? 0) + 1} / {photographs.length}<span className="sr-only">. {photo.alt} {photo.date.replace('-', '/')} · {photo.city}</span></span>
            <Dialog.Close ref={closeButton} className="photography-control" aria-label="Close photograph"><X aria-hidden="true" /></Dialog.Close>
          </div>
          <div className="photography-full-image">
            <Image key={photo.id} unoptimized src={`/images/photography/${photo.id}-large.webp`} width={photo.width} height={photo.height} alt={photo.alt} />
          </div>
          <div className="photography-navigation">
            <button type="button" className="photography-control" onClick={() => move(-1)} aria-label="Previous photograph"><ArrowLeft aria-hidden="true" /></button>
            <Dialog.Description className="photography-caption"><time dateTime={photo.date}>{photo.date.replace('-', '/')}</time> · {photo.city}</Dialog.Description>
            <button type="button" className="photography-control" onClick={() => move(1)} aria-label="Next photograph"><ArrowRight aria-hidden="true" /></button>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  </section>;
}
