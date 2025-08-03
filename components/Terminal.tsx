"use client";
import { useState, useEffect, useRef } from 'react';

interface Command {
  command: string;
  output: string | React.ReactNode;
  isTyping?: boolean;
  typedOutput?: string | React.ReactNode;
}

const commands = {
  help: {
    output: `Available commands:

Portfolio Commands:
• ⟨about⟩        - About Klaus Hajdaraj
• ⟨projects⟩     - View my projects
• ⟨skills⟩       - My technical skills
• ⟨experience⟩   - Work experience
• ⟨contact⟩      - Contact information
• ⟨education⟩    - Educational background
• ⟨certifications⟩ - Professional certifications
• ⟨leadership⟩   - Leadership experience

Terminal Commands:
• ⟨ls⟩           - List available commands
• ⟨cd [dir]⟩     - Change directory
• ⟨pwd⟩          - Print current directory
• ⟨whoami⟩       - Show current user
• ⟨date⟩         - Show current date/time
• ⟨echo [text]⟩  - Print text
• ⟨history⟩      - Show command history
• ⟨cat [section]⟩ - Display section content
• ⟨git⟩          - View GitHub profile
• ⟨git status⟩   - Show repository status
• ⟨git log⟩      - Show commit history
• ⟨uptime⟩       - Show system uptime
• ⟨ps⟩           - Show running processes
• ⟨clear⟩        - Clear terminal
• ⟨sudo⟩         - Admin commands (just kidding!)

Type any command to continue...`
  },
  ls: {
    output: '' // This will be dynamically generated
  },
  pwd: {
    output: '' // This will be dynamically generated
  },
  whoami: {
    output: `I'm Klaus.

Junior Data Scientist @ MSD Czech Republic
Lifelong learner | Always eager to connect!

Type 'about' to learn more about me!`
  },
  about: {
    output: (
      <div className="text-white">
        <div className="mb-2">
          👋🏻 Hi, I&apos;m Klaus, a junior data scientist at{' '}
          <a 
            href="https://www.msd.cz/cs/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline hover:no-underline transition-colors"
          >
            MSD Czech Republic
          </a>
          .
        </div>
        <div className="mb-2">
          🐍 I&apos;m always looking for modern, open-source tools and latest trends in AI/ML.<br />
          ⚒️ I love building innovative solutions that solve complex real-world problems.<br />
          ☕️ Feel free to reach out for a chat or collaboration!
        </div>
        <div className="text-white">
          Type &apos;experience&apos; or &apos;skills&apos; to learn more!
        </div>
      </div>
    )
  },
  projects: {
    output: (
      <div className="text-white">
        <div className="mb-4">🚀 Projects I have contributed to:</div>
        
        <div className="mb-3">
          <div>• Animal Health Monitoring</div>
          <div className="ml-2 text-gray-300">- ML models for animal health monitoring, time-series forecasting</div>
        </div>
        
        <div className="mb-3">
          <div>• Manufacturing Optimization</div>
          <div className="ml-2 text-gray-300">- Optimization and simulation for pharmaceutical manufacturing processes</div>
        </div>
        
        <div className="mb-3">
          <div>• Image Processing for Spatial Transcriptomics</div>
          <div className="ml-2 text-gray-300">- Computer vision in genomics space for Alzheimer&apos;s and cancer research</div>
        </div>
        
        <div className="mb-3">
          <div>• Interactive AI-Powered Portfolio Terminal (Current)</div>
          <div className="ml-2 text-gray-300">- Full-stack terminal interface with real-time interactions</div>
        </div>
        
        <div className="mb-4">
          <div>• Causal Machine Learning for Heterogeneous Treatment Effects</div>
          <div className="ml-2 text-gray-300">
            - Master thesis:{' '}
            <a 
              href="https://github.com/klaushajdaraj/ml-treatment-effects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline hover:no-underline transition-colors"
            >
              Machine learning for better personalized treatment effects
            </a>
          </div>
        </div>
        
        <div className="text-white">
          Type &apos;contact&apos; to discuss collaborations!
        </div>
      </div>
    )
  },
  skills: {
    output: (
      <div className="text-white">
        <div className="mb-4">💻 Technical Skills / Tools:</div>
        
        <div className="mb-2">
          <div>• Languages:</div>
          <div className="ml-2 text-gray-300">Python, R, SQL, git/bash (CLI)</div>
        </div>
        
        <div className="mb-2">
          <div>• Version Control:</div>
          <div className="ml-2 text-gray-300">GitHub / Actions (CI/CD) / Pages (Documentation)</div>
        </div>
        
        <div className="mb-2">
          <div>• AI/ML:</div>
          <div className="ml-2 text-gray-300">Scikit-learn, statsmodels, Polars, PyTorch, scitkit-image, OpenAI API, Langchain</div>
        </div>
        
        <div className="mb-2">
          <div>• Database:</div>
          <div className="ml-2 text-gray-300">MySQL, Snowflake, PostgreSQL</div>
        </div>
        
        <div className="mb-2">
          <div>• Cloud & Infrastructure:</div>
          <div className="ml-2 text-gray-300">AWS (EC2), Vercel, Docker, Ollama</div>
        </div>
        
        <div className="mb-2">
          <div>• Python Ecosystem:</div>
          <div className="ml-2 text-gray-300">uv, conda, pip-tools, pre-commit hooks, ruff, Hydra, Sphinx (Documentation)</div>
        </div>
        
        <div className="mb-2">
          <div>• Data & ML Platforms:</div>
          <div className="ml-2 text-gray-300">Dataiku (Automation)</div>
        </div>
        
        <div className="mb-4">
          <div>• Visualization:</div>
          <div className="ml-2 text-gray-300">Dash, Streamlit, Marimo (Interactive Dashboards)</div>
        </div>
        
        <div className="text-white">
          Type &apos;projects&apos; to see them in action!
        </div>
      </div>
    )
  },
  experience: {
    output: (
      <div className="text-white">
        <div className="mb-4">💼 Work Experience:</div>
        
        <div className="mb-3">
          <div>• Junior Data Scientist - MSD Czech Republic (Jul 2024 - Present)</div>
          <div className="ml-2 text-gray-300">- IT Emerging Talent Rotation Program participant</div>
          <div className="ml-2 text-gray-300">- Machine learning in animal health monitoring and manufacturing optimization</div>
          <div className="ml-2 text-gray-300">- Computer vision and image processing in genomics for Alzheimer&apos;s research</div>
          <div className="ml-2 text-gray-300">- Generative AI and NLP for computer vision in medical applications</div>
        </div>
        
        <div className="mb-4">
          <div>• Intern Data Scientist - MSD Czech Republic (Apr 2023 - Jul 2024)</div>
          <div className="ml-2 text-gray-300">- Machine learning in animal health monitoring space</div>
        </div>
        
        <div className="mb-4">🗣️ Speaking Engagements:</div>
        
        <div className="mb-1">• Data and AI Tirana Meetup</div>
        <div className="mb-1">• CERGE-EI</div>
        <div className="mb-1">• Polytechnic University of Tirana</div>
        <div className="mb-4">• University of Tirana</div>
        
        <div className="text-white">
          Type &apos;education&apos; to see my academic background!
        </div>
      </div>
    )
  },
  contact: {
    output: (
      <div className="text-white">
        <div className="mb-4">📧 Contact Information:</div>
        
        <div className="mb-2">
          • Email:{' '}
          <a 
            href="mailto:klaus.hajdaraj1@gmail.com"
            className="text-blue-400 hover:text-blue-300 underline hover:no-underline transition-colors"
          >
            klaus.hajdaraj1@gmail.com
          </a>
        </div>
        
        <div className="mb-2">
          • LinkedIn:{' '}
          <a 
            href="https://www.linkedin.com/in/klaus-hajdaraj-a85933198/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline hover:no-underline transition-colors"
          >
            www.linkedin.com/klaus-hajdaraj/
          </a>
        </div>
        
        <div className="mb-4">
          • GitHub:{' '}
          <a 
            href="https://github.com/klaushajdaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline hover:no-underline transition-colors"
          >
            github.com/klaushajdaraj
          </a>
        </div>
        
        <div className="text-white">
          Ready to connect? Type &apos;projects&apos; to see my work!
        </div>
      </div>
    )
  },
  education: {
    output: (
      <div className="text-white">
        <div className="mb-4">🎓 Education:</div>
        
        <div className="mb-3">
          <div>• Master&apos;s degree, Economic Research - Econometrics</div>
          <div className="ml-2 text-gray-300">CERGE-EI (Sep 2022 - Sep 2024) - Graduated Summa Cum Laude</div>
          <div className="ml-2 text-gray-300">Thesis Research: Causal Machine Learning for Heterogeneous Treatment Effects</div>
        </div>
        
        <div className="mb-3">
          <div>• Master of Science - MS, Data Science and Analytics</div>
          <div className="ml-2 text-gray-300">Iscte - Instituto Universitário de Lisboa (Sep 2021 - Sep 2022)</div>
          <div className="ml-2 text-gray-300">Exchange Student</div>
        </div>
        
        <div className="mb-3">
          <div>• Master of Science - MS, Data Science</div>
          <div className="ml-2 text-gray-300">The Silesian University of Technology (Sep 2020 - Feb 2021)</div>
          <div className="ml-2 text-gray-300">Exchange Student</div>
        </div>
        
        <div className="mb-3">
          <div>• Bachelor&apos;s degree, Computer Science</div>
          <div className="ml-2 text-gray-300">Univerza v Mariboru (Feb 2020 - Jul 2020)</div>
          <div className="ml-2 text-gray-300">Exchange Student</div>
        </div>
        
        <div className="mb-4">
          <div>• Bachelor&apos;s degree, Applied Mathematics</div>
          <div className="ml-2 text-gray-300">University of Tirana (2017 - 2020)</div>
        </div>
        
        <div className="text-white">
          Type &apos;certifications&apos; to see my professional credentials!
        </div>
      </div>
    )
  },
  certifications: {
    output: (
      <div className="text-white">
        <div className="mb-4">📄 Professional Certifications:</div>
        
        <div className="mb-2">• AWS Certified Cloud Practitioner</div>
        <div className="mb-2">• Dataiku Certified Professional</div>
        
        <div className="mb-3">
          <div>• ML Certifications</div>
          <div className="ml-2 text-gray-300">- Deep Learning Specialization</div>
          <div className="ml-2 text-gray-300">- Computer Vision</div>
          <div className="ml-2 text-gray-300">- Natural Language Processing</div>
        </div>
        
        <div className="text-white">
          Type &apos;experience&apos; to see how I&apos;ve applied these skills!
        </div>
      </div>
    )
  },
  leadership: {
    output: (
      <div className="text-white">
        <div className="mb-4">🎯 Leadership & Community:</div>
        
        <div className="mb-3">
          <div>• Speaker & Presenter</div>
          <div className="ml-2 text-gray-300">- Data and AI Tirana Meetup</div>
          <div className="ml-2 text-gray-300">- CERGE-EI guest lectures</div>
          <div className="ml-2 text-gray-300">- University of Tirana presentations</div>
        </div>
        
        <div className="mb-3">
          <div>• IT Emerging Talent Program Participant (2024)</div>
          <div className="ml-2 text-gray-300">- MSD Czech Republic rotation program</div>
        </div>
        
        <div className="mb-4">
          <div>• Community Engagement</div>
          <div className="ml-2 text-gray-300">- Active in data science and AI communities</div>
          <div className="ml-2 text-gray-300">- Passionate about knowledge sharing and collaboration</div>
        </div>
        
        <div className="text-white">
          Type &apos;contact&apos; to discuss collaboration opportunities!
        </div>
      </div>
    )
  },
  sudo: {
    output: `$ sudo rm -rf /
Access denied! 🚷

Just kidding! This is a portfolio site, not a real terminal!

Type 'help' to see real commands! 😄`
  },

  uptime: {
    output: `Portfolio has been running since you opened this page.
System load: Minimal (this is just a portfolio site! 😄)

Type 'projects' to see what I've been working on!`
  },
  ps: {
    output: `PID   COMMAND
1234  portfolio-server
1235  3d-badge-renderer
1236  terminal-interface
1237  typing-animation
1238  ai-brain

All systems operational! Type 'skills' to see the tech stack.`
  },
  git: {
    output: (
      <div className="text-white">
        <div className="mb-2">🐙 GitHub Profile:</div>
        <div className="mb-2">
          <span className="text-custom-green">Username:</span> klaushajdaraj
        </div>
        <div className="mb-2">
          <span className="text-custom-green">Profile:</span>{' '}
          <a 
            href="https://github.com/klaushajdaraj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline hover:no-underline transition-colors"
          >
            github.com/klaushajdaraj
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-300">
          💡 Check out my repositories and contributions!
        </div>
      </div>
    )
  },
  clear: {
    output: ''
  }
};

// Helper function to parse command markers and apply green styling
const parseCommandText = (text: string) => {
  const parts = text.split(/(⟨[^⟩]*⟩)/);
  return parts.map((part, index) => {
    if (part.startsWith('⟨') && part.endsWith('⟩')) {
      const commandText = part.slice(1, -1); // Remove ⟨ and ⟩
      return <span key={index} className="text-custom-green">{commandText}</span>;
    }
    return part;
  });
};

export default function Terminal() {
  const [history, setHistory] = useState<Command[]>([
    { 
      command: 'welcome', 
      output: `Hi, I'm Klaus Hajdaraj, a Data Scientist.

Welcome to my interactive 'AI powered' portfolio terminal!
Type 'help' to see available commands.`,
      isTyping: false,
      typedOutput: `Hi, I'm Klaus Hajdaraj, a Data Scientist.

Welcome to my interactive 'AI powered' portfolio terminal!
Type 'help' to see available commands.`
    }
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-focus on window focus
  useEffect(() => {
    const handleWindowFocus = () => {
      inputRef.current?.focus();
    };

    window.addEventListener('focus', handleWindowFocus);
    return () => window.removeEventListener('focus', handleWindowFocus);
  }, []);

  // Auto-scroll to bottom when new content is added
  const scrollToBottom = () => {
    // Method 1: Try scrollIntoView on anchor element
    if (scrollAnchorRef.current) {
      scrollAnchorRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
    }
    // Method 2: Fallback to manual scroll
    else if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const lowerCmd = trimmedCmd.toLowerCase();
    
    if (trimmedCmd === '') return;

    // Handle special terminal commands with arguments
    if (lowerCmd.startsWith('echo ')) {
      const text = trimmedCmd.substring(5);
      const output = text || '';
      
      const newCommand: Command = { 
        command: cmd, 
        output,
        isTyping: true,
        typedOutput: ''
      };
      
      setHistory(prev => [...prev, newCommand]);
      setCurrentCommand('');
      
      // Start typing effect for echo
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        setHistory(prev => {
          const newHistory = [...prev];
          const lastCommand = newHistory[newHistory.length - 1];
          
          if (lastCommand && typeof output === 'string') {
            if (currentIndex < output.length) {
              lastCommand.typedOutput = output.substring(0, currentIndex + 1);
            } else {
              lastCommand.isTyping = false;
              lastCommand.typedOutput = output;
              clearInterval(typeInterval);
            }
          }
          
          return newHistory;
        });
        
        // Auto-scroll after content update
        setTimeout(scrollToBottom, 0);
        
        currentIndex++;
      }, 8);
      
      return;
    }

    if (lowerCmd === 'cd' || lowerCmd.startsWith('cd ')) {
      const targetDir = lowerCmd === 'cd' ? '~' : trimmedCmd.substring(3).trim();
      let output: string | React.ReactNode = '';
      let newDir = currentDirectory;
      
      if (targetDir === '~' || targetDir === '' || targetDir === '/') {
        newDir = '~';
        output = 'Changed to home directory.\n\nUse ⟨ls⟩ to see available directories.';
      } else if (targetDir === '..') {
        newDir = '~';
        output = 'Changed to home directory.\n\nUse ⟨ls⟩ to see available directories.';
      } else if (commands[targetDir as keyof typeof commands]) {
        newDir = targetDir;
        const sectionOutput = commands[targetDir as keyof typeof commands].output;
        
        if (typeof sectionOutput === 'string') {
          output = `Changed to ${targetDir} directory.\n\n${sectionOutput}`;
        } else {
          // For JSX outputs, create a JSX combination
          output = (
            <div>
              <div className="mb-4 text-white">
                Changed to {targetDir} directory.
              </div>
              {sectionOutput}
            </div>
          );
        }
      } else {
        output = `cd: ${targetDir}: No such file or directory\n\nUse ⟨ls⟩ to see available directories.`;
      }
      
      if (newDir !== currentDirectory) {
        setCurrentDirectory(newDir);
      }
      
      const newCommand: Command = { 
        command: cmd, 
        output,
        isTyping: typeof output === 'string',
        typedOutput: typeof output === 'string' ? '' : output
      };
      
      setHistory(prev => [...prev, newCommand]);
      setCurrentCommand('');
      
      // Only apply typing effect to string outputs
      if (typeof output !== 'string') {
        return;
      }
      
      // Start typing effect for cd
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        setHistory(prev => {
          const newHistory = [...prev];
          const lastCommand = newHistory[newHistory.length - 1];
          
          if (lastCommand && typeof output === 'string') {
            if (currentIndex < output.length) {
              lastCommand.typedOutput = output.substring(0, currentIndex + 1);
            } else {
              lastCommand.isTyping = false;
              lastCommand.typedOutput = output;
              clearInterval(typeInterval);
            }
          }
          
          return newHistory;
        });
        
        // Auto-scroll after content update
        setTimeout(scrollToBottom, 0);
        
        currentIndex++;
      }, 8);
      
      return;
    }

    if (lowerCmd.startsWith('git ')) {
      const gitCommand = trimmedCmd.substring(4).trim();
      let output = '';
      
      if (gitCommand === 'status') {
        output = `On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

📝 This is Klaus's portfolio repository!
Visit the actual repo: github.com/klaushajdaraj`;
      } else if (gitCommand === 'log') {
        output = `commit abc123def456 (HEAD -> main, origin/main)
Author: Klaus Hajdaraj <klaus.hajdaraj1@gmail.com>
Date:   ${new Date().toDateString()}

    ✨ Added interactive terminal portfolio

commit def456abc123
Author: Klaus Hajdaraj <klaus.hajdaraj1@gmail.com>  
Date:   ${new Date(Date.now() - 86400000).toDateString()}

    🚀 Initial portfolio setup

📍 Use ⟨git⟩ to see GitHub profile!`;
      } else if (gitCommand === 'remote -v') {
        output = `origin  https://github.com/klaushajdaraj/portfolio.git (fetch)
origin  https://github.com/klaushajdaraj/portfolio.git (push)

🔗 Visit: github.com/klaushajdaraj`;
      } else {
        output = `git: '${gitCommand}' is not a git command. See 'git --help'.

Available git commands in this terminal:
• git status  - Show repository status
• git log     - Show commit history  
• git remote -v - Show remote repositories

💡 Use ⟨git⟩ to visit my GitHub profile!`;
      }
      
      const newCommand: Command = { 
        command: cmd, 
        output,
        isTyping: true,
        typedOutput: ''
      };
      
      setHistory(prev => [...prev, newCommand]);
      setCurrentCommand('');
      
      // Start typing effect for git commands
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        setHistory(prev => {
          const newHistory = [...prev];
          const lastCommand = newHistory[newHistory.length - 1];
          
          if (lastCommand && typeof output === 'string') {
            if (currentIndex < output.length) {
              lastCommand.typedOutput = output.substring(0, currentIndex + 1);
            } else {
              lastCommand.isTyping = false;
              lastCommand.typedOutput = output;
              clearInterval(typeInterval);
            }
          }
          
          return newHistory;
        });
        
        // Auto-scroll after content update
        setTimeout(scrollToBottom, 0);
        
        currentIndex++;
      }, 8);
      
      return;
    }

    if (lowerCmd === 'history') {
      const historyOutput = history.map((item, index) => `${index + 1}  ${item.command}`).join('\n') + 
                           `\n${history.length + 1}  ${cmd}`;
      
      const newCommand: Command = { 
        command: cmd, 
        output: historyOutput,
        isTyping: true,
        typedOutput: ''
      };
      
      setHistory(prev => [...prev, newCommand]);
      setCurrentCommand('');
      
      // Start typing effect for history
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        setHistory(prev => {
          const newHistory = [...prev];
          const lastCommand = newHistory[newHistory.length - 1];
          
          if (lastCommand && typeof historyOutput === 'string') {
            const lines = historyOutput.split('\n');
            const currentLine = Math.floor(currentIndex / 20);
            
            if (currentLine < lines.length) {
              const lineContent = lines[currentLine];
              const charIndex = currentIndex % 20;
              
              if (charIndex < lineContent.length) {
                const newTypedOutput = lines.slice(0, currentLine).join('\n') + 
                  (currentLine > 0 ? '\n' : '') + 
                  lineContent.substring(0, charIndex + 1);
                
                lastCommand.typedOutput = newTypedOutput;
              } else {
                const newTypedOutput = lines.slice(0, currentLine + 1).join('\n');
                lastCommand.typedOutput = newTypedOutput;
              }
            } else {
              lastCommand.isTyping = false;
              lastCommand.typedOutput = historyOutput;
              clearInterval(typeInterval);
            }
          }
          
          return newHistory;
        });
        
        // Auto-scroll after content update
        setTimeout(scrollToBottom, 0);
        
        currentIndex++;
      }, 8);
      
      return;
    }

    if (lowerCmd.startsWith('cat ')) {
      const section = trimmedCmd.substring(4).toLowerCase();
      const sectionCommand = commands[section as keyof typeof commands];
      const output = sectionCommand ? sectionCommand.output : `cat: ${section}: No such file or directory`;
      
      const newCommand: Command = { 
        command: cmd, 
        output,
        isTyping: typeof output === 'string',
        typedOutput: typeof output === 'string' ? '' : output
      };
      
      setHistory(prev => [...prev, newCommand]);
      setCurrentCommand('');
      
      // Only apply typing effect to string outputs
      if (typeof output !== 'string') {
        return;
      }
      
      // Start typing effect for cat
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        setHistory(prev => {
          const newHistory = [...prev];
          const lastCommand = newHistory[newHistory.length - 1];
          
          if (lastCommand && typeof output === 'string') {
            const lines = output.split('\n');
            const currentLine = Math.floor(currentIndex / 20);
            
            if (currentLine < lines.length) {
              const lineContent = lines[currentLine];
              const charIndex = currentIndex % 20;
              
              if (charIndex < lineContent.length) {
                const newTypedOutput = lines.slice(0, currentLine).join('\n') + 
                  (currentLine > 0 ? '\n' : '') + 
                  lineContent.substring(0, charIndex + 1);
                
                lastCommand.typedOutput = newTypedOutput;
              } else {
                const newTypedOutput = lines.slice(0, currentLine + 1).join('\n');
                lastCommand.typedOutput = newTypedOutput;
              }
            } else {
              lastCommand.isTyping = false;
              lastCommand.typedOutput = output;
              clearInterval(typeInterval);
            }
          }
          
          return newHistory;
        });
        
        // Auto-scroll after content update
        setTimeout(scrollToBottom, 0);
        
        currentIndex++;
      }, 8);
      
      return;
    }

    if (lowerCmd === 'clear') {
      setHistory([]);
      setCurrentCommand('');
      return;
    }

    // Handle regular commands
    const command = commands[lowerCmd as keyof typeof commands];
    
    // Handle dynamic commands
    let output;
    if (lowerCmd === 'date') {
      output = '📅 ' + new Date().toString() + '\n\nTime flies when you\'re coding! ⏰ Type \'projects\' to see what I\'ve built.';
    } else if (lowerCmd === 'pwd') {
      const currentPath = currentDirectory === '~' 
        ? '/home/klaus-hajdaraj/portfolio'
        : `/home/klaus-hajdaraj/portfolio/${currentDirectory}`;
      output = `${currentPath}\n\nYou are currently in: ${currentDirectory === '~' ? 'home directory' : currentDirectory + ' section'}`;
    } else if (lowerCmd === 'ls') {
      if (currentDirectory === '~') {
        output = `total 9
drwxr-xr-x  about
drwxr-xr-x  projects
drwxr-xr-x  skills
drwxr-xr-x  experience
drwxr-xr-x  contact
drwxr-xr-x  education
drwxr-xr-x  certifications
drwxr-xr-x  leadership

Use ⟨cd [directory]⟩ to enter a directory!`;
      } else {
        output = `You are in the ${currentDirectory} directory.\n\nUse ⟨cd ~⟩ or ⟨cd ..⟩ to go back to home directory.`;
      }
    } else {
      output = command ? command.output : `Command not found: ${cmd}. Type 'help' for available commands.`;
    }
    
    // Add new command with typing effect
    const newCommand: Command = { 
      command: cmd, 
      output,
      isTyping: typeof output === 'string',
      typedOutput: typeof output === 'string' ? '' : output
    };
    
    setHistory(prev => [...prev, newCommand]);
    setCurrentCommand('');
    
    // Only apply typing effect to string outputs
    if (typeof output !== 'string') {
      return;
    }
    
    // Start typing effect
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      setHistory(prev => {
        const newHistory = [...prev];
        const lastCommand = newHistory[newHistory.length - 1];
        
        if (lastCommand && typeof output === 'string') {
          const lines = output.split('\n');
          const currentLine = Math.floor(currentIndex / 20); // 20 chars per line (faster)
          
          if (currentLine < lines.length) {
            const lineContent = lines[currentLine];
            const charIndex = currentIndex % 20;
            
            if (charIndex < lineContent.length) {
              const newTypedOutput = lines.slice(0, currentLine).join('\n') + 
                (currentLine > 0 ? '\n' : '') + 
                lineContent.substring(0, charIndex + 1);
              
              lastCommand.typedOutput = newTypedOutput;
            } else {
              // Move to next line
              const newTypedOutput = lines.slice(0, currentLine + 1).join('\n');
              lastCommand.typedOutput = newTypedOutput;
            }
          } else {
            // Finished typing
            lastCommand.isTyping = false;
            lastCommand.typedOutput = output;
            clearInterval(typeInterval);
          }
        }
        
        return newHistory;
      });
      
      // Auto-scroll after content update
      setTimeout(scrollToBottom, 0);
      
      currentIndex++;
    }, 8); // 8ms per character (faster)
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand);
    }
  };

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCommand(e.target.value);
    setCursorPosition(e.target.selectionStart || 0);
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCursorPosition(target.selectionStart || 0);
  };

  const getAllCommands = () => {
    // Basic commands from the commands object
    const basicCommands = Object.keys(commands);
    // Additional system commands
    const systemCommands = ['echo', 'history', 'clear', 'date', 'pwd', 'ls', 'cd', 'git', 'cat', 'whoami', 'uptime', 'ps'];
    // Git subcommands
    const gitCommands = ['git status', 'git log', 'git remote -v'];
    
    return Array.from(new Set([...basicCommands, ...systemCommands, ...gitCommands])).sort();
  };

  const handleTabCompletion = () => {
    const trimmedCmd = currentCommand.trim().toLowerCase();
    if (!trimmedCmd) return;
    
    const allCommands = getAllCommands();
    const matches = allCommands.filter(cmd => cmd.startsWith(trimmedCmd));
    
    if (matches.length === 1) {
      // Single match - complete the command
      setCurrentCommand(matches[0]);
      setCursorPosition(matches[0].length);
    } else if (matches.length > 1) {
      // Multiple matches - add a suggestion line to history
      const suggestionText = `Possible completions: ${matches.join(', ')}`;
      const newCommand: Command = {
        command: currentCommand,
        output: suggestionText,
        isTyping: false,
        typedOutput: suggestionText
      };
      setHistory(prev => [...prev, newCommand]);
      setTimeout(scrollToBottom, 0);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    
    if (e.key === 'Tab') {
      e.preventDefault(); // Prevent default tab behavior
      handleTabCompletion();
      return;
    }
    
    setTimeout(() => {
      setCursorPosition(target.selectionStart || 0);
    }, 0);
  };

  return (
    <div ref={terminalRef} className="terminal-container w-full h-full overflow-y-auto bg-black text-custom-green font-mono px-4 pb-6" onClick={() => inputRef.current?.focus()}>
      {/* Available Commands - Fixed on desktop */}
      <div className="available-commands py-4 text-sm border-b border-custom-green pb-2 md:fixed bg-black z-10 hidden md:block">
          help | about | projects | skills | experience | contact | education | certifications | leadership | sudo | clear
      </div>

      {/* Command History */}
      <div className="command-history md:pt-16 pt-2">
        {history.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="command-line flex items-center">
              <span className="text-blue-400 mr-2">hajdaraj@portfolio:{currentDirectory}$</span>
              <span>{item.command}</span>
            </div>
            {item.output && (
              <div className={`response mt-1 whitespace-pre-wrap ${typeof item.output === 'string' ? 'text-white' : ''}`}>
                {item.isTyping && typeof item.typedOutput === 'string'
                  ? parseCommandText(item.typedOutput)
                  : typeof item.output === 'string' 
                    ? parseCommandText(item.output)
                    : item.output
                }
                {item.isTyping && (
                  <span className="cursor"></span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Command Input */}
      <div className="command-input flex items-center">
        <span className="text-blue-400 mr-2">hajdaraj@portfolio:{currentDirectory}$</span>
        <div className="fake-input flex-1 relative">
          <span className="text-custom-green">{currentCommand.substring(0, cursorPosition)}</span>
          <span className="cursor"></span>
          <span className="text-custom-green">{currentCommand.substring(cursorPosition)}</span>
          <input
            ref={inputRef}
            className="absolute top-0 left-0 w-full h-full opacity-0"
            aria-label="Terminal input"
            spellCheck="false"
            type="text"
            value={currentCommand}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onKeyDown={handleInputKeyDown}
            onClick={handleInputClick}
            autoComplete="off"
            style={{ caretColor: 'transparent' }}
            inputMode="text"
          />
        </div>
      </div>
      <div ref={scrollAnchorRef}></div>
    </div>
  );
} 