import React from "react";
import {Layout, Text} from "@ui-kitten/components";
import {s} from "../styles/styles";

const Action = (props) => {
    return (
        <Layout style={{...s.topView, ...s.withPaddings}}>
            <Text>Действие</Text>
        </Layout>
    )
}

export default Action
