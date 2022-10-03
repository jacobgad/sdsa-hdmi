import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
			<ToastContainer />
		</>
	);
};

export default MyApp;
