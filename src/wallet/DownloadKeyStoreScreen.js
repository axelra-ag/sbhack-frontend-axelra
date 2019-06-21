import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";

const Container = styled(Flex)``;

const DownloadKeyStoreScreen = () => {
  return (
    <Container>
      <Header title={"DownloadKeyStoreScreen"} />
    </Container>
  );
};
export default DownloadKeyStoreScreen;
