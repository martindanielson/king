import React from 'react';
import { render } from '@testing-library/react';

import { GameStateContext } from './index';
import Games from './Games';

const mockJson = {
  games: [
    { name: 'One', short: 'one', url: '/one', tags: 'one', hasBoosters: false },
    { name: 'Two', short: 'two', url: '/two', tags: 'two', hasBoosters: false },
  ]
};

test('loads and displays all games', async () => {
  const { games } = mockJson;

  const mockContext = {
    addGame: () => { },
  };

  const node = (
    <GameStateContext.Provider value={mockContext}>
      <Games {...{ games }} />
    </GameStateContext.Provider>
  );

  const { getByText, getByTestId } = render(node);
  const list = getByTestId('games');
  expect(list).toBeInTheDocument();
  expect(list.children).toHaveLength(2);

  const titleElement = getByText(/One/i);
  expect(titleElement).toBeInTheDocument();
});
