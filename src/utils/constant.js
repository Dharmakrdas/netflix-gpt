export const LOGO = "https://avatars.githubusercontent.com/u/48121717?v=4";
export const MAIN_LOGO =
  "https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png";
export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const TailerUrl = (movies_id)=>{
 const url =  `https://api.themoviedb.org/3/movie/${movies_id}/videos?language=en-US`
  return  url;
 }

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzI2MzNhNmY4ZWU1YzkyMDQxZDI1OWQ3MGQ5YzQzYSIsInN1YiI6IjY1ZjQxYTU1YTY5OGNmMDE4NmY3M2IyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UV_2uoqHvuwgIDR7wq6nMPU-baTa1rJho9NE6_r4CnE",
  },
};
