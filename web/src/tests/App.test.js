import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { endpoints } from "api";
import { App } from "components";

const spending = {
  id: "01234567-89ab-cdef-0123-456789abcdef",
  description: "cookie",
  currency: "USD",
  amount: 200,
  spent_at: "2022-01-01T03:00:00.000Z",
  value: 105600,
};

const createSpending = (spending) => {
  fireEvent.change(screen.getByPlaceholderText("description"), {
    target: { value: spending.description },
  });
  fireEvent.change(screen.getByPlaceholderText("amount"), {
    target: { value: spending.amount },
  });
  fireEvent.change(screen.getByRole("combobox", { name: "currency" }), {
    target: { value: spending.currency },
  });
  fireEvent.click(screen.getByText("Save"));
};

const server = setupServer(
  rest.get(endpoints.spendings, (req, res, ctx) => {
    return res(ctx.json([]));
  }),
  rest.post(endpoints.spendings, (req, res, ctx) => {
    return res(ctx.json([spending]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("create spendings", () => {
  it("reloads list on API success", async () => {
    render(<App />);

    server.use(
      rest.get(endpoints.spendings, (req, res, ctx) => {
        return res.once(ctx.json([spending]));
      })
    );

    expect(screen.queryByText(spending.description)).not.toBeInTheDocument();
    createSpending(spending);
    expect(await screen.findByText(spending.description)).toBeVisible();
  });

  it("handles known failure modes (HTTP 4xx)", async () => {
    render(<App />);

    server.use(
      rest.post(endpoints.spendings, (req, res, ctx) => {
        return res.once(
          ctx.status(422),
          ctx.json({ description: ["can't be blank"] })
        );
      })
    );

    createSpending(spending);
    expect(
      await screen.findByText("description: can't be blank")
    ).toBeVisible();
  });

  it("handles unknown failure modes (HTTP 5xx)", async () => {
    render(<App />);

    server.use(
      rest.post(endpoints.spendings, (req, res, ctx) => {
        return res.once(ctx.status(500), "Internal Server Error");
      })
    );

    createSpending(spending);
    expect(await screen.findByText("Unknown error")).toBeVisible();
  });
});

describe("list spendings", () => {
  it("celebrates on empty API success", async () => {
    render(<App />);
    expect(await screen.findByText("Yay!", { exact: false })).toBeVisible();
  });

  it("displays list on non-empty API success", async () => {
    server.use(
      rest.get(endpoints.spendings, (req, res, ctx) => {
        return res.once(ctx.json([spending]));
      })
    );
    render(<App />);
    expect(await screen.findByText(spending.description)).toBeVisible();
  });

  it("handles known failure modes (HTTP 4xx)", async () => {
    server.use(
      rest.get(endpoints.spendings, (req, res, ctx) => {
        return res.once(ctx.status(400));
      })
    );

    render(<App />);
    expect(
      await screen.findByText("The server is probably down", { exact: false })
    ).toBeVisible();
  });

  it("handles unknown failure modes (HTTP 5xx)", async () => {
    server.use(
      rest.get(endpoints.spendings, (req, res, ctx) => {
        return res.once(ctx.status(500));
      })
    );

    render(<App />);
    expect(
      await screen.findByText("The server is probably down", { exact: false })
    ).toBeVisible();
  });
});
