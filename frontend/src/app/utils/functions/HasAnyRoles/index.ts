import React from 'react';
import { getTokenData } from './../getTokenData/index';
import { Role } from 'app/types/Role';

export const HasAnyRoles = (roles: Role[]) => {
  if (roles.length === 0) {
    return true;
  }

  const tokenData = getTokenData();

  if (tokenData !== undefined) {
    for (let i = 0; i < roles.length; i++) {
      if (tokenData.authorities.includes(roles[i])) {
        return true;
      }
    }
    // return roles.some(role => tokenData.authorities.includes(role));
  }
  return false;
};
