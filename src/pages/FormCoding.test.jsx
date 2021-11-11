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
      target: { value: 'agusdw1m1ll' },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'agusdwimill' },
    });

    expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue('agusdw1m1ll');
    expect(screen.getByLabelText(/Email/)).toHaveValue('agusdwimill');
  });

  test('input name email true value', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'AgusDM' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'agusdwimill@gmail.com' },
    });


    expect(screen.getByLabelText(/Nama/)).toHaveValue('AgusDM');
    expect(screen.getByLabelText(/Email/)).toHaveValue('agusdwimill@gmail.com');
  });
});