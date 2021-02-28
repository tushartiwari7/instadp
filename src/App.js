import './App.css';
import {useState} from 'react'

function App() {

  var temp = {
    "logging_page_id":"profilePage_2005061747",
    "show_suggested_profiles":false,
    "show_follow_dialog":false,
    "graphql":{
      "user":{
        "biography":"I love people who smile at hard times.\n\ud83e\udd40\n\ud83d\udc7b tushartiwari7","blocked_by_viewer":false,
        "restricted_by_viewer":null,
        "country_block":false,
        "external_url":"http://tushartiwari.me/",
        "external_url_linkshimmed":"https://l.instagram.com/?u=http%3A%2F%2Ftushartiwari.me%2F&e=ATMmc4MNyZor1cDJYgJGlgvvrEC8TefZxtQRaPgd4bIxI4wQgq_1wFNOsJ8jLXTKlgmJhXguNgwtkr9DGQ6BESHxooCPus_h&s=1",
        "edge_followed_by":{"count":521},
        "fbid":"17841402092420632",
        "followed_by_viewer":false,
        "edge_follow":{"count":280},
        "follows_viewer":false,
        "full_name":"Tushar",
        "has_ar_effects":false,
        "has_clips":false,
        "has_guides":false,
        "has_channel":false,
        "has_blocked_viewer":false,
        "highlight_reel_count":0,
        "has_requested_viewer":false,
        "id":"2005061747",
        "is_business_account":false,
        "is_joined_recently":false,
        "business_category_name":null,
        "overall_category_name":null,
        "category_enum":null,
        "category_name":null,
        "is_private":true,
        "is_verified":false,
        "edge_mutual_followed_by":{
          "count":0,
          "edges":[]
        },
        "profile_pic_url":"https://instagram.fixc4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/136655089_230982381771613_955194745794219723_n.jpg?tp=1&_nc_ht=instagram.fixc4-1.fna.fbcdn.net&_nc_ohc=FnfkIXFFbVoAX98Do1A&oh=909bfe35f3c9122c1538ca545542d9ea&oe=60645024",
        "profile_pic_url_hd":"https://instagram.fixc4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/136655089_230982381771613_955194745794219723_n.jpg?tp=1&_nc_ht=instagram.fixc4-1.fna.fbcdn.net&_nc_ohc=FnfkIXFFbVoAX98Do1A&oh=c367560ef9ff91f9b58e309334538d21&oe=60640554",
        "requested_by_viewer":false,
        "should_show_category":false,
        "username":"tushartiwari.me",
        "connected_fb_page":null,
        "edge_felix_video_timeline":{
          "count":0,
          "page_info":{
            "has_next_page":false,
            "end_cursor":null
          },
          "edges":[]
        },
        "edge_owner_to_timeline_media":{
          "count":33,
          "page_info":{
            "has_next_page":false,
            "end_cursor":null
          },
          "edges":[]
        },
        "edge_saved_media":{
          "count":0,
          "page_info":{
            "has_next_page":false,
            "end_cursor":null
          },
          "edges":[]
        },
        "edge_media_collections":{
          "count":0,
          "page_info":{
            "has_next_page":false,
            "end_cursor":null
          },
          "edges":[]
        },
        "edge_related_profiles":{
          "edges":[]
        }
      }
    },
    "toast_content_on_load":null,
    "show_view_shop":false,
    "profile_pic_edit_sync_props":null
  }

  console.log(JSON.stringify(temp,null,'\t'));
  var [tempPic,setTempPic] = useState(null);
    // setTempPic(temp.graphql.user.profile_pic_url_hd);

  var [username,setUsername] = useState(null);
  function usernameHandler(e) {
    setUsername(e.target.value);
  }
  
  function apiHandler(event) {
      event.preventDefault();
      console.log("api called");

      var url=`https://www.instagram.com/${username}/?__a=1`;

      fetch(url, {
        mode: 'no-cors',
        credentials: 'include'
      })
      .then(response => response.text())
      .then(result => {
        setTempPic(result.graphql.user.profile_pic_url_hd);
      })
      .catch(error => alert("Something's wrong with please try again or refresh this page", error))
  }

  return (
    <div className="App">
      <header>

        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <h1 className="navbar-brand display-2 ml-3" >InstaDp</h1>
          <form className="form-inline mr-lg-3" >
            <input className="form-control mr-sm-3" 
              style={{width: "20em"}} 
              type="search" 
              onChange={usernameHandler}
              placeholder="Enter Instagram Id" 
              aria-label="Search" 
            />
            <button 
                className="btn btn-outline-success my-2 my-sm-0" 
                onClick={apiHandler} 
                type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>
      <img src={tempPic} alt="Instagram profile pic" />
    </div>
  );
}
export default App;
