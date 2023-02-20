import { InteractionType } from "@azure/msal-browser";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsalAuthentication,
} from "@azure/msal-react";
import React from "react";
import { loginRequest } from "./authConfig";

export default function App() {
  const { login, result, error } = useMsalAuthentication(
    InteractionType.Redirect,
    loginRequest
  );

  return (
    <React.Fragment>
      <div className="flex flex-col justify-around h-screen w-screen">
        <div className="text-5xl font-bold mx-auto">taskmesh.xyz</div>
        <AuthenticatedTemplate>
          <div className="text-2xl font-bold mx-auto">Welcome.</div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <div className="text-2xl font-bold mx-auto">Loading...</div>
        </UnauthenticatedTemplate>
      </div>
    </React.Fragment>
  );
}
