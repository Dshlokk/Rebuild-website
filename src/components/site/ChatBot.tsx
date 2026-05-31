import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Calendar,
  Download,
  Phone,
  ChevronRight,
  Bot,
  User,
} from "lucide-react";
import { site } from "@/data/site";
import { features, sustainability } from "@/data/features";
import { sportAmenities, wellnessAmenities } from "@/data/amenities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  timestamp: Date;
  actions?: { label: string; onClick: () => void; icon?: React.ReactNode }[];
};

const KNOWLEDGE_BASE = [
  ...features.map((f) => ({
    keywords: [f.title.toLowerCase(), "feature"],
    answer: `${f.title}: ${f.body}`,
  })),
  ...sustainability.map((s) => ({
    keywords: [s.title.toLowerCase(), "sustainable", "eco"],
    answer: `${s.title}: ${s.body}`,
  })),
  ...sportAmenities.map((a) => ({
    keywords: [a.name.toLowerCase(), "sport", "amenity"],
    answer: `We have a ${a.name} as part of our sports amenities.`,
  })),
  ...wellnessAmenities.map((a) => ({
    keywords: [a.name.toLowerCase(), "wellness", "amenity"],
    answer: `Our wellness features include a ${a.name}.`,
  })),
  {
    keywords: ["price", "cost", "investment"],
    answer:
      "Our villas starting from 3600 sq.ft offer premium luxury. For detailed pricing and current offers, please call our executive or schedule a visit.",
  },
  {
    keywords: ["location", "where", "address"],
    answer: `Pura Vida Villas is located at ${site.location}. It's a prime lakefront community.`,
  },
  {
    keywords: ["size", "area", "sqft"],
    answer:
      "The villas are approximately 3600 Sq.Ft. featuring biophilic design and Vastu compliance.",
  },
  {
    keywords: ["contact", "phone", "number"],
    answer: `You can reach us at ${site.phone} or via WhatsApp.`,
  },
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const VISIT_LINK = "https://calendar.app.google/pEEdvnExZgn9kFkJ8";
  const BROCHURE_LINK = "/EA-Villa-Brochure-3.pdf";

  const initialActions = [
    {
      label: "Ask a Question",
      onClick: () => handleAction("query"),
      icon: <MessageCircle className="h-4 w-4" />,
    },
    {
      label: "Schedule Visit",
      onClick: () => window.open(VISIT_LINK, "_blank"),
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      label: "Download Brochure",
      onClick: () => window.open(BROCHURE_LINK, "_blank"),
      icon: <Download className="h-4 w-4" />,
    },
    {
      label: "Call Executive",
      onClick: () => window.open(site.whatsapp, "_blank"),
      icon: <Phone className="h-4 w-4" />,
    },
  ];

  useEffect(() => {
    // Auto-open chatbot after 15 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "1",
          role: "bot",
          content: "Hello! I'm Pura Vida's Virtual Assistant. How can I help you today?",
          timestamp: new Date(),
          actions: initialActions,
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleAction = (type: string) => {
    if (type === "query") {
      addMessage(
        "bot",
        "I can tell you about our amenities, features, location, and more! What would you like to know?",
        [
          {
            label: "What are the amenities?",
            onClick: () => handleQuery("What are the amenities?"),
          },
          { label: "Where is it located?", onClick: () => handleQuery("Where is it located?") },
          { label: "Villa size?", onClick: () => handleQuery("How big are the villas?") },
        ],
      );
    }
  };

  const addMessage = (role: "bot" | "user", content: string, actions?: Message["actions"]) => {
    const newMessage: Message = {
      id: Math.random().toString(36).substring(7),
      role,
      content,
      timestamp: new Date(),
      actions,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleQuery = (query: string) => {
    setInputValue(query);
    // Use a timeout to allow the input value to be set before sending,
    // or just call handleSend directly with the query.
    setTimeout(() => {
      processQuery(query);
    }, 100);
  };

  const processQuery = (query: string) => {
    addMessage("user", query);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = findResponse(query);
      addMessage("bot", response, [
        {
          label: "Schedule Visit",
          onClick: () => window.open(VISIT_LINK, "_blank"),
          icon: <Calendar className="h-4 w-4" />,
        },
        {
          label: "Call Executive",
          onClick: () => window.open(site.whatsapp, "_blank"),
          icon: <Phone className="h-4 w-4" />,
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    processQuery(inputValue.trim());
  };

  const findResponse = (query: string): string => {
    const q = query.toLowerCase();

    // Simple matching logic
    const matches = KNOWLEDGE_BASE.filter((k) => k.keywords.some((word) => q.includes(word)));

    if (matches.length > 0) {
      return matches[0].answer;
    }

    return "That's a great question! For the most accurate details regarding that, I recommend speaking with our executive or downloading our brochure. Would you like to do that?";
  };

  return (
    <div className="fixed bottom-[100px] right-6 z-[60] flex flex-col items-end md:bottom-6 md:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl backdrop-blur-xl md:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-forest px-4 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Pura Vida Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-white/70">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Area */}
            <ScrollArea className="flex-1 p-4" viewportRef={scrollRef}>
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex max-w-[85%] flex-col gap-2 ${msg.role === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-sm ${
                          msg.role === "user"
                            ? "bg-forest text-white rounded-tr-none"
                            : "bg-slate-100 text-slate-800 rounded-tl-none"
                        }`}
                      >
                        {msg.content}
                      </div>

                      {msg.actions && (
                        <div className="mt-1 flex flex-wrap gap-2">
                          {msg.actions.map((action, i) => (
                            <button
                              key={i}
                              onClick={action.onClick}
                              className="flex items-center gap-1.5 rounded-full border border-forest/20 bg-white px-3 py-1.5 text-[11px] font-medium text-forest transition-all hover:bg-forest hover:text-white"
                            >
                              {action.icon}
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl bg-slate-100 px-4 py-2.5 rounded-tl-none">
                      <div className="flex gap-1">
                        <span
                          className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t border-slate-100 p-4 bg-slate-50/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="h-10 border-slate-200 bg-white focus-visible:ring-forest"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isTyping}
                  className="h-10 w-10 shrink-0 bg-forest hover:bg-forest/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <p className="mt-2 text-center text-[10px] text-slate-400">
                Powered by Pura Vida AI Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-xl shadow-forest/20 transition-all"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
