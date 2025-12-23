import { ChakraProvider } from '@chakra-ui/react';
import { ScheduleProvider } from './features/schedules/ScheduleContext.tsx';
import { ScheduleTables } from './features/schedules/ScheduleTables.tsx';
import ScheduleDndProvider from './features/schedules/ScheduleDndProvider.tsx';

function App() {
  return (
    <ChakraProvider>
      <ScheduleProvider>
        <ScheduleDndProvider>
          <ScheduleTables />
        </ScheduleDndProvider>
      </ScheduleProvider>
    </ChakraProvider>
  );
}

export default App;
