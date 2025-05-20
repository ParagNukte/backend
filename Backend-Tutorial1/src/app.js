import express from express;
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
//adding cors package
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN, //specific which origin to share 
        credentials:true,// specifing the creds to be true
    }
))

app.use(express.json({
    limit:"16kb", //setting limit to the respose we get in body to be captured in JSON format with limit of 16kb max default is 100kb 
}))

app.use(express.urlencoded({extended:true, limit:"16kb"}))  // used for the urlencoders, extended for representing the encoded url to json like structure i.e. nested objects.

app.use(express.static("public"));  // just to know that our static files are in the mentioned directory/

app.use(cookieParser()); // for accessing and setting the cookies which only server can do.

export {app};