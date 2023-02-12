import { InteractionStatus } from "@azure/msal-browser";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Login from "./components/Login";

export default function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress } = useMsal();

  const handleLogin = () => {
    if (inProgress === InteractionStatus.None && !isAuthenticated) {
      instance.loginRedirect(loginRequest).then();
    }
  };

  let name;
  if (isAuthenticated) {
    const accounts = instance.getAllAccounts();
    name = accounts[0].name;
  }

  return (
    <div>
      <AuthenticatedTemplate>
        <div className="flex flex-col justify-around h-screen p-3">
          <h1 className="text-4xl mx-auto font-bold">taskmesh.xyz</h1>
          <h3 className="text-xl mx-auto">Welcome, {name}.</h3>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login handleLogin={() => handleLogin()} />
      </UnauthenticatedTemplate>
    </div>
  );
}
