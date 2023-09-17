import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import "../layout/SalesHome.css";
import Sidebar from "./Sidebar";
 
export default function SalesHome() {
    return (
       
        <div className="saleshome" >
            <Sidebar/>
            <div className="sales" >
            <Card
                style={{
                    width: 400,
                    backgroundColor: "#6AE7F5",
                   
                }}
            >
                <CardContent>
                    <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                    >
                        Greetings from Remark HB
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Add Sales Employee
                    </Typography>
                    {/* <Typography
                        style={{
                            marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                        Keep Motivated
                    </Typography> */}
                    {/* <Typography variant="body2" component="p">
                        Stay Happy
                    </Typography> */}
                </CardContent>
                <CardActions>
                <Link className="btn btn-outline-success " to="/usersignup" style={{marginLeft:"150px", border: "3px solid #4CAF50",marginTop:"5px"}} >
              ADD
            </Link>
                </CardActions>
            </Card>
            <Card
                style={{
                    width: 400,
                    backgroundColor: "#736AF5",
                   
                }}
            >
                <CardContent>
                    <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                    >
                        Greetings from Remark HB
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Show Sales Employee
                    </Typography>
                    {/* <Typography
                        style={{
                            marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                        Keep Motivated
                    </Typography> */}
                    {/* <Typography variant="body2" component="p">
                        Stay Happy
                    </Typography> */}
                </CardContent>
                <CardActions>
                <Link className="btn btn-outline-success " to="/showsalesemployee" style={{marginLeft:"150px", border: "3px solid #4CAF50",marginTop:"5px"}} >
              Show
            </Link>
                </CardActions>
            </Card>
            <Card
                style={{
                    width: 400,
                    backgroundColor: "#F5986A",
                   
                }}
            >
                <CardContent>
                    <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                    >
                        Greetings from Remark HB
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Upload Notice
                    </Typography>
                    {/* <Typography
                        style={{
                            marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                        Keep Motivated
                    </Typography> */}
                    {/* <Typography variant="body2" component="p">
                        Stay Happy
                    </Typography> */}
                </CardContent>
                <CardActions>
                <Link className="btn btn-outline-success " to="/adduser" style={{marginLeft:"150px", border: "3px solid #4CAF50",marginTop:"5px"}} >
              Upload
            </Link>
                </CardActions>
            </Card>
            <Card
                style={{
                    width: 400,
                    backgroundColor: "yellow",
                   
                }}
            >
                <CardContent>
                    <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                    >
                        Greetings from Remark HB
                    </Typography>
                    <Typography variant="h5" component="h2">
                        
                        Login Sales Employee
                    </Typography>
                    {/* <Typography
                        style={{
                            marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                        Keep Motivated
                    </Typography> */}
                    {/* <Typography variant="body2" component="p">
                        Stay Happy
                    </Typography> */}
                </CardContent>
                <CardActions>
                <Link className="btn btn-outline-success " to="/userlogin" style={{marginLeft:"150px", border: "3px solid #4CAF50",marginTop:"5px"}} >
              Login
            </Link>
                </CardActions>
            </Card>
          
        </div>
        </div>
    );
}