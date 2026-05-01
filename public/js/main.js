// Custom Cursor Logic
document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia("(pointer: fine)").matches) {
        // Create cursor elements if they don't exist
        if (!document.querySelector('.custom-cursor-dot')) {
            const dot = document.createElement('div');
            dot.className = 'custom-cursor-dot';
            document.body.appendChild(dot);

            const outline = document.createElement('div');
            outline.className = 'custom-cursor-outline';
            document.body.appendChild(outline);
        }

        const cursorDot = document.querySelector('.custom-cursor-dot');
        const cursorOutline = document.querySelector('.custom-cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 150, fill: "forwards" });
        });

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .cursor-pointer, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hovering');
            });
        });
    }

    // Initialize Lucide icons globally
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Render Header if root exists
    renderHeader();
    // Render Footer if root exists
    renderFooter();
    // Render Contact Popup
    renderContactPopup();
});

function renderHeader() {
    const headerRoot = document.getElementById('header-root');
    if (!headerRoot) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const navLinks = [
        { name: 'Home', url: 'index.html' },
        {
            name: 'About Us',
            url: 'about-us.html',
            dropdown: [
                { name: 'Company Overview', url: 'about-us.html', icon: 'info' },
                { name: 'Management Desk', url: 'management-desk.html', icon: 'user' },
                { name: 'Team', url: 'team.html', icon: 'users' },
                { name: 'Certification', url: 'certification.html', icon: 'award' },
                { name: 'Expertise', url: 'expertise.html', icon: 'layers' }
            ]
        },
        {
            name: 'Products',
            url: 'products.html',
            dropdown: [
                { name: 'All Products', url: 'products.html', icon: 'package' },
                { name: 'Spur Gears', url: 'spur-gears.html', icon: 'settings' },
                { name: 'Helical Gears', url: 'gear-types.html', icon: 'layers' },
                { name: 'Bevel Gears', url: 'gear-types.html', icon: 'component' },
                { name: 'Internal Gears', url: 'gear-types.html', icon: 'circle-dot' },
                { name: 'Special Gears', url: 'special-gears.html', icon: 'star' },
                { name: 'Hydraulic Gears', url: 'hydraulic-gears.html', icon: 'droplet' }
            ]
        },
        { name: 'Manufacturing', url: 'manufacturing.html' },
        { name: 'Gallery', url: 'gallery.html' },
        { name: 'FAQ', url: 'faq.html' },
        { name: 'Contact', url: 'contact.html' }
    ];

    const getLinkClass = (url) => {
        const isActive = currentPath === url || (currentPath === '' && url === 'index.html');
        return isActive
            ? 'px-4 py-2 rounded-lg bg-primary/5 text-primary font-bold text-sm transition-all'
            : 'px-4 py-2 rounded-lg text-slate-600 font-medium text-sm hover:bg-slate-100/80 hover:text-primary transition-all duration-300';
    };

    headerRoot.innerHTML = `
    <header class="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl transition-all duration-500">
        <!-- Primary Brand Top Bar -->
        <div id="top-bar" class="hidden md:flex items-center justify-between px-4 sm:px-6 lg:px-6 py-3.5 bg-primary border-b border-white/10 relative overflow-hidden rounded-t-2xl transition-all duration-500 ease-in-out">
            <!-- Decorative Blueprint Grid Background -->
            <div class="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]"></div>

            <div class="flex items-center gap-10 relative z-10">
                <a href="tel:+1234567890" class="flex items-center gap-3 lg:text-sm text-xs font-black text-white/90 hover:text-amber-400 transition-all tracking-[0.1em] group">
                    <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-amber-400/50 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all">
                        <i data-lucide="phone" class="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform"></i>
                    </div>
                    <span class="lg:text-sm text-xs">+1 (234) 567-890</span>
                </a>
                <a href="mailto:info@nationalgears.com" class="flex items-center gap-3 lg:text-sm text-xs font-black text-white/90 hover:text-amber-400 transition-all tracking-[0.1em] group">
                    <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-amber-400/50 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all">
                        <i data-lucide="mail" class="w-3.5 h-3.5 text-amber-400 group-hover:-translate-y-0.5 transition-transform"></i>
                    </div>
                    <span class="lg:text-sm text-xs">info@nationalgears.com</span>
                </a>
            </div>

            <!-- Search Bar -->
            <div class="flex-1 max-w-lg px-12 relative z-10">
                <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-amber-300/20 to-amber-500/20 rounded-xl blur-md opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                    <div class="relative flex items-center">
                        <input type="text" placeholder="Search technical specs..." class="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-12 pr-14 text-sm font-medium text-white focus:outline-none focus:bg-white/[0.15] focus:border-amber-400/50 transition-all placeholder:text-white/40 shadow-inner">
                        <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-amber-400 transition-colors"></i>
                        <button class="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-500 hover:lg:bg-amber-400 text-primary flex items-center justify-center rounded-xl transition-all hover:lg:scale-105 active:scale-95 shadow-lg shadow-amber-500/20 group/btn">
                            <i data-lucide="search" class="w-4 h-4 group-hover/btn:lg:scale-110 transition-transform"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Social Icons -->
            <div class="flex items-center gap-3 relative z-10">
                <a href="#" class="size-9 rounded-xl flex items-center justify-center bg-[#1877F2]/10 text-[#1877F2] lg:bg-transparent lg:text-slate-400 hover:lg:bg-[#1877F2] hover:lg:text-white transition-all border border-white/5"><svg class="size-4" fill="currentColor" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                <a href="#" class="size-9 rounded-xl flex items-center justify-center bg-[#1DA1F2]/10 text-[#1DA1F2] lg:bg-transparent lg:text-slate-400 hover:lg:bg-[#1DA1F2] hover:lg:text-white transition-all border border-white/5"><svg class="size-4" fill="currentColor" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-77.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
                <a href="#" class="size-9 rounded-xl flex items-center justify-center bg-[#0A66C2]/10 text-[#0A66C2] lg:bg-transparent lg:text-slate-400 hover:lg:bg-[#0A66C2] hover:lg:text-white transition-all border border-white/5"><svg class="size-4" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
                <a href="#" class="size-9 rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#f9ce34]/20 via-[#ee2a7b]/20 to-[#6228d7]/20 text-[#ee2a7b] lg:bg-none lg:bg-transparent lg:text-slate-400 hover:lg:bg-gradient-to-tr hover:lg:from-[#f9ce34] hover:lg:via-[#ee2a7b] hover:lg:to-[#6228d7] hover:lg:text-white transition-all border border-white/5"><svg class="size-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>

            </div>
        </div>

        <div class="w-full px-4 sm:px-6 lg:px-6 flex items-center justify-between h-20">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-3 cursor-pointer group">
                <div class="w-11 h-11 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-all">
                    <i data-lucide="settings" class="md:size-6 size-5 animate-[spin_8s_linear_infinite]"></i>
                </div>
                <div class="flex flex-col">
                    <span class="font-black md:text-xl text-lg tracking-tight text-slate-900 leading-none">National</span>
                    <span class="font-bold md:text-sm text-xs tracking-[0.3em] text-amber-500 leading-none">Gears</span>
                </div>
            </a>

            <!-- Navigation -->
            <nav class="hidden md:flex items-center gap-1">
                ${navLinks.map(link => {
        if (link.dropdown) {
            return `
                        <div class="relative group">
                            <a href="${link.url}" class="px-4 py-2 rounded-lg text-slate-600 font-medium text-sm hover:bg-slate-100/80 hover:text-primary transition-all duration-300 flex items-center gap-1">
                                ${link.name}
                                <i data-lucide="chevron-down" class="size-4 group-hover:rotate-180 transition-transform duration-300"></i>
                            </a>

                            <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden p-2">
                                ${link.dropdown.map(sub => `
                                    <a href="${sub.url}" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 group/sub transition-all">
                                        <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover/sub:bg-primary group-hover/sub:text-white transition-all">
                                            <i data-lucide="${sub.icon}" class="w-4 h-4"></i>
                                        </div>
                                        <span class="text-sm font-bold text-slate-600 group-hover/sub:text-primary transition-all">${sub.name}</span>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                        `;
        }
        return `
                    <a class="${getLinkClass(link.url)}" href="${link.url}">${link.name}</a>
                    `;
    }).join('')}
            </nav>

            <!-- CTA -->
            <button onclick="toggleContactModal(true)" class="hidden sm:flex bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-6 py-2.5 h-12 flex items-center justify-center rounded-xl font-bold text-xs tracking-widest shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 gap-2">
                <i data-lucide="download" class="w-4 h-4"></i>Brochure
            </button>

            <!-- Mobile Toggle -->
            <label for="mobile-menu-toggle" class="md:hidden p-2 text-slate-600 hover:text-primary transition-colors cursor-pointer">
                <i data-lucide="menu" class="w-6 h-6"></i>
            </label>
        </div>
    </header>

    <!-- Mobile Menu Toggle Checkbox -->
    <input type="checkbox" id="mobile-menu-toggle" class="peer hidden">

    <!-- Mobile Sidebar Backdrop -->
    <label for="mobile-menu-toggle" class="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm md:hidden opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-500 cursor-pointer"></label>

    <!-- Mobile Sidebar Content -->
    <div class="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-sm:w-[75%] max-w-sm bg-white shadow-2xl flex flex-col px-6 pb-6 overflow-y-auto mobile-nav-scrollbar translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out md:hidden">
        <div class="flex flex-col items-center justify-center py-8 border-b border-slate-50 mb-4 relative">
            <div class="flex flex-col items-center text-center gap-3">
                <div class="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <i data-lucide="settings" class="w-6 h-6 animate-[spin_8s_linear_infinite]"></i>
                </div>
                <div class="flex flex-col items-center">
                    <span class="font-black text-xl tracking-tight text-slate-900 leading-none uppercase">National</span>
                    <span class="font-bold text-[0.625rem] tracking-[0.3em] text-amber-500 leading-none mt-1 uppercase">Gears</span>
                </div>
            </div>
            <label for="mobile-menu-toggle" class="absolute top-4 right-0 p-2 text-slate-400 hover:text-primary bg-slate-100 rounded-full cursor-pointer transition-colors">
                <i data-lucide="x" class="w-5 h-5"></i>
            </label>
        </div>
        
        <nav class="flex flex-col">
            ${navLinks.map((link, index) => {
        if (link.dropdown) {
            return `
                    <div class="flex flex-col border-b border-slate-50 last:border-0">
                        <button onclick="toggleMobileSubmenu(this)" class="w-full px-4 py-4 text-slate-900 font-black text-base tracking-tight flex items-center justify-between group">
                            <span class="flex items-center gap-2">${link.name}</span>
                            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-300"></i>
                        </button>
                        <div class="mobile-submenu hidden flex flex-col gap-1 pl-4 pb-4 overflow-hidden">
                            ${link.dropdown.map(sub => `
                                <a href="${sub.url}" class="px-4 py-3 rounded-xl text-slate-600 font-bold text-sm hover:text-primary transition-all flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                                        <i data-lucide="${sub.icon}" class="w-4 h-4"></i>
                                    </div>
                                    ${sub.name}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                    `;
        }
        return `
                <a href="${link.url}" class="px-4 py-4 border-b border-slate-50 last:border-0 text-slate-900 font-black text-base tracking-tight hover:text-primary transition-all flex items-center justify-between group">
                    ${link.name}
                </a>
                `;
    }).join('')}
        </nav>


        <div class="mt-auto pt-8 border-t border-slate-100">
            <button onclick="toggleContactModal(true)" class="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                <i data-lucide="phone" class="w-4 h-4"></i> Contact Us
            </button>
        </div>
    </div>
    `;

    // Re-initialize Lucide icons after injection
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Scroll Logic for Top Bar
    const topBar = document.getElementById('top-bar');
    const mainHeader = headerRoot.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            if (topBar) {
                topBar.style.maxHeight = '0px';
                topBar.style.paddingTop = '0px';
                topBar.style.paddingBottom = '0px';
                topBar.style.opacity = '0';
                topBar.style.borderBottomWidth = '0px';
            }
            if (mainHeader) {
                mainHeader.classList.remove('top-4');
                mainHeader.classList.add('top-0', 'w-[100%]', 'max-w-full', 'rounded-none');
            }
        } else {
            if (topBar) {
                topBar.style.maxHeight = '100px';
                topBar.style.paddingTop = '0.875rem';
                topBar.style.paddingBottom = '0.875rem';
                topBar.style.opacity = '1';
                topBar.style.borderBottomWidth = '1px';
            }
            if (mainHeader) {
                mainHeader.classList.add('top-4');
                mainHeader.classList.remove('top-0', 'w-[100%]', 'max-w-full', 'rounded-none');
            }
        }
    });
}

function renderFooter() {
    const footerRoot = document.getElementById('footer-root');
    if (!footerRoot) return;

    footerRoot.innerHTML = `
    <footer class="bg-primary relative overflow-hidden border-t border-slate-800 pt-20 pb-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[25rem] bg-blue-500/10 blur-[7.5rem] rounded-full pointer-events-none"></div>
        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
                <div class="md:col-span-12 lg:col-span-4">
                    <div class="flex items-center gap-3 mb-6 group cursor-pointer w-fit">
                        <div class="w-12 h-12 bg-white/10 backdrop-blur-md text-amber-500 rounded-xl flex items-center justify-center shadow-lg border border-white/10 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                            <i data-lucide="settings" class="w-6 h-6 animate-[spin_8s_linear_infinite]"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-black text-2xl tracking-tight text-white leading-none">National</span>
                            <span class="font-bold text-xs tracking-[0.3em] text-amber-500 leading-none mt-1">Gears</span>
                        </div>
                    </div>
                    <p class="font-light text-slate-400 mb-8 leading-relaxed max-w-sm">
                        Setting the standard in high-precision gear manufacturing since 1989. Engineered for durability, delivered with integrity.
                    </p>
                    <div class="flex gap-4">
                        <a class="w-10 h-10 rounded-lg bg-amber-500 text-white lg:bg-white/5 lg:border lg:border-white/10 flex items-center justify-center lg:text-slate-400 hover:lg:bg-amber-500 hover:lg:text-white hover:lg:border-amber-500 transition-all duration-300 hover:lg:-translate-y-1" href="#">
                            <svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a class="w-10 h-10 rounded-lg bg-[#1DA1F2] text-white lg:bg-white/5 lg:border lg:border-white/10 flex items-center justify-center lg:text-slate-400 hover:lg:bg-[#1DA1F2] hover:lg:text-white hover:lg:border-[#1DA1F2] transition-all duration-300 hover:lg:-translate-y-1" href="#">
                            <svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </a>
                        <a class="w-10 h-10 rounded-lg bg-[#0A66C2] text-white lg:bg-white/5 lg:border lg:border-white/10 flex items-center justify-center lg:text-slate-400 hover:lg:bg-[#0A66C2] hover:lg:text-white hover:lg:border-[#0A66C2] transition-all duration-300 hover:lg:-translate-y-1" href="#">
                            <svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.225 0z"/></svg>
                        </a>
                        <a class="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white lg:bg-none lg:bg-white/5 lg:border lg:border-white/10 flex items-center justify-center lg:text-slate-400 hover:lg:bg-gradient-to-tr hover:lg:from-[#f9ce34] hover:lg:via-[#ee2a7b] hover:lg:to-[#6228d7] hover:lg:text-white transition-all duration-300 hover:lg:-translate-y-1" href="#">
                            <svg class="size-5" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>

                    </div>

                </div>
                <div class="md:col-span-6 lg:col-span-2">
                    <h4 class="font-bold text-white mb-6 tracking-widest text-base">Quick Links</h4>
                    <ul class="space-y-4">
                        <li><a class="text-slate-400 font-light hover:text-amber-400 transition-all" href="about-us.html">About Us</a></li>
                        <li><a class="text-slate-400 font-light hover:text-amber-400 transition-all" href="products.html">Products</a></li>
                        <li><a class="text-slate-400 font-light hover:text-amber-400 transition-all" href="manufacturing.html">Manufacturing</a></li>
                        <li><a class="text-slate-400 font-light hover:text-amber-400 transition-all" href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="md:col-span-6 lg:col-span-3">
                    <h4 class="font-bold text-white mb-6 tracking-widest text-base">Contact Engineering</h4>
                    <ul class="space-y-4">
                        <li class="flex gap-4">
                            <i data-lucide="map-pin" class="w-5 h-5 text-amber-500 shrink-0"></i>
                            <div class="text-slate-400 font-light text-sm leading-relaxed">
                                <span class="block font-bold text-white mb-1">Manufacturing Plants:</span>
                                Plant 1: Daudpur, Alwar, RJ<br>
                                Plant 2: G1 477, MIA, Alwar, RJ
                            </div>
                        </li>
                        <li class="flex items-center gap-4">
                            <i data-lucide="phone" class="w-5 h-5 text-amber-500 shrink-0"></i>
                            <div class="text-slate-400 font-light text-sm">
                                +91 9887661666<br>+91 9414855278
                            </div>
                        </li>
                        <li class="flex items-center gap-4">
                            <i data-lucide="mail" class="w-5 h-5 text-amber-500 shrink-0"></i>
                            <div class="text-slate-400 font-light text-sm break-all">
                                vivekgupta@nationalgears.in<br>nationalgears@gmail.com
                            </div>
                        </li>
                    </ul>
                </div>


                <div class="md:col-span-12 lg:col-span-3">
                    <h4 class="font-bold text-white mb-6 tracking-widest text-base">Newsletter</h4>
                    <p class="font-light text-slate-400 mb-6 text-sm">Subscribe for technical updates and industry news.</p>
                    <div class="relative group">
                        <div class="relative flex flex-col gap-3">
                            <div class="relative flex items-center bg-white/5 border border-white/10 rounded-xl p-1 focus-within:border-amber-500/50 transition-colors">
                                <i data-lucide="mail" class="w-4 h-4 text-slate-400 ml-3"></i>
                                <input class="bg-transparent border-none px-3 py-2.5 w-full text-white placeholder-slate-500 focus:outline-none font-light text-xs" placeholder="Email address" type="email">
                            </div>
                            <button class="bg-amber-500 hover:bg-amber-400 text-white py-3 rounded-xl font-bold text-xs tracking-wide transition-colors flex items-center justify-center gap-2">
                                Subscribe <i data-lucide="send" class="w-3 h-3"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="flex flex-col gap-2">
                    <p class="font-light text-base text-slate-500 text-center md:text-left">
                        &copy; 2024 National Gears Manufacturing. Precision Engineered.
                    </p>
                    <p class="text-xs text-slate-600 font-bold tracking-widest uppercase text-center md:text-left">ISO 9001:2015 Certified Company</p>
                </div>
                <div class="flex items-center gap-6">
                    <a href="privacy-policy.html" class="text-base text-slate-500 hover:text-amber-500 transition-colors">Privacy Policy</a>
                    <a href="terms-and-conditions.html" class="text-base text-slate-500 hover:text-amber-500 transition-colors">Terms</a>
                </div>
            </div>


        </div>
    </footer>
    `;

    // Re-initialize Lucide icons after injection
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
} function renderContactPopup() {
    const popupRoot = document.createElement('div');
    popupRoot.id = 'contact-popup-root';
    document.body.appendChild(popupRoot);

    popupRoot.innerHTML = `
    <div id="contact-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 opacity-0 pointer-events-none transition-all duration-500">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onclick="toggleContactModal(false)"></div>
        
        <!-- Modal Content -->
        <div class="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform scale-95 transition-all duration-500 group">
            <div class="absolute top-0 right-0 p-8 z-10">
                <button onclick="toggleContactModal(false)" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>
            
            <div class="p-10 md:p-14">
                <div class="mb-10">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-500 rounded-lg text-[0.625rem] font-black tracking-widest mb-4 border border-amber-500/10">
                        Connect With Us
                    </div>
                    <h2 class="text-4xl font-black text-slate-900 tracking-tighter leading-none">Get A <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Technical Quote</span></h2>
                </div>
                
                <form class="space-y-6" onsubmit="event.preventDefault(); alert('Inquiry sent successfully!'); toggleContactModal(false);">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-xs font-black text-slate-400 ml-1">Full Name</label>
                            <input type="text" required placeholder="John Doe" class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-primary/20 focus:bg-white transition-all">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-black text-slate-400 ml-1">Email Address</label>
                            <input type="email" required placeholder="john@company.com" class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-primary/20 focus:bg-white transition-all">
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <label class="text-xs font-black text-slate-400 ml-1">Requirement Type</label>
                        <div class="relative">
                            <select class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-primary/20 focus:bg-white appearance-none cursor-pointer">
                                <option>Spur Gears</option>
                                <option>Helical Gears</option>
                                <option>Worm Gears</option>
                                <option>Custom Engineering</option>
                            </select>
                            <i data-lucide="chevron-down" class="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"></i>
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <label class="text-xs font-black text-slate-400 ml-1">Your Message</label>
                        <textarea rows="4" required placeholder="Describe your technical specifications..." class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-primary/20 focus:bg-white transition-all resize-none"></textarea>
                    </div>
                    
                    <button type="submit" class="w-full bg-primary text-white py-5 rounded-2xl font-black text-sm tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                        Send Inquiry
                    </button>
                </form>
            </div>
        </div>
    </div>
    `;

    // Re-initialize icons for popup
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function toggleContactModal(show) {
    const modal = document.getElementById('contact-modal');
    if (!modal) return;
    const content = modal.querySelector('.relative');
    if (show) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        document.body.style.overflow = 'auto';
    }
}

function toggleMobileSubmenu(button) {
    const submenu = button.nextElementSibling;
    const icon = button.querySelector('[data-lucide="chevron-down"]');
    
    // Close other submenus (Optional, but cleaner)
    document.querySelectorAll('.mobile-submenu').forEach(el => {
        if (el !== submenu) {
            el.classList.add('hidden');
            const otherBtn = el.previousElementSibling;
            if (otherBtn) {
                const otherIcon = otherBtn.querySelector('[data-lucide="chevron-down"]');
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
            }
        }
    });

    if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        submenu.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
}

