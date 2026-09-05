/**
 * Two constructions of the same AM monogram, both traced from the original
 * artwork and simplified to straight segments.
 *
 * - `open`   — wider stance, the A and M separated by a clear notch. Survives
 *              best at 16px, so it is the mark used across the UI and icons.
 * - `linked` — tighter interlock, the A's diagonal running into the M. Reads
 *              better large, so it carries the social preview image.
 */
export const LOGO_PATHS = {
  open: {
    width: 149.1,
    d:
      "M149.1 99.7L149.1 20.5L121.2 20.5L101.9 51.2L74.7 0L51.3 0.1L0 99.7L28.2 100L38 80.3" +
      "L84.1 80.3L72.1 57.5L49.1 57.8L63 29.8L98.6 97.7L101.2 95.1L125.7 56.4L125.7 99.6L147.1 99.7Z",
  },
  linked: {
    width: 152.6,
    d:
      "M152.6 0L133.2 0L102.6 48.5L73.5 0L48.2 0L70.6 52.5L63.7 56.8L49.7 53.5L61.5 29.4L48.2 0.3" +
      "L0 99.4L25.3 100L35.9 77.9L62.1 77.1L85.1 77.9L96.9 100L123.8 100L114.7 76.8L128.1 56.6" +
      "L131.8 100L152.2 100L152.6 49.9Z",
  },
} as const;

export type LogoVariant = keyof typeof LOGO_PATHS;
