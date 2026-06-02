import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Edit2, Clock, CheckCircle, XCircle, ShieldCheck, LayoutDashboard, Settings, User as UserIcon, LogOut, ChevronRight } from 'lucide-react';
import { getAds, deleteAd } from '../services/db';
import { AdListing } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

export const UserDashboard = () => {
  const { user, profile, logout } = useAuth();
  const navigate = useNavigate();
  const [ads, setAds] = useState<AdListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'my-ads' | 'profile'>('my-ads');

  useEffect(() => {
    if (user) {
      fetchUserAds();
    }
  }, [user]);

  const fetchUserAds = async () => {
    setLoading(true);
    try {
      const userAds = await getAds({ userId: user?.uid });
      setAds(userAds);
    } catch (error) {
      console.error('Error fetching ads:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (adId: string) => {
    if (window.confirm('Are you sure you want to delete this ad?')) {
      try {
        await deleteAd(adId);
        setAds(ads.filter(ad => ad.id !== adId));
      } catch (error) {
        console.error('Error deleting ad:', error);
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
      pending: 'bg-amber-50 text-amber-600 border-amber-100',
      approved: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      rejected: 'bg-red-50 text-red-600 border-red-100',
    }[status as keyof typeof styles] || 'bg-zinc-50 text-zinc-600 border-zinc-100';

    const Icon = {
      pending: Clock,
      approved: CheckCircle,
      rejected: XCircle,
    }[status as keyof typeof Icon] || Clock;

    return (
      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${styles}`}>
        <Icon className="w-3 h-3" />
        {status}
      </div>
    );
  };

  return (
    <div className="pt-20 pb-24 md:pt-32 md:pb-20 h-[calc(100vh-65px)] md:min-h-screen bg-zinc-50 px-3 sm:px-6 overflow-hidden flex flex-col justify-start">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col min-h-0">
        
        {/* Unified Mobile Dashboard Container (lg:hidden) */}
        <div className="lg:hidden bg-white rounded-2xl border border-zinc-150 shadow-sm overflow-hidden mb-2.5 p-2.5 flex-shrink-0">
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-zinc-100 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <UserIcon className="text-white w-3 h-3" />
              </div>
              <div className="min-w-0">
                <h2 className="text-[11px] font-black text-zinc-900 leading-tight truncate">{profile?.name}</h2>
                <p className="text-zinc-400 text-[9px] truncate max-w-[130px] sm:max-w-[180px]">{profile?.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 shrink-0">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-zinc-50 text-[8px] font-black tracking-wider text-brand-dark uppercase rounded border border-zinc-200">
                {profile?.role}
              </span>
              <button 
                onClick={handleLogout}
                className="p-1 bg-red-50 hover:bg-red-100 text-red-650 rounded-lg transition-all active:scale-90"
                title="Logout"
              >
                <LogOut className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Segmented Tab Switcher - Seamlessly Integrated */}
          <div className="bg-zinc-50 p-0.5 rounded-lg grid grid-cols-2 gap-1 text-center font-bold">
            <button
              onClick={() => setActiveTab('my-ads')}
              className={`py-1 rounded-md text-[10px] transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'my-ads' 
                  ? 'bg-brand-dark text-white shadow-sm' 
                  : 'text-zinc-500 hover:bg-zinc-100'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" /> My Ads ({ads.length})
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-1 rounded-md text-[10px] transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'profile' 
                  ? 'bg-brand-dark text-white shadow-sm' 
                  : 'text-zinc-500 hover:bg-zinc-100'
              }`}
            >
              <Settings className="w-3.5 h-3.5" /> Settings
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 flex-1 min-h-0">
          {/* Desktop Sidebar (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[40px] border border-zinc-100 shadow-sm text-center">
              <div className="w-24 h-24 bg-brand-dark rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-dark/20">
                <UserIcon className="text-white w-12 h-12" />
              </div>
              <h2 className="text-2xl font-black mb-1">{profile?.name}</h2>
              <p className="text-zinc-405 text-sm mb-6">{profile?.email}</p>
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-brand-dark uppercase tracking-widest bg-zinc-50 py-2 rounded-xl">
                <ShieldCheck className="w-3.5 h-3.5" />
                {profile?.role} Account
              </div>
            </div>
 
            <div className="bg-white p-4 rounded-[40px] border border-zinc-100 shadow-sm space-y-2">
              <button 
                onClick={() => setActiveTab('my-ads')}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'my-ads' ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20' : 'text-zinc-500 hover:bg-zinc-50'}`}
              >
                <LayoutDashboard className="w-5 h-5" /> My Ads
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'profile' ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20' : 'text-zinc-500 hover:bg-zinc-50'}`}
              >
                <Settings className="w-5 h-5" /> Settings
              </button>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all"
              >
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 flex-1 flex flex-col min-h-0">
            <AnimatePresence mode="wait">
              {activeTab === 'my-ads' ? (
                <motion.div 
                  key="my-ads"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col min-h-0"
                >
                  <div className="flex items-center justify-between mb-2 md:mb-8 shrink-0">
                    <h1 className="text-base sm:text-3xl font-black hidden sm:block">My Ads</h1>
                    <Link to="/post-ad" className="w-full sm:w-auto justify-center bg-[#1f1926] hover:bg-brand-primary text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base flex items-center gap-1.5 sm:gap-2 transition-all shadow-md active:scale-95">
                      <Plus className="w-3.5 h-3.5 sm:w-5 sm:h-5" /> Post New Ad
                    </Link>
                  </div>

                  {loading ? (
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 flex-1 overflow-hidden">
                      {[1, 2].map(i => (
                        <div key={i} className="bg-white h-[90px] sm:h-[200px] rounded-xl sm:rounded-[40px] animate-pulse border border-zinc-100" />
                      ))}
                    </div>
                  ) : ads.length > 0 ? (
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-6 overflow-y-auto max-h-[46vh] lg:max-h-none flex-1 pr-1">
                      {ads.map(ad => (
                        <div key={ad.id} className="bg-white rounded-xl sm:rounded-[40px] overflow-hidden border border-zinc-150/80 shadow-sm group hover:shadow-md transition-all duration-300">
                          {/* Desktop/Tablet Layout */}
                          <div className="hidden sm:flex">
                            <div className="w-1/3 aspect-square relative overflow-hidden bg-zinc-50 shrink-0">
                              <img src={ad.images[0]} alt={ad.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-2/3 p-4 sm:p-6 flex flex-col justify-between min-w-0">
                              <div>
                                <div className="flex justify-between items-start mb-2 gap-1 flex-wrap">
                                  <StatusBadge status={ad.status} />
                                  <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">
                                    {formatDistanceToNow(ad.createdAt?.toDate() || new Date())} ago
                                  </p>
                                </div>
                                <h3 className="font-bold text-sm sm:text-lg text-zinc-900 mb-1 line-clamp-1">{ad.title}</h3>
                                <p className="text-brand-dark font-black text-base sm:text-xl">LKR {ad.price.toLocaleString()}</p>
                              </div>
                              <div className="flex gap-2 mt-4">
                                <button className="flex-1 bg-zinc-50 text-zinc-650 py-2 sm:py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all">
                                  <Edit2 className="w-3.5 h-3.5" /> Edit
                                </button>
                                <button 
                                  onClick={() => handleDelete(ad.id)}
                                  className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shrink-0"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Mobile-Only Micro List Row (Fits perfectly on standard screens to allow "one view" dashboard tracking) */}
                          <div className="flex sm:hidden items-center p-2.5 gap-3">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-50 shrink-0 border border-zinc-100">
                              <img src={ad.images[0]} alt={ad.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-[11px] font-black text-zinc-900 truncate leading-snug">{ad.title}</h4>
                              <p className="text-brand-dark font-black text-[11px] mt-0.5">LKR {ad.price.toLocaleString()}</p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className={`text-[8px] font-extrabold uppercase tracking-widest px-1 rounded ${
                                  ad.status === 'approved' ? 'bg-emerald-50 text-emerald-655 border border-emerald-100' :
                                  ad.status === 'rejected' ? 'bg-red-50 text-red-655 border border-red-100' : 'bg-amber-50 text-amber-655 border border-amber-100'
                                }`}>
                                  {ad.status}
                                </span>
                                <span className="text-[8px] text-zinc-400 font-medium font-mono">{formatDistanceToNow(ad.createdAt?.toDate() || new Date())} ago</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <button className="p-1.5 bg-zinc-50 hover:bg-zinc-100 text-zinc-550 rounded-lg active:scale-90 transition-all" title="Edit">
                                <Edit2 className="w-3 h-3" />
                              </button>
                              <button 
                                onClick={() => handleDelete(ad.id)}
                                className="p-1.5 bg-red-50 hover:bg-red-100 text-red-550 rounded-lg active:scale-90 transition-all"
                                title="Delete"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white p-5 md:p-20 rounded-2xl md:rounded-[40px] border border-dashed border-zinc-200 text-center flex-1 flex flex-col justify-center py-6">
                      <div className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-2">
                        <LayoutDashboard className="text-zinc-350 w-5 h-5" />
                      </div>
                      <h3 className="text-xs sm:text-xl font-bold text-zinc-900 mb-0.5">No ads yet</h3>
                      <p className="text-zinc-500 text-[10px] sm:text-xs mb-2">Start selling today by posting your first ad!</p>
                      <Link to="/post-ad" className="text-brand-dark text-[11px] sm:text-sm font-bold hover:underline">Post your first ad</Link>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div 
                  key="profile"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-4 md:p-10 rounded-2xl md:rounded-[40px] border border-zinc-150/60 shadow-sm flex-1 flex flex-col justify-center"
                >
                  <h1 className="text-base sm:text-3xl font-black mb-4 sm:mb-8 hidden sm:block">Profile Settings</h1>
                  <div className="space-y-3 sm:space-y-8 max-w-xl">
                    <div className="space-y-1">
                      <label className="text-[10px] sm:text-xs font-bold text-zinc-400 text-left block uppercase tracking-wider ml-1">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue={profile?.name}
                        className="w-full px-3.5 py-2 sm:px-6 sm:py-4 bg-zinc-50 rounded-lg sm:rounded-2xl border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-brand-dark/20 transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] sm:text-xs font-bold text-zinc-400 text-left block uppercase tracking-wider ml-1">Email Address</label>
                      <input 
                        type="email" 
                        disabled
                        defaultValue={profile?.email}
                        className="w-full px-3.5 py-2 sm:px-6 sm:py-4 bg-zinc-100 rounded-lg sm:rounded-2xl border border-zinc-205 text-zinc-500 cursor-not-allowed text-xs sm:text-sm"
                      />
                    </div>
                    <button className="w-full sm:w-auto bg-[#1f1926] text-white px-5 py-2.5 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base hover:bg-brand-primary transition-all shadow-md active:scale-95">
                      Save Changes
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
