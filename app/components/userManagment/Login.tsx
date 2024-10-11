"use client";

import { useState } from "react";

const Login = () => {
  type User = {
    username: string;
    password: string;
  };

  const [user, setUser] = useState<User>({
    username: "admin",
    password: "admin123",
  });

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
