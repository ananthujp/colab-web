import {
  FacebookFilled,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { LinkIcon } from "@heroicons/react/24/solid";
import confirm from "antd/es/modal/confirm";
import React from "react";
const showConfirm = ({ url }) => {
  confirm({
    title: "External Link",
    icon: <LinkIcon className="w-5 text-gray-400 mr-1" />,
    content: "You are now leaving CoLab's website to an external link.",
    okButtonProps: { className: "bg-blue-400 " },
    onOk() {
      window.open(url, "_blank");
    },
    // onCancel() {
    //   console.log('Cancel');
    // },
  });
};
function Footer() {
  return (
    <div className="mt-12 flex w-full bg-white/60  h-16 border border-slate-400/30">
      <div className="flex flex-col md:flex-row justify-between my-auto items-center w-full max-w-5xl mx-auto">
        <div className="text-gray-300 italic gap-3 flex flex-row">
          <FacebookOutlined
            onClick={() =>
              showConfirm({ url: "https://www.facebook.com/iitgn.official/" })
            }
            className="text-2xl text-slate-600"
          />
          <InstagramOutlined
            onClick={() =>
              showConfirm({
                url: "https://www.instagram.com/iit_gandhinagar/?hl=en",
              })
            }
            className="text-2xl text-slate-600"
          />
          <TwitterOutlined
            onClick={() =>
              showConfirm({
                url: "https://twitter.com/iitgn?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
              })
            }
            className="text-2xl text-slate-600"
          />
          <LinkedinOutlined
            onClick={() =>
              showConfirm({
                url: "https://in.linkedin.com/school/indian-institute-of-technology-gandhinagar-iitgn-/",
              })
            }
            className="text-2xl text-slate-600"
          />
        </div>
        <div className="font-mont text-slate-600 font-xs">
          &#169; Indian Institute of Gandhinagar
        </div>
      </div>
    </div>
  );
}

export default Footer;
