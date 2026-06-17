// Centralized image registry.
// Swap any URL below for a local import (e.g. `import logo from '../assets/images/logo/logo.png'`)
// once real photography is available — no other file needs to change.

// TODO: replace with actual logo
export const logo = 'https://placehold.co/160x60/0a0a0a/d4af37?text=SHREE+HARI&font=playfair-display';

export const hero = {
  // TODO: replace with actual hero background photo
  bg: '/images/hero/hero-backgound.png',
  // bg: 'https://placehold.co/1920x1080/0a0a0a/1a1a1a?text=',
  // TODO: replace with actual hero diamond render/photo
  // diamond: 'https://placehold.co/600x600/0a0a0a/b9e4ff?text=Diamond',
  diamond: '/images/hero/hero-1.png',
};

// TODO: replace with actual diamond product photography
export const diamonds = [
  'https://placehold.co/500x500/0a0a0a/b9e4ff?text=Diamond+1',
  'https://placehold.co/500x500/0a0a0a/e5e5e5?text=Diamond+2',
  'https://placehold.co/500x500/0a0a0a/d4af37?text=Diamond+3',
  'https://placehold.co/500x500/0a0a0a/b9e4ff?text=Diamond+4',
  'https://placehold.co/500x500/0a0a0a/e5e5e5?text=Diamond+5',
  'https://placehold.co/500x500/0a0a0a/d4af37?text=Diamond+6',
  'https://placehold.co/500x500/0a0a0a/b9e4ff?text=Diamond+7',
  'https://placehold.co/500x500/0a0a0a/e5e5e5?text=Diamond+8',
];

// TODO: replace with actual factory photographs
export const factory = {
  shot1: 'https://placehold.co/800x600/0a0a0a/e5e5e5?text=Factory+1',
  shot2: 'https://placehold.co/800x600/0a0a0a/e5e5e5?text=Factory+2',
  shot3: 'https://placehold.co/800x600/0a0a0a/e5e5e5?text=Factory+3',
  machine: 'https://placehold.co/800x600/0a0a0a/b9e4ff?text=CVD+Machine',
};

// TODO: replace with actual team headshots
export const team = [
  'https://placehold.co/400x500/1a1a1a/e5e5e5?text=Team+1',
  'https://placehold.co/400x500/1a1a1a/e5e5e5?text=Team+2',
  'https://placehold.co/400x500/1a1a1a/e5e5e5?text=Team+3',
];

// TODO: replace with actual about/company banner photo
export const aboutBanner = 'https://placehold.co/1600x700/0a0a0a/1a1a1a?text=Our+Story';

// TODO: replace with actual certification badge scans
export const certificates = [
  'https://placehold.co/300x200/ffffff/0a0a0a?text=IGI+Certified',
  'https://placehold.co/300x200/ffffff/0a0a0a?text=GIA+Certified',
];

// TODO: replace with actual gallery photography (factory + diamonds mixed)
export const gallery = [...diamonds, factory.shot1, factory.shot2, factory.shot3, factory.machine];
