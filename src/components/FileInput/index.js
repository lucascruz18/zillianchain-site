// import React, { useState, useRef, useEffect } from 'react';
// import { useField } from '@rocketseat/unform';

// import { IoCloudUploadSharp } from 'react-icons/io5';

// import { Container } from './styles';

// export default function BannerInput() {
//   const { defaultValue, registerField } = useField('file');

//   const [file, setFile] = useState(defaultValue && defaultValue.id);
//   const [preview, setPreview] = useState(defaultValue && defaultValue.url);

//   const ref = useRef();

//   useEffect(() => {
//     if (ref.current) {
//       registerField({
//         name: 'file_id',
//         ref: ref.current,
//         path: 'dataset.file',
//       });
//     }
//   }, [ref]); // eslint-disable-line

//   async function handleChange(e) {
//     const data = new FormData();

//     data.append('file', e.target.files[0]);

//     const response = await api.post('files', data);

//     const { id, url } = response.data;

//     setFile(id);
//     setPreview(url);
//   }

//   return (
//     <Container>
//       <label htmlFor="file">
//         {preview && <img src={preview} alt="File" />}

//         {!preview && (
//           <div className="icon">
//             <IoCloudUploadSharp size={50} color="rgba(255, 255, 255, 0.5)" />
//             {/* <p>Selecionar arquivo</p> */}
//           </div>
//         )}

//         <input
//           type="file"
//           id="file"
//           accept="image/*"
//           data-file={file}
//           onChange={handleChange}
//           ref={ref}
//         />
//       </label>
//     </Container>
//   );
// }
