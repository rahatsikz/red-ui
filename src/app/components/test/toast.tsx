// import React, { useEffect, useState } from "react";

// const ToastComponent = ({ message, type, onClose }: any) => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     message && setVisible(true);
//     onClose();
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [onClose, message]);

//   // Define styles based on the type
//   const toastStyles: any = {
//     success: "bg-green-500",
//     error: "bg-red-500",
//     warning: "bg-orange-300",
//     // Add more types as needed
//   };

//   return visible ? (
//     <div
//       className={`fixed bottom-12 left-1/2 -translate-x-1/2 z-30 text-white px-4 py-2 rounded-md ${toastStyles[type]}`}
//     >
//       <div className='flex justify-between items-center'>
//         <div className='flex items-center gap-2'>
//           {type === "success" ? (
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               height='24'
//               viewBox='0 -960 960 960'
//               width='24'
//               fill='white'
//             >
//               <path d='m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
//             </svg>
//           ) : type === "error" ? (
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               height='24'
//               viewBox='0 -960 960 960'
//               width='24'
//               fill='white'
//             >
//               <path d='m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
//             </svg>
//           ) : (
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               height='24'
//               viewBox='0 -960 960 960'
//               width='24'
//               fill='white'
//             >
//               <path d='M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
//             </svg>
//           )}
//           <p className='text-sm'>{message}</p>
//         </div>
//       </div>
//     </div>
//   ) : null;
// };

// export default ToastComponent;

import React, { useEffect, useState } from "react";

const ToastComponent = ({ message, type, onDismiss }: any) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onDismiss();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, onDismiss]);

  // Define styles based on the type
  const toastStyles: any = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-orange-300",
    // Add more types as needed
  };

  return visible ? (
    <div
      className={`fixed bottom-12 left-1/2 -translate-x-1/2 z-30 text-white px-4 py-2 rounded-md ${toastStyles[type]}`}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          {type === "success" ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
              fill='white'
            >
              <path d='m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
            </svg>
          ) : type === "error" ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
              fill='white'
            >
              <path d='m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
              fill='white'
            >
              <path d='M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
            </svg>
          )}
          <p className='text-sm'>{message}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default ToastComponent;
