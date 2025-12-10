# 🛡️ Ritam Das - Cyber Security Portfolio

A modern, fully responsive portfolio website showcasing my work as a Cyber Security Enthusiast. Built with cutting-edge technologies including Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

**Live Demo**: [rdx-portfolio.vercel.app](https://rdx-portfolio.vercel.app)

## ✨ Key Features

### Design & Performance
- **Modern UI/UX**: Clean, minimalist design with smooth animations and transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark Theme**: Professional dark theme with orange accent colors
- **Performance**: Optimized images, font loading, and code splitting
- **SEO Optimized**: Meta tags, structured data, sitemap generation, and robots.txt

### Interactive Elements
- **Smooth Animations**: Framer Motion scroll-triggered animations throughout
- **Dynamic Navigation**: Fixed header with active section detection
- **Form Handling**: Contact form with email integration (mailto)
- **Copy to Clipboard**: Email address copy functionality in Contact section
- **Back to Top Button**: Floating button for easy page navigation
- **Mobile-First Design**: Responsive navigation with mobile menu

### Content Sections
1. **Hero** - Eye-catching introduction with CTA buttons
2. **Quote Section** - Inspirational security-focused quotes
3. **About** - Personal background with highlighted key terms and social links
4. **Skills** - Organized by categories:
   - Security Operations & Tools (Kali Linux, Burp Suite, Nmap, etc.)
   - Languages & Scripting (Python, Java, C++, Bash, PowerShell)
   - Web Development (HTML, CSS, JS, TypeScript, React, Next.js, Tailwind, Node.js)
5. **Experience** - Animated timeline with company logos and role details
6. **Projects** - Featured cybersecurity and development projects with descriptions
7. **Contact** - Multiple contact methods:
   - Direct email button
   - Contact form with name, email, and message fields
   - Social media links (LinkedIn, GitHub, Twitter)
   - Response time expectation

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) - App Router |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **UI Components** | Custom components with Tailwind + Framer Motion |
| **Testing** | [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/react) |
| **Code Quality** | [ESLint](https://eslint.org/) |
| **Fonts** | [Google Fonts](https://fonts.google.com/) - Mate SC, Inter, Teko, Poppins |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rdx-exe/rdx-portfolio.git
   cd rdx-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
rdx-portfolio/
├── app/
│   ├── fonts.ts              # Font configuration (Mate SC, Inter, etc.)
│   ├── layout.tsx            # Root layout with global metadata
│   ├── page.tsx              # Home page with all sections
│   ├── about/
│   │   └── page.tsx          # About page route
│   ├── error.tsx             # Error boundary
│   ├── not-found.tsx         # 404 page
│   ├── globals.css           # Global styles
│   ├── robots.ts             # SEO robots.txt
│   └── sitemap.ts            # Dynamic sitemap generation
├── components/
│   ├── Header.tsx            # Fixed navigation header with mobile menu
│   ├── Hero.tsx              # Hero section with professional intro
│   ├── Quote1.tsx            # First inspirational quote
│   ├── About.tsx             # About section with social links
│   ├── Skills.tsx            # Skills carousel with infinite scroll
│   ├── Experience.tsx        # Animated timeline of experience
│   ├── Projects.tsx          # Featured projects grid
│   ├── Quote2.tsx            # Second quote with attribution
│   ├── Contact.tsx           # Contact form and information
│   ├── BackToTop.tsx         # Floating back-to-top button
│   └── __tests__/            # Component tests
├── lib/
│   ├── config.ts             # Configuration constants
│   └── utils.ts              # Utility functions (cn, clsx)
├── public/
│   ├── icons/                # Technology and brand icons
│   ├── hero.jpg              # Hero section image
│   ├── sample-resume.pdf     # Resume document
│   └── *.png                 # Project and company logos
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
└── vitest.config.ts          # Vitest configuration

```

## 🎨 Customization

### Update Personal Information

#### Hero Section
Edit `components/Hero.tsx`:
- Update heading text
- Modify description
- Change button links (projects, contact)

#### About Section
Edit `components/About.tsx`:
- Update personal bio
- Add/remove highlighted terms
- Update social media links

#### Skills Section
Edit `components/Skills.tsx`:
- Modify skill categories in `skillsData` array
- Add new skill logos to `public/icons/`
- Update category order

#### Experience Section
Edit `components/Experience.tsx`:
- Update the `experiences` array with your work history
- Add company logos to `public/`
- Modify timeline content

#### Projects Section
Edit `components/Projects.tsx`:
- Update the `projects` array
- Add project images to `public/`
- Link to your GitHub repositories

#### Contact Information
Edit `components/Contact.tsx`:
- Update email address
- Modify social media links
- Customize form fields

### Style Customization

#### Colors
The portfolio uses an orange accent color scheme. To change:
1. Update Tailwind classes from `orange-*` to your preferred color
2. Main colors used:
   - Primary: `orange-500` / `orange-600`
   - Background: `black` / `zinc-950`
   - Text: `white` / `white/60` (varying opacity)

#### Fonts
Fonts are configured in `app/fonts.ts`. Currently using:
- **Mate SC**: Headings
- **Inter**: Body text
- **Teko**: Alternative headings
- **Poppins**: Fallback

To add new fonts:
```tsx
export const newFont = New_Font({
  subsets: ['latin'],
  weight: '400',
});
```

#### Spacing & Typography
Tailwind configuration is in `tailwind.config.ts`. Customize:
- Font sizes
- Spacing values
- Breakpoints for responsive design

## License

This project is licensed under the [MIT License](LICENSE) - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you've made improvements, consider opening a pull request!

## 💡 Tips & Tricks

### Adding New Sections
1. Create a new component in `components/`
2. Add it to `app/page.tsx` in the main layout
3. Add navigation link in `Header.tsx` if needed

### Custom Animations
Use Framer Motion's built-in animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Your content
</motion.div>
```

### Adding Dark/Light Mode
Extend `tailwind.config.ts` with dark mode configuration and add a theme toggle in the Header.

## 📧 Contact

If you have questions about the portfolio:
- Email: das.ritam077@gmail.com
- GitHub: [@rdx-exe](https://github.com/rdx-exe)
- LinkedIn: [das-ritam](https://www.linkedin.com/in/das-ritam)
- Twitter: [@rdx_exe](https://x.com/rdx_exe)

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
