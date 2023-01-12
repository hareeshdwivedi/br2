import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Banner from './modules/banner/banner';
import Capsules from './modules/data-grid/capsules-item';

const data = [
  {
    capsule_serial: 'C101',
    capsule_id: 'dragon1',
    status: 'retired',
    original_launch: '2010-12-08T15:43:00.000Z',
    original_launch_unix: 1291822980,
    missions: [{ name: 'COTS 1', flight: 7 }],
    landings: 1,
    type: 'Dragon 1.0',
    details: 'Reentered after three weeks in orbit',
  },
];

describe('<App/>', () => {
  test('renders banner', () => {
    render(<Banner />);
    const banner = screen.getByTestId(/banner/i);
    expect(banner).toBeInTheDocument();
  });

  test('renders DataGrid', () => {
    render(<Capsules data={data} />);
    const filters = screen.getByTestId(/dataGrid/i);
    expect(filters).toBeInTheDocument();
  });
});
