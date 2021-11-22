import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';
import type { useTabBatBlacklistProps } from 'react-navigation-blacklist';

export const useTabBarBlacklist = () => {
  const blacklist = React.useCallback(
    ({ list, route }: useTabBatBlacklistProps) => {
      return !list.includes(getFocusedRouteNameFromRoute(route) ?? '');
    },
    []
  );
  return { blacklist };
};
