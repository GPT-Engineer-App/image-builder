import { useState } from "react";
import { Home, Settings, Info, User, Music, Edit, Layers, Sliders, CheckCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const SongwritingAssistant = () => {
  const [activeSection, setActiveSection] = useState("Song Concept");
  const [theme, setTheme] = useState("");
  const [genre, setGenre] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [songConcept, setSongConcept] = useState("");
  const [verse, setVerse] = useState("");
  const [chorus, setChorus] = useState("");
  const [preChorus, setPreChorus] = useState("");
  const [bridge, setBridge] = useState("");
  const [outro, setOutro] = useState("");
  const [refinement, setRefinement] = useState("");
  const [automation, setAutomation] = useState("");

  const sections = [
    { title: "Song Concept", icon: <Music className="h-4 w-4" /> },
    { title: "Verse", icon: <Edit className="h-4 w-4" /> },
    { title: "Chorus", icon: <Layers className="h-4 w-4" /> },
    { title: "Pre-Chorus", icon: <Sliders className="h-4 w-4" /> },
    { title: "Bridge", icon: <CheckCircle className="h-4 w-4" /> },
    { title: "Outro", icon: <RefreshCw className="h-4 w-4" /> },
    { title: "Refinement", icon: <Settings className="h-4 w-4" /> },
    { title: "Automation", icon: <Info className="h-4 w-4" /> },
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Song Concept":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Song Concept</h2>
            <Label htmlFor="theme">Theme</Label>
            <Input
              id="theme"
              placeholder="Enter the theme..."
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="mb-4"
            />
            <Label htmlFor="genre">Genre</Label>
            <Input
              id="genre"
              placeholder="Enter the genre..."
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="mb-4"
            />
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Input
              id="targetAudience"
              placeholder="Enter the target audience..."
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="mb-4"
            />
            <Label htmlFor="songConcept">Song Concept</Label>
            <Textarea
              id="songConcept"
              placeholder="Describe the song concept..."
              value={songConcept}
              onChange={(e) => setSongConcept(e.target.value)}
            />
          </div>
        );
      case "Verse":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Verse</h2>
            <Textarea
              placeholder="Write the verse..."
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
            />
          </div>
        );
      case "Chorus":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Chorus</h2>
            <Textarea
              placeholder="Write the chorus..."
              value={chorus}
              onChange={(e) => setChorus(e.target.value)}
            />
          </div>
        );
      case "Pre-Chorus":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Pre-Chorus</h2>
            <Textarea
              placeholder="Write the pre-chorus..."
              value={preChorus}
              onChange={(e) => setPreChorus(e.target.value)}
            />
          </div>
        );
      case "Bridge":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Bridge</h2>
            <Textarea
              placeholder="Write the bridge..."
              value={bridge}
              onChange={(e) => setBridge(e.target.value)}
            />
          </div>
        );
      case "Outro":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Outro</h2>
            <Textarea
              placeholder="Write the outro..."
              value={outro}
              onChange={(e) => setOutro(e.target.value)}
            />
          </div>
        );
      case "Refinement":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Refinement</h2>
            <Textarea
              placeholder="Refine the song..."
              value={refinement}
              onChange={(e) => setRefinement(e.target.value)}
            />
          </div>
        );
      case "Automation":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Automation</h2>
            <Textarea
              placeholder="Describe automation steps..."
              value={automation}
              onChange={(e) => setAutomation(e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <span className="text-xl font-semibold">Songwriting Assistant</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(section.title)}
              className={`flex items-center p-2 w-full text-left rounded ${
                activeSection === section.title ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              {section.icon}
              <span className="ml-2">{section.title}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 bg-gray-800 text-white p-6 overflow-auto">
        {renderSectionContent()}
      </main>
    </div>
  );
};

export default SongwritingAssistant;