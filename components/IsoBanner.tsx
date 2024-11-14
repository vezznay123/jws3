export default function IsoBanner() {
  return (
    <div className="bg-[#181818] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf"
              alt="ISO 9001"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="font-bold">ISO 9001:2015</h3>
              <p className="text-sm text-gray-300">Quality Management</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf"
              alt="ISO 14001"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="font-bold">ISO 14001:2015</h3>
              <p className="text-sm text-gray-300">Environmental Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}