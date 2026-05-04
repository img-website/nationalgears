const fs = require('fs');

const replacements = {
    'contact.html': `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
        @theme {
            --color-primary: #002045;
            --color-secondary: #f59e0b;
            --color-secondary-container: #fea619;
            --color-on-primary-container: #86a0cd;
            --animate-float: float 6s ease-in-out infinite;
            --animate-pulse-slow: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
    </style>`,

    'disclaimer.html': `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
        @theme {
            --color-primary: #002045;
            --color-secondary: #f59e0b;
            --font-sans: "Google Sans", sans-serif;
        }
        @utility max-w-8xl {
            max-width: 88rem;
        }
    </style>`,

    'privacy-policy.html': `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
        @theme {
            --color-primary: #002045;
            --color-secondary: #f59e0b;
            --font-sans: "Google Sans", sans-serif;
        }
        @utility max-w-8xl {
            max-width: 88rem;
        }
    </style>`,

    'terms-and-conditions.html': `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
        @theme {
            --color-primary: #002045;
            --color-secondary: #f59e0b;
            --font-sans: "Google Sans", sans-serif;
        }
        @utility max-w-8xl {
            max-width: 88rem;
        }
    </style>`,

    'gallery.html': `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
        @theme {
            --color-primary: #002045;
            --color-secondary: #f59e0b;
        }
        @utility max-w-8xl {
            max-width: 88rem;
        }
        @utility max-w-9xl {
            max-width: 96rem;
        }
    </style>`,

    'hydraulic-gears.html': `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
        @theme {
            --color-primary: #002045;
            --color-secondary: #f59e0b;
        }
        @utility max-w-8xl {
            max-width: 88rem;
        }
    </style>`
};

const v3Script = /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*/g;
const v4Script = /<!-- Tailwind CSS -->\s*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/@tailwindcss\/browser@4"><\/script>\s*/g;
const configRegex = /<script>\s*tailwind\.config[\s\S]*?<\/script>/;

for (const [file, replacement] of Object.entries(replacements)) {
    const filePath = 'd:\\nationalgears\\' + file;
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(v3Script, '');
        content = content.replace(v4Script, '');
        content = content.replace(configRegex, replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + file);
    }
}
