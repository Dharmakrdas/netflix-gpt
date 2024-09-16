export const LOGO = "https://avatars.githubusercontent.com/u/48121717?v=4";
export const MAIN_LOGO =
  "https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png";
export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const TailerUrl = (movies_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movies_id}/videos?language=en-US`;
  return url;
};

export const MoviesImagUrl = (poster_id) => {
  const url = `https://image.tmdb.org/t/p/original/${poster_id}`;
  return url;
};

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzI2MzNhNmY4ZWU1YzkyMDQxZDI1OWQ3MGQ5YzQzYSIsInN1YiI6IjY1ZjQxYTU1YTY5OGNmMDE4NmY3M2IyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UV_2uoqHvuwgIDR7wq6nMPU-baTa1rJho9NE6_r4CnE",
  },
};

export const bgUrl =
  "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const lang = [
  { id: 3, title: "English" , value:"en"},
  { id: 2, title: "Hindi" ,value:"hi" },
  { id: 4, title: "Spanish" ,value:"sp"},
  { id: 5, title: "German",value:"gm" },
];
