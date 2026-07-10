# Updating the Kairavi Women's Clinic website

This site is **static** and deploys automatically. Whenever a change is pushed to
the `main` branch on GitHub, a workflow rebuilds the site and publishes it to:

**https://adityajhakumar.github.io/kairavi-womens-clinic/**

You don't run anything by hand — just edit a file, commit, and push (or edit the
file directly on GitHub and click **Commit changes**). The site updates in a
couple of minutes.

---

## Add a blog post

1. Open `src/lib/blog.ts`.
2. Copy an existing `{ ... }` block inside `BLOG_POSTS` and paste it at the **top**
   of the list (newest first).
3. Change the fields: `slug` (the URL, lowercase-with-dashes, unique), `title`,
   `date` / `dateDisplay`, `excerpt`, and the `content` sections.
4. The cover image is **optional**. Leave `cover` out and the post automatically
   gets a medical photo. To choose your own, add
   `cover: { src: "/images/blog/your-file.jpg", alt: "..." }` (a file you dropped
   into `public/images/blog/`) or use an Unsplash image URL as `src`.
5. Commit and push.

> The automatic image pool lives in `src/lib/blog-image.ts` — you can add or
> swap Unsplash photo IDs there. To find an ID, open any photo on unsplash.com;
> the ID is the part of the image URL after `images.unsplash.com/`.

## Add camp photos

1. Put the photos in `public/images/camps/`.
2. Open `src/lib/camps.ts` and copy the **EXAMPLE** block (at the bottom of the
   file) into the `CAMPS` array at the top.
3. Fill in the camp `title`, `date`, `location`, `summary`, and list each photo
   under `photos` with a short `alt` description.
4. Commit and push. (Until the first camp is added, the Camps page shows a
   friendly "Photos coming soon" message.)

> Please only post photos you have permission to share, and avoid images that
> identify patients without their consent.

## Edit the doctor's details, services, or FAQs

Most text lives in `src/lib/clinic.ts` (doctor profile, contact details,
services, FAQs). The About page's qualification list is in
`src/app/about/page.tsx`.

---

## Run it locally (optional, for developers)

```bash
npm install
npm run dev      # preview at http://localhost:3000/kairavi-womens-clinic
npm run build    # produces the static site in ./out
```

## Moving to a custom domain later

The site is currently served from a GitHub project subpath, so `basePath` is set
to `/kairavi-womens-clinic`. To use a real domain (e.g. kairaviwomensclinic.com):

1. In `.github/workflows/deploy.yml`, uncomment the `env:` block under
   **Build static site** and set `NEXT_PUBLIC_BASE_PATH: ""` and
   `NEXT_PUBLIC_SITE_URL` to your domain.
2. Add a `CNAME` file (containing the domain) to `public/`.
3. Point the domain's DNS to GitHub Pages and set the custom domain in the repo's
   **Settings → Pages**.
