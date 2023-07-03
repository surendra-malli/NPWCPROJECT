import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';


// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import OnlineStatus from './pages/OnlineStatus';

// ----------------------------------------------------------------------

export default function App() {
  return (
   
            // <Stack.Navigator>
            //     <Stack.Group>
            //       <HelmetProvider>
            //         <BrowserRouter>
            //         <ThemeProvider>
            //           <ScrollToTop/>
            //           <Router/>
            //         </ThemeProvider>
            //         </BrowserRouter>
            //       </HelmetProvider>

            //         //... place here your screens to provide them with context

            //     </Stack.Group>
            // </Stack.Navigator>
       
    <HelmetProvider>
      

      <BrowserRouter>
        <ThemeProvider>
       
          <ScrollToTop />
         
          <Router />
         
        </ThemeProvider>
       
    

      </BrowserRouter>
     
    </HelmetProvider>
  );
}
