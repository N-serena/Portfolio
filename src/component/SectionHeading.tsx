/* The one place section labels are styled. Small caps in full ink keeps the
   type system split: serif for content, small caps for navigation. */
const SectionHeading = ({ children }: { children: string }) => (
  <h2 className="text-ink text-section uppercase">{children}</h2>
)

export default SectionHeading
