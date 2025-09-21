use client

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          logoSrc="/images/logo.svg"
          logoAlt="NebulaSaaS Logo"
          buttonText="Get started"
        />
      </div>
      <div id="hero" data-section="hero">
        <BillboardHero 
          title="Welcome to NebulaSaaS" 
          subtitle="Your futuristic solution for managing all in one place."
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout 
          title="About Us" 
          descriptions={[
            "Discover how we build a seamless experience.",
            "Join us to explore cutting-edge solutions."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D 
          title="How to Buy" 
          steps={[
            { title: "Step 1", description: "Create an account", image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: "Step 2", description: "Verify your identity", image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: "Step 3", description: "Make your first purchase", image: '/images/placeholder3.avif', position: 'right', isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics 
          title="Tokenomics" 
          description="Understand the underlying economics of our tokens."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000 tokens" },
            { id: 2, title: "Market Cap", description: "$10,000,000" },
            { id: 3, title: "Circulating Supply", description: "500,000 tokens" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient 
          logoSrc="/images/logo.svg" 
          logoAlt="NebulaSaaS Logo"
          logoText="NebulaSaaS"
          items={[
            { label: "Privacy Policy", onClick: () => {} },
            { label: "Terms of Service", onClick: () => {} },
            { label: "Contact Us", onClick: () => {} }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
