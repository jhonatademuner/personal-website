"use client"

import PostCard from "./PostCard";
import { useEffect, useState } from "react";

export default function Posts( { nPosts }) {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const response = await fetch("http://demo9387257.mockable.io/jblog");
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      return data.posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return null; // or handle the error as needed
    }
  }

  useEffect(() => {
    // Fetch the posts when the component mounts
    fetchPosts()
      .then((data) => {
        if (data) {
          setPosts(data); // Set the fetched posts in the component's state
        }
      });
  }, []);

  function renderPostCards() {
    // Slice the posts array to get the last three posts
    const latestPosts = posts.slice(-nPosts);

    // Map over the latest posts and create a PostCard for each
    return latestPosts.map((post) => (
      <PostCard
        key={post.title} // You should use a unique identifier as the key
        date={post.date}
        title={post.title}
        description={post.description}
        link="google.com" // You can replace this with the actual link
      />
    ));
  }

  return (
    <>
      {renderPostCards()}
    </>
  );
}
