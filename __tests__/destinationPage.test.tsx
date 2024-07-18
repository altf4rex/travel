import { store } from "store/configureStore";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Page from "../app/(places)/[destination]/page";
import { destinations } from "data";

describe("destination page", () => {
    beforeEach(() => 
        render(
            <Provider store={store}>
                <Page params={{destination: "kanto"}}/>
            </Provider>
        )
    )
})