import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './Dashboard';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Dashboard />
			<Toaster />
		</QueryClientProvider>
	);
}
