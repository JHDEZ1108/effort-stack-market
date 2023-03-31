/* eslint-disable no-console */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const trackingId = process.env.MESURE_ANALYTICS_ID;

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!trackingId) {
      console.error('No se proporcionó el ID de seguimiento de Google Analytics.');
      return;
    }

    if (!ReactGA.ga()) {
      ReactGA.initialize(trackingId);
    }

    const currentPage = location.pathname + location.search;
    ReactGA.set({ page: currentPage });
    ReactGA.pageview(currentPage);

  }, [location]);
};

export default useAnalytics;
