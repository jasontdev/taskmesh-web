import { Button, Centered, FormBox, FormBoxTitle } from "./ui/forms";

type Login = {
  handleLogin: () => void;
};

export default function Login({ handleLogin }: Login) {
  return (
    <div className="flex justify-center w-screeno h-screen items-center">
      <FormBox>
        <FormBoxTitle title="taskmesh.xyz" />
        <Centered>
          <Button name="Login" onClick={handleLogin} primary />
        </Centered>
      </FormBox>
    </div>
  );
}
