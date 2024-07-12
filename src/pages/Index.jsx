import { useState } from "react";
import { Home, Settings, Info, User } from "lucide-react";

const Index = () => {
  const [activeItem, setActiveItem] = useState("Overview");

  const navItems = [
    { title: "Overview", icon: <Home className="h-4 w-4" /> },
    { title: "Settings", icon: <Settings className="h-4 w-4" /> },
    { title: "Info", icon: <Info className="h-4 w-4" /> },
    { title: "Profile", icon: <User className="h-4 w-4" /> },
  ];

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <span className="text-xl font-semibold">App Name</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveItem(item.title)}
              className={`flex items-center p-2 w-full text-left rounded ${
                activeItem === item.title ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 bg-gray-800 text-white p-6 overflow-auto">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">{activeItem}</h1>
          <div className="space-x-2">
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
              Action 1
            </button>
            <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">
              Action 2
            </button>
          </div>
        </header>
        <section>
          <p>
            This is the {activeItem} section. Here you can add detailed
            information and content that matches the design provided.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;