// #region IMPORTS
import { useFormik } from "formik";
import React, { useCallback } from "react";
import tw from "twin.macro";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { Button, Input, Text } from "@/components/atoms";
import {
  GetAccessTicketParams,
  GetAccessTicketScheme,
} from "@/services/domains/GetAccessTicket.domains";
import infrastructure from "@/bootstrap/Infrastructure.bootstrap";
import { EndpointsClient } from "services/Endpoints.services";
import { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
// #endregion IMPORTS

// #region STYLED COMPONENTS
const Container = tw.div`w-full h-screen flex items-center justify-center`;
const VStack = tw.div`flex flex-col gap-4`;
const Form = tw(VStack)`gap-2`;
// #endregion STYLED COMPONENTS

// #region MAIN COMPONENT
const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const ticket = getCookie("PVEAuthCookie");
    if (ticket) {
      router.push("/");
    }
  }, [router]);

  const onSubmit = useCallback(
    (values: GetAccessTicketParams) => {
      setIsLoading(true);
      infrastructure.httpClient
        .post(EndpointsClient.ACCESS_TICKET, values)
        .then(() => router.push("/"))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    },
    [router]
  );

  const { isValid, dirty, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(GetAccessTicketScheme),
    onSubmit,
  });

  return (
    <Container>
      <VStack>
        <Text.Heading4 css={tw`text-center`}>Login to Proxmox</Text.Heading4>
        <Form>
          <Input
            name="username"
            label="username"
            placeholder="johndoe"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
          />
          <Input
            name="password"
            label="password"
            placeholder="********"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
          />
        </Form>
        <Button.Regular
          type="submit"
          disabled={!dirty || !isValid || isLoading}
          onClick={() => handleSubmit()}
        >
          {isLoading ? "Loading" : "Login"}
        </Button.Regular>
      </VStack>
    </Container>
  );
};
// #endregion MAIN COMPONENT

export default LoginPage;
