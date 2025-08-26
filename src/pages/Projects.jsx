export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-20">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white/10 p-6 hover:bg-white/20 transition">
          <h3 className="text-xl font-medium">Project One</h3>
          <p className="text-gray-300 mt-2">Short description here.</p>
        </div>
        <div className="rounded-xl bg-white/10 p-6 hover:bg-white/20 transition">
          <h3 className="text-xl font-medium">Project Two</h3>
          <p className="text-gray-300 mt-2">Short description here.</p>
        </div>
      </div>
    </div>
  );
}
