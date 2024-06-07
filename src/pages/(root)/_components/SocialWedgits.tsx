import { Card } from "primereact/card";


const socialItems = [
  {
    platform: "Twitter",
    icon: "i-tabler-brand-twitter",
    link: "https://twitter.com",
    followers: "430K",
  },
  {
    platform: "Facebook",
    icon: "i-tabler-brand-facebook",
    link: "https://facebook.com",
    followers: "1.8M",
  },
  {
    platform: "Instagram",
    icon: "i-tabler-brand-instagram",
    link: "https://instagram.com",
    followers: "800K",
  },
  {
    platform: "Tiktok",
    icon: "i-tabler-brand-tiktok",
    link: "https://tiktok.com",
    followers: "180K",
  },
];
export default function SocialWedgits() {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4 h-full">
      {socialItems.map((item) => (
        <Card
          key={item.platform}
          className=" shadow-none border"
          onClick={() => window.location.replace(item.link)}
        >
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <i className={`${item.icon} text-8`} />
            <div className="text-center">
              <h3 className="text-10 font-bold">{item.followers}</h3>
              <span>Followers</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
