import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TalentPage from './pages/TalentPage/TalentPage';
import BrandAmbassadorPage from './pages/BrandAmbassadorPage/BrandAmbassadorPage';
// import EventStaffingPage from './pages/EventStaffingPage/EventStaffingPage';
import WhyPromotr from './pages/WhyPromotr/index';
import PromotrBusinessPage from './pages/PromotrBusinessPage/PromotrBusinessPage';
import Models from "./pages/PromotionalModels";
import GigsPage from './pages/GigsPage/GigsPage';
import TradeShowPage from './pages/TradeShowPage/TradeShowPage';
import InfluencerPage from './pages/InfluencerPage/InfluencerPage';
import StaffPage from './pages/StaffPage/StaffPage';
import HostPage from './pages/HostPage/index';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/talentpage' element={<TalentPage />} />
          <Route path='/brand-ambassador' element={<BrandAmbassadorPage />} />
          {/* <Route path='/m-event_staffing' element={<EventStaffingPage />} /> */}
          <Route path='/why-promotr' element={<WhyPromotr />} />
          <Route path="/models" element={<Models/>} />
          <Route path='/business' element={<PromotrBusinessPage />} />
          <Route path='/m-gigs' element={<GigsPage />} />
          <Route path='/m-trade_show' element={<TradeShowPage />} />
          <Route path='/influencers' element={<InfluencerPage />} />
          <Route path='/staff' element={<StaffPage />} />
          <Route path='/hosts' element={<HostPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
