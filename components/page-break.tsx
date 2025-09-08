export const PageBreak = ({ before = false }: { before?: boolean }) => (
  <div className={before ? "break-before-page" : "break-after-page"}></div>
);
