"use client"
import Image from "next/image";
import { CheckCircle2, Lock, ShieldCheck, CreditCard } from "lucide-react";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EB] flex flex-col font-sans">


      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-24">
        
        {/* Left Column: Order Summary (Shows first on mobile) */}
        <div className="lg:col-span-5 order-first lg:order-last">
          <div className="bg-white rounded-3xl p-8 border border-primary/10 shadow-xl sticky top-8">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6 pb-6 border-b border-primary/10">
              Order Summary
            </h2>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-primary">MC</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground leading-tight mb-1">
                  The 4-Step Manifestation Masterclass
                </h3>
                <p className="text-sm text-foreground/60">Live Access + Lifetime Recording</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="font-bold text-sm text-primary uppercase tracking-wider">Included Bonuses:</p>
              {[
                { name: "30-Minute Breakthrough Call", value: "$279 Value" },
                { name: "5 Organs of Abundance Guidebook", value: "$50 Value" },
                { name: "Fast-Action Workbook", value: "$47 Value" },
                { name: "Spiritual Integration Toolkit", value: "$50 Value" }
              ].map((bonus, i) => (
                <div key={i} className="flex flex-start justify-between gap-3 text-sm font-medium text-foreground/80">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{bonus.name}</span>
                  </div>
                  <div className="flex flex-col items-end text-right shrink-0">
                    <span className="line-through text-foreground/40 text-xs">{bonus.value}</span>
                    <span className="text-secondary font-bold text-xs uppercase tracking-wide">FREE</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-primary/10 mb-6 space-y-3">
              <div className="flex justify-between items-center text-foreground/80">
                <span className="font-medium">The 4-Step Masterclass</span>
                <span className="font-medium">$27.00</span>
              </div>
              <div className="flex justify-between items-center text-foreground/80">
                <span className="font-medium">All 4 Bonuses (Value: $426.00)</span>
                <span className="text-secondary font-extrabold uppercase tracking-wide">FREE</span>
              </div>
              
              <div className="flex justify-between items-center pt-4 mt-2 border-t border-primary/10">
                <span className="text-xl font-bold text-foreground">Total Today</span>
                <span className="text-3xl font-extrabold text-primary">$27.00</span>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-4 flex items-center gap-4 border border-primary/10">
              <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
              <p className="text-xs text-foreground/70 font-medium leading-relaxed">
                <strong className="text-foreground block mb-0.5">100% Secure Checkout</strong>
                Your information is highly encrypted and completely secure.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Checkout Form (Shows second on mobile) */}
        <div className="lg:col-span-7">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-foreground mb-4">
              Complete Your Registration
            </h1>
            <p className="text-lg text-foreground/70 font-medium">
              Secure your spot for the live Masterclass and unlock your bonuses instantly.
            </p>
          </div>

          <form className="space-y-8" onClick={(e) => e.preventDefault()}>
            
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-primary/10 shadow-sm relative">
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold font-sans shadow-lg z-10 border-4 border-[#F8F5EB]">
                1
              </div>
              <h2 className="text-xl font-bold font-sans text-foreground mb-6 flex items-center gap-2">
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 space-y-1">
                  <label className="text-sm font-semibold text-foreground/80">First Name</label>
                  <input type="text" placeholder="Jane" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5 space-y-1">
                  <label className="text-sm font-semibold text-foreground/80">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5 space-y-1 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground/80">Email Address</label>
                  <input type="email" placeholder="jane.doe@example.com" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5 space-y-1 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground/80">Phone Number (Optional)</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-primary/10 shadow-sm relative">
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold font-sans shadow-lg z-10 border-4 border-[#F8F5EB]">
                2
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-bold font-sans text-foreground flex items-center gap-2">
                  Payment Method
                </h2>
                <div className="flex gap-2">
                  <div className="h-6 w-10 bg-gray-200 rounded shrink-0 flex items-center justify-center text-[8px] font-bold text-gray-500">VISA</div>
                  <div className="h-6 w-10 bg-gray-200 rounded shrink-0 flex items-center justify-center text-[8px] font-bold text-gray-500">MC</div>
                  <div className="h-6 w-10 bg-gray-200 rounded shrink-0 flex items-center justify-center text-[8px] font-bold text-gray-500">AMEX</div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-col gap-1.5 space-y-1 relative">
                  <label className="text-sm font-semibold text-foreground/80">Card Number</label>
                  <div className="relative">
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-11 pr-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors font-mono" />
                    <CreditCard className="w-5 h-5 text-foreground/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 space-y-1">
                    <label className="text-sm font-semibold text-foreground/80">Expiration</label>
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors text-center sm:text-left font-mono" />
                  </div>
                  <div className="flex flex-col gap-1.5 space-y-1">
                    <label className="text-sm font-semibold text-foreground/80">CVC</label>
                    <input type="text" placeholder="123" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors text-center sm:text-left font-mono" />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                className="w-full group relative inline-flex items-center justify-center px-10 py-6 font-bold text-primary-foreground bg-primary rounded-2xl shadow-xl hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] text-xl font-sans"
              >
                <Lock className="w-5 h-5 mr-3 opacity-80" />
                Complete Order - $27
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md -z-10 group-hover:opacity-100 opacity-0 transition-opacity"></div>
              </button>
              <p className="text-center text-xs text-foreground/60 mt-4 font-medium flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Payments are secure and encrypted
              </p>
            </div>

          </form>
        </div>

      </div>
    </main>
  );
}
