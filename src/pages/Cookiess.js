import Cookies from "js-cookie";



const SetCookie = (response) => {
  console.log("aisi setcookie e ");
  console.log(response);
  // const tokenn = response.split(' ')[1];
  // console.log(tokenn);
//   const token =  response.access_token ;
//  // console.log(token);
//   console.log("Helloooooooooooooo");
//   var base64Url = token.split('.')[1];
//   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//   }).join(''));

//  const decoded = JSON.parse(jsonPayload);

// console.log(jsonPayload);
// console.log(decoded);
// const {user_id,user_name,user_role}=decoded;

// console.log(decoded);
// console.log(user_id);
// console.log(user_name);
// console.log(user_role);

// const fresponse=response.data.access_token
// console.log(fresponse);

// const u = jwt(response.data);`
// console.log(" setcookie e ");
// console.log(u);
// console.log(u.user_id);
// console.log(u.user_name);
// console.log(u.user_role);
// setResponse(u);
// console.log(response);

//const gg = JSON.stringify(response);

  Cookies.set("tokenn", response, {
    expires: 10,
  });
  console.log("Set Cookies");

 //GetCookie(Cookies.get("tokenn"));
  // const getcookie=GetCookie();
  // console.log("eiiii koi "+ JSON.stringify(getcookie.access_token));
};
  // Method to get data from cookies
  const GetCookie = () => {
    //console.log("hjhj"+r);
    // console.log( Cookies.get("tokenn"));
     const cookieData = Cookies.get("tokenn");
     //const parsedData = JSON.parse(cookieData);
    console.log(cookieData);
    // alert(Cookies.get("tokenn"));
    return (cookieData);
   
  };

  // Method to remove data from cookies
  const RemoveCookie = () => {
    Cookies.remove("tokenn");
  };


 export { GetCookie, RemoveCookie, SetCookie };

