export default function TailwindTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        TailwindCSS Test Page
      </h1>
      
      <div className="space-y-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Color & Typography
          </h2>
          <p className="text-gray-600">
            This text should have gray color and proper spacing
          </p>
        </div>
        
        <div className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
          Hover Effect Button
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded">Responsive Grid Item 1</div>
          <div className="bg-green-100 p-4 rounded">Responsive Grid Item 2</div>
        </div>
      </div>
    </div>
  );
}