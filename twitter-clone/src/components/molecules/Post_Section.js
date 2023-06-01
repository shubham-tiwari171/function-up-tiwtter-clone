import React from "react";
import style from "./Post_Section.module.css";
import Avatar from "@mui/material/Avatar";
import { LuRepeat2 } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";
import { GoVerified } from "react-icons/go";

function PostSection() {
  return (
    <div>
      <div className={style.postSection}>
        <div className={style.post}>
          <div className={style.avatar}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </div>
          <div className={style.details}>
            <div className={style.name}>Virat Kohli</div>
            <div className={style.icon}>
              <GoVerified fontSize="1.3rem" />
            </div>
            <div className={style.id}>@viratkohli</div>
          </div>
          <div>This is Message</div>
          <div>
            <div className={style.descrp}>
              #Cricketer#GuessWho#SundayVibes#YourSpace
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtbpeF3lUB3Jhmm8lH1W0Vq42vtWnzUqfRA&usqp=CAU"
              alt=""
              className={style.image}
            />
          </div>
          <div className={style.date}>
            <p>8:33pm</p>
            <p>23/04/2023</p>
          </div>
          <div className={style.visible}>
            <p>9,180Retweets</p>
            <p>211 Quote </p>
            <p>119.8K Likes</p>
            <p>88 Bookmark</p>
          </div>
          <div className={style.icons}>
            <div className={style.icons1}>
              <FaRegComment fontSize="1.4rem" />
            </div>
            <div  className={style.icons2}>
              <LuRepeat2 fontSize="1.4rem" />
            </div>
            <div className={style.icons3} >
              <HiOutlineBookmark fontSize="1.4rem"  />
            </div>
            <div className={style.icons4}>
              <MdFavoriteBorder fontSize="1.4rem"  />
            </div>
            <div className={style.icons5}>
              <BsUpload fontSize="1.4rem" />
            </div>
          </div>

          {/* <div className={style.avatar}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </div> */}
          {/* <div className={style.details}>
            <div className={style.name}>Virat Kohli</div>
            <div className={style.icon}>
              <GoVerified fontSize="1.3rem" />
            </div>
            <div className={style.id}>@viratkohli</div>
          </div> */}
          {/* <div>This is Message</div>
          // <div> 
            <div className={style.descrp}>
              #Cricketer#GuessWho#SundayVibes#YourSpace
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtbpeF3lUB3Jhmm8lH1W0Vq42vtWnzUqfRA&usqp=CAU"
              alt=""
              className={style.image}
            />
          </div>
          {/* <div className={style.date}>
            <p>8:33pm</p>
            <p>23/04/2023</p>
          </div> */}
          {/* <div className={style.visible}>
            <p>9,180Retweets</p>
            <p>211 Quote </p>
            <p>119.8K Likes</p>
            <p>88 Bookmark</p>
          </div> */}
          {/* <div className={style.icons}>
            <div className={style.icons1}>
              <FaRegComment fontSize="1.4rem" />
            </div>
            <div>
              <LuRepeat2 fontSize="1.4rem" className={style.icons2} />
            </div>
            <div>
              <HiOutlineBookmark fontSize="1.4rem" className={style.icons3} />
            </div>
            <div>
              <MdFavoriteBorder fontSize="1.4rem" className={style.icons4} />
            </div>
            <div>
              <BsUpload fontSize="1.4rem" className={style.icons5} />
            </div>
          </div>  */}
        </div>
      </div>
    </div>
  );
}

export default PostSection;
