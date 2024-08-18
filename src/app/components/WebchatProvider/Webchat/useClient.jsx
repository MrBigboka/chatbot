import "./style.css";
import theme from "./theme.json";

import { Webchat, WebchatProvider, useClient } from "@botpress/webchat";

const App = () => {
    const client = useClient({ clientId: "58e2baae-4147-4276-acb1-5b42f48916dc" });

    return (
        <WebchatProvider client={client} theme={theme}>
            <Webchat />
        </WebchatProvider>
    );
};
