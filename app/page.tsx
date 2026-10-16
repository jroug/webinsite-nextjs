import Homepage from "@/components/home/Homepage";
import getHomepageData from "@/utils/homapageData";


export default async function Home() {
  
  const homepageData = await getHomepageData();
  
  return (
    <>
        <Homepage homepageData={homepageData} />
    </>
  );
}
