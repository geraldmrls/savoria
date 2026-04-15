export function ContactInfo() {
  return (
    // contact info container
    <div className="bg-brown-bg-dark mt-12 text-amber-50 py-16 px-7 lg:mt-20 lg:flex lg:flex-col lg:justify-center lg:items-center">
      
      <div className="lg:flex lg:items-center lg:justify-between lg:w-140">
        {/* hours info */}
        <div>
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Hours</h4>
          <p className="text-sm sm:text-base">Mon-Thu: 11:00 AM - 10:00 PM</p>
          <p className="text-sm sm:text-base">Fri-Sun: 11:00 AM - 11:00 PM</p>
        </div>

        {/* contact details */}
        <div className="mt-10 lg:mt-0">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">
            Contact Details
          </h4>
          <p className="text-sm sm:text-base">123 Main Street</p>
          <p className="text-sm sm:text-base">Anytown, USA 12345</p>
          <p className="text-sm sm:text-base">(555) 123-4567</p>
        </div>
      </div>

      {/* line */}
      <div className="border-t border-yellow-border mx-auto mt-10 lg:w-full"></div>

      <footer>
        <p className="text-center mt-6 text-xs sm:text-sm">
          &copy; 2023 Savoria. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
