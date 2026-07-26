# How to merge this into your new Next.js project

## 1. Where this goes
Your Next.js project already has a `src/` folder (since you chose "Yes" to the
`src/` directory prompt during setup) at:

    apps/web/src/

Copy every folder inside THIS zip's `habesha-src/` folder into that location,
MERGING with what's already there — do not delete the `app/` folder Next.js
already generated, and do not delete `components/ui/` (your shadcn + Aceternity
files) or `components.json` / `jsconfig.json` at the project root.

Specifically:
- `app/`            -> merge into `apps/web/src/app/` (this REPLACES the default
                        `page.jsx` and `layout.jsx` Next.js generated, and ADDS
                        the new route folders: shop/, product/, cart/, checkout/,
                        order-confirmation/, login/, register/)
- `components/`      -> merge into `apps/web/src/components/` (adds layout/,
                        sections/, product/, and Providers.jsx — does NOT touch
                        your existing components/ui/ folder)
- `context/`         -> copy into `apps/web/src/context/` (new folder)
- `data/`            -> copy into `apps/web/src/data/` (new folder)

## 2. Delete leftovers from the Vite version — these don't exist in Next.js
If you copied anything else over from the old project, do NOT bring these,
they're Vite/React-Router-specific and have no place in Next.js:
- main.jsx
- App.jsx
- ScrollToTop.jsx (Next's Link handles hash scrolling natively)
- Any old src/pages/ folder (replaced entirely by app/)
- Layout.jsx (replaced by app/layout.jsx)

## 3. Images
Copy your actual product/hero/collection images from the old project's
`public/` folder into the new project's `apps/web/public/` folder. Same
filenames as before (Habesha.jpg, about-image.jpg, placeholder-1.jpg through
placeholder-4.jpg, Kuta.jpg, HabeshaKemis.jpg, Scarf.jpg) so the image paths
in the code above just work without edits.

## 4. One CSS line to add
Open `apps/web/src/app/globals.css` (already exists from the Next.js scaffold)
and add this near the top, so hash-link navigation (Shop, Collections, About,
Contact in the header) scrolls smoothly instead of jumping instantly:

    html {
      scroll-behavior: smooth;
    }

## 5. Remove react-router-dom and react-router-hash-link
These Vite-era packages are not used anywhere in this new code and can be
removed from apps/web/package.json if they were carried over:

    pnpm remove react-router-dom react-router-hash-link

## 6. What changed vs. the old Vite version (so nothing feels mysterious)
- Routing: file-based now. A URL like /shop/product/3 corresponds to a real
  folder path app/product/[id]/. No more <Routes>/<Route> list in main.jsx.
- Shop category filter: changed from a URL path (/shop/men) to a query
  param (/shop?category=men) — simpler in Next's App Router, avoids needing
  a second route file just for the filtered view.
- HashLink removed entirely: Next's built-in <Link href="/#about"> already
  scrolls to matching id elements; the CSS line in step 4 makes it smooth.
- "use client" appears at the top of any file using useState, useContext,
  onClick, or browser-only APIs — Next.js components are server-rendered by
  default and must opt in to client-side interactivity explicitly.
- AuthContext now loads localStorage inside a useEffect (after mount) rather
  than during initial state — reading localStorage during the very first
  render causes a server/client mismatch error in Next.js, since the server
  has no localStorage at all.
- Providers.jsx is a new file — Next's root layout.jsx is a Server Component
  by default and can't hold hooks/context directly, so this one small
  "use client" wrapper holds AuthProvider + CartProvider and gets imported
  once into layout.jsx.

## 7. After merging, run:
    cd apps/web
    pnpm install
    pnpm run dev

Check localhost:3000 loads the full homepage, then click through Shop, a
product detail page, Cart, Checkout, Login/Register to confirm everything
still works end to end.
