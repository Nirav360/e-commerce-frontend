import { Card, CardContent, CardHeader } from "@mui/material";
import "./login.css";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="lg:w-1/3">
          <Card elevation={10} className="!bg-slate-100">
            <CardHeader title="Login" />
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
