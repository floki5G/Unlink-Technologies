import { link } from "fs";
import { Cards } from "../../features/Cards";
import { SyncDataApi } from "../../services/apis/apis";
import { toast } from "react-toastify";
import { SyncComponent } from "./modules/syncData";

export function SettingComponent() {
  // ? setting list

  const settingList = [
    {
      id: 1,
      name: "User Management",
      description:
        "Manage your users and assign roles accordingly. You can also create new roles and assign permissions to them.",
      icon: "fas fa-book",
      key: "ACCESS_USERS_ROLE",
      link: "/usersmanagements",
    },

    {
      id: 2,
      name: "Social Media",
      description:
        "Connect all your social media accounts here and allow your customers to reach you through their preferred channels.",
      icon: "fas fa-book",
      key: "ACCESS_SOCIAL_MEDIA",
      link: "/socialmedias",
    },

    {
      id: 3,
      name: "Payment Gateway",
      description:
        "Connect your payment gateway to accept payments from your customers.",
      icon: "fas fa-book",
      key: "ACCESS_PAYMENT_GATEWAY",
      link: "/paymentgateways",
    },
  ];

  async function handleSyncData() {
    try {
      const response = await SyncDataApi();
      if (response?.status === "success") {
        toast.success("Sync data successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      <SyncComponent />

      <div className=" grid grid-cols-3 gap-3">
        {settingList.map((item) => (
          <Cards
            key={item.id}
            name={item.name}
            description={item.description}
            icon={item.icon}
            keyName={item.key}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
}
