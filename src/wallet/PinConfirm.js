import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import Header from "./Header";

const Container = styled(Flex)``;

const PinConfirm = () => {
    return (
        <Container>
            <Header title={"Confirm your Pin"} />
        </Container>
    );
};
export default PinConfirm;
