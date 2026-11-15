# SV Digital Marketing

A responsive static portfolio website for SV Digital Marketing. The site includes a homepage, About page, Our Work page, looping muted video previews, customer logos, and responsive navigation.

## Requirements

- A modern web browser
- One local static web server
- Python 3 or the VS Code Live Server extension

No npm installation or build step is required.

## Run locally

### Option 1: Python

Open PowerShell in the project folder:

```powershell
cd C:\Users\pavit\Desktop\sangya
python -m http.server 5500
```

Open [http://localhost:5500](http://localhost:5500) in a browser.

To stop the server, press `Ctrl+C` in PowerShell.

### Option 2: VS Code Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension if it is not installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## Pages

- `index.html` - Homepage and contact section
- `about.html` - About Us page
- `work.html` - Portfolio and work filters

## Project files

- `styles.css` - Main homepage styles
- `navigation.css` - Shared navigation styles
- `about-page.css` - About page styles
- `work-page.css` - Our Work page styles
- `hero-video.css` - Homepage hero and About section visuals
- `work-hero-video.css` - Our Work hero video styles
- `script.js` - Mobile navigation, reveal animations, portfolio filtering, and enquiry form feedback
- `work-page.js` - Our Work page interactions

## Media assets

Images and MP4 files are stored in the project root and are referenced with relative paths. Videos are configured to autoplay silently, loop continuously, and play inline. A local web server is recommended because browsers may restrict video playback when pages are opened directly with `file://`.

## Contact details

- Email: `Sangameshbiradar911@gmail.com`
- Phone: `9110240331`
- WhatsApp: `+91 9110240331`

The enquiry form currently displays a confirmation message in the browser. It does not send data to a backend service.
