import type Framework from '../src/types/Framework.d.ts';

export const frameworks: Readonly<Record<string, Framework>> = Object.freeze({
  "blender": {
    "name": "Blender",
    "categories": ["tool", "3D", "graphics", "game_dev"]
  },

  "cohere": {
    "name": "Cohere",
    "categories": ["ai"]
  },

  "c": {
    "name": "C",
    "categories": ["firmware", "lowlevel"]
  },

  "cpp": {
    "name": "C++",
    "categories": ["firmware", "lowlevel"]
  },

  "css": {
    "name": "CSS",
    "categories": ["web_dev", "frontend", "app_dev"]
  },

  "expo": {
    "name": "Expo Go",
    "categories": ["app_dev"]
  },

  "flask": {
    "name": "Flask",
    "categories": ["backend", "web_dev", "python"]
  },

  "gemini": {
    "name": "Gemini API",
    "categories": ["ai", "llm"]
  },

  "glsl": {
    "name": "OpenGL Shader",
    "categories": ["graphics", "game_dev", "language"]
  },

  "godot": {
    "name": "Godot Engine",
    "categories": ["game_dev"]
  },

  "html": {
    "name": "HTML",
    "categories": ["web_dev", "app_dev", "language"]
  },

  "java": {
    "name": "Java",
    "categories": ["language"]
  },

  "javascript": {
    "name": "JavaScript",
    "categories": ["web_dev", "app_dev", "language"]
  },

  "nextjs": {
    "name": "Next.js",
    "categories": ["web_dev", "backend"]
  },

  "pinia": {
    "name": "Pinia",
    "categories": ["web_dev", "backend"]
  },

  "postgresql": {
    "name": "PostgreSQL",
    "categories": ["sql", "web_dev", "backend"]
  },

  "python": {
    "name": "Python",
    "categories": ["ai", "language"]
  },

  "react": {
    "name": "React",
    "categories": ["web_dev"]
  },

  "reactn": {
    "name": "React Native",
    "categories": ["app_dev"]
  },

  "rpi": {
    "name": "Raspberry Pi",
    "categories": ["hardware", "lowlevel"]
  },

  "sqlalchemy": {
    "name": "SQLAlchemy",
    "categories": ["sql"]
  },

  "sqlite": {
    "name": "SQLite",
    "categories": ["sql"]
  },

  "studentvue": {
    "name": "Naviance API",
    "categories": ["web_dev", "backend", "api"]
  },

  "tailwind": {
    "name": "Tailwind CSS",
    "categories": ["web_dev"]
  },

  "typescript": {
    "name": "TypeScript",
    "categories": ["web_dev", "app_dev", "language"]
  },

  "vite": {
    "name": "Vite",
    "categories": ["web_dev"]
  },

  "vue": {
    "name": "Vue",
    "categories": ["web_dev"]
  }
});