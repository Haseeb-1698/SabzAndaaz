import AppComponent from '../components/AppComponent';
import '../components/App.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <div>
      <AppComponent />
      <SpeedInsights />
    </div>
  );
}
