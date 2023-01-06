// #region IMPORTS
import React, { useEffect } from "react";
import tw from "twin.macro";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import infrastructure from "@/bootstrap/Infrastructure.bootstrap";
import Endpoints from "@/domains/Endpoints.domains";
import { useState } from "react";
import { Text } from "@/components/atoms";
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
// #endregion PROPS

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
      .get(Endpoints.GET_NODES)
      .then(({ data }) => setNodes(data as unknown as NodesType));
  }, [router]);

  return (
    <Container>
      {nodes.map((data, index) => (
        <NodeCard key={index}>
          <Text.NormalFit>{data.node}</Text.NormalFit>
          <HStack>
            <Text.NormalFit css={tw`bg-green-500 text-white p-2 rounded-md`}>
              {data.status}
            </Text.NormalFit>
          </HStack>
        </NodeCard>
      ))}
    </Container>
  );
};
// #endregion MAIN COMPONENT

export default Home;
