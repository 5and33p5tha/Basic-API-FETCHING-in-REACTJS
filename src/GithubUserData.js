import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfiles = () => {
  const [information, setInformation] = useState({});
  // const [information, setInformation] = useState({
  //   "login": "gaearon",
  //   "id": 810438,
  //   "node_id": "MDQ6VXNlcjgxMDQzOA==",
  //   "avatar_url": "https://avatars.githubusercontent.com/u/810438?v=4",
  //   "gravatar_id": "",
  //   "url": "https://api.github.com/users/gaearon",
  //   "html_url": "https://github.com/gaearon",
  //   "followers_url": "https://api.github.com/users/gaearon/followers",
  //   "following_url": "https://api.github.com/users/gaearon/following{/other_user}",
  //   "gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
  //   "starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
  //   "subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
  //   "organizations_url": "https://api.github.com/users/gaearon/orgs",
  //   "repos_url": "https://api.github.com/users/gaearon/repos",
  //   "events_url": "https://api.github.com/users/gaearon/events{/privacy}",
  //   "received_events_url": "https://api.github.com/users/gaearon/received_events",
  //   "type": "User",
  //   "site_admin": false,
  //   "name": "dan",
  //   "company": "@facebook ",
  //   "blog": "",
  //   "location": null,
  //   "email": null,
  //   "hireable": null,
  //   "bio": null,
  //   "twitter_username": "dan_abramov",
  //   "public_repos": 262,
  //   "public_gists": 77,
  //   "followers": 74725,
  //   "following": 172,
  //   "created_at": "2011-05-25T18:18:31Z",
  //   "updated_at": "2022-05-12T18:52:17Z"
  // });

  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts")
      .get("https://api.github.com/users/gaearon")
      .then((res) => {
        console.log(res.data);
        setInformation(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      {/* <li>{information.login}</li> */}
      {/* <li>{information.avatar_url}</li> */}
      <div className="row">
        <div className="col-md-6">
          {/* <li>Login Name: {information.login}</li>
              <li>Name: {information.name}</li>
              <li>Location: {information.location}</li>
              <li>Company: {information.company}</li>
              <li>BIO: {information.bio}</li> */}
          <div className="card m-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{information.name}</h5>
              <p className="card-text">About The Users.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li>Login Name: {information.login}</li>
              <li>Name: {information.name}</li>
              <li>Location: {information.location}</li>
              <li>Company: {information.company}</li>
              <li>BIO: {information.bio}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          {/* <li>URL: {information.url}</li>
          <li>Avatar URL: {information.avatar_url}</li>
          <li>Followers URL: {information.followers_url}</li>
          <li>Following URL: {information.following_url}</li>
          <li>Starred URL: {information.starred_url}</li>
          <li>Subscription URL: {information.subscriptions_url}</li> */}

          <div class="card" style={{ width: "18rem" }}>
            <div class="card-header">URL's</div>
            <ul class="list-group list-group-flush">
              <li>URL: {information.url}</li>
              <li>Avatar URL: {information.avatar_url}</li>
              <li>Followers URL: {information.followers_url}</li>
              <li>Following URL: {information.following_url}</li>
              <li>Starred URL: {information.starred_url}</li>
              <li>Subscription URL: {information.subscriptions_url}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfiles;
