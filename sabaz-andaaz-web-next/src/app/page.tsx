import AppComponent from '../components/AppComponent';
import '../components/App.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div>
      <AppComponent />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
