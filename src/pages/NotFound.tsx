import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Kashyap R Dhamecha</title>
        <meta name="description" content="The page you were looking for doesn't exist on Kashyap R Dhamecha's portfolio. Head back to the homepage to explore projects and skills." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`https://kashyapdhamecha.com${location.pathname}`} />
        <meta property="og:title" content="Page Not Found | Kashyap R Dhamecha" />
        <meta property="og:description" content="The page you were looking for doesn't exist." />
        <meta property="og:url" content={`https://kashyapdhamecha.com${location.pathname}`} />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">404</h1>
          <p className="text-xl text-gray-700 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-700 hover:text-blue-900 underline">
            Return to Home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
