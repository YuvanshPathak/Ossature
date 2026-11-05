import { MarkerType, type EdgeMarker } from 'reactflow';

/**
 * Arrowhead at the target end of every edge, so the direction of data flow
 * (source -> target) is visible. Applied where edges are derived for rendering
 * (live board + read-only replay) rather than stored on the edge, so it also
 * covers edges and saved diagrams that predate it, and never changes the wire format.
 *
 * The colour is a CSS variable (React Flow writes it into an inline style), so it
 * follows the light/dark theme.
 */
export const EDGE_ARROW: EdgeMarker = {
  type: MarkerType.ArrowClosed,
  width: 18,
  height: 18,
  color: 'var(--text-muted)',
};
