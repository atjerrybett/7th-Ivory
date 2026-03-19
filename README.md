# 7th Ivory Productions Website

A premium, cinematic website for 7th Ivory Productions — an award-winning Kenyan film production company.

## 🎬 Features

- **Hero Section**: Bold video-ready hero with client logos carousel
- **Portfolio/Work**: Filterable project grid with categories (TVC, Short Film, VR/360°, Product Photography)
- **Venice Film Festival Highlight**: Special section showcasing their Venice VR Expanded Competition selection
- **Services Section**: Full production capabilities overview
- **About Page**: Team bios, company values, and awards showcase
- **Contact Page**: Full pitch form with budget/deadline fields, WhatsApp integration
- **SEO Optimized**: Meta tags, sitemap, robots.txt configured for "TVC production Kenya", "African brand storytelling"
- **Mobile-First**: Responsive design with mobile menu
- **Performance**: Next.js 14 with optimized image/video loading patterns

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **CMS**: JSON data files (easy to update, no database needed)
- **Icons**: Lucide React
- **Fonts**: Inter + Playfair Display

## 🚀 Getting Started

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── work/
│   │   ├── page.tsx      # Portfolio listing
│   │   └── [slug]/       # Individual project pages
│   ├── about/page.tsx    # About page
│   └── contact/page.tsx  # Contact/pitch form
├── components/
│   ├── home/             # Homepage sections
│   ├── layout/           # Header, Footer
│   └── ui/               # shadcn components
└── data/
    ├── projects.json     # Portfolio data
    ├── team.json         # Team members & values
    └── site.json         # Company info, clients, services
\`\`\`

## 🎨 Design System

### Colors (African-inspired palette)
- **Gold**: \`#d4af37\` — Primary accent
- **Terracotta**: \`#c45c3e\` — Secondary accent
- **Forest Green**: \`#2d5a47\` — Tertiary
- **Ivory scale**: Custom dark theme (\`ivory-50\` to \`ivory-950\`)

### Typography
- **Headlines**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 📝 Updating Content

### Add a New Project

Edit \`src/data/projects.json\`:

\`\`\`json
{
  "id": "project-slug",
  "title": "Project Title",
  "category": "TVC",
  "year": "2026",
  "client": "Client Name",
  "description": "Project description...",
  "videoUrl": "https://player.vimeo.com/video/...",
  "thumbnail": "/images/projects/project.jpg",
  "tags": ["Tag1", "Tag2"],
  "credits": {
    "Director": "Name",
    "Production Company": "7th Ivory Productions"
  },
  "featured": true,
  "awards": ["Award name"]
}
\`\`\`

### Update Company Info

Edit \`src/data/site.json\` for:
- Company details (email, phone, location)
- Social media links
- Client list
- Services
- SEO metadata

### Update Team

Edit \`src/data/team.json\` to add/modify team members.

## 🖼 Adding Images & Videos

1. **Project thumbnails**: Add to \`public/images/projects/\`
2. **Team photos**: Add to \`public/images/team/\`
3. **Client logos**: Add SVGs to \`public/images/clients/\`
4. **Hero video**: Add to \`public/videos/showreel.mp4\`

To enable video in the hero, uncomment the video element in \`src/components/home/HeroSection.tsx\`.

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Environment Variables

No environment variables required for basic deployment.

For form submissions, you'll need to:
1. Set up a form handler (Formspree, Netlify Forms, or custom API)
2. Update the form submission in \`src/app/contact/page.tsx\`

## 📱 Social Links

Update in \`src/data/site.json\`:
- Instagram: @7thivory
- Facebook: /7thivory
- LinkedIn: /company/7th-ivory
- Vimeo: /user107357626
- Behance: /7thivory

## 🏆 Venice Film Festival Highlight

The Venice VR Expanded Competition selection for "African Space Makers VR" is prominently featured:
- Homepage highlight section
- Special badge on project cards
- Awards section on About page

## 📧 Contact Integration

- **WhatsApp**: Floating button + direct link in contact page
- **Email**: 7th.ivory@gmail.com
- **Form**: Budget range, deadline, project description fields

## 📈 SEO Keywords

Optimized for:
- TVC production Kenya
- African brand storytelling
- Nairobi production company
- Kenya film production
- VR production Africa
- Branded content Kenya

---

Built with ❤️ for 7th Ivory Productions 🇰🇪
