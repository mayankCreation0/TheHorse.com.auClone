import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch } from 'react-redux';
import WishListAction from '../action/WishListAction';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes({element}) {

    let dispatch=useDispatch();

  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={(e)=>{
       
        
        e.target.disabled="true";
        

Post_wishListData(element)
async function Post_wishListData(element) {

    let update = await fetch(`https://mock-server-app-fqpl.onrender.com/wishlist`, {
        method: "POST",
        body: JSON.stringify(element),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((ans) => {


        if (ans.ok == false) {
            alert("Already Added in WishList");
        }
        else {
            fetch("https://mock-server-app-fqpl.onrender.com/wishlist").then((res) => res.json()).then((data1) => {


                WishListAction(data1, dispatch);

            });
        }

    })




}

      }} />
       
    </div>
  );
}