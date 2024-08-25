import * as Icons from "iconsax-react";
const DashboardIcon = ({
  title,
  active,
}: {
  title: keyof typeof Icons;
  active: boolean;
}) => {
  const IconComponent = Icons[title];
  return (
    <div>
      {<IconComponent size={35} color={active ? "#ffffff" : "#989898"} />}
    </div>
  );
};

export default DashboardIcon;
