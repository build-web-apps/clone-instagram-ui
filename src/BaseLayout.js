import React, { useMemo } from 'react';
import { Header } from './components/Header/Header';
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...params,
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
};

const isStartView = () => {
  const { pathname } = window.location;
  return pathname.indexOf('/start') !== -1 || pathname === '/';
};

export const BaseLayout = ({ ...props }) => {
  const params = useRouter();
  const disableHeader = isStartView(params.pathname);
  return (
    <React.Fragment>
      {!disableHeader && <Header onNavigationClick={props.onNavigationClick} />}
      {props.children}
    </React.Fragment>
  );
};
