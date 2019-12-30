import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
// import { faHome } from '@fortawesome/free-solid-svg-icons';

import { NiceThemeProvider, Button } from 'nice';

const stories = storiesOf('Button', module);

stories.add(
  'Button',
  () => (
    <NiceThemeProvider>
      <Button>test</Button>
    </NiceThemeProvider>
  )
);

// export default {
//   title: 'Button',
// };

// const AllButtons = (props: any) => {
//   const [ loading, setLoading ] = useState<boolean | number>(false);

//   useEffect(() => {
//     if (loading) {
//       setTimeout(() => {
//         setLoading(false);
//       }, 2000);
//     }
//   }, [ loading ]);

//   return (
//     <div>
//       <Button 
//         icon={ faHome }
//         onClick={() => setLoading(1)} 
//         loading={ loading === 1 }
//         { ...props }
//       >
//         Hello
//       </Button>
//       <hr />
//       <Button 
//         { ...props }
//         onClick={() => setLoading(2)} 
//         loading={ loading === 2 }
//       >
//         Hello
//       </Button>
//       <hr />
//       <Button 
//         { ...props }
//         icon={ faHome }
//         onClick={() => setLoading(3)} 
//         loading={ loading === 3 }
//       />
//       <hr />
//       <Button 
//         { ...props }
//         loading
//         onClick={() => null} 
//       />
//     </div>
//   );
// }

// export const Primary = () => (
//   <Theme>
//     <div style={{ display: 'flex' }}>
//       <AllButtons mode="default"  />
//       <AllButtons mode="default" disabled  />
//       <AllButtons mode="primary"  />
//       <AllButtons mode="primary" disabled  />
//     </div>
//   </Theme>
// );

