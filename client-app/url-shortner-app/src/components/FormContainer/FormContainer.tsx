import * as React from 'react';
import axios from 'axios';
import {serverUrl} from "../../helpers/Constants";

interface FormContainerProps {
    updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<FormContainerProps> = (props) => {
    const { updateReloadState } = props;
    const [fullUrl, setFullUrl] = React.useState<string>("");
     


    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) =>
    {
e.preventDefault();
try {
    await axios.post(`${serverUrl}/shorturl`,{
        fullUrl: fullUrl
    });
    setFullUrl("");
     updateReloadState();
} catch (error) {
    console.log(error);
}
    };
  return (
    <div className="container mx-auto p-2">
        <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
            <div className="w-full h-full rounded-xl p-20 gackdrop-brightness-20">
            <h2 className="text-white text-4xl text-center pb-4">URL Shortner</h2>
         <p className="text-white text-center pb-2 text-xl font-extralight">Paste your untidy link to shorten it</p>
         <p className="text-white text-center pb-4 text-sm font-thin "> Free tool to shorten a URL or reduce link, Use our URL shortner to create a shortened & neat link making it eacy to understand </p>
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">urlshortner.link/</div>
               
                <input type="text" placeholder="add your link" required className="block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" 
                value={fullUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}/>
                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus-ring-300">Shorten URL</button>
            </div>
             </div>
        </form>
        
        </div>
        </div>
    </div>

  );
};

export default FormContainer;


// import * as React from 'react';
// import axios from 'axios';
// import { serverUrl } from "../../helpers/Constants";

// interface UrlEntry {
//   fullUrl: string;
//   shortUrl: string;
//   clicks: number;
// }

// const FormContainer: React.FunctionComponent = () => {
//   const [fullUrl, setFullUrl] = React.useState<string>("");
//   const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
//   const [urlList, setUrlList] = React.useState<UrlEntry[]>([]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setErrorMsg(null);

//     try {
//       const response = await axios.post(`${serverUrl}/shorturl`, { fullUrl });

//       const newEntry: UrlEntry = response.data;
//       if (newEntry && newEntry.fullUrl && newEntry.shortUrl) {
//         setUrlList(prev => [...prev, newEntry]);
//         setFullUrl("");
//       } else {
//         setErrorMsg("Unexpected response format from server.");
//       }
//     } catch (error: any) {
//       if (error.response?.status === 409) {
//         setErrorMsg("This URL has already been shortened.");
//       } else {
//         setErrorMsg("Something went wrong. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-2">
//       <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
//         <div className="w-full h-full rounded-xl p-20 backdrop-brightness-20">
//           <h2 className="text-white text-4xl text-center pb-4">URL Shortener</h2>
//           <p className="text-white text-center pb-2 text-xl font-extralight">
//             Paste your untidy link to shorten it
//           </p>
//           <p className="text-white text-center pb-4 text-sm font-thin">
//             Free tool to shorten a URL or reduce link. Use our URL shortener to create a shortened & neat link making it easy to understand.
//           </p>

//           <form onSubmit={handleSubmit}>
//             <div className="flex">
//               <div className="relative w-full">
//                 <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
//                   urlshortner.link/
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="Add your link"
//                   required
//                   className="block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
//                   value={fullUrl}
//                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
//                 />

//                 <button
//                   type="submit"
//                   className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
//                 >
//                   Shorten URL
//                 </button>
//               </div>
//             </div>
//           </form>

//           {errorMsg && (
//             <p className="text-red-500 text-center mt-4">{errorMsg}</p>
//           )}

//           {urlList.length > 0 && (
//             <table className="w-full mt-8 text-left border-collapse bg-white rounded-lg shadow">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="p-2">FullUrl</th>
//                   <th className="p-2">ShortUrl</th>
//                   <th className="p-2">Clicks</th>
//                   <th className="p-2">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {urlList.map((url, index) => (
//                   <tr key={index} className="border-t">
//                     <td className="p-2">{url.fullUrl}</td>
//                     <td className="p-2">
//                       <a
//                         href={url.shortUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 underline"
//                       >
//                         {url.shortUrl}
//                       </a>
//                     </td>
//                     <td className="p-2">{url.clicks}</td>
//                     <td className="p-2">
//                       <button className="text-red-500 hover:underline">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormContainer;










