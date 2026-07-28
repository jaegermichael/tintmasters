import { useState, useEffect, useRef } from 'react';
import PageHero from '../components/ui/PageHero';
import { galleryItems } from '../data/constants';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogImage, setDialogImage] = useState({ src: '', alt: '' });
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && dialogOpen) setDialogOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dialogOpen]);

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(([category]) => category === filter);

  const openDialog = (src, alt) => {
    setDialogImage({ src, alt });
    setDialogOpen(true);
  };

  return (
    <>
      <PageHero
        kicker="Project gallery"
        title="A closer look at the work."
        copy="A selection of Tint Masters projects across automotive, property, branding and security work."
      />

      <section className="section section-fog">
        <div className="shell">
          <div className="gallery-controls" aria-label="Filter gallery">
            <button className={`filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All work</button>
            <button className={`filter ${filter === 'tint' ? 'active' : ''}`} onClick={() => setFilter('tint')}>Tinting</button>
            <button className={`filter ${filter === 'building' ? 'active' : ''}`} onClick={() => setFilter('building')}>Property</button>
            <button className={`filter ${filter === 'branding' ? 'active' : ''}`} onClick={() => setFilter('branding')}>Branding</button>
            <button className={`filter ${filter === 'security' ? 'active' : ''}`} onClick={() => setFilter('security')}>Security</button>
          </div>

          <div className="gallery-grid">
            {filteredItems.map(([category, label, src], i) => (
              <button
                key={i}
                className="gallery-card"
                data-category={category}
                onClick={() => openDialog(src, label)}
              >
                <img src={src} alt={label} loading="lazy" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {dialogOpen && (
        <dialog className="dialog" ref={dialogRef} onClick={(e) => e.target === dialogRef && setDialogOpen(false)}>
          <button aria-label="Close image" onClick={() => setDialogOpen(false)}>×</button>
          <img src={dialogImage.src} alt={dialogImage.alt} />
        </dialog>
      )}
    </>
  );
}