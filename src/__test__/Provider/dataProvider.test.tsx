import { renderHook } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";
import { useDataStore } from "../../Hooks";
import {
  DataProvider,
  DataProviderContext,
} from "../../Provider/DataStoreProvider";
import { useContext } from "react";

describe("DataProvider", () => {
  it("should detect that 1 item have added to the store", async () => {
    const CustomeComponent = () => {
      const { state } = useContext(DataProviderContext);
      const { addEntry } = useDataStore();
      const add = () => {
        addEntry("https://facebook.com");
      };

      return (
        <>
          <p data-testid="value">{state.length.toString()}</p>
          <button data-testid="button" onClick={add}>
            Submit
          </button>
        </>
      );
    };
    const mount = render(
      <DataProvider>
        <CustomeComponent />
      </DataProvider>
    );
    (await mount.findByTestId("button")).click();
    expect((await mount.findByTestId("value")).textContent).toBe("1");
  });

  it("should detect that 2 item have added to the store", async () => {
    const CustomeComponent = () => {
      const { state } = useContext(DataProviderContext);
      const { addEntry } = useDataStore();
      const add = () => {
        addEntry("https://facebook.com");
      };

      return (
        <>
          <p data-testid="value">{state.length.toString()}</p>
          <button data-testid="button" onClick={add}>
            Submit
          </button>
        </>
      );
    };
    const mount = render(
      <DataProvider>
        <CustomeComponent />
      </DataProvider>
    );
    (await mount.findByTestId("button")).click();
    (await mount.findByTestId("button")).click();
    expect((await mount.findByTestId("value")).textContent).toBe("2");
  });

  it("should detect that 5 item have added to the store", async () => {
    const CustomeComponent = () => {
      const { state } = useContext(DataProviderContext);
      const { addEntry } = useDataStore();
      const add = () => {
        addEntry("https://facebook.com");
      };

      return (
        <>
          <p data-testid="value">{state.length.toString()}</p>
          <button data-testid="button" onClick={add}>
            Submit
          </button>
        </>
      );
    };
    const mount = render(
      <DataProvider>
        <CustomeComponent />
      </DataProvider>
    );
    (await mount.findByTestId("button")).click();
    (await mount.findByTestId("button")).click();
    (await mount.findByTestId("button")).click();
    (await mount.findByTestId("button")).click();
    (await mount.findByTestId("button")).click();
    expect((await mount.findByTestId("value")).textContent).toBe("5");
  });
});
