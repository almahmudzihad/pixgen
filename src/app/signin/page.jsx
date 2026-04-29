"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { waitForSegmentCacheEntry } from "next/dist/client/components/segment-cache/cache";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      callbackURL: "/",
      
    });
    console.log({data, error});
  };
  const handelGoogleSignIn = async () => {
     await authClient.signIn.social({
      provider: "google",
    });
    
  };

  return (
    <Card className="border mx-auto max-w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign in</h1>

      <Form className="flex max-w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        

        

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          
          
        </div>
      </Form>
      <Description className="text-center mt-2">For register to <Link href="/signup" className="text-blue-500">Sign up</Link></Description>
      <p className="text-center p-1">or</p>
      <Button className='max-w-96 mx-auto' onClick={handelGoogleSignIn}><GrGoogle />Sign in with Google</Button>
    </Card>
  );
}
