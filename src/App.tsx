import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { LanguageProvider } from './i18n/LanguageContext';
import { usePageTranslation } from './i18n/usePageTranslation';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import CorporateTax from './pages/Services/CorporateTax';
import BankAccount from './pages/Services/BankAccount';
import Accounting from './pages/Services/Accounting';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import WebDevelopment from './pages/Services/WebDevelopment';
import SEO from './pages/Services/SEO';
import Compliance from './pages/Services/Compliance';
import GoldenVisa from './pages/Services/GoldenVisa';
import ProServices from './pages/Services/ProServices';

// Free Zones
import DubaiSouth from './pages/freezones/DubaiSouth';
import DubaiSiliconOasis from './pages/freezones/DubaiSiliconOasis';
import DubaiAirportFreeZone from './pages/freezones/DubaiAirportFreeZone';
import DMCC from './pages/freezones/DMCC';
import IFZA from './pages/freezones/IFZA';
import ADGM from './pages/freezones/ADGM';
import JAFZA from './pages/freezones/JAFZA';
import SHAMS from './pages/freezones/SHAMS';
import SAIF from './pages/freezones/SAIF';
import DHCC from './pages/freezones/DHCC';
import D3 from './pages/freezones/D3';
import DIC from './pages/freezones/DIC';
import DWTC from './pages/freezones/DWTC';
import Meydan from './pages/freezones/Meydan';
import BusinessActivities from './pages/freezones/BusinessActivities';
import FujairahCreativeCity from './pages/freezones/FujairahCreativeCity';
import Hamriyah from './pages/freezones/Hamriyah';
import AjmanFreeZone from './pages/freezones/AjmanFreeZone';
import DubaiMediaCity from './pages/freezones/DubaiMediaCity';
import DubaiKnowledgePark from './pages/freezones/DubaiKnowledgePark';
import DubaiCommerCity from './pages/freezones/DubaiCommerCity';
import KIZAD from './pages/freezones/KIZAD';
import DUQE from './pages/freezones/DUQE';
import FreeZoneLocations from './pages/freezones/FreeZoneLocations';
import UAQFreeZone from './pages/freezones/UAQFreeZone';
import RAKEZ from './pages/freezones/RAKEZ';

// Mainland
import MainlandActivities from './pages/mainland/MainlandActivities';
import HiringEmployeeManagement from './pages/mainland/HiringEmployeeManagement';
import OfficeSpaceSolutions from './pages/mainland/OfficeSpaceSolutions';
import MainlandVisa from './pages/mainland/MainlandVisa';
import LaunchOperateExpand from './pages/mainland/LaunchOperateExpand';

// Services - Business Setup
import CompanyFormation from './pages/Services/business-setup/CompanyFormation';
import OffshoreCompanySetup from './pages/Services/business-setup/OffshoreCompanySetup';
import LocalCorporateSponsor from './pages/Services/business-setup/LocalCorporateSponsor';
import ResidenceVisa from './pages/Services/business-setup/ResidenceVisa';
import MainlandCompanyFormation from './pages/Services/business-setup/MainlandCompanyFormation';
import CompanyRegistration from './pages/Services/business-setup/CompanyRegistration';
import EcommerceLicense from './pages/Services/business-setup/EcommerceLicense';
import GoldenVisaServices from './pages/Services/business-setup/GoldenVisaServices';
import ResidenceVisaServices from './pages/Services/business-setup/ResidenceVisaServices';
import DependentVisa from './pages/Services/business-setup/DependentVisa';
import CompanyNameRegistration from './pages/Services/business-setup/CompanyNameRegistration';
import LocalBusinessPartner from './pages/Services/business-setup/LocalBusinessPartner';
import FreeZoneCompanySetup from './pages/Services/business-setup/FreeZoneCompanySetup';

// Packages
import IFZASetupPackage from './pages/packages/IFZASetupPackage';
import SPCSetupPackage from './pages/packages/SPCSetupPackage';
import DIFCCompanySetup from './pages/packages/DIFCCompanySetup';
import CreativeCitySetup from './pages/packages/CreativeCitySetup';
import SHAMSSetupPackage from './pages/packages/SHAMSSetupPackage';
import SRTIPSetupPackage from './pages/packages/SRTIPSetupPackage';
import MeydanSetupPackage from './pages/packages/MeydanSetupPackage';
import RAKEZSetupPackage from './pages/packages/RAKEZSetupPackage';
import JAFZASetupPackage from './pages/packages/JAFZASetupPackage';

// Other Pages
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Calculator from './pages/Calculator';

// Service Areas
import BusinessBay from './pages/service-areas/BusinessBay';
import DubaiMarina from './pages/service-areas/DubaiMarina';
import JVC from './pages/service-areas/JVC';
import AlBarsha from './pages/service-areas/AlBarsha';
import SiliconOasis from './pages/service-areas/SiliconOasis';
import TradeCenter from './pages/service-areas/TradeCenter';
import DIFC from './pages/service-areas/DIFC';
import DowntownDubai from './pages/service-areas/DowntownDubai';

// Blog
import BlogPostPage from './pages/BlogPostPage';
import BlogCategoryPage from './pages/BlogCategoryPage';
import BlogTagPage from './pages/BlogTagPage';
import BlogArchivePage from './pages/BlogArchivePage';

// ============================================================
// AppShell — Runs inside LanguageProvider
// ============================================================
function AppShell() {
  // ✅ Ye ek line poori website ko auto-translate karti hai
  usePageTranslation();

  return (
    <div className="min-h-screen bg-bg text-txt">
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services/corporate-tax-vat" element={<CorporateTax />} />
        <Route path="/services/bank-account" element={<BankAccount />} />
        <Route path="/services/accounting" element={<Accounting />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/compliance" element={<Compliance />} />
        <Route path="/services/golden-visa" element={<GoldenVisa />} />
        <Route path="/services/pro-services" element={<ProServices />} />

        {/* Free Zones */}
        <Route path="/free-zones/dubai-south" element={<DubaiSouth />} />
        <Route path="/free-zones/dubai-silicon-oasis" element={<DubaiSiliconOasis />} />
        <Route path="/free-zones/dubai-airport-free-zone" element={<DubaiAirportFreeZone />} />
        <Route path="/free-zones/dmcc" element={<DMCC />} />
        <Route path="/free-zones/ifza" element={<IFZA />} />
        <Route path="/free-zones/adgm" element={<ADGM />} />
        <Route path="/free-zones/jafza" element={<JAFZA />} />
        <Route path="/free-zones/shams" element={<SHAMS />} />
        <Route path="/free-zones/saif" element={<SAIF />} />
        <Route path="/free-zones/dubai-healthcare-city" element={<DHCC />} />
        <Route path="/free-zones/dubai-design-district" element={<D3 />} />
        <Route path="/free-zones/dubai-internet-city" element={<DIC />} />
        <Route path="/free-zones/dwtc" element={<DWTC />} />
        <Route path="/free-zones/meydan" element={<Meydan />} />
        <Route path="/free-zones/business-activities" element={<BusinessActivities />} />
        <Route path="/free-zones/fujairah-creative-city" element={<FujairahCreativeCity />} />
        <Route path="/free-zones/hamriyah" element={<Hamriyah />} />
        <Route path="/free-zones/ajman-free-zone" element={<AjmanFreeZone />} />
        <Route path="/free-zones/dubai-media-city" element={<DubaiMediaCity />} />
        <Route path="/free-zones/dubai-knowledge-park" element={<DubaiKnowledgePark />} />
        <Route path="/free-zones/dubai-commercity" element={<DubaiCommerCity />} />
        <Route path="/free-zones/kizad" element={<KIZAD />} />
        <Route path="/free-zones/duqe" element={<DUQE />} />
        <Route path="/free-zones/locations" element={<FreeZoneLocations />} />
        <Route path="/free-zones/uaq-free-zone" element={<UAQFreeZone />} />
        <Route path="/free-zones/rakez" element={<RAKEZ />} />

        {/* Mainland */}
        <Route path="/mainland/mainland-activities" element={<MainlandActivities />} />
        <Route path="/mainland/hiring-employee-management" element={<HiringEmployeeManagement />} />
        <Route path="/mainland/office-space-solutions" element={<OfficeSpaceSolutions />} />
        <Route path="/mainland/mainland-visa" element={<MainlandVisa />} />
        <Route path="/mainland/launch-operate-expand" element={<LaunchOperateExpand />} />

        {/* Services - Business Setup */}
        <Route path="/services/company-formation" element={<CompanyFormation />} />
        <Route path="/services/offshore-company-setup" element={<OffshoreCompanySetup />} />
        <Route path="/services/local-corporate-sponsor" element={<LocalCorporateSponsor />} />
        <Route path="/services/residence-visa" element={<ResidenceVisa />} />
        <Route path="/services/mainland-company-formation" element={<MainlandCompanyFormation />} />
        <Route path="/services/company-registration" element={<CompanyRegistration />} />
        <Route path="/services/ecommerce-license" element={<EcommerceLicense />} />
        <Route path="/services/golden-visa-services" element={<GoldenVisaServices />} />
        <Route path="/services/residence-visa-services" element={<ResidenceVisaServices />} />
        <Route path="/services/dependent-visa" element={<DependentVisa />} />
        <Route path="/services/company-name-registration" element={<CompanyNameRegistration />} />
        <Route path="/services/local-business-partner" element={<LocalBusinessPartner />} />
        <Route path="/services/free-zone-company-setup" element={<FreeZoneCompanySetup />} />

        {/* Packages */}
        <Route path="/packages/ifza-setup-package" element={<IFZASetupPackage />} />
        <Route path="/packages/spc-setup-package" element={<SPCSetupPackage />} />
        <Route path="/packages/difc-company-setup" element={<DIFCCompanySetup />} />
        <Route path="/packages/creative-city-setup" element={<CreativeCitySetup />} />
        <Route path="/packages/shams-setup-package" element={<SHAMSSetupPackage />} />
        <Route path="/packages/srtip-setup-package" element={<SRTIPSetupPackage />} />
        <Route path="/packages/meydan-setup-package" element={<MeydanSetupPackage />} />
        <Route path="/packages/rakez-setup-package" element={<RAKEZSetupPackage />} />
        <Route path="/packages/jafza-setup-package" element={<JAFZASetupPackage />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/calculator" element={<Calculator />} />

        {/* Service Areas */}
        <Route path="/service-areas/business-bay" element={<BusinessBay />} />
        <Route path="/service-areas/dubai-marina" element={<DubaiMarina />} />
        <Route path="/service-areas/jvc" element={<JVC />} />
        <Route path="/service-areas/al-barsha" element={<AlBarsha />} />
        <Route path="/service-areas/silicon-oasis" element={<SiliconOasis />} />
        <Route path="/service-areas/trade-center" element={<TradeCenter />} />
        <Route path="/service-areas/difc" element={<DIFC />} />
        <Route path="/service-areas/downtown-dubai" element={<DowntownDubai />} />

        {/* Blog Routes */}
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/blog/category/:slug" element={<BlogCategoryPage />} />
        <Route path="/blog/tag/:slug" element={<BlogTagPage />} />
        <Route path="/blog/archive/:slug" element={<BlogArchivePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

// ============================================================
// App — Root component with LanguageProvider wrapper
// ============================================================
export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}