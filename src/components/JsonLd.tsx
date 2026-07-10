// Renders a JSON-LD <script>. One component, reused for every structured-data
// block so emission stays consistent across the site.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
