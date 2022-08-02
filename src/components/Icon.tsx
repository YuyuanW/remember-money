import React from 'react';

// require('icons/chart.svg');
// require('icons/money.svg');
// require('icons/tags.svg')

//导入文件夹
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = { name: string; }

const Icon = (props: Props)=>{
   return (
    <svg>
        <use xlinkHref={'#'+props.name}/> 
    </svg>
   )
}
export default Icon;