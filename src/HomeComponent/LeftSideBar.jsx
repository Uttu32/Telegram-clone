import React from "react";
import style from "./LeftSideBar.module.css";
import { CgMoreO } from "react-icons/cg";
import { BiHomeCircle } from "react-icons/bi";
import { Button } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FaTwitter from "@mui/icons-material/Twitter";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { FiMoreHorizontal } from "react-icons/fi";

export default function LeftSideBar() {
  const data = [
    {
      icon: <BiHomeCircle />,
      name: "Home",
    },
    {
      icon: <TagIcon />,
      name: "Explore",
    },
    {
      icon: <NotificationsNoneIcon />,
      name: "Notifications",
    },
    {
      icon: <MailOutlineIcon />,
      name: "Messages",
    },
    {
      icon: <BookmarkBorderIcon />,
      name: "Bookmarks",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter Blue",
    },
    {
      icon: <PermIdentityIcon />,
      name: "Profile",
    },
    {
      icon: <CgMoreO />,
      name: "More",
    },
  ];

  return (
    <div className={style.mainContainer}>
      <div className={style.sideBarBtnGroup}>
        <FaTwitter
          sx={{
            fontSize: "2.8rem",
            
          }}
          className={style.mainIcon}
        />
        {data.map((ele, index) => (
          <Button
            title={window.screen.width > 840 ? ele.name : ""}
            size="large"
            className={style.sideBarBtn}
            key={index}
            variant="text"
            sx={{
              color: "black",
              borderRadius: "3rem",
              fontWeight: "500",
              // backgroundColor: "black",
              fontSize: "1.3rem",
              textTransform: "none",
              gap: "1rem",
              padding: "0.8rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
            startIcon={ele.icon}
          >
            {ele.name}
          </Button>
        ))}

        <Button
          className={style.tweetBtn}
          sx={{
            fontSize: "1.2rem",
            textTransform: "none",
            borderRadius: "3rem",
            width: "16rem",
            height: "3.7rem",
            // marginLeft: "-2rem",
            // position:"relative",
            // left: "-1rem",
            backgroundColor: "rgb(29, 155, 240)",
          }}
          variant="contained"
        >
          Tweet{" "}
        </Button>
      </div>

      <div className={style.userDiv}>
        <PermIdentityIcon
          sx={{
            height: "3rem",
            width: "3rem",
          }}
        />
        <span>Name</span>
        <span>@userName</span>
        <FiMoreHorizontal />
      </div>
    </div>
  );
}
