import Banner from "@/components/Banner";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  const stats = {
    totalEvents: 30,
    totalAttendees: 4000,
    totalOrgs: 10
  }

  return (
    <div>
      <Banner/>
      <WhyChoose/>
      <Statistics stats={stats}/>
      <Testimonials/> 
    </div>
  );
}