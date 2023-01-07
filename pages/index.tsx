// #region IMPORTS
import React, { useCallback, useEffect } from "react";
import tw from "twin.macro";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import infrastructure from "@/bootstrap/Infrastructure.bootstrap";
import { EndpointsClient } from "@/domains/Endpoints.domains";
import { useState } from "react";
import { Button, Text } from "@/components/atoms";
import { PowerIcon } from "@heroicons/react/24/outline";
// #endregion IMPORTS

// #region STYLED COMPONENTS
const Container = tw.div`p-8 flex flex-col gap-4`;
const NodeCard = tw.div`border rounded-md p-4 flex justify-between items-center`;
const HStack = tw.div`flex flex-row gap-2`;
// #endregion STYLED COMPONENTS

// #region PROPS
type NodesType = {
  maxdisk: number;
  disk: number;
  cpu: number;
  id: string;
  mem: number;
  type: string;
  maxmem: number;
  ssl_fingerprint: string;
  status: string;
  level: string;
  maxcpu: number;
  node: string;
  uptime: number;
}[];

type PromptProps = {
  status: string;
  isLoading: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};
// #endregion PROPS

const Prompt: React.FC<PromptProps> = ({
  status,
  isLoading,
  onConfirm,
  onCancel,
}) => {
  return (
    <HStack>
      <Button.Regular
        variants={status === "online" ? "error" : "success"}
        disabled={isLoading}
        onClick={onConfirm}
      >
        {isLoading ? "Loading" : "Confirm"}
      </Button.Regular>
      <Button.Basic onClick={onCancel}>Cancel</Button.Basic>
    </HStack>
  );
};

const OnlineStatusSection: React.FC<{ name: string; status: string }> = ({
  name,
  status,
}) => {
  const [isPromptShow, setIsPromptShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShutdown = useCallback(() => {
    setIsLoading(true);
    infrastructure.httpClient
      .post(EndpointsClient.NODES_SHUTDOWN, {
        node: name,
      })
      .then(() => alert("Shutdown Command Success"))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [name]);

  const handleWake = useCallback(() => {
    setIsLoading(true);
    infrastructure.httpClient
      .post(EndpointsClient.NODES_WAKE, {
        node: name,
      })
      .then(() => alert("Wake Command Success"))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [name]);

  return isPromptShow ? (
    <Prompt
      isLoading={isLoading}
      status={status}
      onConfirm={status === "online" ? handleShutdown : handleWake}
      onCancel={() => setIsPromptShow(false)}
    />
  ) : (
    <HStack>
      <Button.Regular variants={status === "online" ? "success" : "info"}>
        {status}
      </Button.Regular>
      <Button.Outline
        variants={status === "online" ? "error" : "success"}
        onClick={() => setIsPromptShow(true)}
      >
        <PowerIcon css={[tw`w-4 h-4 text-error-500`]} />
      </Button.Outline>
    </HStack>
  );
};

const Node: React.FC<{ name: string; status: string }> = ({ name, status }) => {
  return (
    <NodeCard>
      <Text.NormalFit>{name}</Text.NormalFit>
      <OnlineStatusSection name={name} status={status} />
    </NodeCard>
  );
};

// #region MAIN COMPONENT
const Home: React.FC = () => {
  const router = useRouter();
  const [nodes, setNodes] = useState<NodesType>([]);

  useEffect(() => {
    const ticket = getCookie("PVEAuthCookie");
    if (!ticket) {
      router.push("/login");
      return;
    }

    infrastructure.httpClient
      .get(EndpointsClient.GET_NODES)
      .then(({ data }) => setNodes(data as unknown as NodesType))
      .catch((e) => console.log(e));
  }, [router]);

  return (
    <Container>
      {nodes.map((data, index) => (
        <Node key={index} name={data.node} status={data.status} />
      ))}
    </Container>
  );
};
// #endregion MAIN COMPONENT

export default Home;
