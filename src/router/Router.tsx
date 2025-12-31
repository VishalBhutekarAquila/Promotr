import React, { useEffect, useState } from "react";

interface Route {
  path: string;
  component: React.ReactElement;
}

interface RouterProps {
  routes: Route[];
  fallback?: React.ReactElement;
}

export const Router = ({
  routes,
  fallback,
}: RouterProps): React.ReactElement => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const matchedRoute = routes.find((route) => route.path === currentPath);

  return matchedRoute
    ? matchedRoute.component
    : fallback || <div>404 - Not Found</div>;
};

export const navigate = (path: string) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

export const Link = ({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
