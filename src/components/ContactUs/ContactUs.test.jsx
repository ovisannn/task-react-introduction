import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactUs from "./ContactUs";

describe("FormPage", () => {
  test("Render form", () => {
    render(<ContactUs />);
    expect(screen.getByText(/Full Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/)).toBeInTheDocument();
  });

  test("Input text name email false value", () => {
    render(<ContactUs />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/ }), {
      target: { value: "oviSanjaya11" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/ }), {
      target: { value: "oviSanjaya11" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /pesan/ }), {
      target: { value: "oviSanjaya11" },
    });

    expect(
      screen.getByText("Nama harus menggunakan huruf saja tanpa angka")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Masukkan email dengan format yang sesuai")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/)).toHaveValue("oviSanjaya11");
    expect(screen.getByLabelText(/Email Address/)).toHaveValue("oviSanjaya11");
    expect(screen.getByLabelText(/Message/)).toHaveValue("oviSanjaya11");
  });
});
