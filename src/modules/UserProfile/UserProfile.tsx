import React, { FC } from 'react';

import { useUserStore } from 'stores/user';

export const UserProfile: FC = () => {
  const { user: { email, name } } = useUserStore();

  return (
    <div>
      { name}
    </div>
  );
};
