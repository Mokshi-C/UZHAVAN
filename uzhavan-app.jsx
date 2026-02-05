import React, { useState } from 'react';
import { Sun, Moon, Droplets, Thermometer, TrendingUp, AlertTriangle, CheckCircle, MapPin, Calendar, Layers } from 'lucide-react';

export default function UzhavanApp() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [farmerData, setFarmerData] = useState({
    name: '',
    location: '',
    season: '',
    soilType: '',
    irrigationType: ''
  });

  // Theme classes
  const bgClass = darkMode ? 'bg-gray-900' : 'bg-white';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';
  const inputBgClass = darkMode ? 'bg-gray-700' : 'bg-white';
  const buttonPrimaryBg = darkMode ? 'bg-green-700' : 'bg-green-600';

  // Sample crop recommendations based on user input
  const getCropRecommendations = () => {
    const crops = {
      'Kharif': [
        { name: 'Rice', suitability: 92, yield: '4.5 ton/ha', risk: 'Low', rainCompat: 'High', heatTolerance: 'Medium' },
        { name: 'Cotton', suitability: 88, yield: '2.8 ton/ha', risk: 'Medium', rainCompat: 'Medium', heatTolerance: 'High' },
        { name: 'Soybean', suitability: 85, yield: '3.2 ton/ha', risk: 'Low', rainCompat: 'High', heatTolerance: 'Medium' }
      ],
      'Rabi': [
        { name: 'Wheat', suitability: 94, yield: '5.2 ton/ha', risk: 'Low', rainCompat: 'Low', heatTolerance: 'Low' },
        { name: 'Mustard', suitability: 87, yield: '1.8 ton/ha', risk: 'Medium', rainCompat: 'Medium', heatTolerance: 'Medium' },
        { name: 'Chickpea', suitability: 83, yield: '2.1 ton/ha', risk: 'Low', rainCompat: 'Low', heatTolerance: 'Medium' }
      ],
      'Summer': [
        { name: 'Groundnut', suitability: 90, yield: '3.5 ton/ha', risk: 'Medium', rainCompat: 'High', heatTolerance: 'High' },
        { name: 'Watermelon', suitability: 86, yield: '40 ton/ha', risk: 'Low', rainCompat: 'Medium', heatTolerance: 'High' },
        { name: 'Moong Dal', suitability: 82, yield: '1.5 ton/ha', risk: 'Low', rainCompat: 'Medium', heatTolerance: 'High' }
      ]
    };
    return crops[farmerData.season] || crops['Kharif'];
  };

  // Screen 1: Landing Page
  const LandingScreen = () => (
    <div className={`min-h-screen ${bgClass} ${textClass} flex flex-col items-center justify-center p-6`}>
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">UZHAVAN</h1>
        <p className="text-xl mb-2 text-green-600">Smart Climate-Aware Farming</p>
        <p className="text-2xl italic mb-12">"From guesswork to data-driven farming"</p>
        
        <div className="space-y-4">
          <button
            onClick={() => setCurrentScreen('input')}
            className={`w-full ${buttonPrimaryBg} hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition`}
          >
            Get Crop Recommendation
          </button>
          <button
            onClick={() => setCurrentScreen('howItWorks')}
            className={`w-full ${cardBgClass} hover:opacity-80 ${textClass} font-semibold py-4 px-8 rounded-lg text-lg border-2 ${borderClass} transition`}
          >
            How it works
          </button>
        </div>
      </div>
    </div>
  );

  // Screen 2: Farmer Details Input
  const InputScreen = () => (
    <div className={`min-h-screen ${bgClass} ${textClass} p-6`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Tell us about your farm</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Your Name</label>
            <input
              type="text"
              value={farmerData.name}
              onChange={(e) => setFarmerData({...farmerData, name: e.target.value})}
              className={`w-full ${inputBgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              <MapPin className="inline mr-2" size={20} />
              Location
            </label>
            <select
              value={farmerData.location}
              onChange={(e) => setFarmerData({...farmerData, location: e.target.value})}
              className={`w-full ${inputBgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            >
              <option value="">Select location</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              <Calendar className="inline mr-2" size={20} />
              Season
            </label>
            <select
              value={farmerData.season}
              onChange={(e) => setFarmerData({...farmerData, season: e.target.value})}
              className={`w-full ${inputBgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            >
              <option value="">Select season</option>
              <option value="Kharif">Kharif (Monsoon)</option>
              <option value="Rabi">Rabi (Winter)</option>
              <option value="Summer">Summer</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              <Layers className="inline mr-2" size={20} />
              Soil Type
            </label>
            <select
              value={farmerData.soilType}
              onChange={(e) => setFarmerData({...farmerData, soilType: e.target.value})}
              className={`w-full ${inputBgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            >
              <option value="">Select soil type</option>
              <option value="Clay">Clay</option>
              <option value="Sandy">Sandy</option>
              <option value="Loamy">Loamy</option>
              <option value="Red Soil">Red Soil</option>
              <option value="Black Soil">Black Soil</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              <Droplets className="inline mr-2" size={20} />
              Irrigation Type
            </label>
            <select
              value={farmerData.irrigationType}
              onChange={(e) => setFarmerData({...farmerData, irrigationType: e.target.value})}
              className={`w-full ${inputBgClass} ${textClass} border ${borderClass} rounded-lg px-4 py-3`}
            >
              <option value="">Select irrigation</option>
              <option value="Drip">Drip Irrigation</option>
              <option value="Sprinkler">Sprinkler</option>
              <option value="Flood">Flood Irrigation</option>
              <option value="Rainfed">Rainfed</option>
            </select>
          </div>

          <button
            onClick={() => farmerData.name && farmerData.season ? setCurrentScreen('climate') : alert('Please fill in your name and season')}
            className={`w-full ${buttonPrimaryBg} hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );

  // Screen 3: Climate & Soil Check
  const ClimateScreen = () => (
    <div className={`min-h-screen ${bgClass} ${textClass} p-6`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Climate & Soil Analysis</h2>
        <p className="mb-8 text-lg">For {farmerData.name} - {farmerData.location}</p>

        <div className="space-y-6">
          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Droplets className="mr-3 text-blue-500" size={32} />
                <h3 className="text-xl font-semibold">Rainfall Status</h3>
              </div>
              <CheckCircle className="text-green-500" size={32} />
            </div>
            <p className="text-lg">Favorable</p>
            <div className="mt-4 bg-green-500 h-2 rounded-full w-3/4"></div>
          </div>

          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Thermometer className="mr-3 text-orange-500" size={32} />
                <h3 className="text-xl font-semibold">Temperature Trend</h3>
              </div>
              <TrendingUp className="text-orange-500" size={32} />
            </div>
            <p className="text-lg">28°C - 34°C (Normal range)</p>
            <div className="mt-4 bg-orange-500 h-2 rounded-full w-2/3"></div>
          </div>

          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
            <div className="flex items-center mb-4">
              <Layers className="mr-3 text-yellow-600" size={32} />
              <h3 className="text-xl font-semibold">Soil Suitability</h3>
            </div>
            <p className="text-lg mb-2">{farmerData.soilType || 'General'} - Highly Suitable</p>
            <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
              <div className="bg-green-600 h-full rounded-full" style={{width: '85%'}}></div>
            </div>
            <p className="mt-2 text-sm">85% Match</p>
          </div>

          <button
            onClick={() => setCurrentScreen('recommendations')}
            className={`w-full ${buttonPrimaryBg} hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition`}
          >
            View Crop Recommendations
          </button>
        </div>
      </div>
    </div>
  );

  // Screen 4: Crop Recommendations (Hero Screen)
  const RecommendationsScreen = () => {
    const crops = getCropRecommendations();
    
    return (
      <div className={`min-h-screen ${bgClass} ${textClass} p-6`}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Recommended Crops for You</h2>
          <p className="mb-8 text-lg">Based on {farmerData.season} season in {farmerData.location}</p>

          <div className="space-y-6">
            {crops.map((crop, index) => (
              <div key={index} className={`${cardBgClass} rounded-lg p-6 border-2 ${index === 0 ? 'border-green-500' : borderClass}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">🌾 {crop.name}</h3>
                    {index === 0 && <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Top Pick</span>}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">{crop.suitability}%</p>
                    <p className="text-sm">Suitability</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm opacity-70">Expected Yield</p>
                    <p className="font-semibold text-lg">{crop.yield}</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Risk Level</p>
                    <p className={`font-semibold text-lg ${crop.risk === 'Low' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {crop.risk}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Droplets className="mr-2 text-blue-500" size={20} />
                    <span className="text-sm">Rain Compatibility: <strong>{crop.rainCompat}</strong></span>
                  </div>
                  <div className="flex items-center">
                    <Thermometer className="mr-2 text-orange-500" size={20} />
                    <span className="text-sm">Heat Tolerance: <strong>{crop.heatTolerance}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentScreen('advisory')}
            className={`w-full mt-6 ${buttonPrimaryBg} hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition`}
          >
            View Advisories & Alerts
          </button>
        </div>
      </div>
    );
  };

  // Screen 5: Advisory & Alerts
  const AdvisoryScreen = () => (
    <div className={`min-h-screen ${bgClass} ${textClass} p-6`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Advisory & Alerts</h2>
        <p className="mb-8 text-lg">Personalized guidance for {farmerData.name}</p>

        <div className="space-y-4">
          <div className={`${cardBgClass} border-l-4 border-blue-500 rounded-lg p-6`}>
            <div className="flex items-start">
              <Droplets className="mr-3 text-blue-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Rain Expected in 18 Hours</h3>
                <p>Avoid pesticide spraying. Wait until soil dries before applying chemicals.</p>
              </div>
            </div>
          </div>

          <div className={`${cardBgClass} border-l-4 border-green-500 rounded-lg p-6`}>
            <div className="flex items-start">
              <CheckCircle className="mr-3 text-green-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Irrigate After Rainfall</h3>
                <p>Monitor soil moisture. Light irrigation recommended 2-3 days after rain stops.</p>
              </div>
            </div>
          </div>

          <div className={`${cardBgClass} border-l-4 border-yellow-500 rounded-lg p-6`}>
            <div className="flex items-start">
              <AlertTriangle className="mr-3 text-yellow-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Fertilizer Advisory</h3>
                <p>Use fertilizer only after soil report. Over-application can harm soil health and crops.</p>
              </div>
            </div>
          </div>

          <div className={`${cardBgClass} border-l-4 border-orange-500 rounded-lg p-6`}>
            <div className="flex items-start">
              <Thermometer className="mr-3 text-orange-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Temperature Alert</h3>
                <p>High temperatures expected next week. Ensure adequate irrigation for heat-sensitive crops.</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setCurrentScreen('impact')}
          className={`w-full mt-8 ${buttonPrimaryBg} hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition`}
        >
          View Impact Dashboard
        </button>
      </div>
    </div>
  );

  // Screen 6: Impact Dashboard
  const ImpactScreen = () => (
    <div className={`min-h-screen ${bgClass} ${textClass} p-6`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Your Farming Impact</h2>
        <p className="mb-8 text-lg">Estimated benefits for {farmerData.name}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass} text-center`}>
            <Droplets className="mx-auto mb-4 text-blue-500" size={48} />
            <h3 className="text-4xl font-bold mb-2 text-blue-500">35%</h3>
            <p className="text-lg font-semibold">Water Saved</p>
            <p className="text-sm opacity-70 mt-2">~1,200 liters/hectare</p>
          </div>

          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass} text-center`}>
            <span className="text-5xl mb-4 block">💰</span>
            <h3 className="text-4xl font-bold mb-2 text-green-600">₹15,000</h3>
            <p className="text-lg font-semibold">Cost Reduced</p>
            <p className="text-sm opacity-70 mt-2">Per season estimate</p>
          </div>

          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass} text-center`}>
            <span className="text-5xl mb-4 block">🌱</span>
            <h3 className="text-4xl font-bold mb-2 text-green-700">+25%</h3>
            <p className="text-lg font-semibold">Soil Health Improved</p>
            <p className="text-sm opacity-70 mt-2">Better nutrient balance</p>
          </div>

          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass} text-center`}>
            <TrendingUp className="mx-auto mb-4 text-purple-500" size={48} />
            <h3 className="text-4xl font-bold mb-2 text-purple-500">+18%</h3>
            <p className="text-lg font-semibold">Yield Increase</p>
            <p className="text-sm opacity-70 mt-2">Expected improvement</p>
          </div>
        </div>

        <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass} mb-6`}>
          <h3 className="text-xl font-bold mb-4">Sustainability Score</h3>
          <div className="bg-gray-300 h-6 rounded-full overflow-hidden mb-2">
            <div className="bg-green-600 h-full rounded-full flex items-center justify-end pr-4" style={{width: '78%'}}>
              <span className="text-white font-bold text-sm">78%</span>
            </div>
          </div>
          <p className="text-sm opacity-70">Your farming practices are highly sustainable</p>
        </div>

        <button
          onClick={() => setCurrentScreen('home')}
          className={`w-full ${buttonPrimaryBg} hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition`}
        >
          Start New Analysis
        </button>
      </div>
    </div>
  );

  // How It Works Screen
  const HowItWorksScreen = () => (
    <div className={`min-h-screen ${bgClass} ${textClass} p-6`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">How Uzhavan Works</h2>

        <div className="space-y-6">
          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
            <h3 className="text-xl font-bold mb-3">1. Tell Us About Your Farm</h3>
            <p>Share your location, season, soil type, and irrigation method.</p>
          </div>

          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
            <h3 className="text-xl font-bold mb-3">2. Climate Intelligence</h3>
            <p>We analyze real-time weather data, rainfall patterns, and temperature trends for your region.</p>
          </div>

          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
            <h3 className="text-xl font-bold mb-3">3. Get Personalized Recommendations</h3>
            <p>Receive crop suggestions tailored to your specific conditions with suitability scores.</p>
          </div>

          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
            <h3 className="text-xl font-bold mb-3">4. Real-Time Advisories</h3>
            <p>Get alerts about rainfall, irrigation timing, and fertilizer application.</p>
          </div>

          <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
            <h3 className="text-xl font-bold mb-3">5. Track Your Impact</h3>
            <p>Monitor water savings, cost reduction, and soil health improvements over time.</p>
          </div>
        </div>

        <button
          onClick={() => setCurrentScreen('home')}
          className={`w-full mt-8 ${buttonPrimaryBg} hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition`}
        >
          Back to Home
        </button>
      </div>
    </div>
  );

  // Render current screen
  const renderScreen = () => {
    switch(currentScreen) {
      case 'home': return <LandingScreen />;
      case 'input': return <InputScreen />;
      case 'climate': return <ClimateScreen />;
      case 'recommendations': return <RecommendationsScreen />;
      case 'advisory': return <AdvisoryScreen />;
      case 'impact': return <ImpactScreen />;
      case 'howItWorks': return <HowItWorksScreen />;
      default: return <LandingScreen />;
    }
  };

  return (
    <div className={`${bgClass} min-h-screen`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 ${cardBgClass} ${textClass} p-3 rounded-full shadow-lg border ${borderClass} z-50 hover:opacity-80 transition`}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {renderScreen()}
    </div>
  );
}