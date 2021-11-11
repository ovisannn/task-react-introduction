import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormCoding from './FormCoding';

describe('FormPage', () => {
  test('Render form', () => {
    render(<FormCoding />)
    expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument()
  });

  test('Input text name email false value', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'opiiii' },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'hantublues11' },
    });

    expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue('opiiii');
    expect(screen.getByLabelText(/Email/)).toHaveValue('hantublues11');
  });

  test('input name email true value', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'opiii' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'hantublues11@gmail.com' },
    });


    expect(screen.getByLabelText(/Nama/)).toHaveValue('opiii');
    expect(screen.getByLabelText(/Email/)).toHaveValue('hantublues11@gmail.com');
  });
});