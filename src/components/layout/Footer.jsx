export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold mb-3">Habesha.</h2>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Habesha. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">About Us</h3>
          <ul className="flex flex-col gap-2 text-sm text-neutral-500">
            <li><a href="/about" className="hover:text-neutral-900">About Us</a></li>
            <li><a href="/contact" className="hover:text-neutral-900">Contact</a></li>
            <li><a href="/sellers" className="hover:text-neutral-900">Become a Seller</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Useful Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-neutral-500">
            <li><a href="/returns" className="hover:text-neutral-900">Returns</a></li>
            <li><a href="/shipping" className="hover:text-neutral-900">Shipping Policy</a></li>
            <li><a href="/faq" className="hover:text-neutral-900">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Subscribe</h3>
          <p className="text-sm text-neutral-500 mb-3">Get updates on new arrivals and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-neutral-300 rounded-l-lg px-3 py-2 text-sm w-full"
            />
            <button className="bg-neutral-900 text-white text-sm px-4 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
