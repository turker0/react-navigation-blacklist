import type { RouteProp } from '@react-navigation/core';

export type useTabBatBlacklistProps = {
  list: string[] | enum;
  route: RouteProp<Record<string, object | undefined>, string>;
};
